import App from "./App";
import { createSSRApp } from "vue";
import uView from "uview-ui";
import moment from "moment";
import api from "@/common/api";
import config from "@/common/config/env.js";
import themeManager from "@/common/store/theme";
import initRequest from "@/common/http/request.js";

// 注册全局组件
import msg from "@/components/msg/msg.vue";

export function createApp() {
    const app = createSSRApp(App);

    // 注册全局组件
    app.component("msg", msg);

    // Vue 3 兼容 - 为 uView 等 Vue 2 插件创建强大的兼容性垫片
    const prototypeProxy = new Proxy({}, {
        get(target, prop) {
            return target[prop];
        },
        set(target, prop, value) {
            // 拦截所有对 prototype 的属性设置，防止错误
            target[prop] = value;
            // 特别处理 $u，确保它也被设置到全局属性
            if (prop === '$u' && value) {
                app.config.globalProperties.$u = value;
                // 如果 uni 全局变量存在，也设置到那里
                if (typeof uni !== 'undefined') {
                    uni.$u = value;
                }
            }
            return true;
        }
    });

    const VueShim = new Proxy({
        filter: function(name, callback) {
            return this;
        },
        prototype: prototypeProxy,
        mixin: function(mixinObj) {
            app.mixin(mixinObj);
            return this;
        }
    }, {
        get(target, prop) {
            return target[prop];
        },
        set(target, prop, value) {
            target[prop] = value;
            if (prop === '$u' && value) {
                app.config.globalProperties.$u = value;
                if (typeof uni !== 'undefined') {
                    uni.$u = value;
                }
            }
            return true;
        }
    });
    
    // 调用 uView 的 install 函数
    try {
        if (uView && typeof uView.install === 'function') {
            uView.install(VueShim);
        }
    } catch (e) {
        console.warn('uView install encountered error:', e);
        // 即使 install 失败，确保 $u 仍然可用
        if (typeof uni !== 'undefined' && uni.$u) {
            app.config.globalProperties.$u = uni.$u;
        }
    }

    // 设置App类型
    App.mpType = "app";

    // 设置时区
    moment.locale("zh-cn");

    // 注册全局属性
    app.config.globalProperties.$moment = moment;
    app.config.globalProperties.$api = api;
    app.config.globalProperties.$config = config;
    app.config.globalProperties.$themeManager = themeManager;

    // 创建全局 mixin，使所有组件都能响应主题变化
    app.mixin({
        data() {
            return {
                _themeForceUpdate: 0, // 强制更新标志
            };
        },
        computed: {
            currentTheme() {
                // 通过访问 _themeForceUpdate 确保这个方法被依赖
                this._themeForceUpdate;
                return this.$themeManager.state.currentTheme;
            },
            currentFontSize() {
                // 通过访问 _themeForceUpdate 确保这个方法被依赖
                this._themeForceUpdate;
                return this.$themeManager.state.currentFontSize;
            },
            containerClasses() {
                return `theme-${this.currentTheme} font-${this.currentFontSize}`;
            },
        },
        created() {
            // 在组件创建时订阅主题变化
            this.unsubscribeTheme = this.$themeManager.subscribe(() => {
                // 更新强制更新标志，触发计算属性重新计算
                this._themeForceUpdate++;
            });
        },
        beforeUnmount() {
            // 取消订阅
            if (this.unsubscribeTheme) {
                this.unsubscribeTheme();
            }
        },
    });

    // 初始化请求拦截器
    initRequest(app);

    return { app };
}
