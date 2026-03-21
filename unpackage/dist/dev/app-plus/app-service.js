if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$s = {
    data() {
      return {
        screenMinHeight: 1500,
        // 默认值（单位：rpx）
        // 卡片数据示例
        cardList: [
          {
            id: 1,
            title: "心理体检",
            desc: "专业心理量表｜3分钟快速情绪体检",
            iconPath: "/static/custom-icon-1.png",
            path: "/pages/phq7-test/index",
            bgColor: "#E8F5E9",
            tag: "专业评估",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          },
          {
            id: 2,
            title: "健康科普",
            desc: "专业健康知识｜科学养生，健康生活",
            iconPath: "/static/custom-icon-2.png",
            path: "/pages/health/index",
            bgColor: "#E3F2FD",
            tag: "知识分享",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
          },
          {
            id: 3,
            title: "心理医生",
            desc: "专业心理咨询师｜一对一专业指导",
            iconPath: "/static/custom-icon-3.png",
            path: "/pages/psychologist/index",
            bgColor: "#FFF8E1",
            tag: "专业咨询",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
          },
          {
            id: 4,
            title: "AI交流",
            desc: "智能心理助手｜24小时在线陪伴",
            iconPath: "/static/custom-icon-4.png",
            path: "/pages/message/message",
            bgColor: "#FCE4EC",
            tag: "智能陪伴",
            gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
          }
        ]
      };
    },
    onLoad() {
      const accessToken = uni.getStorageSync("Access-Token");
      if (!accessToken) {
        uni.$u.route("/pages/login/login");
      }
    },
    mounted() {
      const systemInfo = uni.getSystemInfoSync();
      this.screenMinHeight = Math.ceil(
        systemInfo.screenHeight * (750 / systemInfo.windowWidth)
      );
    },
    methods: {
      loadMore() {
        formatAppLog("log", "at pages/index/index.vue:118", "触发加载更多");
      },
      navigateTo(path) {
        uni.navigateTo({
          url: path
        });
      }
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["page-container", _ctx.containerClasses])
      },
      [
        vue.createElementVNode("view", { class: "header" }, [
          vue.createElementVNode("text", { class: "sunshine-title" }, "暖愈心伴")
        ]),
        vue.createElementVNode(
          "view",
          {
            class: "content",
            style: vue.normalizeStyle({ minHeight: $data.screenMinHeight + "rpx", overflow: "hidden" })
          },
          [
            vue.createElementVNode("view", { class: "content-wrapper" }, [
              vue.createElementVNode("view", { class: "card-container" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.cardList, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: item.id,
                      class: "card",
                      style: vue.normalizeStyle({ background: item.gradient }),
                      onClick: ($event) => $options.navigateTo(item.path)
                    }, [
                      vue.createElementVNode("view", { class: "card-header" }, [
                        vue.createElementVNode("view", { class: "emoji-container" }, [
                          vue.createElementVNode("image", {
                            class: "card-emoji",
                            src: item.iconPath,
                            mode: "aspectFit"
                          }, null, 8, ["src"])
                        ]),
                        vue.createElementVNode(
                          "view",
                          { class: "card-tag" },
                          vue.toDisplayString(item.tag),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", { class: "card-content" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "card-title" },
                          vue.toDisplayString(item.title),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "text",
                          { class: "card-desc" },
                          vue.toDisplayString(item.desc),
                          1
                          /* TEXT */
                        )
                      ])
                    ], 12, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])
          ],
          4
          /* STYLE */
        )
      ],
      2
      /* CLASS */
    );
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/index/index.vue"]]);
  const _sfc_main$r = {
    data() {
      return {};
    },
    props: {
      // 位置 left/right
      position: {
        type: String,
        required: true,
        default: "right"
      },
      // 内容
      content: {
        type: String,
        required: true,
        default: ""
      },
      // 消息Id
      msgId: {
        type: String,
        default: ""
      },
      // 头像
      avatar: {
        type: String,
        default: "/static/img/javadog.png"
      }
    },
    computed: {},
    mounted() {
    },
    methods: {}
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_avatar = vue.resolveComponent("u-avatar");
    const _component_u_parse = vue.resolveComponent("u-parse");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["msg", $props.position])
        },
        [
          vue.createVNode(_component_u_avatar, {
            src: $props.avatar,
            size: "40",
            onClick: _ctx.friendInfo
          }, null, 8, ["src", "onClick"]),
          vue.createElementVNode("view", { class: "content text" }, [
            vue.createElementVNode("view", { class: "u-content" }, [
              vue.createVNode(_component_u_parse, {
                content: $props.content,
                selectable: true
              }, null, 8, ["content"])
            ])
          ])
        ],
        2
        /* CLASS */
      )
    ]);
  }
  const msg = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__scopeId", "data-v-9a378a39"], ["__file", "C:/Users/while/Desktop/Warm-Mate/components/msg/msg.vue"]]);
  const _sfc_main$q = {
    data() {
      return {
        // 文字消息
        textMsg: "",
        // 滚动动画
        scrollAnimation: false,
        // 滚动距离
        scrollTop: 0,
        // 初始状态
        initPoint: {
          identifier: 0,
          Y: 0
        },
        // 抽屉参数
        popupLayerClass: "",
        // more参数
        hideMore: true
      };
    },
    props: {},
    mounted() {
      this.init();
    },
    methods: {
      // 总初始化方法
      init() {
      },
      // 发送文字消息
      sendText() {
        if (!this.textMsg) {
          return;
        }
        let msg2 = {
          msgContent: this.textMsg,
          msgType: 1,
          position: "right"
        };
        this.textMsg = "";
        this.$emit("sendMsg", msg2);
      }
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["input-box cu-bar tabbar", $data.popupLayerClass])
        },
        [
          vue.createElementVNode("view", { class: "textbox" }, [
            vue.createElementVNode("view", { class: "text-mode" }, [
              vue.createElementVNode("view", { class: "box" }, [
                vue.withDirectives(vue.createElementVNode(
                  "textarea",
                  {
                    "auto-height": "true",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.textMsg = $event)
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, $data.textMsg]
                ])
              ]),
              vue.createElementVNode("view", { class: "em" }, [
                vue.createElementVNode("view", {
                  style: { "font-size": "30px" },
                  class: "iconfont icon-chat-smile"
                })
              ])
            ])
          ]),
          vue.createElementVNode("view", {
            class: "send",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.sendText && $options.sendText(...args))
          }, [
            vue.createElementVNode("view", { class: "btn" }, "发送")
          ])
        ],
        2
        /* CLASS */
      )
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-1e520b65"], ["__file", "C:/Users/while/Desktop/Warm-Mate/components/inputBox/inputBox.vue"]]);
  const MescrollMixin = {
    data() {
      return {
        mescroll: null
        //mescroll实例对象
      };
    },
    // 注册系统自带的下拉刷新 (配置down.native为true时生效, 还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
    onPullDownRefresh() {
      this.mescroll && this.mescroll.onPullDownRefresh();
    },
    // 注册列表滚动事件,用于判定在顶部可下拉刷新,在指定位置可显示隐藏回到顶部按钮 (此方法为页面生命周期,无法在子组件中触发, 仅在mescroll-body生效)
    onPageScroll(e) {
      this.mescroll && this.mescroll.onPageScroll(e);
    },
    // 注册滚动到底部的事件,用于上拉加载 (此方法为页面生命周期,无法在子组件中触发, 仅在mescroll-body生效)
    onReachBottom() {
      this.mescroll && this.mescroll.onReachBottom();
    },
    methods: {
      // mescroll组件初始化的回调,可获取到mescroll对象
      mescrollInit(mescroll) {
        this.mescroll = mescroll;
        this.mescrollInitByRef();
      },
      // 以ref的方式初始化mescroll对象 (兼容字节跳动小程序)
      mescrollInitByRef() {
        if (!this.mescroll || !this.mescroll.resetUpScroll) {
          let mescrollRef = this.$refs.mescrollRef;
          if (mescrollRef)
            this.mescroll = mescrollRef.mescroll;
        }
      },
      // 下拉刷新的回调 (mixin默认resetUpScroll)
      downCallback() {
        if (this.mescroll.optUp.use) {
          this.mescroll.resetUpScroll();
        } else {
          setTimeout(() => {
            this.mescroll.endSuccess();
          }, 500);
        }
      },
      // 上拉加载的回调
      upCallback() {
        setTimeout(() => {
          this.mescroll.endErr();
        }, 500);
      }
    },
    mounted() {
      this.mescrollInitByRef();
    }
  };
  function MeScroll(options, isScrollBody) {
    let me = this;
    me.version = "1.3.7";
    me.options = options || {};
    me.isScrollBody = isScrollBody || false;
    me.isDownScrolling = false;
    me.isUpScrolling = false;
    let hasDownCallback = me.options.down && me.options.down.callback;
    me.initDownScroll();
    me.initUpScroll();
    setTimeout(function() {
      if ((me.optDown.use || me.optDown.native) && me.optDown.auto && hasDownCallback) {
        if (me.optDown.autoShowLoading) {
          me.triggerDownScroll();
        } else {
          me.optDown.callback && me.optDown.callback(me);
        }
      }
      if (!me.isUpAutoLoad) {
        setTimeout(function() {
          me.optUp.use && me.optUp.auto && !me.isUpAutoLoad && me.triggerUpScroll();
        }, 100);
      }
    }, 30);
  }
  MeScroll.prototype.extendDownScroll = function(optDown) {
    MeScroll.extend(optDown, {
      use: true,
      // 是否启用下拉刷新; 默认true
      auto: true,
      // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
      native: false,
      // 是否使用系统自带的下拉刷新; 默认false; 仅mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
      autoShowLoading: false,
      // 如果设置auto=true(在初始化完毕之后自动执行下拉刷新的回调),那么是否显示下拉刷新的进度; 默认false
      isLock: false,
      // 是否锁定下拉刷新,默认false;
      offset: 80,
      // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调
      startTop: 100,
      // scroll-view快速滚动到顶部时,此时的scroll-top可能大于0, 此值用于控制最大的误差
      inOffsetRate: 1,
      // 在列表顶部,下拉的距离小于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
      outOffsetRate: 0.2,
      // 在列表顶部,下拉的距离大于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
      bottomOffset: 20,
      // 当手指touchmove位置在距离body底部20px范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行
      minAngle: 45,
      // 向下滑动最少偏移的角度,取值区间  [0,90];默认45度,即向下滑动的角度大于45度则触发下拉;而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突;
      textInOffset: "下拉刷新",
      // 下拉的距离在offset范围内的提示文本
      textOutOffset: "释放更新",
      // 下拉的距离大于offset范围的提示文本
      textLoading: "加载中 ...",
      // 加载中的提示文本
      textSuccess: "加载成功",
      // 加载成功的文本
      textErr: "加载失败",
      // 加载失败的文本
      beforeEndDelay: 0,
      // 延时结束的时长 (显示加载成功/失败的时长, android小程序设置此项结束下拉会卡顿, 配置后请注意测试)
      bgColor: "transparent",
      // 背景颜色 (建议在pages.json中再设置一下backgroundColorTop)
      textColor: "gray",
      // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)
      inited: null,
      // 下拉刷新初始化完毕的回调
      inOffset: null,
      // 下拉的距离进入offset范围内那一刻的回调
      outOffset: null,
      // 下拉的距离大于offset那一刻的回调
      onMoving: null,
      // 下拉过程中的回调,滑动过程一直在执行; rate下拉区域当前高度与指定距离的比值(inOffset: rate<1; outOffset: rate>=1); downHight当前下拉区域的高度
      beforeLoading: null,
      // 准备触发下拉刷新的回调: 如果return true,将不触发showLoading和callback回调; 常用来完全自定义下拉刷新, 参考案例【淘宝 v6.8.0】
      showLoading: null,
      // 显示下拉刷新进度的回调
      afterLoading: null,
      // 显示下拉刷新进度的回调之后,马上要执行的代码 (如: 在wxs中使用)
      beforeEndDownScroll: null,
      // 准备结束下拉的回调. 返回结束下拉的延时执行时间,默认0ms; 常用于结束下拉之前再显示另外一小段动画,才去隐藏下拉刷新的场景, 参考案例【dotJump】
      endDownScroll: null,
      // 结束下拉刷新的回调
      afterEndDownScroll: null,
      // 结束下拉刷新的回调,马上要执行的代码 (如: 在wxs中使用)
      callback: function(mescroll) {
        mescroll.resetUpScroll();
      }
    });
  };
  MeScroll.prototype.extendUpScroll = function(optUp) {
    MeScroll.extend(optUp, {
      use: true,
      // 是否启用上拉加载; 默认true
      auto: true,
      // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
      isLock: false,
      // 是否锁定上拉加载,默认false;
      isBoth: true,
      // 上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认true,两者可同时触发;
      callback: null,
      // 上拉加载的回调;function(page,mescroll){ }
      page: {
        num: 0,
        // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
        size: 10,
        // 每页数据的数量
        time: null
        // 加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
      },
      noMoreSize: 5,
      // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
      offset: 150,
      // 距底部多远时,触发upCallback,仅mescroll-uni生效 ( mescroll-body配置的是pages.json的 onReachBottomDistance )
      textLoading: "加载中 ...",
      // 加载中的提示文本
      textNoMore: "-- END --",
      // 没有更多数据的提示文本
      bgColor: "transparent",
      // 背景颜色 (建议在pages.json中再设置一下backgroundColorBottom)
      textColor: "gray",
      // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)
      inited: null,
      // 初始化完毕的回调
      showLoading: null,
      // 显示加载中的回调
      showNoMore: null,
      // 显示无更多数据的回调
      hideUpScroll: null,
      // 隐藏上拉加载的回调
      errDistance: 60,
      // endErr的时候需往上滑动一段距离,使其往下滑动时再次触发onReachBottom,仅mescroll-body生效
      toTop: {
        // 回到顶部按钮,需配置src才显示
        src: null,
        // 图片路径,默认null (绝对路径或网络图)
        offset: 1e3,
        // 列表滚动多少距离才显示回到顶部按钮,默认1000
        duration: 300,
        // 回到顶部的动画时长,默认300ms (当值为0或300则使用系统自带回到顶部,更流畅; 其他值则通过step模拟,部分机型可能不够流畅,所以非特殊情况不建议修改此项)
        btnClick: null,
        // 点击按钮的回调
        onShow: null,
        // 是否显示的回调
        zIndex: 9990,
        // fixed定位z-index值
        left: null,
        // 到左边的距离, 默认null. 此项有值时,right不生效. (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
        right: 20,
        // 到右边的距离, 默认20 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
        bottom: 120,
        // 到底部的距离, 默认120 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
        safearea: false,
        // bottom的偏移量是否加上底部安全区的距离, 默认false, 需要适配iPhoneX时使用 (具体的界面如果不配置此项,则取本vue的safearea值)
        width: 72,
        // 回到顶部图标的宽度, 默认72 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
        radius: "50%"
        // 圆角, 默认"50%" (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
      },
      empty: {
        use: true,
        // 是否显示空布局
        icon: null,
        // 图标路径
        tip: "~ 暂无相关数据 ~",
        // 提示
        btnText: "",
        // 按钮
        btnClick: null,
        // 点击按钮的回调
        onShow: null,
        // 是否显示的回调
        fixed: false,
        // 是否使用fixed定位,默认false; 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,最终会降级为absolute)
        top: "100rpx",
        // fixed定位的top值 (完整的单位值,如 "10%"; "100rpx")
        zIndex: 99
        // fixed定位z-index值
      },
      onScroll: false
      // 是否监听滚动事件
    });
  };
  MeScroll.extend = function(userOption, defaultOption) {
    if (!userOption)
      return defaultOption;
    for (let key in defaultOption) {
      if (userOption[key] == null) {
        let def = defaultOption[key];
        if (def != null && typeof def === "object") {
          userOption[key] = MeScroll.extend({}, def);
        } else {
          userOption[key] = def;
        }
      } else if (typeof userOption[key] === "object") {
        MeScroll.extend(userOption[key], defaultOption[key]);
      }
    }
    return userOption;
  };
  MeScroll.prototype.hasColor = function(color2) {
    if (!color2)
      return false;
    let c = color2.toLowerCase();
    return c != "#fff" && c != "#ffffff" && c != "transparent" && c != "white";
  };
  MeScroll.prototype.initDownScroll = function() {
    let me = this;
    me.optDown = me.options.down || {};
    if (!me.optDown.textColor && me.hasColor(me.optDown.bgColor))
      me.optDown.textColor = "#fff";
    me.extendDownScroll(me.optDown);
    if (me.isScrollBody && me.optDown.native) {
      me.optDown.use = false;
    } else {
      me.optDown.native = false;
    }
    me.downHight = 0;
    if (me.optDown.use && me.optDown.inited) {
      setTimeout(function() {
        me.optDown.inited(me);
      }, 0);
    }
  };
  MeScroll.prototype.touchstartEvent = function(e) {
    if (!this.optDown.use)
      return;
    this.startPoint = this.getPoint(e);
    this.startTop = this.getScrollTop();
    this.startAngle = 0;
    this.lastPoint = this.startPoint;
    this.maxTouchmoveY = this.getBodyHeight() - this.optDown.bottomOffset;
    this.inTouchend = false;
  };
  MeScroll.prototype.touchmoveEvent = function(e) {
    if (!this.optDown.use)
      return;
    let me = this;
    let scrollTop = me.getScrollTop();
    let curPoint = me.getPoint(e);
    let moveY = curPoint.y - me.startPoint.y;
    if (moveY > 0 && (me.isScrollBody && scrollTop <= 0 || !me.isScrollBody && (scrollTop <= 0 || scrollTop <= me.optDown.startTop && scrollTop === me.startTop))) {
      if (!me.inTouchend && !me.isDownScrolling && !me.optDown.isLock && (!me.isUpScrolling || me.isUpScrolling && me.optUp.isBoth)) {
        if (!me.startAngle)
          me.startAngle = me.getAngle(me.lastPoint, curPoint);
        if (me.startAngle < me.optDown.minAngle)
          return;
        if (me.maxTouchmoveY > 0 && curPoint.y >= me.maxTouchmoveY) {
          me.inTouchend = true;
          me.touchendEvent();
          return;
        }
        me.preventDefault(e);
        let diff2 = curPoint.y - me.lastPoint.y;
        if (me.downHight < me.optDown.offset) {
          if (me.movetype !== 1) {
            me.movetype = 1;
            me.isDownEndSuccess = null;
            me.optDown.inOffset && me.optDown.inOffset(me);
            me.isMoveDown = true;
          }
          me.downHight += diff2 * me.optDown.inOffsetRate;
        } else {
          if (me.movetype !== 2) {
            me.movetype = 2;
            me.optDown.outOffset && me.optDown.outOffset(me);
            me.isMoveDown = true;
          }
          if (diff2 > 0) {
            me.downHight += diff2 * me.optDown.outOffsetRate;
          } else {
            me.downHight += diff2;
          }
        }
        me.downHight = Math.round(me.downHight);
        let rate2 = me.downHight / me.optDown.offset;
        me.optDown.onMoving && me.optDown.onMoving(me, rate2, me.downHight);
      }
    }
    me.lastPoint = curPoint;
  };
  MeScroll.prototype.touchendEvent = function(e) {
    if (!this.optDown.use)
      return;
    if (this.isMoveDown) {
      if (this.downHight >= this.optDown.offset) {
        this.triggerDownScroll();
      } else {
        this.downHight = 0;
        this.endDownScrollCall(this);
      }
      this.movetype = 0;
      this.isMoveDown = false;
    } else if (!this.isScrollBody && this.getScrollTop() === this.startTop) {
      let isScrollUp = this.getPoint(e).y - this.startPoint.y < 0;
      if (isScrollUp) {
        let angle = this.getAngle(this.getPoint(e), this.startPoint);
        if (angle > 80) {
          this.triggerUpScroll(true);
        }
      }
    }
  };
  MeScroll.prototype.getPoint = function(e) {
    if (!e) {
      return {
        x: 0,
        y: 0
      };
    }
    if (e.touches && e.touches[0]) {
      return {
        x: e.touches[0].pageX,
        y: e.touches[0].pageY
      };
    } else if (e.changedTouches && e.changedTouches[0]) {
      return {
        x: e.changedTouches[0].pageX,
        y: e.changedTouches[0].pageY
      };
    } else {
      return {
        x: e.clientX,
        y: e.clientY
      };
    }
  };
  MeScroll.prototype.getAngle = function(p1, p2) {
    let x = Math.abs(p1.x - p2.x);
    let y = Math.abs(p1.y - p2.y);
    let z = Math.sqrt(x * x + y * y);
    let angle = 0;
    if (z !== 0) {
      angle = Math.asin(y / z) / Math.PI * 180;
    }
    return angle;
  };
  MeScroll.prototype.triggerDownScroll = function() {
    if (this.optDown.beforeLoading && this.optDown.beforeLoading(this))
      ;
    else {
      this.showDownScroll();
      !this.optDown.native && this.optDown.callback && this.optDown.callback(this);
    }
  };
  MeScroll.prototype.showDownScroll = function() {
    this.isDownScrolling = true;
    if (this.optDown.native) {
      uni.startPullDownRefresh();
      this.showDownLoadingCall(0);
    } else {
      this.downHight = this.optDown.offset;
      this.showDownLoadingCall(this.downHight);
    }
  };
  MeScroll.prototype.showDownLoadingCall = function(downHight) {
    this.optDown.showLoading && this.optDown.showLoading(this, downHight);
    this.optDown.afterLoading && this.optDown.afterLoading(this, downHight);
  };
  MeScroll.prototype.onPullDownRefresh = function() {
    this.isDownScrolling = true;
    this.showDownLoadingCall(0);
    this.optDown.callback && this.optDown.callback(this);
  };
  MeScroll.prototype.endDownScroll = function() {
    if (this.optDown.native) {
      this.isDownScrolling = false;
      this.endDownScrollCall(this);
      uni.stopPullDownRefresh();
      return;
    }
    let me = this;
    let endScroll = function() {
      me.downHight = 0;
      me.isDownScrolling = false;
      me.endDownScrollCall(me);
      if (!me.isScrollBody) {
        me.setScrollHeight(0);
        me.scrollTo(0, 0);
      }
    };
    let delay = 0;
    if (me.optDown.beforeEndDownScroll) {
      delay = me.optDown.beforeEndDownScroll(me);
      if (me.isDownEndSuccess == null)
        delay = 0;
    }
    if (typeof delay === "number" && delay > 0) {
      setTimeout(endScroll, delay);
    } else {
      endScroll();
    }
  };
  MeScroll.prototype.endDownScrollCall = function() {
    this.optDown.endDownScroll && this.optDown.endDownScroll(this);
    this.optDown.afterEndDownScroll && this.optDown.afterEndDownScroll(this);
  };
  MeScroll.prototype.lockDownScroll = function(isLock) {
    if (isLock == null)
      isLock = true;
    this.optDown.isLock = isLock;
  };
  MeScroll.prototype.lockUpScroll = function(isLock) {
    if (isLock == null)
      isLock = true;
    this.optUp.isLock = isLock;
  };
  MeScroll.prototype.initUpScroll = function() {
    let me = this;
    me.optUp = me.options.up || { use: false };
    if (!me.optUp.textColor && me.hasColor(me.optUp.bgColor))
      me.optUp.textColor = "#fff";
    me.extendUpScroll(me.optUp);
    if (me.optUp.use === false)
      return;
    me.optUp.hasNext = true;
    me.startNum = me.optUp.page.num + 1;
    if (me.optUp.inited) {
      setTimeout(function() {
        me.optUp.inited(me);
      }, 0);
    }
  };
  MeScroll.prototype.onReachBottom = function() {
    if (this.isScrollBody && !this.isUpScrolling) {
      if (!this.optUp.isLock && this.optUp.hasNext) {
        this.triggerUpScroll();
      }
    }
  };
  MeScroll.prototype.onPageScroll = function(e) {
    if (!this.isScrollBody)
      return;
    this.setScrollTop(e.scrollTop);
    if (e.scrollTop >= this.optUp.toTop.offset) {
      this.showTopBtn();
    } else {
      this.hideTopBtn();
    }
  };
  MeScroll.prototype.scroll = function(e, onScroll) {
    this.setScrollTop(e.scrollTop);
    this.setScrollHeight(e.scrollHeight);
    if (this.preScrollY == null)
      this.preScrollY = 0;
    this.isScrollUp = e.scrollTop - this.preScrollY > 0;
    this.preScrollY = e.scrollTop;
    this.isScrollUp && this.triggerUpScroll(true);
    if (e.scrollTop >= this.optUp.toTop.offset) {
      this.showTopBtn();
    } else {
      this.hideTopBtn();
    }
    this.optUp.onScroll && onScroll && onScroll();
  };
  MeScroll.prototype.triggerUpScroll = function(isCheck) {
    if (!this.isUpScrolling && this.optUp.use && this.optUp.callback) {
      if (isCheck === true) {
        let canUp = false;
        if (this.optUp.hasNext && !this.optUp.isLock && !this.isDownScrolling) {
          if (this.getScrollBottom() <= this.optUp.offset) {
            canUp = true;
          }
        }
        if (canUp === false)
          return;
      }
      this.showUpScroll();
      this.optUp.page.num++;
      this.isUpAutoLoad = true;
      this.num = this.optUp.page.num;
      this.size = this.optUp.page.size;
      this.time = this.optUp.page.time;
      this.optUp.callback(this);
    }
  };
  MeScroll.prototype.showUpScroll = function() {
    this.isUpScrolling = true;
    this.optUp.showLoading && this.optUp.showLoading(this);
  };
  MeScroll.prototype.showNoMore = function() {
    this.optUp.hasNext = false;
    this.optUp.showNoMore && this.optUp.showNoMore(this);
  };
  MeScroll.prototype.hideUpScroll = function() {
    this.optUp.hideUpScroll && this.optUp.hideUpScroll(this);
  };
  MeScroll.prototype.endUpScroll = function(isShowNoMore) {
    if (isShowNoMore != null) {
      if (isShowNoMore) {
        this.showNoMore();
      } else {
        this.hideUpScroll();
      }
    }
    this.isUpScrolling = false;
  };
  MeScroll.prototype.resetUpScroll = function(isShowLoading) {
    if (this.optUp && this.optUp.use) {
      let page2 = this.optUp.page;
      this.prePageNum = page2.num;
      this.prePageTime = page2.time;
      page2.num = this.startNum;
      page2.time = null;
      if (!this.isDownScrolling && isShowLoading !== false) {
        if (isShowLoading == null) {
          this.removeEmpty();
          this.showUpScroll();
        } else {
          this.showDownScroll();
        }
      }
      this.isUpAutoLoad = true;
      this.num = page2.num;
      this.size = page2.size;
      this.time = page2.time;
      this.optUp.callback && this.optUp.callback(this);
    }
  };
  MeScroll.prototype.setPageNum = function(num) {
    this.optUp.page.num = num - 1;
  };
  MeScroll.prototype.setPageSize = function(size) {
    this.optUp.page.size = size;
  };
  MeScroll.prototype.endByPage = function(dataSize, totalPage, systime) {
    let hasNext;
    if (this.optUp.use && totalPage != null)
      hasNext = this.optUp.page.num < totalPage;
    this.endSuccess(dataSize, hasNext, systime);
  };
  MeScroll.prototype.endBySize = function(dataSize, totalSize, systime) {
    let hasNext;
    if (this.optUp.use && totalSize != null) {
      let loadSize = (this.optUp.page.num - 1) * this.optUp.page.size + dataSize;
      hasNext = loadSize < totalSize;
    }
    this.endSuccess(dataSize, hasNext, systime);
  };
  MeScroll.prototype.endSuccess = function(dataSize, hasNext, systime) {
    let me = this;
    if (me.isDownScrolling) {
      me.isDownEndSuccess = true;
      me.endDownScroll();
    }
    if (me.optUp.use) {
      let isShowNoMore;
      if (dataSize != null) {
        let pageNum = me.optUp.page.num;
        let pageSize = me.optUp.page.size;
        if (pageNum === 1) {
          if (systime)
            me.optUp.page.time = systime;
        }
        if (dataSize < pageSize || hasNext === false) {
          me.optUp.hasNext = false;
          if (dataSize === 0 && pageNum === 1) {
            isShowNoMore = false;
            me.showEmpty();
          } else {
            let allDataSize = (pageNum - 1) * pageSize + dataSize;
            if (allDataSize < me.optUp.noMoreSize) {
              isShowNoMore = false;
            } else {
              isShowNoMore = true;
            }
            me.removeEmpty();
          }
        } else {
          isShowNoMore = false;
          me.optUp.hasNext = true;
          me.removeEmpty();
        }
      }
      me.endUpScroll(isShowNoMore);
    }
  };
  MeScroll.prototype.endErr = function(errDistance) {
    if (this.isDownScrolling) {
      this.isDownEndSuccess = false;
      let page2 = this.optUp.page;
      if (page2 && this.prePageNum) {
        page2.num = this.prePageNum;
        page2.time = this.prePageTime;
      }
      this.endDownScroll();
    }
    if (this.isUpScrolling) {
      this.optUp.page.num--;
      this.endUpScroll(false);
      if (this.isScrollBody && errDistance !== 0) {
        if (!errDistance)
          errDistance = this.optUp.errDistance;
        this.scrollTo(this.getScrollTop() - errDistance, 0);
      }
    }
  };
  MeScroll.prototype.showEmpty = function() {
    this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(true);
  };
  MeScroll.prototype.removeEmpty = function() {
    this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(false);
  };
  MeScroll.prototype.showTopBtn = function() {
    if (!this.topBtnShow) {
      this.topBtnShow = true;
      this.optUp.toTop.onShow && this.optUp.toTop.onShow(true);
    }
  };
  MeScroll.prototype.hideTopBtn = function() {
    if (this.topBtnShow) {
      this.topBtnShow = false;
      this.optUp.toTop.onShow && this.optUp.toTop.onShow(false);
    }
  };
  MeScroll.prototype.getScrollTop = function() {
    return this.scrollTop || 0;
  };
  MeScroll.prototype.setScrollTop = function(y) {
    this.scrollTop = y;
  };
  MeScroll.prototype.scrollTo = function(y, t) {
    this.myScrollTo && this.myScrollTo(y, t);
  };
  MeScroll.prototype.resetScrollTo = function(myScrollTo) {
    this.myScrollTo = myScrollTo;
  };
  MeScroll.prototype.getScrollBottom = function() {
    return this.getScrollHeight() - this.getClientHeight() - this.getScrollTop();
  };
  MeScroll.prototype.getStep = function(star, end, callback, t, rate2) {
    let diff2 = end - star;
    if (t === 0 || diff2 === 0) {
      callback && callback(end);
      return;
    }
    t = t || 300;
    rate2 = rate2 || 30;
    let count = t / rate2;
    let step = diff2 / count;
    let i = 0;
    let timer = setInterval(function() {
      if (i < count - 1) {
        star += step;
        callback && callback(star, timer);
        i++;
      } else {
        callback && callback(end, timer);
        clearInterval(timer);
      }
    }, rate2);
  };
  MeScroll.prototype.getClientHeight = function(isReal) {
    let h = this.clientHeight || 0;
    if (h === 0 && isReal !== true) {
      h = this.getBodyHeight();
    }
    return h;
  };
  MeScroll.prototype.setClientHeight = function(h) {
    this.clientHeight = h;
  };
  MeScroll.prototype.getScrollHeight = function() {
    return this.scrollHeight || 0;
  };
  MeScroll.prototype.setScrollHeight = function(h) {
    this.scrollHeight = h;
  };
  MeScroll.prototype.getBodyHeight = function() {
    return this.bodyHeight || 0;
  };
  MeScroll.prototype.setBodyHeight = function(h) {
    this.bodyHeight = h;
  };
  MeScroll.prototype.preventDefault = function(e) {
    if (e && e.cancelable && !e.defaultPrevented)
      e.preventDefault();
  };
  const GlobalOption = {
    down: {
      // 其他down的配置参数也可以写,这里只展示了常用的配置:
      offset: 80,
      // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调
      native: false
      // 是否使用系统自带的下拉刷新; 默认false; 仅在mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
    },
    up: {
      // 其他up的配置参数也可以写,这里只展示了常用的配置:
      offset: 150,
      // 距底部多远时,触发upCallback,仅mescroll-uni生效 ( mescroll-body配置的是pages.json的 onReachBottomDistance )
      toTop: {
        // 回到顶部按钮,需配置src才显示
        src: "https://www.mescroll.com/img/mescroll-totop.png",
        // 图片路径 (建议放入static目录, 如 /static/img/mescroll-totop.png )
        offset: 1e3,
        // 列表滚动多少距离才显示回到顶部按钮,默认1000px
        right: 20,
        // 到右边的距离, 默认20 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
        bottom: 120,
        // 到底部的距离, 默认120 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
        width: 72
        // 回到顶部图标的宽度, 默认72 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
      },
      empty: {
        use: true,
        // 是否显示空布局
        icon: "https://www.mescroll.com/img/mescroll-empty.png"
        // 图标路径 (建议放入static目录, 如 /static/img/mescroll-empty.png )
      }
    },
    // 国际化配置
    i18n: {
      // 中文
      zh: {
        down: {
          textInOffset: "下拉刷新",
          // 下拉的距离在offset范围内的提示文本
          textOutOffset: "释放更新",
          // 下拉的距离大于offset范围的提示文本
          textLoading: "加载中 ...",
          // 加载中的提示文本
          textSuccess: "加载成功",
          // 加载成功的文本
          textErr: "加载失败"
          // 加载失败的文本
        },
        up: {
          textLoading: "加载中 ...",
          // 加载中的提示文本
          textNoMore: "-- END --",
          // 没有更多数据的提示文本
          empty: {
            tip: "~ 空空如也 ~"
            // 空提示
          }
        }
      },
      // 英文
      en: {
        down: {
          textInOffset: "drop down refresh",
          textOutOffset: "release updates",
          textLoading: "loading ...",
          textSuccess: "loaded successfully",
          textErr: "loading failed"
        },
        up: {
          textLoading: "loading ...",
          textNoMore: "-- END --",
          empty: {
            tip: "~ absolutely empty ~"
          }
        }
      }
    }
  };
  const mescrollI18n = {
    // 默认语言
    def: "zh",
    // 获取当前语言类型
    getType() {
      return uni.getStorageSync("mescroll-i18n") || this.def;
    },
    // 设置当前语言类型
    setType(type) {
      uni.setStorageSync("mescroll-i18n", type);
    }
  };
  const _sfc_main$p = {
    props: {
      // empty的配置项: 默认为GlobalOption.up.empty
      option: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    // 使用computed获取配置,用于支持option的动态配置
    computed: {
      // 图标
      icon() {
        if (this.option.icon != null) {
          return this.option.icon;
        } else {
          let i18nType = mescrollI18n.getType();
          if (this.option.i18n) {
            return this.option.i18n[i18nType].icon;
          } else {
            return GlobalOption.i18n[i18nType].up.empty.icon || GlobalOption.up.empty.icon;
          }
        }
      },
      // 文本提示
      tip() {
        if (this.option.tip != null) {
          return this.option.tip;
        } else {
          let i18nType = mescrollI18n.getType();
          if (this.option.i18n) {
            return this.option.i18n[i18nType].tip;
          } else {
            return GlobalOption.i18n[i18nType].up.empty.tip || GlobalOption.up.empty.tip;
          }
        }
      },
      // 按钮文本
      btnText() {
        if (this.option.i18n) {
          let i18nType = mescrollI18n.getType();
          return this.option.i18n[i18nType].btnText;
        } else {
          return this.option.btnText;
        }
      }
    },
    methods: {
      // 点击按钮
      emptyClick() {
        this.$emit("emptyclick");
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["mescroll-empty", { "empty-fixed": $props.option.fixed }]),
        style: vue.normalizeStyle({ "z-index": $props.option.zIndex, top: $props.option.top })
      },
      [
        vue.createElementVNode("view", null, [
          $options.icon ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            class: "empty-icon",
            src: $options.icon,
            mode: "widthFix"
          }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
        ]),
        $options.tip ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: "empty-tip"
          },
          vue.toDisplayString($options.tip),
          1
          /* TEXT */
        )) : vue.createCommentVNode("v-if", true),
        $options.btnText ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 1,
            class: "empty-btn",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.emptyClick && $options.emptyClick(...args))
          },
          vue.toDisplayString($options.btnText),
          1
          /* TEXT */
        )) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const MescrollEmpty = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-03ed58fb"], ["__file", "C:/Users/while/Desktop/Warm-Mate/components/mescroll-uni/components/mescroll-empty.vue"]]);
  const _sfc_main$o = {
    props: {
      // up.toTop的配置项
      option: Object,
      // 是否显示
      value: false
    },
    computed: {
      // 支付宝小程序需写成计算属性,prop定义default仍报错
      mOption() {
        return this.option || {};
      },
      // 优先显示左边
      left() {
        return this.mOption.left ? this.addUnit(this.mOption.left) : "auto";
      },
      // 右边距离 (优先显示左边)
      right() {
        return this.mOption.left ? "auto" : this.addUnit(this.mOption.right);
      }
    },
    methods: {
      addUnit(num) {
        if (!num)
          return 0;
        if (typeof num === "number")
          return num + "rpx";
        return num;
      },
      toTopClick() {
        this.$emit("input", false);
        this.$emit("click");
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return $options.mOption.src ? (vue.openBlock(), vue.createElementBlock("image", {
      key: 0,
      class: vue.normalizeClass(["mescroll-totop", [$props.value ? "mescroll-totop-in" : "mescroll-totop-out", { "mescroll-totop-safearea": $options.mOption.safearea }]]),
      style: vue.normalizeStyle({ "z-index": $options.mOption.zIndex, "left": $options.left, "right": $options.right, "bottom": $options.addUnit($options.mOption.bottom), "width": $options.addUnit($options.mOption.width), "border-radius": $options.addUnit($options.mOption.radius) }),
      src: $options.mOption.src,
      mode: "widthFix",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.toTopClick && $options.toTopClick(...args))
    }, null, 14, ["src"])) : vue.createCommentVNode("v-if", true);
  }
  const MescrollTop = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-465fa157"], ["__file", "C:/Users/while/Desktop/Warm-Mate/components/mescroll-uni/components/mescroll-top.vue"]]);
  const WxsMixin = {
    data() {
      return {
        // 传入wxs视图层的数据 (响应式)
        wxsProp: {
          optDown: {},
          // 下拉刷新的配置
          scrollTop: 0,
          // 滚动条的距离
          bodyHeight: 0,
          // body的高度
          isDownScrolling: false,
          // 是否正在下拉刷新中
          isUpScrolling: false,
          // 是否正在上拉加载中
          isScrollBody: true,
          // 是否为mescroll-body滚动
          isUpBoth: true,
          // 上拉加载时,是否同时可以下拉刷新
          t: 0
          // 数据更新的标记 (只有数据更新了,才会触发wxs的Observer)
        },
        // 标记调用wxs视图层的方法
        callProp: {
          callType: "",
          // 方法名
          t: 0
          // 数据更新的标记 (只有数据更新了,才会触发wxs的Observer)
        }
        // 不用wxs的平台使用此处的wxsBiz对象,抹平wxs的写法 (微信小程序和APP使用的wxsBiz对象是./wxs/wxs.wxs)
        // 不用renderjs的平台使用此处的renderBiz对象,抹平renderjs的写法 (app 和 h5 使用的renderBiz对象是./wxs/renderjs.js)
      };
    },
    methods: {
      // wxs视图层调用逻辑层的回调
      wxsCall(msg2) {
        if (msg2.type === "setWxsProp") {
          this.wxsProp = {
            optDown: this.mescroll.optDown,
            scrollTop: this.mescroll.getScrollTop(),
            bodyHeight: this.mescroll.getBodyHeight(),
            isDownScrolling: this.mescroll.isDownScrolling,
            isUpScrolling: this.mescroll.isUpScrolling,
            isUpBoth: this.mescroll.optUp.isBoth,
            isScrollBody: this.mescroll.isScrollBody,
            t: Date.now()
          };
        } else if (msg2.type === "setLoadType") {
          this.downLoadType = msg2.downLoadType;
          this.$set(this.mescroll, "downLoadType", this.downLoadType);
          this.$set(this.mescroll, "isDownEndSuccess", null);
        } else if (msg2.type === "triggerDownScroll") {
          this.mescroll.triggerDownScroll();
        } else if (msg2.type === "endDownScroll") {
          this.mescroll.endDownScroll();
        } else if (msg2.type === "triggerUpScroll") {
          this.mescroll.triggerUpScroll(true);
        }
      }
    },
    mounted() {
      this.mescroll.optDown.afterLoading = () => {
        this.callProp = { callType: "showLoading", t: Date.now() };
      };
      this.mescroll.optDown.afterEndDownScroll = () => {
        this.callProp = { callType: "endDownScroll", t: Date.now() };
        let delay = 300 + (this.mescroll.optDown.beforeEndDelay || 0);
        setTimeout(() => {
          if (this.downLoadType === 4 || this.downLoadType === 0) {
            this.callProp = { callType: "clearTransform", t: Date.now() };
          }
          this.$set(this.mescroll, "downLoadType", this.downLoadType);
        }, delay);
      };
      this.wxsCall({ type: "setWxsProp" });
    }
  };
  const block0 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("wxsBiz");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["wxsBiz"] = "6f512776";
  };
  const block1 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("renderBiz");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["renderBiz"] = "4c1ee3ae";
  };
  const _sfc_main$n = {
    name: "mescroll-body",
    mixins: [WxsMixin],
    components: {
      MescrollEmpty,
      MescrollTop
    },
    props: {
      down: Object,
      up: Object,
      i18n: Object,
      top: [String, Number],
      topbar: [Boolean, String],
      bottom: [String, Number],
      safearea: Boolean,
      height: [String, Number],
      bottombar: {
        type: Boolean,
        default: true
      },
      sticky: Boolean
    },
    data() {
      return {
        mescroll: { optDown: {}, optUp: {} },
        // mescroll实例
        downHight: 0,
        //下拉刷新: 容器高度
        downRate: 0,
        // 下拉比率(inOffset: rate<1; outOffset: rate>=1)
        downLoadType: 0,
        // 下拉刷新状态: 0(loading前), 1(inOffset), 2(outOffset), 3(showLoading), 4(endDownScroll)
        upLoadType: 0,
        // 上拉加载状态：0（loading前），1（loading中），2（没有更多了,显示END文本提示），3（没有更多了,不显示END文本提示）
        isShowEmpty: false,
        // 是否显示空布局
        isShowToTop: false,
        // 是否显示回到顶部按钮
        windowHeight: 0,
        // 可使用窗口的高度
        windowBottom: 0,
        // 可使用窗口的底部位置
        statusBarHeight: 0
        // 状态栏高度
      };
    },
    computed: {
      // mescroll最小高度,默认windowHeight,使列表不满屏仍可下拉
      minHeight() {
        return this.toPx(this.height || "100%") + "px";
      },
      // 下拉布局往下偏移的距离 (px)
      numTop() {
        return this.toPx(this.top);
      },
      padTop() {
        return this.numTop + "px";
      },
      // 上拉布局往上偏移 (px)
      numBottom() {
        return this.toPx(this.bottom);
      },
      padBottom() {
        return this.numBottom + "px";
      },
      // 是否为重置下拉的状态
      isDownReset() {
        return this.downLoadType === 3 || this.downLoadType === 4;
      },
      // 过渡
      transition() {
        return this.isDownReset ? "transform 300ms" : "";
      },
      translateY() {
        return this.downHight > 0 ? "translateY(" + this.downHight + "px)" : "";
      },
      // 是否在加载中
      isDownLoading() {
        return this.downLoadType === 3;
      },
      // 旋转的角度
      downRotate() {
        return "rotate(" + 360 * this.downRate + "deg)";
      },
      // 文本提示
      downText() {
        if (!this.mescroll)
          return "";
        switch (this.downLoadType) {
          case 1:
            return this.mescroll.optDown.textInOffset;
          case 2:
            return this.mescroll.optDown.textOutOffset;
          case 3:
            return this.mescroll.optDown.textLoading;
          case 4:
            return this.mescroll.isDownEndSuccess ? this.mescroll.optDown.textSuccess : this.mescroll.isDownEndSuccess == false ? this.mescroll.optDown.textErr : this.mescroll.optDown.textInOffset;
          default:
            return this.mescroll.optDown.textInOffset;
        }
      }
    },
    methods: {
      //number,rpx,upx,px,% --> px的数值
      toPx(num) {
        if (typeof num === "string") {
          if (num.indexOf("px") !== -1) {
            if (num.indexOf("rpx") !== -1) {
              num = num.replace("rpx", "");
            } else if (num.indexOf("upx") !== -1) {
              num = num.replace("upx", "");
            } else {
              return Number(num.replace("px", ""));
            }
          } else if (num.indexOf("%") !== -1) {
            let rate2 = Number(num.replace("%", "")) / 100;
            return this.windowHeight * rate2;
          }
        }
        return num ? uni.upx2px(Number(num)) : 0;
      },
      // 点击空布局的按钮回调
      emptyClick() {
        this.$emit("emptyclick", this.mescroll);
      },
      // 点击回到顶部的按钮回调
      toTopClick() {
        this.mescroll.scrollTo(0, this.mescroll.optUp.toTop.duration);
        this.$emit("topclick", this.mescroll);
      }
    },
    // 使用created初始化mescroll对象; 如果用mounted部分css样式编译到H5会失效
    created() {
      let vm = this;
      let diyOption = {
        // 下拉刷新的配置
        down: {
          inOffset() {
            vm.downLoadType = 1;
          },
          outOffset() {
            vm.downLoadType = 2;
          },
          onMoving(mescroll, rate2, downHight) {
            vm.downHight = downHight;
            vm.downRate = rate2;
          },
          showLoading(mescroll, downHight) {
            vm.downLoadType = 3;
            vm.downHight = downHight;
          },
          beforeEndDownScroll(mescroll) {
            vm.downLoadType = 4;
            return mescroll.optDown.beforeEndDelay;
          },
          endDownScroll() {
            vm.downLoadType = 4;
            vm.downHight = 0;
            if (vm.downResetTimer) {
              clearTimeout(vm.downResetTimer);
              vm.downResetTimer = null;
            }
            vm.downResetTimer = setTimeout(() => {
              if (vm.downLoadType === 4)
                vm.downLoadType = 0;
            }, 300);
          },
          // 派发下拉刷新的回调
          callback: function(mescroll) {
            vm.$emit("down", mescroll);
          }
        },
        // 上拉加载的配置
        up: {
          // 显示加载中的回调
          showLoading() {
            vm.upLoadType = 1;
          },
          // 显示无更多数据的回调
          showNoMore() {
            vm.upLoadType = 2;
          },
          // 隐藏上拉加载的回调
          hideUpScroll(mescroll) {
            vm.upLoadType = mescroll.optUp.hasNext ? 0 : 3;
          },
          // 空布局
          empty: {
            onShow(isShow) {
              vm.isShowEmpty = isShow;
            }
          },
          // 回到顶部
          toTop: {
            onShow(isShow) {
              vm.isShowToTop = isShow;
            }
          },
          // 派发上拉加载的回调
          callback: function(mescroll) {
            vm.$emit("up", mescroll);
          }
        }
      };
      let i18nType = mescrollI18n.getType();
      let i18nOption = { type: i18nType };
      MeScroll.extend(i18nOption, vm.i18n);
      MeScroll.extend(i18nOption, GlobalOption.i18n);
      MeScroll.extend(diyOption, i18nOption[i18nType]);
      MeScroll.extend(diyOption, { down: GlobalOption.down, up: GlobalOption.up });
      let myOption = JSON.parse(JSON.stringify({ down: vm.down, up: vm.up }));
      MeScroll.extend(myOption, diyOption);
      vm.mescroll = new MeScroll(myOption, true);
      vm.mescroll.i18n = i18nOption;
      vm.$emit("init", vm.mescroll);
      const sys2 = uni.getSystemInfoSync();
      if (sys2.windowHeight)
        vm.windowHeight = sys2.windowHeight;
      if (sys2.windowBottom)
        vm.windowBottom = sys2.windowBottom;
      if (sys2.statusBarHeight)
        vm.statusBarHeight = sys2.statusBarHeight;
      vm.mescroll.setBodyHeight(sys2.windowHeight);
      vm.mescroll.resetScrollTo((y, t) => {
        if (typeof y === "string") {
          setTimeout(() => {
            let selector;
            if (y.indexOf("#") == -1 && y.indexOf(".") == -1) {
              selector = "#" + y;
            } else {
              selector = y;
              if (y.indexOf(">>>") != -1) {
                selector = y.split(">>>")[1].trim();
              }
            }
            uni.createSelectorQuery().select(selector).boundingClientRect(function(rect) {
              if (rect) {
                let top = rect.top;
                top += vm.mescroll.getScrollTop();
                uni.pageScrollTo({
                  scrollTop: top,
                  duration: t
                });
              } else {
                formatAppLog("error", "at components/mescroll-uni/mescroll-body.vue:355", selector + " does not exist");
              }
            }).exec();
          }, 30);
        } else {
          uni.pageScrollTo({
            scrollTop: y,
            duration: t
          });
        }
      });
      if (vm.up && vm.up.toTop && vm.up.toTop.safearea != null)
        ;
      else {
        vm.mescroll.optUp.toTop.safearea = vm.safearea;
      }
      uni.$on("setMescrollGlobalOption", (options) => {
        if (!options)
          return;
        let i18nType2 = options.i18n ? options.i18n.type : null;
        if (i18nType2 && vm.mescroll.i18n.type != i18nType2) {
          vm.mescroll.i18n.type = i18nType2;
          mescrollI18n.setType(i18nType2);
          MeScroll.extend(options, vm.mescroll.i18n[i18nType2]);
        }
        if (options.down) {
          let down = MeScroll.extend({}, options.down);
          vm.mescroll.optDown = MeScroll.extend(down, vm.mescroll.optDown);
        }
        if (options.up) {
          let up = MeScroll.extend({}, options.up);
          vm.mescroll.optUp = MeScroll.extend(up, vm.mescroll.optUp);
        }
      });
    },
    unmounted() {
      uni.$off("setMescrollGlobalOption");
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_mescroll_empty = vue.resolveComponent("mescroll-empty");
    const _component_mescroll_top = vue.resolveComponent("mescroll-top");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["mescroll-body mescroll-render-touch", { "mescorll-sticky": $props.sticky }]),
      style: vue.normalizeStyle({ "minHeight": $options.minHeight, "padding-top": $options.padTop, "padding-bottom": $options.padBottom }),
      onTouchstart: _cache[1] || (_cache[1] = (...args) => _ctx.wxsBiz.touchstartEvent && _ctx.wxsBiz.touchstartEvent(...args)),
      onTouchmove: _cache[2] || (_cache[2] = (...args) => _ctx.wxsBiz.touchmoveEvent && _ctx.wxsBiz.touchmoveEvent(...args)),
      onTouchend: _cache[3] || (_cache[3] = (...args) => _ctx.wxsBiz.touchendEvent && _ctx.wxsBiz.touchendEvent(...args)),
      onTouchcancel: _cache[4] || (_cache[4] = (...args) => _ctx.wxsBiz.touchendEvent && _ctx.wxsBiz.touchendEvent(...args)),
      "change:prop": _ctx.wxsBiz.propObserver,
      prop: vue.wp(_ctx.wxsProp)
    }, [
      $props.topbar && $data.statusBarHeight ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "mescroll-topbar",
          style: vue.normalizeStyle({ height: $data.statusBarHeight + "px", background: $props.topbar })
        },
        null,
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        class: "mescroll-body-content mescroll-wxs-content",
        style: vue.normalizeStyle({ transform: $options.translateY, transition: $options.transition }),
        "change:prop": _ctx.wxsBiz.callObserver,
        prop: vue.wp(_ctx.callProp)
      }, [
        $data.mescroll.optDown.use ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: "mescroll-downwarp",
            style: vue.normalizeStyle({ "background": $data.mescroll.optDown.bgColor, "color": $data.mescroll.optDown.textColor })
          },
          [
            vue.createElementVNode("view", { class: "downwarp-content" }, [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["downwarp-progress mescroll-wxs-progress", { "mescroll-rotate": $options.isDownLoading }]),
                  style: vue.normalizeStyle({ "border-color": $data.mescroll.optDown.textColor, "transform": $options.downRotate })
                },
                null,
                6
                /* CLASS, STYLE */
              ),
              vue.createElementVNode(
                "view",
                { class: "downwarp-tip" },
                vue.toDisplayString($options.downText),
                1
                /* TEXT */
              )
            ])
          ],
          4
          /* STYLE */
        )) : vue.createCommentVNode("v-if", true),
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
        $data.isShowEmpty ? (vue.openBlock(), vue.createBlock(_component_mescroll_empty, {
          key: 1,
          option: $data.mescroll.optUp.empty,
          onEmptyclick: $options.emptyClick
        }, null, 8, ["option", "onEmptyclick"])) : vue.createCommentVNode("v-if", true),
        $data.mescroll.optUp.use && !$options.isDownLoading && $data.upLoadType !== 3 ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 2,
            class: "mescroll-upwarp",
            style: vue.normalizeStyle({ "background": $data.mescroll.optUp.bgColor, "color": $data.mescroll.optUp.textColor })
          },
          [
            vue.withDirectives(vue.createElementVNode(
              "view",
              null,
              [
                vue.createElementVNode(
                  "view",
                  {
                    class: "upwarp-progress mescroll-rotate",
                    style: vue.normalizeStyle({ "border-color": $data.mescroll.optUp.textColor })
                  },
                  null,
                  4
                  /* STYLE */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "upwarp-tip" },
                  vue.toDisplayString($data.mescroll.optUp.textLoading),
                  1
                  /* TEXT */
                )
              ],
              512
              /* NEED_PATCH */
            ), [
              [vue.vShow, $data.upLoadType === 1]
            ]),
            $data.upLoadType === 2 ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: "upwarp-nodata"
              },
              vue.toDisplayString($data.mescroll.optUp.textNoMore),
              1
              /* TEXT */
            )) : vue.createCommentVNode("v-if", true)
          ],
          4
          /* STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ], 12, ["change:prop", "prop"]),
      $props.safearea ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "mescroll-safearea"
      })) : vue.createCommentVNode("v-if", true),
      vue.createVNode(_component_mescroll_top, {
        modelValue: $data.isShowToTop,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.isShowToTop = $event),
        option: $data.mescroll.optUp.toTop,
        onClick: $options.toTopClick
      }, null, 8, ["modelValue", "option", "onClick"]),
      vue.createElementVNode("view", {
        "change:prop": _ctx.renderBiz.propObserver,
        prop: vue.wp(_ctx.wxsProp)
      }, null, 8, ["change:prop", "prop"])
    ], 46, ["change:prop", "prop"]);
  }
  if (typeof block0 === "function")
    block0(_sfc_main$n);
  if (typeof block1 === "function")
    block1(_sfc_main$n);
  const MescrollBody = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-396f6d3f"], ["__file", "C:/Users/while/Desktop/Warm-Mate/components/mescroll-uni/mescroll-body.vue"]]);
  const _sfc_main$m = {
    mixins: [MescrollMixin],
    // 使用mixin
    components: {
      MescrollBody
    },
    data() {
      return {
        // mescroll对象
        mescroll: {},
        // 加载框状态
        status: "loading ",
        // 消息列表
        msgList: [],
        // 好友Id
        friendId: "",
        // 用户Id
        userId: "",
        // 昵称
        nickname: "",
        // 我的头像
        myAvatar: "/static/logo3.png",
        // 朋友头像
        friendAvatar: "/static/logo2.png",
        // 是否最后
        downOption: {
          // 显示下拉刷新的进度条
          autoShowLoading: true,
          // 增大触发下拉刷新的角度,
          minAngle: 45,
          // 是否在初始化完毕之后自动执行一次上拉加载的回调
          auto: false,
          // 是否到顶部才触发
          mustToTop: true
        },
        upOption: {
          // 禁止上拉
          use: false,
          // 是否在初始化完毕之后自动执行一次上拉加载的回调
          auto: false,
          toTop: {
            // 不显示回到顶部按钮
            src: ""
          },
          isBounce: true
        },
        // 页码
        pageNum: 1,
        // 页长
        pageSize: 20,
        // 是否无消息
        isEnd: false,
        // 频次，用于实现打字机效果
        times: 0,
        // 目标消息，用于实现打字机效果
        targetMsg: {},
        // 目标内容，用于实现打字机效果
        targetContent: "",
        // 定时器
        interval: {}
      };
    },
    methods: {
      async init() {
        await this.msgPage(true);
      },
      // 滚动初始化
      async mescrollInit(mescroll) {
        await this.init();
        this.$nextTick(function() {
          this.mescroll = mescroll;
          this.mescroll.scrollTo(99999, 300);
        });
      },
      // 转化文字
      covertText(msg2) {
        const baseParam = uni.$u.deepClone(this.baseParam);
        let endMsg = {
          ...baseParam,
          ...msg2
        };
        return endMsg;
      },
      // 发送消息
      async sendMsg(msg2) {
        formatAppLog("log", "at pages/message/message.vue:107", "msg", JSON.stringify(msg2));
        let endMsg = this.covertText(msg2);
        endMsg.position = "right";
        this.pushMsg(endMsg);
        const result = await this.$api.message(endMsg);
        if (result.success) {
          const { data } = result;
          endMsg.id = data.id;
          data.position = "left";
          this.pushMsg(data);
        }
      },
      // 塞入消息数组
      pushMsg(msg2) {
        if (msg2.position == "left") {
          this.targetMsg = {};
          this.times = 0;
          this.targetMsg = uni.$u.deepClone(msg2);
          this.targetContent = uni.$u.deepClone(this.targetMsg.msgContent);
          msg2.msgContent = "";
          this.msgList.push(msg2);
          this.interval = setInterval(this.intervalFunc, 50);
        } else {
          this.msgList.push(msg2);
        }
        this.$nextTick(function() {
          this.mescroll.scrollTo(99999, 0);
        });
      },
      // interval
      intervalFunc() {
        let content = uni.$u.deepClone(this.targetContent);
        this.times++;
        if (this.times == content.length) {
          clearInterval(this.interval);
        }
        this.targetMsg.msgContent = content.substring(0, this.times);
        this.msgList[this.msgList.length - 1] = this.targetMsg;
        this.$nextTick(function() {
          this.mescroll.scrollTo(99999, 0);
        });
      },
      // 下拉回调
      downEvent() {
        this.msgPage();
      },
      // 滚动到顶部触发
      async msgPage(flag2) {
        let _this = this;
        const params = {
          "current": this.pageNum,
          "size": this.pageSize
        };
        const result = await this.$api.messagePage(params);
        if (!result.success) {
          uni.$u.toast(result.message);
          return;
        }
        this.pageNum++;
        this.mescroll.endSuccess(this.pageSize);
        const data = result.data;
        const { records } = data;
        if (records.length < this.pageSize) {
          this.isEnd = true;
          this.mescroll.lockDownScroll(true);
        }
        const msgList = uni.$u.deepClone(this.msgList);
        const topMsg = msgList[0];
        const filterMsgList = this.msgFilter(records);
        this.msgList = filterMsgList.concat(msgList);
        this.$nextTick(() => {
          if (this.pageNum <= 2) {
            _this.mescroll.scrollTo(99999, 0);
          } else if (topMsg) {
            let view = uni.createSelectorQuery().select("#msg_" + topMsg.id);
            view.boundingClientRect((v) => {
              formatAppLog("log", "at pages/message/message.vue:196", "节点离页面顶部的距离=" + v.top);
              _this.mescroll.scrollTo(v.top - 100, 0);
            }).exec();
          }
          if (Boolean(flag2)) {
            _this.mescroll.scrollTo("msg_" + this.msgList[this.msgList.length - 1].id, 300);
          }
        });
      },
      // 消息过滤
      msgFilter(msgList) {
        const len = msgList.length;
        const endMsgList = [];
        for (let i = len - 1; i >= 0; i--) {
          endMsgList.push(msgList[i]);
        }
        return endMsgList;
      },
      // 返回上一页
      goBack() {
        uni.navigateBack({
          delta: 1
        });
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_msg = resolveEasycom(vue.resolveDynamicComponent("msg"), msg);
    const _component_mescroll_body = vue.resolveComponent("mescroll-body");
    const _component_inputBox = resolveEasycom(vue.resolveDynamicComponent("inputBox"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["message", _ctx.containerClasses])
      },
      [
        vue.createVNode(_component_mescroll_body, {
          fixed: true,
          top: 10,
          height: "auto",
          bottom: "0",
          id: "mescroll",
          class: "mescroll",
          ref: "mescrollRef",
          onInit: $options.mescrollInit,
          down: $data.downOption,
          onDown: $options.downEvent,
          up: $data.upOption
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", { class: "msgList" }, [
              $data.isEnd ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "msg-end"
              }, "无更多消息")) : vue.createCommentVNode("v-if", true),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.msgList, (item) => {
                  return vue.openBlock(), vue.createBlock(_component_msg, {
                    position: item.fromUserId != 0 ? "right" : "left",
                    avatar: item.fromUserId != 0 ? $data.myAvatar : $data.friendAvatar,
                    content: item.msgContent,
                    id: "msg_" + item.id,
                    msgType: item.msgType,
                    time: item.time,
                    msgId: item.id + "",
                    key: item.id,
                    onMsgHandle: _ctx.msgHandle
                  }, null, 8, ["position", "avatar", "content", "id", "msgType", "time", "msgId", "onMsgHandle"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onInit", "down", "onDown", "up"]),
        vue.createVNode(_component_inputBox, { onSendMsg: $options.sendMsg }, null, 8, ["onSendMsg"])
      ],
      2
      /* CLASS */
    );
  }
  const PagesMessageMessage = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-4c1b26cf"], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/message/message.vue"]]);
  const _sfc_main$l = {
    data() {
      return {
        title: "暖愈心伴",
        modalShow: false,
        retrievePwd: {
          username: "",
          email: ""
        },
        model: {
          user: {
            username: "",
            password: ""
          }
        },
        rules: {
          "user.username": [
            {
              required: true,
              message: "请输入手机号",
              trigger: ["change", "blur"]
            },
            {
              validator: (rule, value, callback) => {
                if (uni.$u.test.mobile(value)) {
                  callback();
                } else {
                  callback(new Error("手机号码不正确"));
                }
              },
              trigger: ["blur"]
            }
          ],
          "user.password": [
            {
              type: "string",
              min: 6,
              max: 16,
              required: true,
              message: "请输入6-16位密码",
              trigger: ["blur"]
            }
          ]
        }
      };
    },
    onLoad() {
    },
    methods: {
      async submit() {
        var _a, _b;
        try {
          formatAppLog("log", "at pages/login/login.vue:119", "===== 开始执行登录流程 =====");
          const validateRes = await this.$refs.loginForm.validate();
          formatAppLog("log", "at pages/login/login.vue:122", "表单验证结果：", validateRes);
          if (!validateRes) {
            formatAppLog("log", "at pages/login/login.vue:124", "表单验证失败，终止登录");
            return;
          }
          const param = this.model.user;
          formatAppLog("log", "at pages/login/login.vue:130", "登录请求参数：", param);
          const result = await this.$api.login(param);
          formatAppLog("log", "at pages/login/login.vue:134", "登录接口完整返回值：", JSON.stringify(result));
          const isSuccess = result.success || result.code === 200 || result.code === 0;
          if (isSuccess) {
            const accessToken = ((_a = result.data) == null ? void 0 : _a.accessToken) || result.token || ((_b = result.data) == null ? void 0 : _b.token);
            if (!accessToken) {
              throw new Error(
                "接口未返回token，字段可能是token/accessToken，请核对"
              );
            }
            uni.setStorageSync("Access-Token", accessToken);
            formatAppLog("log", "at pages/login/login.vue:153", "Token存储成功：", accessToken);
            uni.reLaunch({
              url: "/pages/index/index",
              // 确认pages.json里的首页路径
              success: () => {
                formatAppLog("log", "at pages/login/login.vue:159", "跳转首页成功");
              },
              fail: (err) => {
                formatAppLog("error", "at pages/login/login.vue:162", "跳转首页失败：", err);
                uni.$u.toast(
                  "登录成功，但跳转失败，请检查首页路径"
                );
              }
            });
          } else {
            const errMsg = result.message || result.msg || "登录失败，账号或密码错误";
            formatAppLog("log", "at pages/login/login.vue:173", "登录接口返回失败：", errMsg);
            uni.$u.toast(errMsg);
          }
        } catch (error2) {
          formatAppLog("error", "at pages/login/login.vue:178", "登录流程异常：", error2);
          uni.$u.toast(
            `登录失败：${error2.message || "网络异常，请重试"}`
          );
        }
      },
      register() {
        uni.$u.route("/pages/register/register");
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_avatar = vue.resolveComponent("u-avatar");
    const _component_u__input = vue.resolveComponent("u--input");
    const _component_u_form_item = vue.resolveComponent("u-form-item");
    const _component_u__form = vue.resolveComponent("u--form");
    const _component_u_button = vue.resolveComponent("u-button");
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["login", _ctx.containerClasses])
      },
      [
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "logo" }, [
            vue.createVNode(_component_u_avatar, {
              src: "/static/logo2.png",
              shape: "square",
              size: "100"
            })
          ]),
          vue.createElementVNode("view", { class: "title" }, [
            vue.createElementVNode(
              "h2",
              null,
              vue.toDisplayString($data.title),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "form" }, [
            vue.createVNode(_component_u__form, {
              labelPosition: "left",
              model: $data.model,
              rules: $data.rules,
              ref: "loginForm",
              labelWidth: "80"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_form_item, {
                  label: "手机号",
                  prop: "user.username",
                  borderBottom: "",
                  customStyle: "margin-bottom: 10px"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u__input, {
                      placeholder: "请输入手机号",
                      modelValue: $data.model.user.username,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.model.user.username = $event),
                      border: "none"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_u_form_item, {
                  label: "密码",
                  prop: "user.password",
                  borderBottom: "",
                  customStyle: "margin: 10px 0"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u__input, {
                      placeholder: "请输入密码",
                      modelValue: $data.model.user.password,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.model.user.password = $event),
                      border: "none",
                      password: "",
                      clearable: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["model", "rules"]),
            vue.createVNode(_component_u_button, {
              type: "success",
              text: "登录",
              customStyle: "margin-top: 50px",
              shape: "circle",
              onClick: $options.submit
            }, null, 8, ["onClick"])
          ]),
          vue.createElementVNode("view", { class: "footer" }, [
            vue.createElementVNode("text", {
              class: "footer-text",
              onClick: _cache[2] || (_cache[2] = (...args) => $options.register && $options.register(...args))
            }, "账号注册")
          ])
        ])
      ],
      2
      /* CLASS */
    );
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/login/login.vue"]]);
  const _sfc_main$k = {
    data() {
      let _this = this;
      return {
        title: "暖愈心伴",
        model: {
          user: {
            username: "",
            password: ""
          }
        },
        rules: {
          "user.username": [
            {
              required: true,
              message: "请输入手机号",
              trigger: ["change", "blur"]
            },
            {
              validator: (rule, value, callback) => {
                return uni.$u.test.mobile(value);
              },
              message: "手机号码不正确",
              trigger: ["blur"]
            }
          ],
          "user.password": [
            {
              type: "string",
              min: 6,
              max: 16,
              required: true,
              message: "请输入6-16位密码",
              trigger: ["blur"]
            }
          ],
          "user.passwordVerify": [
            {
              type: "string",
              min: 6,
              max: 16,
              required: true,
              message: "请输入6-16位确认密码",
              trigger: ["blur"]
            },
            {
              validator: (rule, value, callback) => {
                return value === _this.model.user.password;
              },
              message: "两次密码不一致",
              trigger: ["blur"]
            }
          ]
        }
      };
    },
    onLoad() {
    },
    methods: {
      // 注册提交
      submit() {
        this.$refs.registerForm.validate().then((res) => {
          let param = this.model.user;
          this.$api.register(param).then((res2) => {
            if (res2.success) {
              uni.$u.toast("注册成功");
              setTimeout(() => {
                uni.$u.route("/pages/login/login");
              }, 1e3);
            } else {
              uni.$u.toast(res2.message);
            }
          });
        });
      },
      // 已有账号
      hasAccount() {
        uni.$u.route("/pages/login/login");
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_avatar = vue.resolveComponent("u-avatar");
    const _component_u__input = vue.resolveComponent("u--input");
    const _component_u_form_item = vue.resolveComponent("u-form-item");
    const _component_u__form = vue.resolveComponent("u--form");
    const _component_u_button = vue.resolveComponent("u-button");
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["register", _ctx.containerClasses])
      },
      [
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "logo" }, [
            vue.createVNode(_component_u_avatar, {
              src: "/static/logo2.png",
              shape: "square",
              size: "100"
            })
          ]),
          vue.createElementVNode("view", { class: "title" }, [
            vue.createElementVNode(
              "h2",
              null,
              vue.toDisplayString($data.title),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "form" }, [
            vue.createVNode(_component_u__form, {
              labelPosition: "left",
              model: $data.model,
              rules: $data.rules,
              ref: "registerForm",
              labelWidth: "80"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_form_item, {
                  label: "手机号",
                  prop: "user.username",
                  borderBottom: "",
                  customStyle: "margin-bottom: 10px"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u__input, {
                      placeholder: "请输入手机号",
                      modelValue: $data.model.user.username,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.model.user.username = $event),
                      border: "none"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_u_form_item, {
                  label: "密码",
                  prop: "user.password",
                  borderBottom: "",
                  customStyle: "margin: 10px 0"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u__input, {
                      placeholder: "请输入密码",
                      modelValue: $data.model.user.password,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.model.user.password = $event),
                      border: "none",
                      password: "",
                      clearable: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_u_form_item, {
                  label: "确认密码",
                  prop: "user.passwordVerify",
                  borderBottom: "",
                  customStyle: "margin: 10px 0"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u__input, {
                      placeholder: "请确认密码",
                      modelValue: $data.model.user.passwordVerify,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.model.user.passwordVerify = $event),
                      border: "none",
                      password: "",
                      clearable: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["model", "rules"]),
            vue.createVNode(_component_u_button, {
              type: "primary",
              text: "注册",
              customStyle: "margin-top: 50px",
              shape: "circle",
              onClick: $options.submit
            }, null, 8, ["onClick"])
          ]),
          vue.createElementVNode("view", { class: "footer" }, [
            vue.createElementVNode("text", {
              class: "footer-text",
              onClick: _cache[3] || (_cache[3] = (...args) => $options.hasAccount && $options.hasAccount(...args))
            }, "已有账号")
          ])
        ])
      ],
      2
      /* CLASS */
    );
  }
  const PagesRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/register/register.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(options);
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config2 = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config2
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config: config2
        } = obj;
        this._animateRun(styles, config2).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config2 = {}) {
      this.animation.step(config2);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$j = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      },
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i in styles) {
          let line2 = this.toLine(i);
          transform += line2 + ":" + styles[i] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config2 = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:143", `方法 ${i} 不存在`);
          }
        }
        this.animation.step(config2);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow || $props.onceRender ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])), [
      [vue.vShow, $data.isShow]
    ]) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__file", "C:/Users/while/Desktop/Warm-Mate/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$i = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      },
      // 指定使用v-show指令，不重新渲染Pop组件
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible() {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          clearTimeout(this.timer);
          this.showPopup = false;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:285", "缺少类型：", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$1);
    return $data.showPopup || $props.onceRender ? vue.withDirectives((vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap,
              "once-render": $props.onceRender
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle({ backgroundColor: $options.bg }),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick", "once-render"])
          ],
          32
          /* NEED_HYDRATION */
        )
      ],
      2
      /* CLASS */
    )), [
      [vue.vShow, $data.showPopup]
    ]) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-4dd3c44b"], ["__file", "C:/Users/while/Desktop/Warm-Mate/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const _sfc_main$h = {
    data() {
      return {
        themeColor: "#5d9bff",
        currentCategory: 0,
        currentTest: {},
        categories: [
          {
            name: "情绪状态",
            emoji: "😊",
            type: "mood"
          },
          {
            name: "压力评估",
            emoji: "😫",
            type: "stress"
          },
          {
            name: "人际关系",
            emoji: "👥",
            type: "social"
          },
          {
            name: "睡眠质量",
            emoji: "😴",
            type: "sleep"
          }
        ],
        testList: [
          {
            id: "phq7",
            title: "抑郁症状筛查",
            description: "PHQ-7专业抑郁症状评估量表",
            emoji: "😔",
            questionCount: 9,
            duration: 3,
            type: "mood",
            path: "/pages/phq7-test/do-test",
            isNew: false,
            detailDescription: "本量表基于PHQ-7(Patient Health Questionnaire-7)开发，用于评估过去两周内抑郁症状的出现频率。包含7个问题，每个问题0-3分，总分0-21分。\n\n评分参考：\n0-4分：无明显症状\n5-9分：轻度抑郁\n10-14分：中度抑郁\n15-21分：重度抑郁"
          },
          {
            id: "gad7",
            title: "焦虑症状筛查",
            description: "GAD-7广泛性焦虑障碍量表",
            emoji: "😰",
            path: "/pages/phq7-test/gad7",
            questionCount: 7,
            duration: 3,
            type: "mood",
            isNew: true,
            detailDescription: "GAD-7量表用于评估广泛性焦虑症状，包含7个问题，评估过去两周的情况。每个问题0-3分，总分0-21分。\n\n评分参考：\n0-4分：无明显焦虑\n5-9分：轻度焦虑\n10-14分：中度焦虑\n15-21分：重度焦虑"
          },
          {
            id: "cpss",
            title: "感知压力量表",
            description: "CPSS中文版知觉压力量表",
            emoji: "😫",
            questionCount: 14,
            duration: 5,
            type: "stress",
            path: "/pages/phq7-test/cpss",
            isNew: false,
            detailDescription: '感知压力量表（Perceived Stress Scale，PSS）由美国学者Cohen等编制，杨廷忠等2003年汉化，共14个条目，包含2维度，即紧张感和失控感。采用Likert5级计分法，"从不"至"总是"赋值为0～4分。总分0～56分，得分高低与个体感知压力水平呈正比。'
          },
          {
            id: "ucla",
            title: "UCLA孤独感量表",
            description: "UCLA孤独感量表评估",
            emoji: "😔",
            questionCount: 20,
            duration: 5,
            type: "social",
            path: "/pages/phq7-test/ucla",
            isNew: false,
            detailDescription: "UCLA孤独感量表（UCLA Loneliness Scale）由Russell等开发，用于评估个体的孤独感程度。量表包含20个题目，采用4点计分法，总分20-80分。"
          },
          {
            id: "its",
            title: "人际信任量表",
            description: "ITS人际信任量表评估",
            emoji: "🙂",
            questionCount: 12,
            duration: 4,
            type: "social",
            path: "/pages/phq7-test/its",
            isNew: false,
            detailDescription: "人际信任量表（Interpersonal Trust Scale，ITS）由Rotter开发，用于评估个体对他人的信任程度。量表包含12个题目，采用5点计分法，总分12-60分。"
          },
          {
            id: "psqi",
            title: "匹兹堡睡眠质量指数",
            description: "PSQI睡眠质量评估",
            emoji: "😴",
            questionCount: 7,
            duration: 3,
            type: "sleep",
            path: "/pages/phq7-test/psqi",
            isNew: false,
            detailDescription: "匹兹堡睡眠质量指数（Pittsburgh Sleep Quality Index，PSQI）由Buysse等开发，用于评估睡眠质量。量表包含7个维度，采用0-3分计分法，总分0-21分。"
          },
          {
            id: "sds",
            title: "睡眠障碍量表",
            description: "SDS睡眠障碍评估",
            emoji: "😵",
            questionCount: 10,
            duration: 4,
            type: "sleep",
            path: "/pages/phq7-test/sds",
            isNew: false,
            detailDescription: "睡眠障碍量表（Sleep Disorder Scale，SDS）用于评估各种睡眠障碍症状。量表包含10个题目，采用0-3分计分法，总分0-30分。"
          }
        ]
      };
    },
    computed: {
      filteredTests() {
        const currentType = this.categories[this.currentCategory].type;
        return this.testList.filter((item) => item.type === currentType);
      }
    },
    methods: {
      goBack() {
        uni.reLaunch({
          url: "/pages/index/index"
        });
      },
      switchCategory(index2) {
        this.currentCategory = index2;
      },
      startTest(test2) {
        this.currentTest = test2;
        this.$refs.infoPopup.open();
      },
      confirmStart() {
        this.$refs.infoPopup.close();
        uni.navigateTo({
          url: this.currentTest.path
        });
      },
      navToHistory() {
        uni.navigateTo({
          url: "/pages/phq7-test/history"
        });
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["test-container", _ctx.containerClasses]),
        style: vue.normalizeStyle({ "--theme-color": $data.themeColor })
      },
      [
        vue.createElementVNode("view", { class: "guide-area" }, [
          vue.createElementVNode("text", { class: "guide-emoji" }, "☀️"),
          vue.createElementVNode("view", { class: "guide-speech" }, [
            vue.createElementVNode("text", null, "Hi~ 我是你的心理助手小晴！\\n请自行完成测评哦~")
          ])
        ]),
        vue.createElementVNode("scroll-view", {
          class: "category-nav",
          "scroll-x": ""
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.categories, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index2,
                class: vue.normalizeClass(["category-item", { active: $data.currentCategory === index2 }]),
                onClick: ($event) => $options.switchCategory(index2)
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "category-emoji" },
                  vue.toDisplayString(item.emoji),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(item.name),
                  1
                  /* TEXT */
                )
              ], 10, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", { class: "test-list" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.filteredTests, (test2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: test2.id,
                class: "test-card",
                onClick: ($event) => $options.startTest(test2)
              }, [
                test2.isNew ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "card-badge"
                }, "NEW")) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode(
                  "view",
                  { class: "test-cover-emoji" },
                  vue.toDisplayString(test2.emoji),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "test-info" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "test-title" },
                    vue.toDisplayString(test2.title),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "test-desc" },
                    vue.toDisplayString(test2.description),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "test-meta" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "meta-item" },
                      vue.toDisplayString(test2.questionCount) + "题 · 约" + vue.toDisplayString(test2.duration) + "分钟",
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", {
          class: "history-entrance",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.navToHistory && $options.navToHistory(...args))
        }, [
          vue.createElementVNode("text", null, "查看历史测评报告"),
          vue.createElementVNode("text", { class: "emoji" }, "➡️")
        ]),
        vue.createVNode(
          _component_uni_popup,
          {
            ref: "infoPopup",
            type: "dialog"
          },
          {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "test-info-popup" }, [
                vue.createElementVNode(
                  "text",
                  { class: "popup-title" },
                  vue.toDisplayString($data.currentTest.title) + "测评说明",
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("scroll-view", {
                  "scroll-y": "",
                  class: "popup-content"
                }, [
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString($data.currentTest.detailDescription),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "warning-box" }, [
                    vue.createElementVNode("text", { class: "emoji" }, "⚠️"),
                    vue.createTextVNode("本测评结果仅供参考，不能作为临床诊断依据 ")
                  ])
                ]),
                vue.createElementVNode("button", {
                  class: "start-btn",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.confirmStart && $options.confirmStart(...args))
                }, " 开始测评 ")
              ])
            ]),
            _: 1
            /* STABLE */
          },
          512
          /* NEED_PATCH */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const PagesPhq7TestIndex = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/phq7-test/index.vue"]]);
  const _imports_0 = "/static/icons/check-circle.png";
  const _sfc_main$g = {
    data() {
      return {
        themeColor: "#5d9bff",
        // 主色调
        answers: [],
        // 初始化空数组
        questions: [
          {
            id: 1,
            type: "mood",
            text: "对做事缺乏兴趣或愉悦感",
            options: [
              { text: "完全不会", desc: "0分", score: 0 },
              { text: "几天", desc: "1分", score: 1 },
              { text: "超过一半的天数", desc: "2分", score: 2 },
              { text: "几乎每天", desc: "3分", score: 3 }
            ]
          },
          {
            id: 2,
            type: "mood",
            text: "感到沮丧、抑郁或绝望",
            options: [
              { text: "完全不会", desc: "0分", score: 0 },
              { text: "几天", desc: "1分", score: 1 },
              { text: "超过一半的天数", desc: "2分", score: 2 },
              { text: "几乎每天", desc: "3分", score: 3 }
            ]
          },
          {
            id: 3,
            type: "mood",
            text: "难以入睡或保持睡眠，或睡得太多",
            options: [
              { text: "完全不会", desc: "0分", score: 0 },
              { text: "几天", desc: "1分", score: 1 },
              { text: "超过一半的天数", desc: "2分", score: 2 },
              { text: "几乎每天", desc: "3分", score: 3 }
            ]
          },
          {
            id: 4,
            type: "mood",
            text: "感到疲劳或无精打采",
            options: [
              { text: "完全不会", desc: "0分", score: 0 },
              { text: "几天", desc: "1分", score: 1 },
              { text: "超过一半的天数", desc: "2分", score: 2 },
              { text: "几乎每天", desc: "3分", score: 3 }
            ]
          },
          {
            id: 5,
            type: "mood",
            text: "食欲不振或暴饮暴食",
            options: [
              { text: "完全不会", desc: "0分", score: 0 },
              { text: "几天", desc: "1分", score: 1 },
              { text: "超过一半的天数", desc: "2分", score: 2 },
              { text: "几乎每天", desc: "3分", score: 3 }
            ]
          },
          {
            id: 6,
            type: "mood",
            text: "感到自己不好——或者认为自己是失败者，或让自己或家人失望",
            options: [
              { text: "完全不会", desc: "0分", score: 0 },
              { text: "几天", desc: "1分", score: 1 },
              { text: "超过一半的天数", desc: "2分", score: 2 },
              { text: "几乎每天", desc: "3分", score: 3 }
            ]
          },
          {
            id: 7,
            type: "mood",
            text: "注意很难集中，例如阅读报纸或看电视",
            options: [
              { text: "完全不会", desc: "0分", score: 0 },
              { text: "几天", desc: "1分", score: 1 },
              { text: "超过一半的天数", desc: "2分", score: 2 },
              { text: "几乎每天", desc: "3分", score: 3 }
            ]
          },
          {
            id: 8,
            type: "mood",
            text: "动作或说话速度缓慢到别人可察觉的程度，或正好相反——比平时更坐立不安或烦躁不安",
            options: [
              { text: "完全不会", desc: "0分", score: 0 },
              { text: "几天", desc: "1分", score: 1 },
              { text: "超过一半的天数", desc: "2分", score: 2 },
              { text: "几乎每天", desc: "3分", score: 3 }
            ]
          },
          {
            id: 9,
            type: "mood",
            text: "有希望自己死去或以某种方式伤害自己的想法",
            options: [
              { text: "完全不会", desc: "0分", score: 0 },
              { text: "几天", desc: "1分", score: 1 },
              { text: "超过一半的天数", desc: "2分", score: 2 },
              { text: "几乎每天", desc: "3分", score: 3 }
            ]
          }
        ],
        currentIndex: 0,
        selectedOption: null,
        showEncouragement: false,
        encouragement: {
          emoji: "",
          text: ""
        },
        encouragements: [
          { emoji: "/static/emojis/star.png", text: "你的回答很有价值！" },
          { emoji: "/static/emojis/heart.png", text: "感谢你的真诚回答" },
          { emoji: "/static/emojis/lightbulb.png", text: "自我觉察是成长的第一步" }
        ],
        showResult: false,
        resultData: {
          totalScore: 0,
          depressionLevel: "",
          levelDescription: "",
          suggestion: ""
        }
      };
    },
    computed: {
      currentQuestion() {
        return this.questions[this.currentIndex];
      },
      progress() {
        return Math.round(this.currentIndex / this.questions.length * 100);
      },
      isLastQuestion() {
        return this.currentIndex === this.questions.length - 1;
      },
      typeTag() {
        const types = {
          mood: { text: "情绪评估", color: "#FF6B81", icon: "/static/icons/mood.png" },
          anxiety: { text: "焦虑评估", color: "#FFA500", icon: "/static/icons/anxiety.png" }
          // 更多类型...
        };
        return types[this.currentQuestion.type] || { text: "心理测评", color: this.themeColor, icon: "/static/icons/psychology.png" };
      }
    },
    methods: {
      // 返回上一页
      goBack() {
        uni.navigateBack({
          delta: 1
        });
      },
      selectOption(index2) {
        this.selectedOption = index2;
        this.answers[this.currentIndex] = {
          questionId: this.currentQuestion.id,
          score: this.currentQuestion.options[index2].score
        };
        formatAppLog("log", "at pages/phq7-test/do-test.vue:292", "当前答案:", this.answers);
        this.showRandomEncouragement();
        uni.vibrateShort();
      },
      showRandomEncouragement() {
        if (Math.random() > 0.7) {
          this.encouragement = this.encouragements[Math.floor(Math.random() * this.encouragements.length)];
          this.showEncouragement = true;
          setTimeout(() => {
            this.showEncouragement = false;
          }, 1500);
        }
      },
      nextQuestion() {
        if (this.selectedOption === null)
          return;
        if (this.isLastQuestion) {
          this.submitTest();
          return;
        }
        this.currentIndex++;
        const nextAnswer = this.answers[this.currentIndex];
        if (nextAnswer) {
          this.selectedOption = this.currentQuestion.options.findIndex((option) => option.score === nextAnswer.score);
        } else {
          this.selectedOption = null;
        }
        this.scrollToTop();
      },
      prevQuestion() {
        if (this.currentIndex <= 0)
          return;
        this.currentIndex--;
        const prevAnswer = this.answers[this.currentIndex];
        if (prevAnswer) {
          this.selectedOption = this.currentQuestion.options.findIndex((option) => option.score === prevAnswer.score);
        } else {
          this.selectedOption = null;
        }
        this.scrollToTop();
      },
      scrollToTop() {
        uni.pageScrollTo({
          scrollTop: 0,
          duration: 300
        });
      },
      submitTest() {
        const totalScore = this.answers.reduce((sum, a) => sum + (a ? a.score : 0), 0);
        let depressionLevel = "";
        let levelDescription = "";
        let suggestion = "";
        if (totalScore >= 0 && totalScore <= 4) {
          depressionLevel = "无抑郁症状";
          levelDescription = "您的心理健康状况良好，没有明显的抑郁症状。";
          suggestion = "继续保持良好的生活习惯，定期关注自己的心理健康。";
        } else if (totalScore >= 5 && totalScore <= 9) {
          depressionLevel = "轻度抑郁";
          levelDescription = "您可能有一些轻微的抑郁症状，建议关注自己的情绪变化。";
          suggestion = "建议多参与社交活动，保持规律作息，如症状持续可考虑寻求专业帮助。";
        } else if (totalScore >= 10 && totalScore <= 14) {
          depressionLevel = "中度抑郁";
          levelDescription = "您有明显的抑郁症状，建议及时寻求专业帮助。";
          suggestion = "建议尽快咨询心理医生或精神科医生，制定合适的治疗方案。";
        } else if (totalScore >= 15 && totalScore <= 19) {
          depressionLevel = "中重度抑郁";
          levelDescription = "您的抑郁症状较为严重，强烈建议寻求专业治疗。";
          suggestion = "请立即寻求专业心理医生或精神科医生的帮助，不要忽视这些症状。";
        } else if (totalScore >= 20 && totalScore <= 27) {
          depressionLevel = "重度抑郁";
          levelDescription = "您的抑郁症状非常严重，需要立即寻求专业治疗。";
          suggestion = "请立即联系专业心理医生或精神科医生，必要时可考虑住院治疗。";
        }
        this.resultData = {
          totalScore,
          depressionLevel,
          levelDescription,
          suggestion
        };
        this.showResult = true;
        this.saveTestResultToDatabase();
      },
      getOptionStyle(index2) {
        if (this.selectedOption === index2) {
          return {
            borderColor: this.typeTag.color,
            backgroundColor: this.hexToRgba(this.typeTag.color, 0.08)
          };
        }
        return {};
      },
      hexToRgba(hex, opacity) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      },
      closeResult() {
        this.showResult = false;
      },
      restartTest() {
        this.showResult = false;
        this.currentIndex = 0;
        this.selectedOption = null;
        this.answers = [];
        this.scrollToTop();
      },
      getLevelClass(level) {
        if (level.includes("无抑郁"))
          return "level-normal";
        if (level.includes("轻度"))
          return "level-mild";
        if (level.includes("中度"))
          return "level-moderate";
        if (level.includes("中重度"))
          return "level-severe";
        if (level.includes("重度"))
          return "level-critical";
        return "level-normal";
      },
      // 保存测试结果到数据库
      async saveTestResultToDatabase() {
        const requestData = {
          questionnaireName: "PHQ-9抑郁筛查量表",
          depressionLevel: this.resultData.depressionLevel,
          levelDescription: this.resultData.levelDescription,
          suggestion: this.resultData.suggestion
        };
        formatAppLog("log", "at pages/phq7-test/do-test.vue:430", "准备保存测试结果:", requestData);
        try {
          const result = await this.$api.questionnaire.saveResult(requestData);
          if (result.success) {
          } else {
          }
        } catch (error2) {
          formatAppLog("error", "at pages/phq7-test/do-test.vue:452", "保存测试结果失败:", error2);
          uni.showToast({
            title: "网络错误，请检查网络连接",
            icon: "error",
            duration: 2e3
          });
        }
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["test-page", _ctx.containerClasses]),
        style: vue.normalizeStyle({ "--theme-color": $data.themeColor })
      },
      [
        vue.createElementVNode("view", { class: "progress-container" }, [
          vue.createElementVNode(
            "text",
            { class: "progress-text" },
            "第 " + vue.toDisplayString($data.currentIndex + 1) + "/" + vue.toDisplayString($data.questions.length) + " 题",
            1
            /* TEXT */
          ),
          vue.createElementVNode("progress", {
            percent: $options.progress,
            activeColor: "var(--theme-color)",
            backgroundColor: "#EBEDF0",
            "stroke-width": "12",
            class: "progress-bar"
          }, null, 8, ["percent"])
        ]),
        vue.createElementVNode("view", { class: "question-card" }, [
          vue.createElementVNode("view", { class: "card-header" }, [
            vue.createElementVNode(
              "view",
              {
                class: "question-type-tag",
                style: vue.normalizeStyle({ background: $options.typeTag.color })
              },
              [
                vue.createElementVNode("image", {
                  src: $options.typeTag.icon,
                  class: "type-icon"
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString($options.typeTag.text),
                  1
                  /* TEXT */
                )
              ],
              4
              /* STYLE */
            ),
            vue.createElementVNode(
              "view",
              { class: "question-number" },
              "Q" + vue.toDisplayString($data.currentIndex + 1),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("scroll-view", {
            "scroll-y": "",
            class: "question-content"
          }, [
            vue.createElementVNode(
              "text",
              { class: "question-text" },
              vue.toDisplayString($options.currentQuestion.text),
              1
              /* TEXT */
            ),
            vue.createElementVNode("text", { class: "question-tip" }, "请根据最近两周的情况选择")
          ])
        ]),
        vue.createElementVNode("view", { class: "options-container" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.currentQuestion.options, (option, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index2,
                class: vue.normalizeClass(["option-card", { selected: $data.selectedOption === index2 }]),
                onClick: ($event) => $options.selectOption(index2),
                style: vue.normalizeStyle($options.getOptionStyle(index2))
              }, [
                vue.createElementVNode("view", { class: "option-selector" }, [
                  vue.createElementVNode("view", { class: "selector-outer" }, [
                    $data.selectedOption === index2 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "selector-inner"
                    })) : vue.createCommentVNode("v-if", true)
                  ])
                ]),
                vue.createElementVNode("view", { class: "option-content" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "option-text" },
                    vue.toDisplayString(option.text),
                    1
                    /* TEXT */
                  ),
                  option.desc ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      class: "option-desc"
                    },
                    vue.toDisplayString(option.desc),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true)
                ]),
                $data.selectedOption === index2 ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  src: _imports_0,
                  class: "option-check"
                })) : vue.createCommentVNode("v-if", true)
              ], 14, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", { class: "navigation-buttons" }, [
          vue.createElementVNode(
            "button",
            {
              class: vue.normalizeClass(["nav-button prev-button", { disabled: $data.currentIndex === 0 }]),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.prevQuestion && $options.prevQuestion(...args))
            },
            " 上一题 ",
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "button",
            {
              class: vue.normalizeClass(["nav-button next-button", { disabled: $data.selectedOption === null }]),
              onClick: _cache[1] || (_cache[1] = (...args) => $options.nextQuestion && $options.nextQuestion(...args))
            },
            vue.toDisplayString($options.isLastQuestion ? "查看结果" : "下一题"),
            3
            /* TEXT, CLASS */
          )
        ]),
        $data.showEncouragement ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "encouragement-feedback"
        }, [
          vue.createElementVNode("image", {
            src: $data.encouragement.emoji,
            class: "encouragement-emoji"
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "text",
            { class: "encouragement-text" },
            vue.toDisplayString($data.encouragement.text),
            1
            /* TEXT */
          )
        ])) : vue.createCommentVNode("v-if", true),
        $data.showResult ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "result-modal",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.closeResult && $options.closeResult(...args))
        }, [
          vue.createElementVNode("view", {
            class: "result-content",
            onClick: _cache[5] || (_cache[5] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "result-header" }, [
              vue.createElementVNode("text", { class: "result-title" }, "测试结果"),
              vue.createElementVNode("view", {
                class: "close-btn",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.closeResult && $options.closeResult(...args))
              }, "×")
            ]),
            vue.createElementVNode("view", { class: "result-body" }, [
              vue.createElementVNode("view", { class: "score-section" }, [
                vue.createElementVNode("text", { class: "score-label" }, "总分"),
                vue.createElementVNode(
                  "text",
                  { class: "score-value" },
                  vue.toDisplayString($data.resultData.totalScore) + "分",
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "level-section" }, [
                vue.createElementVNode("text", { class: "level-label" }, "抑郁程度"),
                vue.createElementVNode(
                  "text",
                  {
                    class: vue.normalizeClass(["level-value", $options.getLevelClass($data.resultData.depressionLevel)])
                  },
                  vue.toDisplayString($data.resultData.depressionLevel),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              vue.createElementVNode("view", { class: "description-section" }, [
                vue.createElementVNode(
                  "text",
                  { class: "description-text" },
                  vue.toDisplayString($data.resultData.levelDescription),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "suggestion-section" }, [
                vue.createElementVNode("text", { class: "suggestion-label" }, "建议"),
                vue.createElementVNode(
                  "text",
                  { class: "suggestion-text" },
                  vue.toDisplayString($data.resultData.suggestion),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "result-footer" }, [
              vue.createElementVNode("button", {
                class: "result-btn primary",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.restartTest && $options.restartTest(...args))
              }, "重新测试"),
              vue.createElementVNode("button", {
                class: "result-btn secondary",
                onClick: _cache[4] || (_cache[4] = (...args) => $options.closeResult && $options.closeResult(...args))
              }, "关闭")
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const PagesPhq7TestDoTest = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/phq7-test/do-test.vue"]]);
  const _sfc_main$f = {
    data() {
      return {
        themeColor: "#5d9bff",
        loading: true,
        totalCount: 0,
        currentFilter: "all",
        results: [],
        showDetail: false,
        selectedItem: {}
      };
    },
    computed: {
      filteredResults() {
        if (this.currentFilter === "all") {
          return this.results;
        }
        return this.results.filter((item) => {
          const testName = item.questionnaireName.toLowerCase();
          if (this.currentFilter === "mood") {
            return testName.includes("抑郁") || testName.includes("焦虑") || testName.includes("phq") || testName.includes("gad");
          } else if (this.currentFilter === "stress") {
            return testName.includes("压力") || testName.includes("cpss") || testName.includes("pss");
          } else if (this.currentFilter === "social") {
            return testName.includes("孤独") || testName.includes("信任") || testName.includes("ucla") || testName.includes("its");
          } else if (this.currentFilter === "sleep") {
            return testName.includes("睡眠") || testName.includes("psqi") || testName.includes("sds");
          }
          return true;
        });
      }
    },
    methods: {
      async loadHistoryData() {
        try {
          this.loading = true;
          const result = await this.$api.questionnaire.getUserResults(uni.getStorageSync("userId") || 1);
          if (result.success) {
            this.results = result.data || [];
            this.totalCount = result.data ? result.data.length : 0;
          } else {
          }
        } catch (error2) {
          formatAppLog("error", "at pages/phq7-test/history.vue:187", "加载历史记录失败:", error2);
          uni.showToast({
            title: "网络错误，请检查网络连接",
            icon: "error"
          });
        } finally {
          this.loading = false;
        }
      },
      filterByType(type) {
        this.currentFilter = type;
      },
      getTestEmoji(testName) {
        const name = testName.toLowerCase();
        if (name.includes("抑郁") || name.includes("phq"))
          return "😔";
        if (name.includes("焦虑") || name.includes("gad"))
          return "😰";
        if (name.includes("压力") || name.includes("cpss"))
          return "😫";
        if (name.includes("孤独") || name.includes("ucla"))
          return "😔";
        if (name.includes("信任") || name.includes("its"))
          return "🤝";
        if (name.includes("睡眠") || name.includes("psqi"))
          return "😴";
        if (name.includes("睡眠障碍") || name.includes("sds"))
          return "😵";
        return "📊";
      },
      getTestDisplayName(testName) {
        const nameMap = {
          "PHQ-9抑郁筛查量表": "抑郁症状筛查",
          "GAD-7广泛性焦虑障碍量表": "焦虑症状筛查",
          "CPSS感知压力量表": "感知压力量表",
          "UCLA孤独感量表": "UCLA孤独感量表",
          "ITS人际信任量表": "人际信任量表",
          "PSQI匹兹堡睡眠质量指数": "匹兹堡睡眠质量指数",
          "SDS睡眠障碍量表": "睡眠障碍量表"
        };
        return nameMap[testName] || testName;
      },
      formatDate(dateStr) {
        const date2 = new Date(dateStr);
        const now2 = /* @__PURE__ */ new Date();
        const diff2 = now2 - date2;
        const days2 = Math.floor(diff2 / (1e3 * 60 * 60 * 24));
        if (days2 === 0) {
          return "今天";
        } else if (days2 === 1) {
          return "昨天";
        } else if (days2 < 7) {
          return `${days2}天前`;
        } else {
          return date2.toLocaleDateString("zh-CN", {
            year: "numeric",
            month: "short",
            day: "numeric"
          });
        }
      },
      getScoreClass(level) {
        if (!level)
          return "score-normal";
        if (level.includes("良好") || level.includes("正常") || level.includes("无"))
          return "score-good";
        if (level.includes("轻度") || level.includes("一般") || level.includes("中等"))
          return "score-mild";
        if (level.includes("中度") || level.includes("较差") || level.includes("较高"))
          return "score-moderate";
        if (level.includes("重度") || level.includes("很差") || level.includes("高"))
          return "score-severe";
        return "score-normal";
      },
      getScoreText(level) {
        if (!level)
          return "正常";
        if (level.includes("良好") || level.includes("正常") || level.includes("无"))
          return "良好";
        if (level.includes("轻度") || level.includes("一般") || level.includes("中等"))
          return "一般";
        if (level.includes("中度") || level.includes("较差") || level.includes("较高"))
          return "较差";
        if (level.includes("重度") || level.includes("很差") || level.includes("高"))
          return "严重";
        return "正常";
      },
      getResultTagClass(level) {
        return this.getScoreClass(level);
      },
      viewDetail(item) {
        this.selectedItem = item;
        this.showDetail = true;
      },
      closeDetail() {
        this.showDetail = false;
        this.selectedItem = {};
      },
      goBack() {
        uni.navigateBack();
      }
    },
    onShow() {
      this.loadHistoryData();
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["history-container", _ctx.containerClasses]),
        style: vue.normalizeStyle({ "--theme-color": $data.themeColor })
      },
      [
        vue.createElementVNode("view", { class: "filter-section" }, [
          vue.createElementVNode("scroll-view", {
            class: "filter-scroll",
            "scroll-x": ""
          }, [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["filter-item", { active: $data.currentFilter === "all" }]),
                onClick: _cache[0] || (_cache[0] = ($event) => $options.filterByType("all"))
              },
              [
                vue.createElementVNode("text", null, "全部")
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["filter-item", { active: $data.currentFilter === "mood" }]),
                onClick: _cache[1] || (_cache[1] = ($event) => $options.filterByType("mood"))
              },
              [
                vue.createElementVNode("text", null, "😊 情绪")
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["filter-item", { active: $data.currentFilter === "stress" }]),
                onClick: _cache[2] || (_cache[2] = ($event) => $options.filterByType("stress"))
              },
              [
                vue.createElementVNode("text", null, "😫 压力")
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["filter-item", { active: $data.currentFilter === "social" }]),
                onClick: _cache[3] || (_cache[3] = ($event) => $options.filterByType("social"))
              },
              [
                vue.createElementVNode("text", null, "👥 人际")
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["filter-item", { active: $data.currentFilter === "sleep" }]),
                onClick: _cache[4] || (_cache[4] = ($event) => $options.filterByType("sleep"))
              },
              [
                vue.createElementVNode("text", null, "😴 睡眠")
              ],
              2
              /* CLASS */
            )
          ])
        ]),
        !$data.loading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "history-list"
        }, [
          $options.filteredResults.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "empty-state"
          }, [
            vue.createElementVNode("text", { class: "empty-emoji" }, "📊"),
            vue.createElementVNode("text", { class: "empty-text" }, "暂无测评记录"),
            vue.createElementVNode("text", { class: "empty-desc" }, "开始您的第一次心理测评吧")
          ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($options.filteredResults, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: item.id,
                  class: "history-card",
                  onClick: ($event) => $options.viewDetail(item)
                }, [
                  vue.createElementVNode("view", { class: "card-header" }, [
                    vue.createElementVNode("view", { class: "test-info" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "test-emoji" },
                        vue.toDisplayString($options.getTestEmoji(item.questionnaireName)),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { class: "test-details" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "test-name" },
                          vue.toDisplayString($options.getTestDisplayName(item.questionnaireName)),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "text",
                          { class: "test-date" },
                          vue.toDisplayString($options.formatDate(item.createTime)),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(["score-badge", $options.getScoreClass(item.depressionLevel)])
                      },
                      [
                        vue.createElementVNode(
                          "text",
                          { class: "score-text" },
                          vue.toDisplayString($options.getScoreText(item.depressionLevel)),
                          1
                          /* TEXT */
                        )
                      ],
                      2
                      /* CLASS */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "card-content" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "result-desc" },
                      vue.toDisplayString(item.levelDescription),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "card-footer" }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(["result-tag", $options.getResultTagClass(item.depressionLevel)])
                      },
                      [
                        vue.createElementVNode(
                          "text",
                          null,
                          vue.toDisplayString(item.depressionLevel),
                          1
                          /* TEXT */
                        )
                      ],
                      2
                      /* CLASS */
                    ),
                    vue.createElementVNode("view", { class: "view-detail" }, [
                      vue.createElementVNode("text", { class: "detail-text" }, "查看详情"),
                      vue.createElementVNode("text", { class: "arrow" }, "➡️")
                    ])
                  ])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]))
        ])) : vue.createCommentVNode("v-if", true),
        $data.loading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "loading-container"
        }, [
          vue.createElementVNode("view", { class: "loading-spinner" }),
          vue.createElementVNode("text", { class: "loading-text" }, "加载中...")
        ])) : vue.createCommentVNode("v-if", true),
        $data.showDetail ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "detail-modal",
          onClick: _cache[8] || (_cache[8] = (...args) => $options.closeDetail && $options.closeDetail(...args))
        }, [
          vue.createElementVNode("view", {
            class: "detail-content",
            onClick: _cache[7] || (_cache[7] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "detail-header" }, [
              vue.createElementVNode(
                "text",
                { class: "detail-title" },
                vue.toDisplayString($data.selectedItem.questionnaireName),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", {
                class: "close-btn",
                onClick: _cache[5] || (_cache[5] = (...args) => $options.closeDetail && $options.closeDetail(...args))
              }, "×")
            ]),
            vue.createElementVNode("view", { class: "detail-body" }, [
              vue.createElementVNode("view", { class: "detail-section" }, [
                vue.createElementVNode("text", { class: "section-label" }, "测评时间"),
                vue.createElementVNode(
                  "text",
                  { class: "section-value" },
                  vue.toDisplayString($options.formatDate($data.selectedItem.createTime)),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "detail-section" }, [
                vue.createElementVNode("text", { class: "section-label" }, "测评结果"),
                vue.createElementVNode(
                  "text",
                  {
                    class: vue.normalizeClass(["section-value result-value", $options.getScoreClass($data.selectedItem.depressionLevel)])
                  },
                  vue.toDisplayString($data.selectedItem.depressionLevel),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              vue.createElementVNode("view", { class: "detail-section" }, [
                vue.createElementVNode("text", { class: "section-label" }, "结果描述"),
                vue.createElementVNode(
                  "text",
                  { class: "section-value description" },
                  vue.toDisplayString($data.selectedItem.levelDescription),
                  1
                  /* TEXT */
                )
              ]),
              $data.selectedItem.suggestion ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "detail-section"
              }, [
                vue.createElementVNode("text", { class: "section-label" }, "专业建议"),
                vue.createElementVNode(
                  "text",
                  { class: "section-value suggestion" },
                  vue.toDisplayString($data.selectedItem.suggestion),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("view", { class: "detail-footer" }, [
              vue.createElementVNode("button", {
                class: "detail-btn",
                onClick: _cache[6] || (_cache[6] = (...args) => $options.closeDetail && $options.closeDetail(...args))
              }, "关闭")
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const PagesPhq7TestHistory = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/phq7-test/history.vue"]]);
  const _sfc_main$e = {
    data() {
      return {
        themeColor: "#FFA500",
        // 主色调 - 橙色代表焦虑评估
        answers: [],
        // 初始化空数组
        questions: [
          {
            id: 1,
            type: "anxiety",
            text: "感觉紧张、焦虑或烦躁",
            options: [
              { text: "完全不会", desc: "0分", score: 0 },
              { text: "几天", desc: "1分", score: 1 },
              { text: "一半以上的日子", desc: "2分", score: 2 },
              { text: "几乎每天", desc: "3分", score: 3 }
            ]
          },
          {
            id: 2,
            type: "anxiety",
            text: "不能停止或控制担忧",
            options: [
              { text: "完全不会", desc: "0分", score: 0 },
              { text: "几天", desc: "1分", score: 1 },
              { text: "一半以上的日子", desc: "2分", score: 2 },
              { text: "几乎每天", desc: "3分", score: 3 }
            ]
          },
          {
            id: 3,
            type: "anxiety",
            text: "对各种各样的事情担忧过多",
            options: [
              { text: "完全不会", desc: "0分", score: 0 },
              { text: "几天", desc: "1分", score: 1 },
              { text: "一半以上的日子", desc: "2分", score: 2 },
              { text: "几乎每天", desc: "3分", score: 3 }
            ]
          },
          {
            id: 4,
            type: "anxiety",
            text: "很难放松下来",
            options: [
              { text: "完全不会", desc: "0分", score: 0 },
              { text: "几天", desc: "1分", score: 1 },
              { text: "一半以上的日子", desc: "2分", score: 2 },
              { text: "几乎每天", desc: "3分", score: 3 }
            ]
          },
          {
            id: 5,
            type: "anxiety",
            text: "由于不安而无法静坐",
            options: [
              { text: "完全不会", desc: "0分", score: 0 },
              { text: "几天", desc: "1分", score: 1 },
              { text: "一半以上的日子", desc: "2分", score: 2 },
              { text: "几乎每天", desc: "3分", score: 3 }
            ]
          },
          {
            id: 6,
            type: "anxiety",
            text: "变得容易烦恼或急躁",
            options: [
              { text: "完全不会", desc: "0分", score: 0 },
              { text: "几天", desc: "1分", score: 1 },
              { text: "一半以上的日子", desc: "2分", score: 2 },
              { text: "几乎每天", desc: "3分", score: 3 }
            ]
          },
          {
            id: 7,
            type: "anxiety",
            text: "害怕将有可怕的事发生",
            options: [
              { text: "完全不会", desc: "0分", score: 0 },
              { text: "几天", desc: "1分", score: 1 },
              { text: "一半以上的日子", desc: "2分", score: 2 },
              { text: "几乎每天", desc: "3分", score: 3 }
            ]
          }
        ],
        currentIndex: 0,
        selectedOption: null,
        showEncouragement: false,
        encouragement: {
          emoji: "",
          text: ""
        },
        encouragements: [
          { emoji: "/static/emojis/star.png", text: "你的回答很有价值！" },
          { emoji: "/static/emojis/heart.png", text: "感谢你的真诚回答" },
          { emoji: "/static/emojis/lightbulb.png", text: "自我觉察是成长的第一步" }
        ],
        showResult: false,
        resultData: {
          totalScore: 0,
          anxietyLevel: "",
          levelDescription: "",
          suggestion: ""
        }
      };
    },
    computed: {
      currentQuestion() {
        return this.questions[this.currentIndex];
      },
      progress() {
        return Math.round(this.currentIndex / this.questions.length * 100);
      },
      isLastQuestion() {
        return this.currentIndex === this.questions.length - 1;
      },
      typeTag() {
        const types = {
          mood: { text: "情绪评估", color: "#FF6B81", icon: "/static/icons/mood.png" },
          anxiety: { text: "焦虑评估", color: "#FFA500", icon: "/static/icons/anxiety.png" }
          // 更多类型...
        };
        return types[this.currentQuestion.type] || { text: "心理测评", color: this.themeColor, icon: "/static/icons/psychology.png" };
      }
    },
    methods: {
      // 返回上一页
      goBack() {
        uni.navigateBack({
          delta: 1
        });
      },
      selectOption(index2) {
        this.selectedOption = index2;
        this.answers[this.currentIndex] = {
          questionId: this.currentQuestion.id,
          score: this.currentQuestion.options[index2].score
        };
        formatAppLog("log", "at pages/phq7-test/gad7.vue:270", "当前答案:", this.answers);
        this.showRandomEncouragement();
        uni.vibrateShort();
      },
      showRandomEncouragement() {
        if (Math.random() > 0.7) {
          this.encouragement = this.encouragements[Math.floor(Math.random() * this.encouragements.length)];
          this.showEncouragement = true;
          setTimeout(() => {
            this.showEncouragement = false;
          }, 1500);
        }
      },
      nextQuestion() {
        if (this.selectedOption === null)
          return;
        if (this.isLastQuestion) {
          this.submitTest();
          return;
        }
        this.currentIndex++;
        const nextAnswer = this.answers[this.currentIndex];
        if (nextAnswer) {
          this.selectedOption = this.currentQuestion.options.findIndex((option) => option.score === nextAnswer.score);
        } else {
          this.selectedOption = null;
        }
        this.scrollToTop();
      },
      prevQuestion() {
        if (this.currentIndex <= 0)
          return;
        this.currentIndex--;
        const prevAnswer = this.answers[this.currentIndex];
        if (prevAnswer) {
          this.selectedOption = this.currentQuestion.options.findIndex((option) => option.score === prevAnswer.score);
        } else {
          this.selectedOption = null;
        }
        this.scrollToTop();
      },
      scrollToTop() {
        uni.pageScrollTo({
          scrollTop: 0,
          duration: 300
        });
      },
      submitTest() {
        const totalScore = this.answers.reduce((sum, a) => sum + (a ? a.score : 0), 0);
        let anxietyLevel = "";
        let levelDescription = "";
        let suggestion = "";
        if (totalScore >= 0 && totalScore <= 4) {
          anxietyLevel = "无明显焦虑症状";
          levelDescription = "您的心理健康状况良好，没有明显的焦虑症状，属于正常范围。";
          suggestion = "继续保持良好的生活习惯，定期关注自己的心理健康。";
        } else if (totalScore >= 5 && totalScore <= 9) {
          anxietyLevel = "轻度焦虑";
          levelDescription = "您可能有一些轻微的焦虑症状，可能对日常生活有一定影响，但通常可以应对。";
          suggestion = "建议多参与放松活动，保持规律作息，学习一些放松技巧，如症状持续可考虑寻求专业帮助。";
        } else if (totalScore >= 10 && totalScore <= 14) {
          anxietyLevel = "中度焦虑";
          levelDescription = "您有明显的焦虑症状，对日常生活和社交活动有明显影响，可能需要进一步关注和干预。";
          suggestion = "建议尽快咨询心理医生或精神科医生，制定合适的治疗方案，学习焦虑管理技巧。";
        } else if (totalScore >= 15 && totalScore <= 21) {
          anxietyLevel = "重度焦虑";
          levelDescription = "您的焦虑症状非常严重，严重影响日常生活、工作和社交功能，建议寻求专业帮助。";
          suggestion = "请立即联系专业心理医生或精神科医生，制定综合治疗方案，必要时可考虑药物治疗。";
        }
        this.resultData = {
          totalScore,
          anxietyLevel,
          levelDescription,
          suggestion
        };
        this.showResult = true;
        this.saveTestResultToDatabase();
      },
      getOptionStyle(index2) {
        if (this.selectedOption === index2) {
          return {
            borderColor: this.typeTag.color,
            backgroundColor: this.hexToRgba(this.typeTag.color, 0.08)
          };
        }
        return {};
      },
      hexToRgba(hex, opacity) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      },
      closeResult() {
        this.showResult = false;
      },
      restartTest() {
        this.showResult = false;
        this.currentIndex = 0;
        this.selectedOption = null;
        this.answers = [];
        this.scrollToTop();
      },
      getLevelClass(level) {
        if (level.includes("无明显焦虑"))
          return "level-normal";
        if (level.includes("轻度焦虑"))
          return "level-mild";
        if (level.includes("中度焦虑"))
          return "level-moderate";
        if (level.includes("重度焦虑"))
          return "level-critical";
        return "level-normal";
      },
      // 保存测试结果到数据库
      async saveTestResultToDatabase() {
        const requestData = {
          questionnaireName: "GAD-7广泛性焦虑障碍量表",
          depressionLevel: this.resultData.anxietyLevel,
          levelDescription: this.resultData.levelDescription,
          suggestion: this.resultData.suggestion
        };
        formatAppLog("log", "at pages/phq7-test/gad7.vue:403", "准备保存测试结果:", requestData);
        try {
          const result = await this.$api.questionnaire.saveResult(requestData);
          if (result.success) {
          } else {
          }
        } catch (error2) {
          formatAppLog("error", "at pages/phq7-test/gad7.vue:425", "保存测试结果失败:", error2);
          uni.showToast({
            title: "网络错误，请检查网络连接",
            icon: "error",
            duration: 2e3
          });
        }
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["test-page", _ctx.containerClasses]),
        style: vue.normalizeStyle({ "--theme-color": $data.themeColor })
      },
      [
        vue.createElementVNode("view", { class: "progress-container" }, [
          vue.createElementVNode(
            "text",
            { class: "progress-text" },
            "第 " + vue.toDisplayString($data.currentIndex + 1) + "/" + vue.toDisplayString($data.questions.length) + " 题",
            1
            /* TEXT */
          ),
          vue.createElementVNode("progress", {
            percent: $options.progress,
            activeColor: "var(--theme-color)",
            backgroundColor: "#EBEDF0",
            "stroke-width": "12",
            class: "progress-bar"
          }, null, 8, ["percent"])
        ]),
        vue.createElementVNode("view", { class: "question-card" }, [
          vue.createElementVNode("view", { class: "card-header" }, [
            vue.createElementVNode(
              "view",
              {
                class: "question-type-tag",
                style: vue.normalizeStyle({ background: $options.typeTag.color })
              },
              [
                vue.createElementVNode("image", {
                  src: $options.typeTag.icon,
                  class: "type-icon"
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString($options.typeTag.text),
                  1
                  /* TEXT */
                )
              ],
              4
              /* STYLE */
            ),
            vue.createElementVNode(
              "view",
              { class: "question-number" },
              "Q" + vue.toDisplayString($data.currentIndex + 1),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("scroll-view", {
            "scroll-y": "",
            class: "question-content"
          }, [
            vue.createElementVNode(
              "text",
              { class: "question-text" },
              vue.toDisplayString($options.currentQuestion.text),
              1
              /* TEXT */
            ),
            vue.createElementVNode("text", { class: "question-tip" }, "请根据最近两周的情况选择")
          ])
        ]),
        vue.createElementVNode("view", { class: "options-container" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.currentQuestion.options, (option, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index2,
                class: vue.normalizeClass(["option-card", { selected: $data.selectedOption === index2 }]),
                onClick: ($event) => $options.selectOption(index2),
                style: vue.normalizeStyle($options.getOptionStyle(index2))
              }, [
                vue.createElementVNode("view", { class: "option-selector" }, [
                  vue.createElementVNode("view", { class: "selector-outer" }, [
                    $data.selectedOption === index2 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "selector-inner"
                    })) : vue.createCommentVNode("v-if", true)
                  ])
                ]),
                vue.createElementVNode("view", { class: "option-content" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "option-text" },
                    vue.toDisplayString(option.text),
                    1
                    /* TEXT */
                  ),
                  option.desc ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      class: "option-desc"
                    },
                    vue.toDisplayString(option.desc),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true)
                ]),
                $data.selectedOption === index2 ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  src: _imports_0,
                  class: "option-check"
                })) : vue.createCommentVNode("v-if", true)
              ], 14, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", { class: "navigation-buttons" }, [
          vue.createElementVNode(
            "button",
            {
              class: vue.normalizeClass(["nav-button prev-button", { disabled: $data.currentIndex === 0 }]),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.prevQuestion && $options.prevQuestion(...args))
            },
            " 上一题 ",
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "button",
            {
              class: vue.normalizeClass(["nav-button next-button", { disabled: $data.selectedOption === null }]),
              onClick: _cache[1] || (_cache[1] = (...args) => $options.nextQuestion && $options.nextQuestion(...args))
            },
            vue.toDisplayString($options.isLastQuestion ? "查看结果" : "下一题"),
            3
            /* TEXT, CLASS */
          )
        ]),
        $data.showEncouragement ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "encouragement-feedback"
        }, [
          vue.createElementVNode("image", {
            src: $data.encouragement.emoji,
            class: "encouragement-emoji"
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "text",
            { class: "encouragement-text" },
            vue.toDisplayString($data.encouragement.text),
            1
            /* TEXT */
          )
        ])) : vue.createCommentVNode("v-if", true),
        $data.showResult ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "result-modal",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.closeResult && $options.closeResult(...args))
        }, [
          vue.createElementVNode("view", {
            class: "result-content",
            onClick: _cache[5] || (_cache[5] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "result-header" }, [
              vue.createElementVNode("text", { class: "result-title" }, "测试结果"),
              vue.createElementVNode("view", {
                class: "close-btn",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.closeResult && $options.closeResult(...args))
              }, "×")
            ]),
            vue.createElementVNode("view", { class: "result-body" }, [
              vue.createElementVNode("view", { class: "score-section" }, [
                vue.createElementVNode("text", { class: "score-label" }, "总分"),
                vue.createElementVNode(
                  "text",
                  { class: "score-value" },
                  vue.toDisplayString($data.resultData.totalScore) + "分",
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "level-section" }, [
                vue.createElementVNode("text", { class: "level-label" }, "焦虑程度"),
                vue.createElementVNode(
                  "text",
                  {
                    class: vue.normalizeClass(["level-value", $options.getLevelClass($data.resultData.anxietyLevel)])
                  },
                  vue.toDisplayString($data.resultData.anxietyLevel),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              vue.createElementVNode("view", { class: "description-section" }, [
                vue.createElementVNode(
                  "text",
                  { class: "description-text" },
                  vue.toDisplayString($data.resultData.levelDescription),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "suggestion-section" }, [
                vue.createElementVNode("text", { class: "suggestion-label" }, "建议"),
                vue.createElementVNode(
                  "text",
                  { class: "suggestion-text" },
                  vue.toDisplayString($data.resultData.suggestion),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "result-footer" }, [
              vue.createElementVNode("button", {
                class: "result-btn primary",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.restartTest && $options.restartTest(...args))
              }, "重新测试"),
              vue.createElementVNode("button", {
                class: "result-btn secondary",
                onClick: _cache[4] || (_cache[4] = (...args) => $options.closeResult && $options.closeResult(...args))
              }, "关闭")
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const PagesPhq7TestGad7 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/phq7-test/gad7.vue"]]);
  const _sfc_main$d = {
    data() {
      return {
        themeColor: "#5d9bff",
        // 主色调
        answers: [],
        // 初始化空数组
        questions: [
          {
            id: 1,
            type: "stress",
            text: "一些无法预期的事情发生而感到心烦意乱",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 },
              { text: "总是", desc: "4分", score: 4 }
            ]
          },
          {
            id: 2,
            type: "stress",
            text: "感觉无法控制自己生活中重要的事情",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 },
              { text: "总是", desc: "4分", score: 4 }
            ]
          },
          {
            id: 3,
            type: "stress",
            text: "感到紧张不安和压力",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 },
              { text: "总是", desc: "4分", score: 4 }
            ]
          },
          {
            id: 4,
            type: "stress",
            text: "成功地处理恼人的生活麻烦",
            options: [
              { text: "从不", desc: "4分", score: 4 },
              { text: "很少", desc: "3分", score: 3 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "1分", score: 1 },
              { text: "总是", desc: "0分", score: 0 }
            ]
          },
          {
            id: 5,
            type: "stress",
            text: "感到自己能有效地处理生活中所发生的重要改变",
            options: [
              { text: "从不", desc: "4分", score: 4 },
              { text: "很少", desc: "3分", score: 3 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "1分", score: 1 },
              { text: "总是", desc: "0分", score: 0 }
            ]
          },
          {
            id: 6,
            type: "stress",
            text: "对于有能力处理自己私人的问题感到很有信心",
            options: [
              { text: "从不", desc: "4分", score: 4 },
              { text: "很少", desc: "3分", score: 3 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "1分", score: 1 },
              { text: "总是", desc: "0分", score: 0 }
            ]
          },
          {
            id: 7,
            type: "stress",
            text: "感到事情顺心如意",
            options: [
              { text: "从不", desc: "4分", score: 4 },
              { text: "很少", desc: "3分", score: 3 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "1分", score: 1 },
              { text: "总是", desc: "0分", score: 0 }
            ]
          },
          {
            id: 8,
            type: "stress",
            text: "发现自己无法处理所有自己必须做的事情",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 },
              { text: "总是", desc: "4分", score: 4 }
            ]
          },
          {
            id: 9,
            type: "stress",
            text: "有办法控制生活中恼人的事情",
            options: [
              { text: "从不", desc: "4分", score: 4 },
              { text: "很少", desc: "3分", score: 3 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "1分", score: 1 },
              { text: "总是", desc: "0分", score: 0 }
            ]
          },
          {
            id: 10,
            type: "stress",
            text: "常觉得自己是驾驭事情的主人",
            options: [
              { text: "从不", desc: "4分", score: 4 },
              { text: "很少", desc: "3分", score: 3 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "1分", score: 1 },
              { text: "总是", desc: "0分", score: 0 }
            ]
          },
          {
            id: 11,
            type: "stress",
            text: "常生气，因为很多事情的发生是超出自己所能控制的",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 },
              { text: "总是", desc: "4分", score: 4 }
            ]
          },
          {
            id: 12,
            type: "stress",
            text: "经常想到有些事情是自己必须完成的",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 },
              { text: "总是", desc: "4分", score: 4 }
            ]
          },
          {
            id: 13,
            type: "stress",
            text: "常能掌握时间的安排方式",
            options: [
              { text: "从不", desc: "4分", score: 4 },
              { text: "很少", desc: "3分", score: 3 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "1分", score: 1 },
              { text: "总是", desc: "0分", score: 0 }
            ]
          },
          {
            id: 14,
            type: "stress",
            text: "常感到困难的事情堆积如山，而自己无法克服它们",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 },
              { text: "总是", desc: "4分", score: 4 }
            ]
          }
        ],
        currentIndex: 0,
        selectedOption: null,
        showEncouragement: false,
        encouragement: {
          emoji: "",
          text: ""
        },
        encouragements: [
          { emoji: "/static/emojis/star.png", text: "你的回答很有价值！" },
          { emoji: "/static/emojis/heart.png", text: "感谢你的真诚回答" },
          { emoji: "/static/emojis/lightbulb.png", text: "自我觉察是成长的第一步" }
        ],
        showResult: false,
        resultData: {
          totalScore: 0,
          stressLevel: "",
          levelDescription: "",
          suggestion: ""
        }
      };
    },
    computed: {
      currentQuestion() {
        return this.questions[this.currentIndex];
      },
      progress() {
        return Math.round(this.currentIndex / this.questions.length * 100);
      },
      isLastQuestion() {
        return this.currentIndex === this.questions.length - 1;
      },
      typeTag() {
        const types = {
          stress: { text: "压力评估", color: "#FF6B81", icon: "/static/icons/stress.png" },
          mood: { text: "情绪评估", color: "#FFA500", icon: "/static/icons/mood.png" },
          anxiety: { text: "焦虑评估", color: "#FFA500", icon: "/static/icons/anxiety.png" }
          // 更多类型...
        };
        return types[this.currentQuestion.type] || { text: "心理测评", color: this.themeColor, icon: "/static/icons/psychology.png" };
      }
    },
    methods: {
      // 返回上一页
      goBack() {
        uni.navigateBack({
          delta: 1
        });
      },
      selectOption(index2) {
        this.selectedOption = index2;
        this.answers[this.currentIndex] = {
          questionId: this.currentQuestion.id,
          score: this.currentQuestion.options[index2].score
        };
        formatAppLog("log", "at pages/phq7-test/cpss.vue:355", "当前答案:", this.answers);
        this.showRandomEncouragement();
        uni.vibrateShort();
      },
      showRandomEncouragement() {
        if (Math.random() > 0.7) {
          this.encouragement = this.encouragements[Math.floor(Math.random() * this.encouragements.length)];
          this.showEncouragement = true;
          setTimeout(() => {
            this.showEncouragement = false;
          }, 1500);
        }
      },
      nextQuestion() {
        if (this.selectedOption === null)
          return;
        if (this.isLastQuestion) {
          this.submitTest();
          return;
        }
        this.currentIndex++;
        const nextAnswer = this.answers[this.currentIndex];
        if (nextAnswer) {
          this.selectedOption = this.currentQuestion.options.findIndex((option) => option.score === nextAnswer.score);
        } else {
          this.selectedOption = null;
        }
        this.scrollToTop();
      },
      prevQuestion() {
        if (this.currentIndex <= 0)
          return;
        this.currentIndex--;
        const prevAnswer = this.answers[this.currentIndex];
        if (prevAnswer) {
          this.selectedOption = this.currentQuestion.options.findIndex((option) => option.score === prevAnswer.score);
        } else {
          this.selectedOption = null;
        }
        this.scrollToTop();
      },
      scrollToTop() {
        uni.pageScrollTo({
          scrollTop: 0,
          duration: 300
        });
      },
      submitTest() {
        const totalScore = this.answers.reduce((sum, a) => sum + (a ? a.score : 0), 0);
        let stressLevel = "";
        let levelDescription = "";
        let suggestion = "";
        if (totalScore >= 0 && totalScore <= 18) {
          stressLevel = "低压力水平";
          levelDescription = "您的压力感知水平较低，心理状态良好。";
          suggestion = "继续保持良好的生活习惯和积极的心态，定期进行自我关怀。";
        } else if (totalScore >= 19 && totalScore <= 28) {
          stressLevel = "中等压力水平";
          levelDescription = "您感受到中等程度的压力，需要适当关注自己的心理健康。";
          suggestion = "建议学习一些压力管理技巧，如深呼吸、冥想、运动等，必要时可寻求专业帮助。";
        } else if (totalScore >= 29 && totalScore <= 56) {
          stressLevel = "高压力水平";
          levelDescription = "您的压力感知水平较高，建议及时采取应对措施。";
          suggestion = "强烈建议寻求专业心理咨询师的帮助，学习有效的压力管理策略，必要时可考虑药物治疗。";
        }
        this.resultData = {
          totalScore,
          stressLevel,
          levelDescription,
          suggestion
        };
        this.showResult = true;
        this.saveTestResultToDatabase();
      },
      getOptionStyle(index2) {
        if (this.selectedOption === index2) {
          return {
            borderColor: this.typeTag.color,
            backgroundColor: this.hexToRgba(this.typeTag.color, 0.08)
          };
        }
        return {};
      },
      hexToRgba(hex, opacity) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      },
      closeResult() {
        this.showResult = false;
      },
      restartTest() {
        this.showResult = false;
        this.currentIndex = 0;
        this.selectedOption = null;
        this.answers = [];
        this.scrollToTop();
      },
      getLevelClass(level) {
        if (level.includes("低压力"))
          return "level-normal";
        if (level.includes("中等压力"))
          return "level-mild";
        if (level.includes("高压力"))
          return "level-severe";
        return "level-normal";
      },
      // 保存测试结果到数据库
      async saveTestResultToDatabase() {
        const requestData = {
          questionnaireName: "CPSS感知压力量表",
          depressionLevel: this.resultData.stressLevel,
          levelDescription: this.resultData.levelDescription,
          suggestion: this.resultData.suggestion
        };
        formatAppLog("log", "at pages/phq7-test/cpss.vue:483", "准备保存测试结果:", requestData);
        try {
          const result = await this.$api.questionnaire.saveResult(requestData);
          if (result.success) {
          } else {
          }
        } catch (error2) {
          formatAppLog("error", "at pages/phq7-test/cpss.vue:505", "保存测试结果失败:", error2);
          uni.showToast({
            title: "网络错误，请检查网络连接",
            icon: "error",
            duration: 2e3
          });
        }
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["test-page", _ctx.containerClasses]),
        style: vue.normalizeStyle({ "--theme-color": $data.themeColor })
      },
      [
        vue.createElementVNode("view", { class: "progress-container" }, [
          vue.createElementVNode(
            "text",
            { class: "progress-text" },
            "第 " + vue.toDisplayString($data.currentIndex + 1) + "/" + vue.toDisplayString($data.questions.length) + " 题",
            1
            /* TEXT */
          ),
          vue.createElementVNode("progress", {
            percent: $options.progress,
            activeColor: "var(--theme-color)",
            backgroundColor: "#EBEDF0",
            "stroke-width": "12",
            class: "progress-bar"
          }, null, 8, ["percent"])
        ]),
        vue.createElementVNode("view", { class: "question-card" }, [
          vue.createElementVNode("view", { class: "card-header" }, [
            vue.createElementVNode(
              "view",
              {
                class: "question-type-tag",
                style: vue.normalizeStyle({ background: $options.typeTag.color })
              },
              [
                vue.createElementVNode("image", {
                  src: $options.typeTag.icon,
                  class: "type-icon"
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString($options.typeTag.text),
                  1
                  /* TEXT */
                )
              ],
              4
              /* STYLE */
            ),
            vue.createElementVNode(
              "view",
              { class: "question-number" },
              "Q" + vue.toDisplayString($data.currentIndex + 1),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("scroll-view", {
            "scroll-y": "",
            class: "question-content"
          }, [
            vue.createElementVNode(
              "text",
              { class: "question-text" },
              vue.toDisplayString($options.currentQuestion.text),
              1
              /* TEXT */
            ),
            vue.createElementVNode("text", { class: "question-tip" }, "请根据过去一个月的情况选择")
          ])
        ]),
        vue.createElementVNode("view", { class: "options-container" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.currentQuestion.options, (option, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index2,
                class: vue.normalizeClass(["option-card", { selected: $data.selectedOption === index2 }]),
                onClick: ($event) => $options.selectOption(index2),
                style: vue.normalizeStyle($options.getOptionStyle(index2))
              }, [
                vue.createElementVNode("view", { class: "option-selector" }, [
                  vue.createElementVNode("view", { class: "selector-outer" }, [
                    $data.selectedOption === index2 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "selector-inner"
                    })) : vue.createCommentVNode("v-if", true)
                  ])
                ]),
                vue.createElementVNode("view", { class: "option-content" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "option-text" },
                    vue.toDisplayString(option.text),
                    1
                    /* TEXT */
                  ),
                  option.desc ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      class: "option-desc"
                    },
                    vue.toDisplayString(option.desc),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true)
                ]),
                $data.selectedOption === index2 ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  src: _imports_0,
                  class: "option-check"
                })) : vue.createCommentVNode("v-if", true)
              ], 14, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", { class: "navigation-buttons" }, [
          vue.createElementVNode(
            "button",
            {
              class: vue.normalizeClass(["nav-button prev-button", { disabled: $data.currentIndex === 0 }]),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.prevQuestion && $options.prevQuestion(...args))
            },
            " 上一题 ",
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "button",
            {
              class: vue.normalizeClass(["nav-button next-button", { disabled: $data.selectedOption === null }]),
              onClick: _cache[1] || (_cache[1] = (...args) => $options.nextQuestion && $options.nextQuestion(...args))
            },
            vue.toDisplayString($options.isLastQuestion ? "查看结果" : "下一题"),
            3
            /* TEXT, CLASS */
          )
        ]),
        $data.showEncouragement ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "encouragement-feedback"
        }, [
          vue.createElementVNode("image", {
            src: $data.encouragement.emoji,
            class: "encouragement-emoji"
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "text",
            { class: "encouragement-text" },
            vue.toDisplayString($data.encouragement.text),
            1
            /* TEXT */
          )
        ])) : vue.createCommentVNode("v-if", true),
        $data.showResult ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "result-modal",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.closeResult && $options.closeResult(...args))
        }, [
          vue.createElementVNode("view", {
            class: "result-content",
            onClick: _cache[5] || (_cache[5] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "result-header" }, [
              vue.createElementVNode("text", { class: "result-title" }, "测试结果"),
              vue.createElementVNode("view", {
                class: "close-btn",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.closeResult && $options.closeResult(...args))
              }, "×")
            ]),
            vue.createElementVNode("view", { class: "result-body" }, [
              vue.createElementVNode("view", { class: "score-section" }, [
                vue.createElementVNode("text", { class: "score-label" }, "总分"),
                vue.createElementVNode(
                  "text",
                  { class: "score-value" },
                  vue.toDisplayString($data.resultData.totalScore) + "分",
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "level-section" }, [
                vue.createElementVNode("text", { class: "level-label" }, "压力水平"),
                vue.createElementVNode(
                  "text",
                  {
                    class: vue.normalizeClass(["level-value", $options.getLevelClass($data.resultData.stressLevel)])
                  },
                  vue.toDisplayString($data.resultData.stressLevel),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              vue.createElementVNode("view", { class: "description-section" }, [
                vue.createElementVNode(
                  "text",
                  { class: "description-text" },
                  vue.toDisplayString($data.resultData.levelDescription),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "suggestion-section" }, [
                vue.createElementVNode("text", { class: "suggestion-label" }, "建议"),
                vue.createElementVNode(
                  "text",
                  { class: "suggestion-text" },
                  vue.toDisplayString($data.resultData.suggestion),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "result-footer" }, [
              vue.createElementVNode("button", {
                class: "result-btn primary",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.restartTest && $options.restartTest(...args))
              }, "重新测试"),
              vue.createElementVNode("button", {
                class: "result-btn secondary",
                onClick: _cache[4] || (_cache[4] = (...args) => $options.closeResult && $options.closeResult(...args))
              }, "关闭")
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const PagesPhq7TestCpss = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/phq7-test/cpss.vue"]]);
  const _sfc_main$c = {
    data() {
      return {
        themeColor: "#FF6B81",
        // 主色调 - 粉色代表孤独感评估
        answers: [],
        // 初始化空数组
        questions: [
          {
            id: 1,
            type: "social",
            text: "我感到孤独",
            options: [
              { text: "从不", desc: "1分", score: 1 },
              { text: "很少", desc: "2分", score: 2 },
              { text: "有时", desc: "3分", score: 3 },
              { text: "经常", desc: "4分", score: 4 }
            ]
          },
          {
            id: 2,
            type: "social",
            text: "我感到被忽视",
            options: [
              { text: "从不", desc: "1分", score: 1 },
              { text: "很少", desc: "2分", score: 2 },
              { text: "有时", desc: "3分", score: 3 },
              { text: "经常", desc: "4分", score: 4 }
            ]
          },
          {
            id: 3,
            type: "social",
            text: "我感到与他人有联系",
            options: [
              { text: "从不", desc: "4分", score: 4 },
              { text: "很少", desc: "3分", score: 3 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "1分", score: 1 }
            ]
          },
          {
            id: 4,
            type: "social",
            text: "我感到被理解",
            options: [
              { text: "从不", desc: "4分", score: 4 },
              { text: "很少", desc: "3分", score: 3 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "1分", score: 1 }
            ]
          },
          {
            id: 5,
            type: "social",
            text: "我感到被排斥",
            options: [
              { text: "从不", desc: "1分", score: 1 },
              { text: "很少", desc: "2分", score: 2 },
              { text: "有时", desc: "3分", score: 3 },
              { text: "经常", desc: "4分", score: 4 }
            ]
          },
          {
            id: 6,
            type: "social",
            text: "我感到与他人亲近",
            options: [
              { text: "从不", desc: "4分", score: 4 },
              { text: "很少", desc: "3分", score: 3 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "1分", score: 1 }
            ]
          },
          {
            id: 7,
            type: "social",
            text: "我感到被孤立",
            options: [
              { text: "从不", desc: "1分", score: 1 },
              { text: "很少", desc: "2分", score: 2 },
              { text: "有时", desc: "3分", score: 3 },
              { text: "经常", desc: "4分", score: 4 }
            ]
          },
          {
            id: 8,
            type: "social",
            text: "我感到被接受",
            options: [
              { text: "从不", desc: "4分", score: 4 },
              { text: "很少", desc: "3分", score: 3 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "1分", score: 1 }
            ]
          },
          {
            id: 9,
            type: "social",
            text: "我感到被冷落",
            options: [
              { text: "从不", desc: "1分", score: 1 },
              { text: "很少", desc: "2分", score: 2 },
              { text: "有时", desc: "3分", score: 3 },
              { text: "经常", desc: "4分", score: 4 }
            ]
          },
          {
            id: 10,
            type: "social",
            text: "我感到被支持",
            options: [
              { text: "从不", desc: "4分", score: 4 },
              { text: "很少", desc: "3分", score: 3 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "1分", score: 1 }
            ]
          },
          {
            id: 11,
            type: "social",
            text: "我感到被遗忘",
            options: [
              { text: "从不", desc: "1分", score: 1 },
              { text: "很少", desc: "2分", score: 2 },
              { text: "有时", desc: "3分", score: 3 },
              { text: "经常", desc: "4分", score: 4 }
            ]
          },
          {
            id: 12,
            type: "social",
            text: "我感到被关心",
            options: [
              { text: "从不", desc: "4分", score: 4 },
              { text: "很少", desc: "3分", score: 3 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "1分", score: 1 }
            ]
          },
          {
            id: 13,
            type: "social",
            text: "我感到被疏远",
            options: [
              { text: "从不", desc: "1分", score: 1 },
              { text: "很少", desc: "2分", score: 2 },
              { text: "有时", desc: "3分", score: 3 },
              { text: "经常", desc: "4分", score: 4 }
            ]
          },
          {
            id: 14,
            type: "social",
            text: "我感到被重视",
            options: [
              { text: "从不", desc: "4分", score: 4 },
              { text: "很少", desc: "3分", score: 3 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "1分", score: 1 }
            ]
          },
          {
            id: 15,
            type: "social",
            text: "我感到被拒绝",
            options: [
              { text: "从不", desc: "1分", score: 1 },
              { text: "很少", desc: "2分", score: 2 },
              { text: "有时", desc: "3分", score: 3 },
              { text: "经常", desc: "4分", score: 4 }
            ]
          },
          {
            id: 16,
            type: "social",
            text: "我感到被接纳",
            options: [
              { text: "从不", desc: "4分", score: 4 },
              { text: "很少", desc: "3分", score: 3 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "1分", score: 1 }
            ]
          },
          {
            id: 17,
            type: "social",
            text: "我感到被忽视",
            options: [
              { text: "从不", desc: "1分", score: 1 },
              { text: "很少", desc: "2分", score: 2 },
              { text: "有时", desc: "3分", score: 3 },
              { text: "经常", desc: "4分", score: 4 }
            ]
          },
          {
            id: 18,
            type: "social",
            text: "我感到被理解",
            options: [
              { text: "从不", desc: "4分", score: 4 },
              { text: "很少", desc: "3分", score: 3 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "1分", score: 1 }
            ]
          },
          {
            id: 19,
            type: "social",
            text: "我感到被孤立",
            options: [
              { text: "从不", desc: "1分", score: 1 },
              { text: "很少", desc: "2分", score: 2 },
              { text: "有时", desc: "3分", score: 3 },
              { text: "经常", desc: "4分", score: 4 }
            ]
          },
          {
            id: 20,
            type: "social",
            text: "我感到被支持",
            options: [
              { text: "从不", desc: "4分", score: 4 },
              { text: "很少", desc: "3分", score: 3 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "1分", score: 1 }
            ]
          }
        ],
        currentIndex: 0,
        selectedOption: null,
        showEncouragement: false,
        encouragement: {
          emoji: "",
          text: ""
        },
        encouragements: [
          { emoji: "/static/emojis/star.png", text: "你的回答很有价值！" },
          { emoji: "/static/emojis/heart.png", text: "感谢你的真诚回答" },
          { emoji: "/static/emojis/lightbulb.png", text: "自我觉察是成长的第一步" }
        ],
        showResult: false,
        resultData: {
          totalScore: 0,
          lonelinessLevel: "",
          levelDescription: "",
          suggestion: ""
        }
      };
    },
    computed: {
      currentQuestion() {
        return this.questions[this.currentIndex];
      },
      progress() {
        return Math.round(this.currentIndex / this.questions.length * 100);
      },
      isLastQuestion() {
        return this.currentIndex === this.questions.length - 1;
      },
      typeTag() {
        const types = {
          social: { text: "人际关系", color: "#FF6B81", icon: "/static/icons/social.png" },
          mood: { text: "情绪评估", color: "#FFA500", icon: "/static/icons/mood.png" },
          anxiety: { text: "焦虑评估", color: "#FFA500", icon: "/static/icons/anxiety.png" }
          // 更多类型...
        };
        return types[this.currentQuestion.type] || { text: "心理测评", color: this.themeColor, icon: "/static/icons/psychology.png" };
      }
    },
    methods: {
      // 返回上一页
      goBack() {
        uni.navigateBack({
          delta: 1
        });
      },
      selectOption(index2) {
        this.selectedOption = index2;
        this.answers[this.currentIndex] = {
          questionId: this.currentQuestion.id,
          score: this.currentQuestion.options[index2].score
        };
        formatAppLog("log", "at pages/phq7-test/ucla.vue:406", "当前答案:", this.answers);
        this.showRandomEncouragement();
        uni.vibrateShort();
      },
      showRandomEncouragement() {
        if (Math.random() > 0.7) {
          this.encouragement = this.encouragements[Math.floor(Math.random() * this.encouragements.length)];
          this.showEncouragement = true;
          setTimeout(() => {
            this.showEncouragement = false;
          }, 1500);
        }
      },
      nextQuestion() {
        if (this.selectedOption === null)
          return;
        if (this.isLastQuestion) {
          this.submitTest();
          return;
        }
        this.currentIndex++;
        const nextAnswer = this.answers[this.currentIndex];
        if (nextAnswer) {
          this.selectedOption = this.currentQuestion.options.findIndex((option) => option.score === nextAnswer.score);
        } else {
          this.selectedOption = null;
        }
        this.scrollToTop();
      },
      prevQuestion() {
        if (this.currentIndex <= 0)
          return;
        this.currentIndex--;
        const prevAnswer = this.answers[this.currentIndex];
        if (prevAnswer) {
          this.selectedOption = this.currentQuestion.options.findIndex((option) => option.score === prevAnswer.score);
        } else {
          this.selectedOption = null;
        }
        this.scrollToTop();
      },
      scrollToTop() {
        uni.pageScrollTo({
          scrollTop: 0,
          duration: 300
        });
      },
      submitTest() {
        const totalScore = this.answers.reduce((sum, a) => sum + (a ? a.score : 0), 0);
        let lonelinessLevel = "";
        let levelDescription = "";
        let suggestion = "";
        if (totalScore >= 20 && totalScore <= 34) {
          lonelinessLevel = "低孤独感";
          levelDescription = "您的孤独感水平较低，人际关系良好，社交能力较强。";
          suggestion = "继续保持良好的社交习惯，多参与社交活动，维持现有的人际关系。";
        } else if (totalScore >= 35 && totalScore <= 49) {
          lonelinessLevel = "中等孤独感";
          levelDescription = "您感受到一定程度的孤独感，可能需要关注人际关系质量。";
          suggestion = "建议主动参与社交活动，培养兴趣爱好，寻求志同道合的朋友，必要时可寻求专业帮助。";
        } else if (totalScore >= 50 && totalScore <= 64) {
          lonelinessLevel = "较高孤独感";
          levelDescription = "您的孤独感水平较高，对人际关系和社交活动有明显影响。";
          suggestion = "建议寻求专业心理咨询师的帮助，学习社交技能，建立支持网络，参与团体活动。";
        } else if (totalScore >= 65 && totalScore <= 80) {
          lonelinessLevel = "高孤独感";
          levelDescription = "您的孤独感水平很高，严重影响日常生活和人际关系。";
          suggestion = "强烈建议寻求专业心理医生的帮助，进行系统的心理治疗，学习社交技能和人际关系管理。";
        }
        this.resultData = {
          totalScore,
          lonelinessLevel,
          levelDescription,
          suggestion
        };
        this.showResult = true;
        this.saveTestResultToDatabase();
      },
      getOptionStyle(index2) {
        if (this.selectedOption === index2) {
          return {
            borderColor: this.typeTag.color,
            backgroundColor: this.hexToRgba(this.typeTag.color, 0.08)
          };
        }
        return {};
      },
      hexToRgba(hex, opacity) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      },
      closeResult() {
        this.showResult = false;
      },
      restartTest() {
        this.showResult = false;
        this.currentIndex = 0;
        this.selectedOption = null;
        this.answers = [];
        this.scrollToTop();
      },
      getLevelClass(level) {
        if (level.includes("低孤独感"))
          return "level-normal";
        if (level.includes("中等孤独感"))
          return "level-mild";
        if (level.includes("较高孤独感"))
          return "level-moderate";
        if (level.includes("高孤独感"))
          return "level-severe";
        return "level-normal";
      },
      // 保存测试结果到数据库
      async saveTestResultToDatabase() {
        const requestData = {
          questionnaireName: "UCLA孤独感量表",
          depressionLevel: this.resultData.lonelinessLevel,
          levelDescription: this.resultData.levelDescription,
          suggestion: this.resultData.suggestion
        };
        formatAppLog("log", "at pages/phq7-test/ucla.vue:539", "准备保存测试结果:", requestData);
        try {
          const result = await this.$api.questionnaire.saveResult(requestData);
          if (result.success) {
          } else {
          }
        } catch (error2) {
          formatAppLog("error", "at pages/phq7-test/ucla.vue:561", "保存测试结果失败:", error2);
          uni.showToast({
            title: "网络错误，请检查网络连接",
            icon: "error",
            duration: 2e3
          });
        }
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["test-page", _ctx.containerClasses]),
        style: vue.normalizeStyle({ "--theme-color": $data.themeColor })
      },
      [
        vue.createElementVNode("view", { class: "progress-container" }, [
          vue.createElementVNode(
            "text",
            { class: "progress-text" },
            "第 " + vue.toDisplayString($data.currentIndex + 1) + "/" + vue.toDisplayString($data.questions.length) + " 题",
            1
            /* TEXT */
          ),
          vue.createElementVNode("progress", {
            percent: $options.progress,
            activeColor: "var(--theme-color)",
            backgroundColor: "#EBEDF0",
            "stroke-width": "12",
            class: "progress-bar"
          }, null, 8, ["percent"])
        ]),
        vue.createElementVNode("view", { class: "question-card" }, [
          vue.createElementVNode("view", { class: "card-header" }, [
            vue.createElementVNode(
              "view",
              {
                class: "question-type-tag",
                style: vue.normalizeStyle({ background: $options.typeTag.color })
              },
              [
                vue.createElementVNode("image", {
                  src: $options.typeTag.icon,
                  class: "type-icon"
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString($options.typeTag.text),
                  1
                  /* TEXT */
                )
              ],
              4
              /* STYLE */
            ),
            vue.createElementVNode(
              "view",
              { class: "question-number" },
              "Q" + vue.toDisplayString($data.currentIndex + 1),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("scroll-view", {
            "scroll-y": "",
            class: "question-content"
          }, [
            vue.createElementVNode(
              "text",
              { class: "question-text" },
              vue.toDisplayString($options.currentQuestion.text),
              1
              /* TEXT */
            ),
            vue.createElementVNode("text", { class: "question-tip" }, "请根据您的真实感受选择")
          ])
        ]),
        vue.createElementVNode("view", { class: "options-container" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.currentQuestion.options, (option, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index2,
                class: vue.normalizeClass(["option-card", { selected: $data.selectedOption === index2 }]),
                onClick: ($event) => $options.selectOption(index2),
                style: vue.normalizeStyle($options.getOptionStyle(index2))
              }, [
                vue.createElementVNode("view", { class: "option-selector" }, [
                  vue.createElementVNode("view", { class: "selector-outer" }, [
                    $data.selectedOption === index2 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "selector-inner"
                    })) : vue.createCommentVNode("v-if", true)
                  ])
                ]),
                vue.createElementVNode("view", { class: "option-content" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "option-text" },
                    vue.toDisplayString(option.text),
                    1
                    /* TEXT */
                  ),
                  option.desc ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      class: "option-desc"
                    },
                    vue.toDisplayString(option.desc),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true)
                ]),
                $data.selectedOption === index2 ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  src: _imports_0,
                  class: "option-check"
                })) : vue.createCommentVNode("v-if", true)
              ], 14, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", { class: "navigation-buttons" }, [
          vue.createElementVNode(
            "button",
            {
              class: vue.normalizeClass(["nav-button prev-button", { disabled: $data.currentIndex === 0 }]),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.prevQuestion && $options.prevQuestion(...args))
            },
            " 上一题 ",
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "button",
            {
              class: vue.normalizeClass(["nav-button next-button", { disabled: $data.selectedOption === null }]),
              onClick: _cache[1] || (_cache[1] = (...args) => $options.nextQuestion && $options.nextQuestion(...args))
            },
            vue.toDisplayString($options.isLastQuestion ? "查看结果" : "下一题"),
            3
            /* TEXT, CLASS */
          )
        ]),
        $data.showEncouragement ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "encouragement-feedback"
        }, [
          vue.createElementVNode("image", {
            src: $data.encouragement.emoji,
            class: "encouragement-emoji"
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "text",
            { class: "encouragement-text" },
            vue.toDisplayString($data.encouragement.text),
            1
            /* TEXT */
          )
        ])) : vue.createCommentVNode("v-if", true),
        $data.showResult ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "result-modal",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.closeResult && $options.closeResult(...args))
        }, [
          vue.createElementVNode("view", {
            class: "result-content",
            onClick: _cache[5] || (_cache[5] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "result-header" }, [
              vue.createElementVNode("text", { class: "result-title" }, "测试结果"),
              vue.createElementVNode("view", {
                class: "close-btn",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.closeResult && $options.closeResult(...args))
              }, "×")
            ]),
            vue.createElementVNode("view", { class: "result-body" }, [
              vue.createElementVNode("view", { class: "score-section" }, [
                vue.createElementVNode("text", { class: "score-label" }, "总分"),
                vue.createElementVNode(
                  "text",
                  { class: "score-value" },
                  vue.toDisplayString($data.resultData.totalScore) + "分",
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "level-section" }, [
                vue.createElementVNode("text", { class: "level-label" }, "孤独感水平"),
                vue.createElementVNode(
                  "text",
                  {
                    class: vue.normalizeClass(["level-value", $options.getLevelClass($data.resultData.lonelinessLevel)])
                  },
                  vue.toDisplayString($data.resultData.lonelinessLevel),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              vue.createElementVNode("view", { class: "description-section" }, [
                vue.createElementVNode(
                  "text",
                  { class: "description-text" },
                  vue.toDisplayString($data.resultData.levelDescription),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "suggestion-section" }, [
                vue.createElementVNode("text", { class: "suggestion-label" }, "建议"),
                vue.createElementVNode(
                  "text",
                  { class: "suggestion-text" },
                  vue.toDisplayString($data.resultData.suggestion),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "result-footer" }, [
              vue.createElementVNode("button", {
                class: "result-btn primary",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.restartTest && $options.restartTest(...args))
              }, "重新测试"),
              vue.createElementVNode("button", {
                class: "result-btn secondary",
                onClick: _cache[4] || (_cache[4] = (...args) => $options.closeResult && $options.closeResult(...args))
              }, "关闭")
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const PagesPhq7TestUcla = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/phq7-test/ucla.vue"]]);
  const _sfc_main$b = {
    data() {
      return {
        themeColor: "#9C27B0",
        // 主色调 - 紫色代表睡眠评估
        answers: [],
        // 初始化空数组
        questions: [
          {
            id: 1,
            type: "sleep",
            text: "您通常需要多长时间才能入睡？",
            options: [
              { text: "0-15分钟", desc: "0分", score: 0 },
              { text: "16-30分钟", desc: "1分", score: 1 },
              { text: "31-60分钟", desc: "2分", score: 2 },
              { text: "超过60分钟", desc: "3分", score: 3 }
            ]
          },
          {
            id: 2,
            type: "sleep",
            text: "您每晚实际睡眠时间是多少？",
            options: [
              { text: "超过7小时", desc: "0分", score: 0 },
              { text: "6-7小时", desc: "1分", score: 1 },
              { text: "5-6小时", desc: "2分", score: 2 },
              { text: "少于5小时", desc: "3分", score: 3 }
            ]
          },
          {
            id: 3,
            type: "sleep",
            text: "您是否经常在夜间醒来？",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 }
            ]
          },
          {
            id: 4,
            type: "sleep",
            text: "您对睡眠质量满意吗？",
            options: [
              { text: "非常满意", desc: "0分", score: 0 },
              { text: "比较满意", desc: "1分", score: 1 },
              { text: "不太满意", desc: "2分", score: 2 },
              { text: "很不满意", desc: "3分", score: 3 }
            ]
          },
          {
            id: 5,
            type: "sleep",
            text: "您是否经常做噩梦？",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 }
            ]
          },
          {
            id: 6,
            type: "sleep",
            text: "您是否经常感到睡眠不足？",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 }
            ]
          },
          {
            id: 7,
            type: "sleep",
            text: "您是否经常感到白天困倦？",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 }
            ]
          }
        ],
        currentIndex: 0,
        selectedOption: null,
        showEncouragement: false,
        encouragement: {
          emoji: "",
          text: ""
        },
        encouragements: [
          { emoji: "/static/emojis/star.png", text: "你的回答很有价值！" },
          { emoji: "/static/emojis/heart.png", text: "感谢你的真诚回答" },
          { emoji: "/static/emojis/lightbulb.png", text: "自我觉察是成长的第一步" }
        ],
        showResult: false,
        resultData: {
          totalScore: 0,
          sleepQuality: "",
          levelDescription: "",
          suggestion: ""
        }
      };
    },
    computed: {
      currentQuestion() {
        return this.questions[this.currentIndex];
      },
      progress() {
        return Math.round(this.currentIndex / this.questions.length * 100);
      },
      isLastQuestion() {
        return this.currentIndex === this.questions.length - 1;
      },
      typeTag() {
        const types = {
          sleep: { text: "睡眠质量", color: "#9C27B0", icon: "/static/icons/sleep.png" },
          mood: { text: "情绪评估", color: "#FFA500", icon: "/static/icons/mood.png" },
          anxiety: { text: "焦虑评估", color: "#FFA500", icon: "/static/icons/anxiety.png" }
          // 更多类型...
        };
        return types[this.currentQuestion.type] || { text: "心理测评", color: this.themeColor, icon: "/static/icons/psychology.png" };
      }
    },
    methods: {
      // 返回上一页
      goBack() {
        uni.navigateBack({
          delta: 1
        });
      },
      selectOption(index2) {
        this.selectedOption = index2;
        this.answers[this.currentIndex] = {
          questionId: this.currentQuestion.id,
          score: this.currentQuestion.options[index2].score
        };
        formatAppLog("log", "at pages/phq7-test/psqi.vue:264", "当前答案:", this.answers);
        this.showRandomEncouragement();
        uni.vibrateShort();
      },
      showRandomEncouragement() {
        if (Math.random() > 0.7) {
          this.encouragement = this.encouragements[Math.floor(Math.random() * this.encouragements.length)];
          this.showEncouragement = true;
          setTimeout(() => {
            this.showEncouragement = false;
          }, 1500);
        }
      },
      nextQuestion() {
        if (this.selectedOption === null)
          return;
        if (this.isLastQuestion) {
          this.submitTest();
          return;
        }
        this.currentIndex++;
        const nextAnswer = this.answers[this.currentIndex];
        if (nextAnswer) {
          this.selectedOption = this.currentQuestion.options.findIndex((option) => option.score === nextAnswer.score);
        } else {
          this.selectedOption = null;
        }
        this.scrollToTop();
      },
      prevQuestion() {
        if (this.currentIndex <= 0)
          return;
        this.currentIndex--;
        const prevAnswer = this.answers[this.currentIndex];
        if (prevAnswer) {
          this.selectedOption = this.currentQuestion.options.findIndex((option) => option.score === prevAnswer.score);
        } else {
          this.selectedOption = null;
        }
        this.scrollToTop();
      },
      scrollToTop() {
        uni.pageScrollTo({
          scrollTop: 0,
          duration: 300
        });
      },
      submitTest() {
        const totalScore = this.answers.reduce((sum, a) => sum + (a ? a.score : 0), 0);
        let sleepQuality = "";
        let levelDescription = "";
        let suggestion = "";
        if (totalScore >= 0 && totalScore <= 5) {
          sleepQuality = "睡眠质量良好";
          levelDescription = "您的睡眠质量很好，睡眠时间充足，睡眠效率高。";
          suggestion = "继续保持良好的睡眠习惯，规律作息，避免睡前使用电子设备，维持健康的睡眠环境。";
        } else if (totalScore >= 6 && totalScore <= 10) {
          sleepQuality = "睡眠质量一般";
          levelDescription = "您的睡眠质量一般，可能存在一些睡眠问题，但影响不大。";
          suggestion = "建议改善睡眠环境，建立规律的睡眠时间，避免睡前刺激性活动，必要时可寻求专业帮助。";
        } else if (totalScore >= 11 && totalScore <= 15) {
          sleepQuality = "睡眠质量较差";
          levelDescription = "您的睡眠质量较差，睡眠问题对日常生活有明显影响。";
          suggestion = "建议寻求专业睡眠医生的帮助，进行睡眠评估，学习睡眠卫生知识，必要时可考虑药物治疗。";
        } else if (totalScore >= 16 && totalScore <= 21) {
          sleepQuality = "睡眠质量很差";
          levelDescription = "您的睡眠质量很差，严重影响日常生活和身体健康。";
        }
        this.resultData = {
          totalScore,
          sleepQuality,
          levelDescription,
          suggestion
        };
        this.showResult = true;
        this.saveTestResultToDatabase();
      },
      getOptionStyle(index2) {
        if (this.selectedOption === index2) {
          return {
            borderColor: this.typeTag.color,
            backgroundColor: this.hexToRgba(this.typeTag.color, 0.08)
          };
        }
        return {};
      },
      hexToRgba(hex, opacity) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      },
      closeResult() {
        this.showResult = false;
      },
      restartTest() {
        this.showResult = false;
        this.currentIndex = 0;
        this.selectedOption = null;
        this.answers = [];
        this.scrollToTop();
      },
      getLevelClass(level) {
        if (level.includes("睡眠质量良好"))
          return "level-normal";
        if (level.includes("睡眠质量一般"))
          return "level-mild";
        if (level.includes("睡眠质量较差"))
          return "level-moderate";
        if (level.includes("睡眠质量很差"))
          return "level-severe";
        return "level-normal";
      },
      // 保存测试结果到数据库
      async saveTestResultToDatabase() {
        const requestData = {
          questionnaireName: "PSQI匹兹堡睡眠质量指数",
          depressionLevel: this.resultData.sleepQuality,
          levelDescription: this.resultData.levelDescription,
          suggestion: this.resultData.suggestion
        };
        formatAppLog("log", "at pages/phq7-test/psqi.vue:397", "准备保存测试结果:", requestData);
        try {
          const result = await this.$api.questionnaire.saveResult(requestData);
          if (result.success) {
          } else {
          }
        } catch (error2) {
          formatAppLog("error", "at pages/phq7-test/psqi.vue:419", "保存测试结果失败:", error2);
          uni.showToast({
            title: "网络错误，请检查网络连接",
            icon: "error",
            duration: 2e3
          });
        }
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["test-page", _ctx.containerClasses]),
        style: vue.normalizeStyle({ "--theme-color": $data.themeColor })
      },
      [
        vue.createElementVNode("view", { class: "progress-container" }, [
          vue.createElementVNode(
            "text",
            { class: "progress-text" },
            "第 " + vue.toDisplayString($data.currentIndex + 1) + "/" + vue.toDisplayString($data.questions.length) + " 题",
            1
            /* TEXT */
          ),
          vue.createElementVNode("progress", {
            percent: $options.progress,
            activeColor: "var(--theme-color)",
            backgroundColor: "#EBEDF0",
            "stroke-width": "12",
            class: "progress-bar"
          }, null, 8, ["percent"])
        ]),
        vue.createElementVNode("view", { class: "question-card" }, [
          vue.createElementVNode("view", { class: "card-header" }, [
            vue.createElementVNode(
              "view",
              {
                class: "question-type-tag",
                style: vue.normalizeStyle({ background: $options.typeTag.color })
              },
              [
                vue.createElementVNode("image", {
                  src: $options.typeTag.icon,
                  class: "type-icon"
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString($options.typeTag.text),
                  1
                  /* TEXT */
                )
              ],
              4
              /* STYLE */
            ),
            vue.createElementVNode(
              "view",
              { class: "question-number" },
              "Q" + vue.toDisplayString($data.currentIndex + 1),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("scroll-view", {
            "scroll-y": "",
            class: "question-content"
          }, [
            vue.createElementVNode(
              "text",
              { class: "question-text" },
              vue.toDisplayString($options.currentQuestion.text),
              1
              /* TEXT */
            ),
            vue.createElementVNode("text", { class: "question-tip" }, "请根据您过去一个月的睡眠情况选择")
          ])
        ]),
        vue.createElementVNode("view", { class: "options-container" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.currentQuestion.options, (option, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index2,
                class: vue.normalizeClass(["option-card", { selected: $data.selectedOption === index2 }]),
                onClick: ($event) => $options.selectOption(index2),
                style: vue.normalizeStyle($options.getOptionStyle(index2))
              }, [
                vue.createElementVNode("view", { class: "option-selector" }, [
                  vue.createElementVNode("view", { class: "selector-outer" }, [
                    $data.selectedOption === index2 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "selector-inner"
                    })) : vue.createCommentVNode("v-if", true)
                  ])
                ]),
                vue.createElementVNode("view", { class: "option-content" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "option-text" },
                    vue.toDisplayString(option.text),
                    1
                    /* TEXT */
                  ),
                  option.desc ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      class: "option-desc"
                    },
                    vue.toDisplayString(option.desc),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true)
                ]),
                $data.selectedOption === index2 ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  src: _imports_0,
                  class: "option-check"
                })) : vue.createCommentVNode("v-if", true)
              ], 14, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", { class: "navigation-buttons" }, [
          vue.createElementVNode(
            "button",
            {
              class: vue.normalizeClass(["nav-button prev-button", { disabled: $data.currentIndex === 0 }]),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.prevQuestion && $options.prevQuestion(...args))
            },
            " 上一题 ",
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "button",
            {
              class: vue.normalizeClass(["nav-button next-button", { disabled: $data.selectedOption === null }]),
              onClick: _cache[1] || (_cache[1] = (...args) => $options.nextQuestion && $options.nextQuestion(...args))
            },
            vue.toDisplayString($options.isLastQuestion ? "查看结果" : "下一题"),
            3
            /* TEXT, CLASS */
          )
        ]),
        $data.showEncouragement ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "encouragement-feedback"
        }, [
          vue.createElementVNode("image", {
            src: $data.encouragement.emoji,
            class: "encouragement-emoji"
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "text",
            { class: "encouragement-text" },
            vue.toDisplayString($data.encouragement.text),
            1
            /* TEXT */
          )
        ])) : vue.createCommentVNode("v-if", true),
        $data.showResult ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "result-modal",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.closeResult && $options.closeResult(...args))
        }, [
          vue.createElementVNode("view", {
            class: "result-content",
            onClick: _cache[5] || (_cache[5] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "result-header" }, [
              vue.createElementVNode("text", { class: "result-title" }, "测试结果"),
              vue.createElementVNode("view", {
                class: "close-btn",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.closeResult && $options.closeResult(...args))
              }, "×")
            ]),
            vue.createElementVNode("view", { class: "result-body" }, [
              vue.createElementVNode("view", { class: "score-section" }, [
                vue.createElementVNode("text", { class: "score-label" }, "总分"),
                vue.createElementVNode(
                  "text",
                  { class: "score-value" },
                  vue.toDisplayString($data.resultData.totalScore) + "分",
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "level-section" }, [
                vue.createElementVNode("text", { class: "level-label" }, "睡眠质量"),
                vue.createElementVNode(
                  "text",
                  {
                    class: vue.normalizeClass(["level-value", $options.getLevelClass($data.resultData.sleepQuality)])
                  },
                  vue.toDisplayString($data.resultData.sleepQuality),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              vue.createElementVNode("view", { class: "description-section" }, [
                vue.createElementVNode(
                  "text",
                  { class: "description-text" },
                  vue.toDisplayString($data.resultData.levelDescription),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "suggestion-section" }, [
                vue.createElementVNode("text", { class: "suggestion-label" }, "建议"),
                vue.createElementVNode(
                  "text",
                  { class: "suggestion-text" },
                  vue.toDisplayString($data.resultData.suggestion),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "result-footer" }, [
              vue.createElementVNode("button", {
                class: "result-btn primary",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.restartTest && $options.restartTest(...args))
              }, "重新测试"),
              vue.createElementVNode("button", {
                class: "result-btn secondary",
                onClick: _cache[4] || (_cache[4] = (...args) => $options.closeResult && $options.closeResult(...args))
              }, "关闭")
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const PagesPhq7TestPsqi = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/phq7-test/psqi.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        themeColor: "#673AB7",
        // 主色调 - 深紫色代表睡眠障碍评估
        answers: [],
        // 初始化空数组
        questions: [
          {
            id: 1,
            type: "sleep",
            text: "您是否经常难以入睡？",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 }
            ]
          },
          {
            id: 2,
            type: "sleep",
            text: "您是否经常在夜间醒来后难以再次入睡？",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 }
            ]
          },
          {
            id: 3,
            type: "sleep",
            text: "您是否经常早醒且无法再次入睡？",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 }
            ]
          },
          {
            id: 4,
            type: "sleep",
            text: "您是否经常做噩梦？",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 }
            ]
          },
          {
            id: 5,
            type: "sleep",
            text: "您是否经常在睡眠中感到恐惧或焦虑？",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 }
            ]
          },
          {
            id: 6,
            type: "sleep",
            text: "您是否经常在睡眠中感到身体不适？",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 }
            ]
          },
          {
            id: 7,
            type: "sleep",
            text: "您是否经常在睡眠中感到呼吸困难？",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 }
            ]
          },
          {
            id: 8,
            type: "sleep",
            text: "您是否经常在睡眠中感到心跳加速？",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 }
            ]
          },
          {
            id: 9,
            type: "sleep",
            text: "您是否经常在睡眠中感到出汗？",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 }
            ]
          },
          {
            id: 10,
            type: "sleep",
            text: "您是否经常在睡眠中感到身体僵硬或抽搐？",
            options: [
              { text: "从不", desc: "0分", score: 0 },
              { text: "很少", desc: "1分", score: 1 },
              { text: "有时", desc: "2分", score: 2 },
              { text: "经常", desc: "3分", score: 3 }
            ]
          }
        ],
        currentIndex: 0,
        selectedOption: null,
        showEncouragement: false,
        encouragement: {
          emoji: "",
          text: ""
        },
        encouragements: [
          { emoji: "/static/emojis/star.png", text: "你的回答很有价值！" },
          { emoji: "/static/emojis/heart.png", text: "感谢你的真诚回答" },
          { emoji: "/static/emojis/lightbulb.png", text: "自我觉察是成长的第一步" }
        ],
        showResult: false,
        resultData: {
          totalScore: 0,
          sleepDisorder: "",
          levelDescription: "",
          suggestion: ""
        }
      };
    },
    computed: {
      currentQuestion() {
        return this.questions[this.currentIndex];
      },
      progress() {
        return Math.round(this.currentIndex / this.questions.length * 100);
      },
      isLastQuestion() {
        return this.currentIndex === this.questions.length - 1;
      },
      typeTag() {
        const types = {
          sleep: { text: "睡眠障碍", color: "#673AB7", icon: "/static/icons/sleep.png" },
          mood: { text: "情绪评估", color: "#FFA500", icon: "/static/icons/mood.png" },
          anxiety: { text: "焦虑评估", color: "#FFA500", icon: "/static/icons/anxiety.png" }
          // 更多类型...
        };
        return types[this.currentQuestion.type] || { text: "心理测评", color: this.themeColor, icon: "/static/icons/psychology.png" };
      }
    },
    methods: {
      // 返回上一页
      goBack() {
        uni.navigateBack({
          delta: 1
        });
      },
      selectOption(index2) {
        this.selectedOption = index2;
        this.answers[this.currentIndex] = {
          questionId: this.currentQuestion.id,
          score: this.currentQuestion.options[index2].score
        };
        formatAppLog("log", "at pages/phq7-test/sds.vue:297", "当前答案:", this.answers);
        this.showRandomEncouragement();
        uni.vibrateShort();
      },
      showRandomEncouragement() {
        if (Math.random() > 0.7) {
          this.encouragement = this.encouragements[Math.floor(Math.random() * this.encouragements.length)];
          this.showEncouragement = true;
          setTimeout(() => {
            this.showEncouragement = false;
          }, 1500);
        }
      },
      nextQuestion() {
        if (this.selectedOption === null)
          return;
        if (this.isLastQuestion) {
          this.submitTest();
          return;
        }
        this.currentIndex++;
        const nextAnswer = this.answers[this.currentIndex];
        if (nextAnswer) {
          this.selectedOption = this.currentQuestion.options.findIndex((option) => option.score === nextAnswer.score);
        } else {
          this.selectedOption = null;
        }
        this.scrollToTop();
      },
      prevQuestion() {
        if (this.currentIndex <= 0)
          return;
        this.currentIndex--;
        const prevAnswer = this.answers[this.currentIndex];
        if (prevAnswer) {
          this.selectedOption = this.currentQuestion.options.findIndex((option) => option.score === prevAnswer.score);
        } else {
          this.selectedOption = null;
        }
        this.scrollToTop();
      },
      scrollToTop() {
        uni.pageScrollTo({
          scrollTop: 0,
          duration: 300
        });
      },
      submitTest() {
        const totalScore = this.answers.reduce((sum, a) => sum + (a ? a.score : 0), 0);
        let sleepDisorder = "";
        let levelDescription = "";
        let suggestion = "";
        if (totalScore >= 0 && totalScore <= 5) {
          sleepDisorder = "无睡眠障碍";
          levelDescription = "您的睡眠状况良好，没有明显的睡眠障碍症状。";
          suggestion = "继续保持良好的睡眠习惯，规律作息，维持健康的睡眠环境。";
        } else if (totalScore >= 6 && totalScore <= 10) {
          sleepDisorder = "轻度睡眠障碍";
          levelDescription = "您存在一些轻微的睡眠障碍症状，但影响不大。";
          suggestion = "建议改善睡眠环境，建立规律的睡眠时间，避免睡前刺激性活动，必要时可寻求专业帮助。";
        } else if (totalScore >= 11 && totalScore <= 15) {
          sleepDisorder = "中度睡眠障碍";
          levelDescription = "您存在明显的睡眠障碍症状，对日常生活有一定影响。";
          suggestion = "建议寻求专业睡眠医生的帮助，进行睡眠评估，学习睡眠卫生知识，必要时可考虑药物治疗。";
        } else if (totalScore >= 16 && totalScore <= 30) {
          sleepDisorder = "重度睡眠障碍";
          levelDescription = "您存在严重的睡眠障碍症状，严重影响日常生活和身体健康。";
          suggestion = "强烈建议立即寻求专业睡眠医生的帮助，进行全面的睡眠评估和治疗，制定个性化的睡眠改善计划。";
        }
        this.resultData = {
          totalScore,
          sleepDisorder,
          levelDescription,
          suggestion
        };
        this.showResult = true;
        this.saveTestResultToDatabase();
      },
      getOptionStyle(index2) {
        if (this.selectedOption === index2) {
          return {
            borderColor: this.typeTag.color,
            backgroundColor: this.hexToRgba(this.typeTag.color, 0.08)
          };
        }
        return {};
      },
      hexToRgba(hex, opacity) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      },
      closeResult() {
        this.showResult = false;
      },
      restartTest() {
        this.showResult = false;
        this.currentIndex = 0;
        this.selectedOption = null;
        this.answers = [];
        this.scrollToTop();
      },
      getLevelClass(level) {
        if (level.includes("无睡眠障碍"))
          return "level-normal";
        if (level.includes("轻度睡眠障碍"))
          return "level-mild";
        if (level.includes("中度睡眠障碍"))
          return "level-moderate";
        if (level.includes("重度睡眠障碍"))
          return "level-severe";
        return "level-normal";
      },
      // 保存测试结果到数据库
      async saveTestResultToDatabase() {
        const requestData = {
          questionnaireName: "SDS睡眠障碍量表",
          depressionLevel: this.resultData.sleepDisorder,
          levelDescription: this.resultData.levelDescription,
          suggestion: this.resultData.suggestion
        };
        formatAppLog("log", "at pages/phq7-test/sds.vue:430", "准备保存测试结果:", requestData);
        try {
          const result = await this.$api.questionnaire.saveResult(requestData);
          if (result.success) {
          } else {
          }
        } catch (error2) {
          formatAppLog("error", "at pages/phq7-test/sds.vue:452", "保存测试结果失败:", error2);
          uni.showToast({
            title: "网络错误，请检查网络连接",
            icon: "error",
            duration: 2e3
          });
        }
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["test-page", _ctx.containerClasses]),
        style: vue.normalizeStyle({ "--theme-color": $data.themeColor })
      },
      [
        vue.createElementVNode("view", { class: "progress-container" }, [
          vue.createElementVNode(
            "text",
            { class: "progress-text" },
            "第 " + vue.toDisplayString($data.currentIndex + 1) + "/" + vue.toDisplayString($data.questions.length) + " 题",
            1
            /* TEXT */
          ),
          vue.createElementVNode("progress", {
            percent: $options.progress,
            activeColor: "var(--theme-color)",
            backgroundColor: "#EBEDF0",
            "stroke-width": "12",
            class: "progress-bar"
          }, null, 8, ["percent"])
        ]),
        vue.createElementVNode("view", { class: "question-card" }, [
          vue.createElementVNode("view", { class: "card-header" }, [
            vue.createElementVNode(
              "view",
              {
                class: "question-type-tag",
                style: vue.normalizeStyle({ background: $options.typeTag.color })
              },
              [
                vue.createElementVNode("image", {
                  src: $options.typeTag.icon,
                  class: "type-icon"
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString($options.typeTag.text),
                  1
                  /* TEXT */
                )
              ],
              4
              /* STYLE */
            ),
            vue.createElementVNode(
              "view",
              { class: "question-number" },
              "Q" + vue.toDisplayString($data.currentIndex + 1),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("scroll-view", {
            "scroll-y": "",
            class: "question-content"
          }, [
            vue.createElementVNode(
              "text",
              { class: "question-text" },
              vue.toDisplayString($options.currentQuestion.text),
              1
              /* TEXT */
            ),
            vue.createElementVNode("text", { class: "question-tip" }, "请根据您过去一个月的睡眠情况选择")
          ])
        ]),
        vue.createElementVNode("view", { class: "options-container" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.currentQuestion.options, (option, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index2,
                class: vue.normalizeClass(["option-card", { selected: $data.selectedOption === index2 }]),
                onClick: ($event) => $options.selectOption(index2),
                style: vue.normalizeStyle($options.getOptionStyle(index2))
              }, [
                vue.createElementVNode("view", { class: "option-selector" }, [
                  vue.createElementVNode("view", { class: "selector-outer" }, [
                    $data.selectedOption === index2 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "selector-inner"
                    })) : vue.createCommentVNode("v-if", true)
                  ])
                ]),
                vue.createElementVNode("view", { class: "option-content" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "option-text" },
                    vue.toDisplayString(option.text),
                    1
                    /* TEXT */
                  ),
                  option.desc ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      class: "option-desc"
                    },
                    vue.toDisplayString(option.desc),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true)
                ]),
                $data.selectedOption === index2 ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  src: _imports_0,
                  class: "option-check"
                })) : vue.createCommentVNode("v-if", true)
              ], 14, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", { class: "navigation-buttons" }, [
          vue.createElementVNode(
            "button",
            {
              class: vue.normalizeClass(["nav-button prev-button", { disabled: $data.currentIndex === 0 }]),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.prevQuestion && $options.prevQuestion(...args))
            },
            " 上一题 ",
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "button",
            {
              class: vue.normalizeClass(["nav-button next-button", { disabled: $data.selectedOption === null }]),
              onClick: _cache[1] || (_cache[1] = (...args) => $options.nextQuestion && $options.nextQuestion(...args))
            },
            vue.toDisplayString($options.isLastQuestion ? "查看结果" : "下一题"),
            3
            /* TEXT, CLASS */
          )
        ]),
        $data.showEncouragement ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "encouragement-feedback"
        }, [
          vue.createElementVNode("image", {
            src: $data.encouragement.emoji,
            class: "encouragement-emoji"
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "text",
            { class: "encouragement-text" },
            vue.toDisplayString($data.encouragement.text),
            1
            /* TEXT */
          )
        ])) : vue.createCommentVNode("v-if", true),
        $data.showResult ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "result-modal",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.closeResult && $options.closeResult(...args))
        }, [
          vue.createElementVNode("view", {
            class: "result-content",
            onClick: _cache[5] || (_cache[5] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "result-header" }, [
              vue.createElementVNode("text", { class: "result-title" }, "测试结果"),
              vue.createElementVNode("view", {
                class: "close-btn",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.closeResult && $options.closeResult(...args))
              }, "×")
            ]),
            vue.createElementVNode("view", { class: "result-body" }, [
              vue.createElementVNode("view", { class: "score-section" }, [
                vue.createElementVNode("text", { class: "score-label" }, "总分"),
                vue.createElementVNode(
                  "text",
                  { class: "score-value" },
                  vue.toDisplayString($data.resultData.totalScore) + "分",
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "level-section" }, [
                vue.createElementVNode("text", { class: "level-label" }, "睡眠障碍程度"),
                vue.createElementVNode(
                  "text",
                  {
                    class: vue.normalizeClass(["level-value", $options.getLevelClass($data.resultData.sleepDisorder)])
                  },
                  vue.toDisplayString($data.resultData.sleepDisorder),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              vue.createElementVNode("view", { class: "description-section" }, [
                vue.createElementVNode(
                  "text",
                  { class: "description-text" },
                  vue.toDisplayString($data.resultData.levelDescription),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "suggestion-section" }, [
                vue.createElementVNode("text", { class: "suggestion-label" }, "建议"),
                vue.createElementVNode(
                  "text",
                  { class: "suggestion-text" },
                  vue.toDisplayString($data.resultData.suggestion),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "result-footer" }, [
              vue.createElementVNode("button", {
                class: "result-btn primary",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.restartTest && $options.restartTest(...args))
              }, "重新测试"),
              vue.createElementVNode("button", {
                class: "result-btn secondary",
                onClick: _cache[4] || (_cache[4] = (...args) => $options.closeResult && $options.closeResult(...args))
              }, "关闭")
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const PagesPhq7TestSds = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/phq7-test/sds.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {
        themeColor: "#f093fb",
        loading: true,
        currentCategory: "all",
        showArticle: false,
        selectedArticle: {},
        articles: [
          {
            id: 1,
            title: "如何正确管理压力和焦虑",
            summary: "现代生活中，压力和焦虑是常见问题。本文将介绍科学有效的压力管理方法，帮助您建立健康的心理状态。",
            content: "在现代快节奏的生活中，压力和焦虑已经成为许多人面临的常见问题。正确管理这些情绪对于维护心理健康至关重要。\n\n首先，识别压力源是管理压力的第一步。了解什么情况会引发您的压力反应，有助于制定针对性的应对策略。\n\n其次，建立健康的生活习惯。规律的运动、充足的睡眠和均衡的饮食都能有效缓解压力。每天进行30分钟的有氧运动，如散步、跑步或游泳，可以释放内啡肽，提升心情。\n\n第三，学会放松技巧。深呼吸、冥想、瑜伽等都是有效的放松方法。每天花10-15分钟进行深呼吸练习，可以显著降低焦虑水平。\n\n最后，建立支持网络。与家人、朋友分享您的感受，寻求专业帮助也是重要的应对策略。记住，寻求帮助是勇敢的表现，不是软弱。",
            category: "mental",
            author: "张心理",
            authorTitle: "心理咨询师",
            publishTime: "2024-01-15",
            readCount: 1256,
            tags: ["心理健康", "压力管理", "焦虑"]
          },
          {
            id: 2,
            title: "营养均衡的饮食指南",
            summary: "了解如何通过合理的饮食搭配来维持身体健康，预防疾病，提升生活质量。",
            content: "营养均衡的饮食是维持身体健康的基础。一个健康的饮食应该包含五大营养素：碳水化合物、蛋白质、脂肪、维生素和矿物质。\n\n碳水化合物是身体的主要能量来源，应选择复合碳水化合物，如全谷物、燕麦、糙米等，避免精制糖和加工食品。\n\n蛋白质是身体组织的重要组成部分，优质蛋白质来源包括鱼类、瘦肉、豆类、坚果等。建议每餐都包含一定量的蛋白质。\n\n健康脂肪对大脑和心脏健康至关重要。选择不饱和脂肪，如橄榄油、牛油果、坚果和深海鱼类。\n\n维生素和矿物质虽然需要量少，但对身体功能至关重要。多吃各种颜色的蔬菜和水果，确保摄入足够的维生素C、维生素A、叶酸等。\n\n此外，保持充足的水分摄入，每天至少8杯水，限制盐分和糖分的摄入，这些都是健康饮食的重要组成部分。",
            category: "nutrition",
            author: "李营养",
            authorTitle: "营养师",
            publishTime: "2024-01-14",
            readCount: 892,
            tags: ["营养健康", "饮食指南", "健康生活"]
          },
          {
            id: 3,
            title: "科学运动，健康生活",
            summary: "运动是保持身体健康的重要方式，了解如何制定适合自己的运动计划。",
            content: "运动是维持身体健康和心理健康的重要方式。科学合理的运动计划可以帮助您增强体质，预防疾病，提升生活质量。\n\n有氧运动是运动的基础，包括跑步、游泳、骑自行车等。建议每周进行至少150分钟的中等强度有氧运动，或75分钟的高强度有氧运动。\n\n力量训练同样重要，可以帮助增强肌肉力量，提高骨密度，预防骨质疏松。建议每周进行2-3次力量训练，针对主要肌群进行练习。\n\n柔韧性训练，如瑜伽、普拉提等，可以改善身体柔韧性，减少运动损伤的风险。\n\n平衡训练对老年人尤为重要，可以预防跌倒，提高生活质量。\n\n制定运动计划时，要根据自己的年龄、健康状况和运动经验来调整。循序渐进，避免过度运动。运动前要做好热身，运动后要进行拉伸。\n\n记住，任何运动都比不运动好，找到自己喜欢的运动方式，坚持下去，健康生活从运动开始。",
            category: "exercise",
            author: "王健身",
            authorTitle: "健身教练",
            publishTime: "2024-01-13",
            readCount: 743,
            tags: ["运动健身", "健康生活", "科学运动"]
          },
          {
            id: 4,
            title: "优质睡眠的秘诀",
            summary: "睡眠质量直接影响身体健康和心理健康，学习如何改善睡眠质量。",
            content: "睡眠是身体恢复和修复的重要时间，优质的睡眠对身体健康和心理健康都至关重要。\n\n建立规律的睡眠时间表是改善睡眠质量的第一步。尽量每天在同一时间上床睡觉和起床，即使在周末也要保持这个习惯。\n\n创造良好的睡眠环境。保持卧室温度适宜（18-22°C），保持安静和黑暗。使用遮光窗帘和耳塞可以帮助创造更好的睡眠环境。\n\n睡前避免使用电子设备。蓝光会抑制褪黑素的分泌，影响睡眠。建议睡前1小时停止使用手机、电脑等电子设备。\n\n建立睡前放松习惯。可以阅读、听轻音乐、进行深呼吸练习或冥想。避免在睡前进行剧烈运动或刺激性活动。\n\n注意饮食对睡眠的影响。避免在睡前3小时内进食大量食物，限制咖啡因和酒精的摄入。\n\n如果长期存在睡眠问题，建议咨询专业医生，排除睡眠障碍等疾病。记住，良好的睡眠是健康生活的基础。",
            category: "sleep",
            author: "陈睡眠",
            authorTitle: "睡眠医学专家",
            publishTime: "2024-01-12",
            readCount: 1089,
            tags: ["睡眠健康", "睡眠质量", "健康生活"]
          },
          {
            id: 5,
            title: "常见疾病的预防措施",
            summary: "了解常见疾病的预防方法，建立健康的生活方式，降低患病风险。",
            content: "预防胜于治疗，了解常见疾病的预防措施是维护健康的重要方法。\n\n心血管疾病是威胁健康的主要疾病之一。预防措施包括：控制血压、血糖和血脂，戒烟限酒，保持健康体重，规律运动，低盐低脂饮食。\n\n糖尿病预防需要控制体重，保持健康饮食，规律运动，定期监测血糖。避免高糖高脂饮食，多吃蔬菜水果和全谷物。\n\n癌症预防包括：戒烟限酒，避免过度日晒，定期体检，保持健康体重，多吃蔬菜水果，限制加工肉类摄入。\n\n骨质疏松预防需要充足的钙质和维生素D摄入，规律运动，避免吸烟和过量饮酒。\n\n心理健康同样重要。保持积极心态，学会压力管理，建立良好的人际关系，寻求专业帮助都是维护心理健康的重要方法。\n\n定期体检是预防疾病的重要手段，可以早期发现和干预健康问题。建议根据年龄和性别进行相应的体检项目。\n\n记住，健康的生活方式是预防疾病的最佳方法，投资健康就是投资未来。",
            category: "disease",
            author: "赵预防",
            authorTitle: "预防医学专家",
            publishTime: "2024-01-11",
            readCount: 1567,
            tags: ["疾病预防", "健康生活", "预防医学"]
          },
          {
            id: 6,
            title: "心理健康的重要性",
            summary: "心理健康与身体健康同样重要，了解如何维护心理健康。",
            content: "心理健康是整体健康的重要组成部分，与身体健康密不可分。维护心理健康对提高生活质量、增强抗压能力、改善人际关系都至关重要。\n\n心理健康包括情绪稳定、认知功能正常、社会适应良好等方面。当心理状态出现问题时，会直接影响身体健康，反之亦然。\n\n维护心理健康的方法包括：\n\n1. 保持积极的心态。学会从积极的角度看待问题，培养乐观的生活态度。\n\n2. 建立良好的人际关系。与家人、朋友保持密切联系，分享感受，获得支持。\n\n3. 学会压力管理。掌握有效的压力应对技巧，如深呼吸、冥想、运动等。\n\n4. 保持工作与生活的平衡。合理安排时间，避免过度工作，给自己留出休息和娱乐的时间。\n\n5. 寻求专业帮助。当心理问题严重影响生活时，不要犹豫寻求心理咨询师或精神科医生的帮助。\n\n6. 培养兴趣爱好。参与自己喜欢的活动，可以带来成就感和满足感。\n\n记住，关注心理健康不是软弱的表现，而是智慧的选择。投资心理健康，就是投资更好的自己。",
            category: "mental",
            author: "孙心理",
            authorTitle: "临床心理学家",
            publishTime: "2024-01-10",
            readCount: 2134,
            tags: ["心理健康", "心理保健", "生活质量"]
          }
        ]
      };
    },
    computed: {
      filteredArticles() {
        if (this.currentCategory === "all") {
          return this.articles;
        }
        return this.articles.filter(
          (article) => article.category === this.currentCategory
        );
      }
    },
    methods: {
      async loadArticles() {
        try {
          this.loading = true;
          await new Promise((resolve) => setTimeout(resolve, 1e3));
          this.loading = false;
        } catch (error2) {
          formatAppLog("error", "at pages/health/index.vue:327", "加载文章失败:", error2);
          this.loading = false;
        }
      },
      filterByCategory(category) {
        this.currentCategory = category;
      },
      getCategoryName(category) {
        const categoryMap = {
          mental: "心理健康",
          nutrition: "营养健康",
          exercise: "运动健身",
          sleep: "睡眠健康",
          disease: "疾病预防"
        };
        return categoryMap[category] || "其他";
      },
      getCategoryClass(category) {
        const classMap = {
          mental: "category-mental",
          nutrition: "category-nutrition",
          exercise: "category-exercise",
          sleep: "category-sleep",
          disease: "category-disease"
        };
        return classMap[category] || "category-default";
      },
      formatDate(dateStr) {
        const date2 = new Date(dateStr);
        const now2 = /* @__PURE__ */ new Date();
        const diff2 = now2 - date2;
        const days2 = Math.floor(diff2 / (1e3 * 60 * 60 * 24));
        if (days2 === 0) {
          return "今天";
        } else if (days2 === 1) {
          return "昨天";
        } else if (days2 < 7) {
          return `${days2}天前`;
        } else {
          return date2.toLocaleDateString("zh-CN", {
            year: "numeric",
            month: "short",
            day: "numeric"
          });
        }
      },
      viewArticle(article) {
        this.selectedArticle = article;
        this.showArticle = true;
      },
      closeArticle() {
        this.showArticle = false;
        this.selectedArticle = {};
      },
      goBack() {
        uni.navigateBack();
      }
    },
    onShow() {
      this.loadArticles();
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["health-container", _ctx.containerClasses]),
        style: vue.normalizeStyle({ "--theme-color": $data.themeColor })
      },
      [
        vue.createElementVNode("view", { class: "category-section" }, [
          vue.createElementVNode("scroll-view", {
            class: "category-scroll",
            "scroll-x": ""
          }, [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["category-item", { active: $data.currentCategory === "all" }]),
                onClick: _cache[0] || (_cache[0] = ($event) => $options.filterByCategory("all"))
              },
              [
                vue.createElementVNode("text", { class: "category-icon" }, "📚"),
                vue.createElementVNode("text", { class: "category-text" }, "全部")
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["category-item", { active: $data.currentCategory === "mental" }]),
                onClick: _cache[1] || (_cache[1] = ($event) => $options.filterByCategory("mental"))
              },
              [
                vue.createElementVNode("text", { class: "category-icon" }, "💡"),
                vue.createElementVNode("text", { class: "category-text" }, "心理健康")
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["category-item", { active: $data.currentCategory === "nutrition" }]),
                onClick: _cache[2] || (_cache[2] = ($event) => $options.filterByCategory("nutrition"))
              },
              [
                vue.createElementVNode("text", { class: "category-icon" }, "🍎"),
                vue.createElementVNode("text", { class: "category-text" }, "营养健康")
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["category-item", { active: $data.currentCategory === "exercise" }]),
                onClick: _cache[3] || (_cache[3] = ($event) => $options.filterByCategory("exercise"))
              },
              [
                vue.createElementVNode("text", { class: "category-icon" }, "🏃"),
                vue.createElementVNode("text", { class: "category-text" }, "运动健身")
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["category-item", { active: $data.currentCategory === "sleep" }]),
                onClick: _cache[4] || (_cache[4] = ($event) => $options.filterByCategory("sleep"))
              },
              [
                vue.createElementVNode("text", { class: "category-icon" }, "🌙"),
                vue.createElementVNode("text", { class: "category-text" }, "睡眠健康")
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["category-item", { active: $data.currentCategory === "disease" }]),
                onClick: _cache[5] || (_cache[5] = ($event) => $options.filterByCategory("disease"))
              },
              [
                vue.createElementVNode("text", { class: "category-icon" }, "⚕️"),
                vue.createElementVNode("text", { class: "category-text" }, "疾病预防")
              ],
              2
              /* CLASS */
            )
          ])
        ]),
        !$data.loading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "article-list"
        }, [
          $options.filteredArticles.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "empty-state"
          }, [
            vue.createElementVNode("text", { class: "empty-emoji" }, "📚"),
            vue.createElementVNode("text", { class: "empty-text" }, "暂无相关文章"),
            vue.createElementVNode("text", { class: "empty-desc" }, "请选择其他分类查看")
          ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($options.filteredArticles, (article, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: article.id,
                  class: "article-card",
                  onClick: ($event) => $options.viewArticle(article)
                }, [
                  vue.createElementVNode("view", { class: "card-header" }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(["article-category", $options.getCategoryClass(article.category)])
                      },
                      [
                        vue.createElementVNode(
                          "text",
                          { class: "category-text" },
                          vue.toDisplayString($options.getCategoryName(article.category)),
                          1
                          /* TEXT */
                        )
                      ],
                      2
                      /* CLASS */
                    ),
                    vue.createElementVNode("view", { class: "article-meta" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "read-count" },
                        vue.toDisplayString(article.readCount) + "阅读",
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "text",
                        { class: "publish-time" },
                        vue.toDisplayString($options.formatDate(article.publishTime)),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "card-content" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "article-title" },
                      vue.toDisplayString(article.title),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "article-summary" },
                      vue.toDisplayString(article.summary),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "article-tags" }, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(article.tags, (tag2) => {
                          return vue.openBlock(), vue.createElementBlock(
                            "text",
                            {
                              key: tag2,
                              class: "tag"
                            },
                            vue.toDisplayString(tag2),
                            1
                            /* TEXT */
                          );
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "card-footer" }, [
                    vue.createElementVNode("view", { class: "author-info" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "author-name" },
                        vue.toDisplayString(article.author),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "text",
                        { class: "author-title" },
                        vue.toDisplayString(article.authorTitle),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "read-more" }, [
                      vue.createElementVNode("text", { class: "read-text" }, "阅读全文"),
                      vue.createElementVNode("text", { class: "arrow" }, "➡️")
                    ])
                  ])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]))
        ])) : vue.createCommentVNode("v-if", true),
        $data.loading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "loading-container"
        }, [
          vue.createElementVNode("view", { class: "loading-spinner" }),
          vue.createElementVNode("text", { class: "loading-text" }, "加载中...")
        ])) : vue.createCommentVNode("v-if", true),
        $data.showArticle ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "article-modal",
          onClick: _cache[9] || (_cache[9] = (...args) => $options.closeArticle && $options.closeArticle(...args))
        }, [
          vue.createElementVNode("view", {
            class: "article-content",
            onClick: _cache[8] || (_cache[8] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "article-header" }, [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["article-category", $options.getCategoryClass($data.selectedArticle.category)])
                },
                [
                  vue.createElementVNode(
                    "text",
                    { class: "category-text" },
                    vue.toDisplayString($options.getCategoryName($data.selectedArticle.category)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              vue.createElementVNode("view", {
                class: "close-btn",
                onClick: _cache[6] || (_cache[6] = (...args) => $options.closeArticle && $options.closeArticle(...args))
              }, "×")
            ]),
            vue.createElementVNode("view", { class: "article-body" }, [
              vue.createElementVNode(
                "text",
                { class: "article-title" },
                vue.toDisplayString($data.selectedArticle.title),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "article-meta" }, [
                vue.createElementVNode("view", { class: "meta-item" }, [
                  vue.createElementVNode("text", { class: "meta-label" }, "作者"),
                  vue.createElementVNode(
                    "text",
                    { class: "meta-value" },
                    vue.toDisplayString($data.selectedArticle.author) + " · " + vue.toDisplayString($data.selectedArticle.authorTitle),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "meta-item" }, [
                  vue.createElementVNode("text", { class: "meta-label" }, "发布时间"),
                  vue.createElementVNode(
                    "text",
                    { class: "meta-value" },
                    vue.toDisplayString($options.formatDate($data.selectedArticle.publishTime)),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "meta-item" }, [
                  vue.createElementVNode("text", { class: "meta-label" }, "阅读量"),
                  vue.createElementVNode(
                    "text",
                    { class: "meta-value" },
                    vue.toDisplayString($data.selectedArticle.readCount),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createElementVNode("view", { class: "article-tags" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.selectedArticle.tags, (tag2) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: tag2,
                        class: "tag"
                      },
                      vue.toDisplayString(tag2),
                      1
                      /* TEXT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("view", { class: "article-content-text" }, [
                vue.createElementVNode(
                  "text",
                  { class: "content-text" },
                  vue.toDisplayString($data.selectedArticle.content),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "article-footer" }, [
              vue.createElementVNode("button", {
                class: "close-btn",
                onClick: _cache[7] || (_cache[7] = (...args) => $options.closeArticle && $options.closeArticle(...args))
              }, " 关闭 ")
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const PagesHealthIndex = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/health/index.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {
        themeColor: "#4facfe",
        loading: true,
        searchKeyword: "",
        showDetail: false,
        selectedDoctor: {},
        doctors: [
          {
            id: 1,
            name: "李心怡",
            gender: "女",
            age: 35,
            experience: 8,
            title: "主任医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor1&backgroundColor=b6e3f4",
            rating: 4.9,
            reviewCount: 1286,
            isOnline: true,
            specialties: ["焦虑症", "抑郁症", "情感咨询"],
            introduction: "专注于认知行为疗法，帮助患者建立积极思维模式，擅长处理焦虑和抑郁问题。",
            background: "北京大学心理学博士，中科院心理所博士后，国家二级心理咨询师，从事心理咨询8年。",
            consultationCount: 3240,
            successRate: 94,
            responseTime: 15,
            price: 300
          },
          {
            id: 2,
            name: "王明华",
            gender: "男",
            age: 42,
            experience: 12,
            title: "副主任医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor2&backgroundColor=c7a2ff",
            rating: 4.8,
            reviewCount: 2156,
            isOnline: false,
            specialties: ["家庭治疗", "婚姻咨询", "亲子关系"],
            introduction: "系统家庭治疗专家，擅长解决家庭矛盾和亲子关系问题，帮助家庭重建和谐关系。",
            background: "清华大学心理学硕士，美国加州大学访问学者，家庭治疗师认证，从业12年。",
            consultationCount: 4560,
            successRate: 92,
            responseTime: 20,
            price: 350
          },
          {
            id: 3,
            name: "张雅文",
            gender: "女",
            age: 38,
            experience: 10,
            title: "主治医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor3&backgroundColor=ffd1dc",
            rating: 4.9,
            reviewCount: 1890,
            isOnline: true,
            specialties: ["儿童心理", "青少年问题", "学习障碍"],
            introduction: "儿童心理专家，温柔耐心，擅长处理儿童和青少年的心理问题，深受家长信任。",
            background: "北京师范大学心理学博士，儿童心理研究所研究员，沙盘游戏治疗师，从业10年。",
            consultationCount: 2890,
            successRate: 96,
            responseTime: 12,
            price: 280
          },
          {
            id: 4,
            name: "陈志强",
            gender: "男",
            age: 45,
            experience: 15,
            title: "主任医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor4&backgroundColor=ffb3ba",
            rating: 4.7,
            reviewCount: 3240,
            isOnline: true,
            specialties: ["创伤治疗", "PTSD", "危机干预"],
            introduction: "创伤治疗专家，具有丰富的危机干预经验，帮助患者走出心理创伤，重建生活信心。",
            background: "复旦大学心理学博士，国际创伤治疗师认证，危机干预专家，从业15年。",
            consultationCount: 5670,
            successRate: 89,
            responseTime: 25,
            price: 400
          },
          {
            id: 5,
            name: "刘美玲",
            gender: "女",
            age: 33,
            experience: 7,
            title: "主治医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor5&backgroundColor=bae1ff",
            rating: 4.8,
            reviewCount: 1560,
            isOnline: true,
            specialties: ["情感咨询", "恋爱问题", "人际关系"],
            introduction: "情感咨询专家，擅长处理恋爱关系和人际交往问题，帮助来访者建立健康的人际关系。",
            background: "华东师范大学心理学硕士，情感咨询师认证，人际关系治疗师，从业7年。",
            consultationCount: 2130,
            successRate: 93,
            responseTime: 18,
            price: 250
          },
          {
            id: 6,
            name: "赵建国",
            gender: "男",
            age: 50,
            experience: 18,
            title: "主任医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor6&backgroundColor=ffdfba",
            rating: 4.9,
            reviewCount: 4120,
            isOnline: false,
            specialties: ["老年心理", "认知障碍", "临终关怀"],
            introduction: "老年心理专家，关注老年人的心理健康，擅长处理认知障碍和临终关怀问题。",
            background: "中山大学心理学博士，老年心理研究所所长，认知行为治疗师，从业18年。",
            consultationCount: 6780,
            successRate: 91,
            responseTime: 30,
            price: 450
          },
          {
            id: 7,
            name: "孙晓敏",
            gender: "女",
            age: 36,
            experience: 9,
            title: "主治医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor7&backgroundColor=ffffba",
            rating: 4.8,
            reviewCount: 1980,
            isOnline: true,
            specialties: ["职场心理", "压力管理", "职业规划"],
            introduction: "职场心理专家，帮助职场人士处理工作压力，提升职业幸福感，实现职业发展。",
            background: "中国人民大学心理学硕士，职业规划师认证，压力管理专家，从业9年。",
            consultationCount: 2670,
            successRate: 95,
            responseTime: 16,
            price: 320
          },
          {
            id: 8,
            name: "周文博",
            gender: "男",
            age: 41,
            experience: 11,
            title: "副主任医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor8&backgroundColor=baffc9",
            rating: 4.7,
            reviewCount: 2890,
            isOnline: true,
            specialties: ["成瘾治疗", "行为矫正", "心理康复"],
            introduction: "成瘾治疗专家，帮助患者戒除各种成瘾行为，重建健康的生活方式。",
            background: "武汉大学心理学博士，成瘾治疗师认证，行为治疗专家，从业11年。",
            consultationCount: 3890,
            successRate: 88,
            responseTime: 22,
            price: 380
          },
          {
            id: 9,
            name: "吴丽华",
            gender: "女",
            age: 39,
            experience: 10,
            title: "主治医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor9&backgroundColor=ffb3d1",
            rating: 4.9,
            reviewCount: 2340,
            isOnline: false,
            specialties: ["女性心理", "产后抑郁", "更年期问题"],
            introduction: "女性心理专家，关注女性各个阶段的心理健康，特别擅长处理产后抑郁和更年期问题。",
            background: "北京协和医学院心理学硕士，女性心理研究所研究员，产后心理治疗师，从业10年。",
            consultationCount: 3120,
            successRate: 94,
            responseTime: 14,
            price: 290
          },
          {
            id: 10,
            name: "郑浩然",
            gender: "男",
            age: 37,
            experience: 8,
            title: "主治医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor10&backgroundColor=d1b3ff",
            rating: 4.8,
            reviewCount: 1760,
            isOnline: true,
            specialties: ["社交恐惧", "强迫症", "恐惧症"],
            introduction: "焦虑障碍专家，擅长处理各种焦虑相关疾病，帮助患者克服恐惧，恢复正常生活。",
            background: "上海交通大学心理学博士，焦虑障碍治疗师认证，暴露疗法专家，从业8年。",
            consultationCount: 2450,
            successRate: 92,
            responseTime: 19,
            price: 330
          },
          {
            id: 11,
            name: "林雅婷",
            gender: "女",
            age: 34,
            experience: 6,
            title: "主治医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor11&backgroundColor=b3d1ff",
            rating: 4.8,
            reviewCount: 1420,
            isOnline: true,
            specialties: ["艺术治疗", "音乐治疗", "表达性治疗"],
            introduction: "艺术治疗师，通过艺术创作帮助患者表达内心情感，特别适合儿童和青少年。",
            background: "中央美术学院心理学硕士，艺术治疗师认证，音乐治疗师，从业6年。",
            consultationCount: 1890,
            successRate: 90,
            responseTime: 21,
            price: 260
          },
          {
            id: 12,
            name: "黄志明",
            gender: "男",
            age: 48,
            experience: 16,
            title: "主任医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor12&backgroundColor=ffd1b3",
            rating: 4.9,
            reviewCount: 3560,
            isOnline: false,
            specialties: ["精神分析", "人格障碍", "深度心理治疗"],
            introduction: "精神分析专家，擅长深度心理治疗，帮助患者探索潜意识，解决深层心理问题。",
            background: "北京大学心理学博士，精神分析学会会员，国际精神分析师认证，从业16年。",
            consultationCount: 5230,
            successRate: 87,
            responseTime: 35,
            price: 500
          },
          {
            id: 13,
            name: "马小芳",
            gender: "女",
            age: 31,
            experience: 5,
            title: "主治医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor13&backgroundColor=b3ffd1",
            rating: 4.7,
            reviewCount: 980,
            isOnline: true,
            specialties: ["正念治疗", "冥想指导", "压力缓解"],
            introduction: "正念治疗师，通过正念冥想帮助患者缓解压力，提升心理韧性，改善生活质量。",
            background: "南京大学心理学硕士，正念治疗师认证，冥想指导师，从业5年。",
            consultationCount: 1560,
            successRate: 93,
            responseTime: 17,
            price: 220
          },
          {
            id: 14,
            name: "何建华",
            gender: "男",
            age: 44,
            experience: 13,
            title: "副主任医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor14&backgroundColor=d1ffb3",
            rating: 4.8,
            reviewCount: 2670,
            isOnline: true,
            specialties: ["团体治疗", "人际关系", "社交技能训练"],
            introduction: "团体治疗专家，通过团体活动帮助患者改善人际关系，提升社交技能。",
            background: "华中师范大学心理学博士，团体治疗师认证，社交技能训练师，从业13年。",
            consultationCount: 3780,
            successRate: 91,
            responseTime: 24,
            price: 360
          },
          {
            id: 15,
            name: "徐美丽",
            gender: "女",
            age: 40,
            experience: 11,
            title: "副主任医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor15&backgroundColor=ffb3ff",
            rating: 4.9,
            reviewCount: 2980,
            isOnline: false,
            specialties: ["睡眠障碍", "失眠治疗", "生物反馈"],
            introduction: "睡眠专家，帮助患者解决各种睡眠问题，通过生物反馈技术改善睡眠质量。",
            background: "北京师范大学心理学博士，睡眠医学专家，生物反馈治疗师，从业11年。",
            consultationCount: 4120,
            successRate: 96,
            responseTime: 13,
            price: 340
          },
          {
            id: 16,
            name: "宋志伟",
            gender: "男",
            age: 46,
            experience: 14,
            title: "主任医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor16&backgroundColor=b3ffff",
            rating: 4.8,
            reviewCount: 3340,
            isOnline: true,
            specialties: ["性心理", "性功能障碍", "性取向咨询"],
            introduction: "性心理专家，专业处理各种性心理问题，帮助患者建立健康的性观念。",
            background: "复旦大学心理学博士，性心理治疗师认证，性医学专家，从业14年。",
            consultationCount: 4560,
            successRate: 89,
            responseTime: 28,
            price: 420
          },
          {
            id: 17,
            name: "韩雪梅",
            gender: "女",
            age: 32,
            experience: 6,
            title: "主治医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor17&backgroundColor=ffffb3",
            rating: 4.7,
            reviewCount: 1230,
            isOnline: true,
            specialties: ["饮食障碍", "身体意象", "自我接纳"],
            introduction: "饮食障碍专家，帮助患者建立健康的身体意象，改善饮食关系，提升自我接纳。",
            background: "浙江大学心理学硕士，饮食障碍治疗师认证，身体意象专家，从业6年。",
            consultationCount: 1780,
            successRate: 92,
            responseTime: 20,
            price: 270
          },
          {
            id: 18,
            name: "冯国强",
            gender: "男",
            age: 52,
            experience: 20,
            title: "主任医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor18&backgroundColor=d1d1ff",
            rating: 4.9,
            reviewCount: 4560,
            isOnline: false,
            specialties: ["心理评估", "智力测试", "人格测试"],
            introduction: "心理评估专家，擅长各种心理测试和评估，为患者提供准确的心理诊断。",
            background: "中科院心理所博士，心理测量学专家，国际心理评估师认证，从业20年。",
            consultationCount: 6780,
            successRate: 95,
            responseTime: 40,
            price: 480
          },
          {
            id: 19,
            name: "田晓红",
            gender: "女",
            age: 38,
            experience: 9,
            title: "主治医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor19&backgroundColor=ffd1d1",
            rating: 4.8,
            reviewCount: 2100,
            isOnline: true,
            specialties: ["创伤后成长", "心理韧性", "积极心理学"],
            introduction: "积极心理学专家，帮助患者从创伤中成长，提升心理韧性，发现生活的意义。",
            background: "清华大学心理学博士，积极心理学研究员，创伤后成长专家，从业9年。",
            consultationCount: 2890,
            successRate: 94,
            responseTime: 16,
            price: 310
          },
          {
            id: 20,
            name: "谢文斌",
            gender: "男",
            age: 43,
            experience: 12,
            title: "副主任医师",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor20&backgroundColor=d1ffd1",
            rating: 4.7,
            reviewCount: 2450,
            isOnline: true,
            specialties: ["网络成瘾", "游戏障碍", "数字健康"],
            introduction: "数字健康专家，帮助患者摆脱网络和游戏成瘾，建立健康的数字生活方式。",
            background: "北京理工大学心理学博士，数字健康专家，网络成瘾治疗师，从业12年。",
            consultationCount: 3450,
            successRate: 90,
            responseTime: 23,
            price: 370
          }
        ]
      };
    },
    computed: {
      filteredDoctors() {
        let filtered = this.doctors;
        if (this.searchKeyword) {
          const keyword = this.searchKeyword.toLowerCase();
          filtered = filtered.filter(
            (doctor) => doctor.name.toLowerCase().includes(keyword) || doctor.specialties.some(
              (specialty) => specialty.toLowerCase().includes(keyword)
            ) || doctor.introduction.toLowerCase().includes(keyword)
          );
        }
        return filtered;
      }
    },
    methods: {
      async loadDoctors() {
        try {
          this.loading = true;
          await new Promise((resolve) => setTimeout(resolve, 1e3));
          this.loading = false;
        } catch (error2) {
          formatAppLog("error", "at pages/psychologist/index.vue:690", "加载医生列表失败:", error2);
          this.loading = false;
        }
      },
      handleSearch() {
      },
      viewDoctorDetail(doctor) {
        this.selectedDoctor = doctor;
        this.showDetail = true;
      },
      closeDetail() {
        this.showDetail = false;
        this.selectedDoctor = {};
      },
      makeAppointment(doctor) {
        uni.navigateTo({
          url: `/pages/psychologist/appointment?doctorId=${doctor.id}&doctorName=${encodeURIComponent(doctor.name)}&doctorTitle=${encodeURIComponent(doctor.title)}&doctorAvatar=${encodeURIComponent(doctor.avatar)}&doctorSpecialties=${encodeURIComponent(doctor.specialties.join(","))}`
        });
      },
      goBack() {
        uni.navigateBack();
      },
      goToAppointmentRecord() {
        uni.navigateTo({
          url: "/pages/psychologist/record"
        });
      }
    },
    onShow() {
      this.loadDoctors();
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["psychologist-container", _ctx.containerClasses]),
        style: vue.normalizeStyle({ "--theme-color": $data.themeColor })
      },
      [
        vue.createElementVNode("view", { class: "header" }, [
          vue.createElementVNode("view", { class: "header-right" }, [
            vue.createElementVNode("view", {
              class: "appointment-record",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.goToAppointmentRecord && $options.goToAppointmentRecord(...args))
            }, [
              vue.createElementVNode("text", { class: "record-icon" }, "📋"),
              vue.createElementVNode("text", { class: "record-text" }, "预约记录")
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "search-section" }, [
          vue.createElementVNode("view", { class: "search-bar" }, [
            vue.createElementVNode("text", { class: "search-icon" }, "🔍"),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                class: "search-input",
                placeholder: "搜索医生姓名或专业领域",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.searchKeyword = $event),
                onInput: _cache[2] || (_cache[2] = (...args) => $options.handleSearch && $options.handleSearch(...args))
              },
              null,
              544
              /* NEED_HYDRATION, NEED_PATCH */
            ), [
              [vue.vModelText, $data.searchKeyword]
            ])
          ])
        ]),
        !$data.loading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "doctor-list"
        }, [
          $options.filteredDoctors.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "empty-state"
          }, [
            vue.createElementVNode("text", { class: "empty-emoji" }, "👩‍⚕️"),
            vue.createElementVNode("text", { class: "empty-text" }, "暂无匹配的医生"),
            vue.createElementVNode("text", { class: "empty-desc" }, "请尝试其他筛选条件")
          ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($options.filteredDoctors, (doctor, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: doctor.id,
                  class: "doctor-card",
                  onClick: ($event) => $options.viewDoctorDetail(doctor)
                }, [
                  vue.createElementVNode("view", { class: "card-header" }, [
                    vue.createElementVNode("view", { class: "avatar-container" }, [
                      vue.createElementVNode("image", {
                        src: doctor.avatar,
                        class: "doctor-avatar",
                        mode: "aspectFill"
                      }, null, 8, ["src"]),
                      vue.createElementVNode(
                        "view",
                        {
                          class: vue.normalizeClass(["online-status", { online: doctor.isOnline }])
                        },
                        null,
                        2
                        /* CLASS */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "doctor-info" }, [
                      vue.createElementVNode("view", { class: "name-section" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "doctor-name" },
                          vue.toDisplayString(doctor.name),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", { class: "basic-info" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "info-item" },
                          vue.toDisplayString(doctor.age) + "岁",
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "text",
                          { class: "info-item" },
                          "医龄" + vue.toDisplayString(doctor.experience) + "年",
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "text",
                          { class: "info-item" },
                          vue.toDisplayString(doctor.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "rating-section" }, [
                      vue.createElementVNode("view", { class: "rating" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "rating-score" },
                          vue.toDisplayString(doctor.rating),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode("text", { class: "rating-star" }, "⭐")
                      ]),
                      vue.createElementVNode(
                        "text",
                        { class: "rating-count" },
                        vue.toDisplayString(doctor.reviewCount) + "评价",
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "card-content" }, [
                    vue.createElementVNode("view", { class: "specialties" }, [
                      vue.createElementVNode("text", { class: "specialty-label" }, "专业领域："),
                      vue.createElementVNode("view", { class: "specialty-tags" }, [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(doctor.specialties, (specialty) => {
                            return vue.openBlock(), vue.createElementBlock(
                              "text",
                              {
                                key: specialty,
                                class: "specialty-tag"
                              },
                              vue.toDisplayString(specialty),
                              1
                              /* TEXT */
                            );
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "introduction" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "intro-text" },
                        vue.toDisplayString(doctor.introduction),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "card-footer" }, [
                    vue.createElementVNode("view", { class: "action-buttons" }, [
                      vue.createElementVNode("button", {
                        class: "appointment-btn",
                        onClick: vue.withModifiers(($event) => $options.makeAppointment(doctor), ["stop"])
                      }, " 预约咨询 ", 8, ["onClick"])
                    ])
                  ])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]))
        ])) : vue.createCommentVNode("v-if", true),
        $data.loading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "loading-container"
        }, [
          vue.createElementVNode("view", { class: "loading-spinner" }),
          vue.createElementVNode("text", { class: "loading-text" }, "加载中...")
        ])) : vue.createCommentVNode("v-if", true),
        $data.showDetail ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "detail-modal",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.closeDetail && $options.closeDetail(...args))
        }, [
          vue.createElementVNode("view", {
            class: "detail-content",
            onClick: _cache[5] || (_cache[5] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "detail-header" }, [
              vue.createElementVNode("view", { class: "doctor-profile" }, [
                vue.createElementVNode("image", {
                  src: $data.selectedDoctor.avatar,
                  class: "detail-avatar",
                  mode: "aspectFill"
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "profile-info" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "detail-name" },
                    vue.toDisplayString($data.selectedDoctor.name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "detail-title" },
                    vue.toDisplayString($data.selectedDoctor.title),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createElementVNode("view", {
                class: "close-btn",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.closeDetail && $options.closeDetail(...args))
              }, "×")
            ]),
            vue.createElementVNode("view", { class: "detail-body" }, [
              vue.createElementVNode("view", { class: "detail-section" }, [
                vue.createElementVNode("text", { class: "section-label" }, "基本信息"),
                vue.createElementVNode("view", { class: "info-grid" }, [
                  vue.createElementVNode("view", { class: "info-item" }, [
                    vue.createElementVNode("text", { class: "info-label" }, "性别"),
                    vue.createElementVNode(
                      "text",
                      { class: "info-value" },
                      vue.toDisplayString($data.selectedDoctor.gender),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "info-item" }, [
                    vue.createElementVNode("text", { class: "info-label" }, "年龄"),
                    vue.createElementVNode(
                      "text",
                      { class: "info-value" },
                      vue.toDisplayString($data.selectedDoctor.age) + "岁",
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "info-item" }, [
                    vue.createElementVNode("text", { class: "info-label" }, "医龄"),
                    vue.createElementVNode(
                      "text",
                      { class: "info-value" },
                      vue.toDisplayString($data.selectedDoctor.experience) + "年",
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "info-item" }, [
                    vue.createElementVNode("text", { class: "info-label" }, "职称"),
                    vue.createElementVNode(
                      "text",
                      { class: "info-value" },
                      vue.toDisplayString($data.selectedDoctor.title),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              vue.createElementVNode("view", { class: "detail-section" }, [
                vue.createElementVNode("text", { class: "section-label" }, "专业领域"),
                vue.createElementVNode("view", { class: "specialty-list" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($data.selectedDoctor.specialties, (specialty) => {
                      return vue.openBlock(), vue.createElementBlock(
                        "text",
                        {
                          key: specialty,
                          class: "specialty-item"
                        },
                        vue.toDisplayString(specialty),
                        1
                        /* TEXT */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ]),
              vue.createElementVNode("view", { class: "detail-section" }, [
                vue.createElementVNode("text", { class: "section-label" }, "个人简介"),
                vue.createElementVNode(
                  "text",
                  { class: "detail-intro" },
                  vue.toDisplayString($data.selectedDoctor.introduction),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "detail-section" }, [
                vue.createElementVNode("text", { class: "section-label" }, "专业背景"),
                vue.createElementVNode(
                  "text",
                  { class: "detail-background" },
                  vue.toDisplayString($data.selectedDoctor.background),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "detail-footer" }, [
              vue.createElementVNode("button", {
                class: "detail-appointment-btn",
                onClick: _cache[4] || (_cache[4] = ($event) => $options.makeAppointment($data.selectedDoctor))
              }, " 预约咨询 ")
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const PagesPsychologistIndex = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/psychologist/index.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        themeColor: "#4facfe",
        showSuccess: false,
        formData: {
          name: "",
          age: "",
          gender: "",
          phone: "",
          content: "",
          urgency: "一般",
          timePreference: "随时"
        },
        doctorInfo: {
          id: 1,
          name: "李心怡",
          title: "主任医师",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor1&backgroundColor=b6e3f4",
          specialties: ["焦虑症", "抑郁症", "情感咨询"]
        }
      };
    },
    computed: {
      isFormValid() {
        return this.formData.name.trim() !== "" && this.formData.age.trim() !== "" && this.formData.gender !== "" && this.formData.phone.trim() !== "" && this.formData.content.trim() !== "";
      }
    },
    methods: {
      selectGender(gender) {
        this.formData.gender = gender;
      },
      selectUrgency(urgency) {
        this.formData.urgency = urgency;
      },
      selectTimePreference(time) {
        this.formData.timePreference = time;
      },
      async submitAppointment() {
        if (!this.isFormValid) {
          uni.showToast({
            title: "请填写完整信息",
            icon: "none"
          });
          return;
        }
        if (!this.validatePhone(this.formData.phone)) {
          uni.showToast({
            title: "请输入正确的手机号码",
            icon: "none"
          });
          return;
        }
        const age = parseInt(this.formData.age);
        if (age < 1 || age > 120) {
          uni.showToast({
            title: "请输入正确的年龄",
            icon: "none"
          });
          return;
        }
        try {
          uni.showLoading({
            title: "提交中..."
          });
          await this.saveAppointmentToBackend();
          uni.hideLoading();
          this.showSuccess = true;
        } catch (error2) {
          uni.hideLoading();
          formatAppLog("error", "at pages/psychologist/appointment.vue:275", "提交预约失败:", error2);
          uni.showToast({
            title: "提交失败，请重试",
            icon: "error"
          });
        }
      },
      // 保存预约申请到后端
      async saveAppointmentToBackend() {
        const appointmentData = {
          doctorId: this.doctorInfo.id,
          doctorName: this.doctorInfo.name,
          patientName: this.formData.name,
          patientAge: parseInt(this.formData.age),
          patientGender: this.formData.gender,
          patientPhone: this.formData.phone,
          consultationContent: this.formData.content,
          urgency: this.formData.urgency,
          timePreference: this.formData.timePreference
        };
        formatAppLog("log", "at pages/psychologist/appointment.vue:297", "预约数据:", appointmentData);
        try {
          const result = await this.$api.appointment.saveAppointment(appointmentData);
          if (result.success) {
          } else {
          }
        } catch (error2) {
          formatAppLog("error", "at pages/psychologist/appointment.vue:319", "保存预约申请失败:", error2);
          uni.showToast({
            title: "网络错误，请检查网络连接",
            icon: "error",
            duration: 2e3
          });
          throw error2;
        }
      },
      validatePhone(phone) {
        const phoneRegex = /^1[3-9]\d{9}$/;
        return phoneRegex.test(phone);
      },
      closeSuccess() {
        this.showSuccess = false;
        setTimeout(() => {
          uni.navigateBack();
        }, 500);
      },
      goBack() {
        uni.navigateBack();
      }
    },
    onLoad(options) {
      if (options.doctorId) {
        this.doctorInfo = {
          id: options.doctorId,
          name: decodeURIComponent(options.doctorName || ""),
          title: decodeURIComponent(options.doctorTitle || ""),
          avatar: decodeURIComponent(options.doctorAvatar || ""),
          specialties: options.doctorSpecialties ? decodeURIComponent(options.doctorSpecialties).split(",") : []
        };
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["appointment-container", _ctx.containerClasses]),
        style: vue.normalizeStyle({ "--theme-color": $data.themeColor })
      },
      [
        vue.createElementVNode("view", { class: "doctor-card" }, [
          vue.createElementVNode("view", { class: "doctor-info" }, [
            vue.createElementVNode("image", {
              src: $data.doctorInfo.avatar,
              class: "doctor-avatar",
              mode: "aspectFill"
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { class: "doctor-details" }, [
              vue.createElementVNode(
                "text",
                { class: "doctor-name" },
                vue.toDisplayString($data.doctorInfo.name),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "doctor-title" },
                vue.toDisplayString($data.doctorInfo.title),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "doctor-specialties" },
                vue.toDisplayString($data.doctorInfo.specialties.join("、")),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "form-container" }, [
          vue.createElementVNode("view", { class: "form-title" }, [
            vue.createElementVNode("text", { class: "title-text" }, "填写预约信息"),
            vue.createElementVNode("text", { class: "title-desc" }, "请填写您的个人信息，我们会尽快与您联系")
          ]),
          vue.createElementVNode("view", { class: "form-content" }, [
            vue.createElementVNode("view", { class: "form-item" }, [
              vue.createElementVNode("text", { class: "form-label" }, [
                vue.createTextVNode("姓名 "),
                vue.createElementVNode("text", { class: "required" }, "*")
              ]),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  class: "form-input",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.formData.name = $event),
                  placeholder: "请输入您的真实姓名",
                  maxlength: "20"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.formData.name]
              ])
            ]),
            vue.createElementVNode("view", { class: "form-item" }, [
              vue.createElementVNode("text", { class: "form-label" }, [
                vue.createTextVNode("年龄 "),
                vue.createElementVNode("text", { class: "required" }, "*")
              ]),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  class: "form-input",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.formData.age = $event),
                  placeholder: "请输入您的年龄",
                  type: "number",
                  maxlength: "3"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.formData.age]
              ])
            ]),
            vue.createElementVNode("view", { class: "form-item" }, [
              vue.createElementVNode("text", { class: "form-label" }, [
                vue.createTextVNode("性别 "),
                vue.createElementVNode("text", { class: "required" }, "*")
              ]),
              vue.createElementVNode("view", { class: "gender-options" }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["gender-option", { selected: $data.formData.gender === "男" }]),
                    onClick: _cache[2] || (_cache[2] = ($event) => $options.selectGender("男"))
                  },
                  [
                    vue.createElementVNode("text", { class: "gender-icon" }, "👨"),
                    vue.createElementVNode("text", { class: "gender-text" }, "男")
                  ],
                  2
                  /* CLASS */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["gender-option", { selected: $data.formData.gender === "女" }]),
                    onClick: _cache[3] || (_cache[3] = ($event) => $options.selectGender("女"))
                  },
                  [
                    vue.createElementVNode("text", { class: "gender-icon" }, "👩"),
                    vue.createElementVNode("text", { class: "gender-text" }, "女")
                  ],
                  2
                  /* CLASS */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "form-item" }, [
              vue.createElementVNode("text", { class: "form-label" }, [
                vue.createTextVNode("手机号码 "),
                vue.createElementVNode("text", { class: "required" }, "*")
              ]),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  class: "form-input",
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.formData.phone = $event),
                  placeholder: "请输入您的手机号码",
                  type: "number",
                  maxlength: "11"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.formData.phone]
              ])
            ]),
            vue.createElementVNode("view", { class: "form-item" }, [
              vue.createElementVNode("text", { class: "form-label" }, [
                vue.createTextVNode("咨询内容 "),
                vue.createElementVNode("text", { class: "required" }, "*")
              ]),
              vue.withDirectives(vue.createElementVNode(
                "textarea",
                {
                  class: "form-textarea",
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.formData.content = $event),
                  placeholder: "请详细描述您希望咨询的问题或困扰，这将帮助医生更好地了解您的情况",
                  maxlength: "500",
                  "show-count": true
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.formData.content]
              ])
            ]),
            vue.createElementVNode("view", { class: "form-item" }, [
              vue.createElementVNode("text", { class: "form-label" }, "紧急程度"),
              vue.createElementVNode("view", { class: "urgency-options" }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["urgency-option", { selected: $data.formData.urgency === "一般" }]),
                    onClick: _cache[6] || (_cache[6] = ($event) => $options.selectUrgency("一般"))
                  },
                  [
                    vue.createElementVNode("text", { class: "urgency-text" }, "一般")
                  ],
                  2
                  /* CLASS */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["urgency-option", { selected: $data.formData.urgency === "较急" }]),
                    onClick: _cache[7] || (_cache[7] = ($event) => $options.selectUrgency("较急"))
                  },
                  [
                    vue.createElementVNode("text", { class: "urgency-text" }, "较急")
                  ],
                  2
                  /* CLASS */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["urgency-option", { selected: $data.formData.urgency === "紧急" }]),
                    onClick: _cache[8] || (_cache[8] = ($event) => $options.selectUrgency("紧急"))
                  },
                  [
                    vue.createElementVNode("text", { class: "urgency-text" }, "紧急")
                  ],
                  2
                  /* CLASS */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "form-item" }, [
              vue.createElementVNode("text", { class: "form-label" }, "预约时间偏好"),
              vue.createElementVNode("view", { class: "time-options" }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["time-option", { selected: $data.formData.timePreference === "工作日" }]),
                    onClick: _cache[9] || (_cache[9] = ($event) => $options.selectTimePreference("工作日"))
                  },
                  [
                    vue.createElementVNode("text", { class: "time-text" }, "工作日")
                  ],
                  2
                  /* CLASS */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["time-option", { selected: $data.formData.timePreference === "周末" }]),
                    onClick: _cache[10] || (_cache[10] = ($event) => $options.selectTimePreference("周末"))
                  },
                  [
                    vue.createElementVNode("text", { class: "time-text" }, "周末")
                  ],
                  2
                  /* CLASS */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["time-option", { selected: $data.formData.timePreference === "随时" }]),
                    onClick: _cache[11] || (_cache[11] = ($event) => $options.selectTimePreference("随时"))
                  },
                  [
                    vue.createElementVNode("text", { class: "time-text" }, "随时")
                  ],
                  2
                  /* CLASS */
                )
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "submit-section" }, [
            vue.createElementVNode("button", {
              class: vue.normalizeClass(["submit-btn", { disabled: !$options.isFormValid }]),
              onClick: _cache[12] || (_cache[12] = (...args) => $options.submitAppointment && $options.submitAppointment(...args)),
              disabled: !$options.isFormValid
            }, " 提交预约申请 ", 10, ["disabled"]),
            vue.createElementVNode("text", { class: "submit-tip" }, "提交后我们会在24小时内联系您")
          ])
        ]),
        $data.showSuccess ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "success-modal",
          onClick: _cache[15] || (_cache[15] = (...args) => $options.closeSuccess && $options.closeSuccess(...args))
        }, [
          vue.createElementVNode("view", {
            class: "success-content",
            onClick: _cache[14] || (_cache[14] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "success-icon" }, "✅"),
            vue.createElementVNode("text", { class: "success-title" }, "预约申请已提交"),
            vue.createElementVNode("text", { class: "success-message" }, " 我们已经收到您的预约信息，稍后会有工作人员联系您确认具体的咨询时间。感谢您的信任！ "),
            vue.createElementVNode("button", {
              class: "success-btn",
              onClick: _cache[13] || (_cache[13] = (...args) => $options.closeSuccess && $options.closeSuccess(...args))
            }, "确定")
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const PagesPsychologistAppointment = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/psychologist/appointment.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        themeColor: "#4facfe",
        loading: true,
        totalCount: 0,
        records: [],
        showDetail: false,
        selectedRecord: {}
      };
    },
    methods: {
      async loadAppointmentRecords() {
        try {
          this.loading = true;
          const result = await this.$api.appointment.getAppointmentList({
            current: 1,
            size: 100
          });
          if (result.success) {
            this.records = result.data.records || [];
            this.totalCount = result.data.total || 0;
          } else {
          }
        } catch (error2) {
          formatAppLog("error", "at pages/psychologist/record.vue:193", "加载预约记录失败:", error2);
          uni.showToast({
            title: "网络错误，请检查网络连接",
            icon: "error"
          });
        } finally {
          this.loading = false;
        }
      },
      formatDate(dateStr) {
        const date2 = new Date(dateStr);
        const now2 = /* @__PURE__ */ new Date();
        const diff2 = now2 - date2;
        const days2 = Math.floor(diff2 / (1e3 * 60 * 60 * 24));
        if (days2 === 0) {
          return "今天 " + date2.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
        } else if (days2 === 1) {
          return "昨天 " + date2.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
        } else if (days2 < 7) {
          return `${days2}天前`;
        } else {
          return date2.toLocaleDateString("zh-CN", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          });
        }
      },
      getStatusClass(status) {
        const statusMap = {
          "待处理": "status-pending",
          "已确认": "status-confirmed",
          "已完成": "status-completed",
          "已取消": "status-cancelled"
        };
        return statusMap[status] || "status-pending";
      },
      getUrgencyClass(urgency) {
        const urgencyMap = {
          "一般": "urgency-normal",
          "较急": "urgency-urgent",
          "紧急": "urgency-emergency"
        };
        return urgencyMap[urgency] || "urgency-normal";
      },
      viewRecordDetail(record) {
        this.selectedRecord = record;
        this.showDetail = true;
      },
      closeDetail() {
        this.showDetail = false;
        this.selectedRecord = {};
      },
      goBack() {
        uni.navigateBack();
      }
    },
    onShow() {
      this.loadAppointmentRecords();
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["record-container", _ctx.containerClasses]),
        style: vue.normalizeStyle({ "--theme-color": $data.themeColor })
      },
      [
        !$data.loading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "record-list"
        }, [
          $data.records.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "empty-state"
          }, [
            vue.createElementVNode("text", { class: "empty-emoji" }, "📋"),
            vue.createElementVNode("text", { class: "empty-text" }, "暂无预约记录"),
            vue.createElementVNode("text", { class: "empty-desc" }, "您还没有预约过任何医生")
          ])) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            style: { "margin-top": "10px" }
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.records, (record, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: record.id,
                  class: "record-card",
                  onClick: ($event) => $options.viewRecordDetail(record)
                }, [
                  vue.createElementVNode("view", { class: "card-header" }, [
                    vue.createElementVNode("view", { class: "doctor-info" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "doctor-name" },
                        vue.toDisplayString(record.doctorName),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "text",
                        { class: "appointment-time" },
                        vue.toDisplayString(record.createTime),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "card-content" }, [
                    vue.createElementVNode("view", { class: "patient-info" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "patient-name" },
                        vue.toDisplayString(record.patientName),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "text",
                        { class: "patient-details" },
                        vue.toDisplayString(record.patientAge) + "岁 · " + vue.toDisplayString(record.patientGender),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "consultation-content" }, [
                      vue.createElementVNode("text", { class: "content-label" }, "咨询内容："),
                      vue.createElementVNode(
                        "text",
                        { class: "content-text" },
                        vue.toDisplayString(record.consultationContent),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "appointment-details" }, [
                      vue.createElementVNode("view", { class: "detail-item" }, [
                        vue.createElementVNode("text", { class: "detail-label" }, "紧急程度"),
                        vue.createElementVNode(
                          "text",
                          {
                            class: vue.normalizeClass(["detail-value urgency", $options.getUrgencyClass(record.urgency)])
                          },
                          vue.toDisplayString(record.urgency),
                          3
                          /* TEXT, CLASS */
                        )
                      ]),
                      vue.createElementVNode("view", { class: "detail-item" }, [
                        vue.createElementVNode("text", { class: "detail-label" }, "时间偏好"),
                        vue.createElementVNode(
                          "text",
                          { class: "detail-value" },
                          vue.toDisplayString(record.timePreference),
                          1
                          /* TEXT */
                        )
                      ])
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "card-footer" }, [
                    vue.createElementVNode("view", { class: "contact-info" }, [
                      vue.createElementVNode("text", { class: "phone-label" }, "联系电话"),
                      vue.createElementVNode(
                        "text",
                        { class: "phone-number" },
                        vue.toDisplayString(record.patientPhone),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "action-buttons" }, [
                      vue.createElementVNode("button", {
                        class: "detail-btn",
                        onClick: vue.withModifiers(($event) => $options.viewRecordDetail(record), ["stop"])
                      }, " 查看详情 ", 8, ["onClick"])
                    ])
                  ])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]))
        ])) : vue.createCommentVNode("v-if", true),
        $data.loading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "loading-container"
        }, [
          vue.createElementVNode("view", { class: "loading-spinner" }),
          vue.createElementVNode("text", { class: "loading-text" }, "加载中...")
        ])) : vue.createCommentVNode("v-if", true),
        $data.showDetail ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "detail-modal",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.closeDetail && $options.closeDetail(...args))
        }, [
          vue.createElementVNode("view", {
            class: "detail-content",
            onClick: _cache[2] || (_cache[2] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "detail-header" }, [
              vue.createElementVNode("text", { class: "detail-title" }, "预约详情"),
              vue.createElementVNode("view", {
                class: "close-btn",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.closeDetail && $options.closeDetail(...args))
              }, "×")
            ]),
            vue.createElementVNode("view", { class: "detail-body" }, [
              vue.createElementVNode("view", { class: "detail-section" }, [
                vue.createElementVNode("text", { class: "section-label" }, "医生信息"),
                vue.createElementVNode("view", { class: "info-row" }, [
                  vue.createElementVNode("text", { class: "info-label" }, "医生姓名"),
                  vue.createElementVNode(
                    "text",
                    { class: "info-value" },
                    vue.toDisplayString($data.selectedRecord.doctorName),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createElementVNode("view", { class: "detail-section" }, [
                vue.createElementVNode("text", { class: "section-label" }, "患者信息"),
                vue.createElementVNode("view", { class: "info-row" }, [
                  vue.createElementVNode("text", { class: "info-label" }, "姓名"),
                  vue.createElementVNode(
                    "text",
                    { class: "info-value" },
                    vue.toDisplayString($data.selectedRecord.patientName),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "info-row" }, [
                  vue.createElementVNode("text", { class: "info-label" }, "年龄"),
                  vue.createElementVNode(
                    "text",
                    { class: "info-value" },
                    vue.toDisplayString($data.selectedRecord.patientAge) + "岁",
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "info-row" }, [
                  vue.createElementVNode("text", { class: "info-label" }, "性别"),
                  vue.createElementVNode(
                    "text",
                    { class: "info-value" },
                    vue.toDisplayString($data.selectedRecord.patientGender),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "info-row" }, [
                  vue.createElementVNode("text", { class: "info-label" }, "手机号"),
                  vue.createElementVNode(
                    "text",
                    { class: "info-value" },
                    vue.toDisplayString($data.selectedRecord.patientPhone),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createElementVNode("view", { class: "detail-section" }, [
                vue.createElementVNode("text", { class: "section-label" }, "预约信息"),
                vue.createElementVNode("view", { class: "info-row" }, [
                  vue.createElementVNode("text", { class: "info-label" }, "预约时间"),
                  vue.createElementVNode(
                    "text",
                    { class: "info-value" },
                    vue.toDisplayString($options.formatDate($data.selectedRecord.createTime)),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "info-row" }, [
                  vue.createElementVNode("text", { class: "info-label" }, "预约状态"),
                  vue.createElementVNode(
                    "text",
                    {
                      class: vue.normalizeClass(["info-value status-value", $options.getStatusClass($data.selectedRecord.status)])
                    },
                    vue.toDisplayString($data.selectedRecord.status),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                vue.createElementVNode("view", { class: "info-row" }, [
                  vue.createElementVNode("text", { class: "info-label" }, "紧急程度"),
                  vue.createElementVNode(
                    "text",
                    {
                      class: vue.normalizeClass(["info-value urgency-value", $options.getUrgencyClass($data.selectedRecord.urgency)])
                    },
                    vue.toDisplayString($data.selectedRecord.urgency),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                vue.createElementVNode("view", { class: "info-row" }, [
                  vue.createElementVNode("text", { class: "info-label" }, "时间偏好"),
                  vue.createElementVNode(
                    "text",
                    { class: "info-value" },
                    vue.toDisplayString($data.selectedRecord.timePreference),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createElementVNode("view", { class: "detail-section" }, [
                vue.createElementVNode("text", { class: "section-label" }, "咨询内容"),
                vue.createElementVNode(
                  "text",
                  { class: "consultation-detail" },
                  vue.toDisplayString($data.selectedRecord.consultationContent),
                  1
                  /* TEXT */
                )
              ]),
              $data.selectedRecord.remark ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "detail-section"
              }, [
                vue.createElementVNode("text", { class: "section-label" }, "备注信息"),
                vue.createElementVNode(
                  "text",
                  { class: "remark-detail" },
                  vue.toDisplayString($data.selectedRecord.remark),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("view", { class: "detail-footer" }, [
              vue.createElementVNode("button", {
                class: "detail-close-btn",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.closeDetail && $options.closeDetail(...args))
              }, "关闭")
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const PagesPsychologistRecord = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/psychologist/record.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        userInfo: {
          username: "",
          id: "",
          avatar: "",
          phone: "",
          email: ""
        }
      };
    },
    onLoad() {
      this.loadUserInfo();
    },
    onShow() {
      this.loadUserInfo();
    },
    methods: {
      loadUserInfo() {
        try {
          formatAppLog("log", "at pages/user/index.vue:109", "开始读取用户信息");
          const userInfo = uni.getStorageSync("userInfo");
          formatAppLog("log", "at pages/user/index.vue:111", "读取到的用户信息：", userInfo);
          if (userInfo) {
            this.userInfo = {
              username: userInfo.username || "用户",
              id: userInfo.id || userInfo.userId || "暂未获取",
              avatar: userInfo.avatar || "",
              phone: userInfo.phone || "未绑定手机",
              email: userInfo.email || ""
            };
          } else {
            this.userInfo = {
              username: "",
              id: "",
              avatar: "",
              phone: "",
              email: ""
            };
          }
        } catch (e) {
          formatAppLog("error", "at pages/user/index.vue:130", "获取用户信息失败", e);
        }
      },
      navigateTo(page2) {
        const pageRoutes = {
          account: "/pages/user/settings",
          password: "/pages/user/settings",
          settings: "/pages/user/settings",
          feedback: "/pages/feedback/index",
          about: "/pages/about/index"
        };
        const route2 = pageRoutes[page2];
        if (route2) {
          uni.navigateTo({
            url: route2
          });
        } else {
          uni.showToast({
            title: `${page2} 功能开发中`,
            icon: "none"
          });
        }
      },
      // 核心退出登录逻辑，原生确认弹框
      confirmLogout() {
        formatAppLog("log", "at pages/user/index.vue:156", "点击了退出登录按钮");
        uni.showModal({
          title: "退出登录",
          content: "确定要退出登录吗？",
          confirmColor: "#f5576c",
          success: (res) => {
            formatAppLog("log", "at pages/user/index.vue:163", "弹框操作结果：", res);
            if (res.confirm) {
              this.handleLogout();
            }
          }
        });
      },
      // 执行退出逻辑
      handleLogout() {
        try {
          formatAppLog("log", "at pages/user/index.vue:174", "开始执行退出逻辑");
          uni.removeStorageSync("Access-Token");
          uni.removeStorageSync("userInfo");
          formatAppLog("log", "at pages/user/index.vue:178", "清除存储完成");
          uni.showToast({
            title: "已退出登录",
            icon: "success",
            duration: 800
          });
          setTimeout(() => {
            formatAppLog("log", "at pages/user/index.vue:189", "开始跳转登录页");
            uni.reLaunch({
              // ！！！这里必须和你pages.json里的登录页路径完全一致！！！
              url: "/pages/login/login",
              success: () => {
                formatAppLog("log", "at pages/user/index.vue:194", "跳转登录页成功");
              },
              fail: (err) => {
                formatAppLog("error", "at pages/user/index.vue:197", "跳转登录页失败", err);
                uni.showToast({
                  title: "跳转失败，请检查登录页路径",
                  icon: "none",
                  duration: 2e3
                });
              }
            });
          }, 800);
        } catch (e) {
          formatAppLog("error", "at pages/user/index.vue:207", "退出登录异常", e);
          uni.showToast({
            title: "退出失败，请重试",
            icon: "none"
          });
        }
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["user-center", _ctx.containerClasses])
      },
      [
        vue.createElementVNode("view", { class: "user-info-card" }, [
          vue.createElementVNode("view", { class: "avatar-container" }, [
            vue.createElementVNode("image", {
              src: $data.userInfo.avatar || "/static/default-avatar.png",
              class: "avatar",
              mode: "aspectFill"
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("view", { class: "user-details" }, [
            vue.createElementVNode(
              "text",
              { class: "user-name" },
              vue.toDisplayString($data.userInfo.username || "用户"),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              { class: "user-id" },
              "ID: " + vue.toDisplayString($data.userInfo.id || "暂未获取"),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              { class: "user-phone" },
              vue.toDisplayString($data.userInfo.phone || "未绑定手机"),
              1
              /* TEXT */
            )
          ])
        ]),
        vue.createElementVNode("view", { class: "menu-container" }, [
          vue.createElementVNode("view", {
            class: "menu-item",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.navigateTo("account"))
          }, [
            vue.createElementVNode("view", { class: "menu-left" }, [
              vue.createElementVNode("text", { class: "menu-icon" }, "👤"),
              vue.createElementVNode("view", { class: "menu-text" }, [
                vue.createElementVNode("text", { class: "menu-title" }, "账号管理"),
                vue.createElementVNode("text", { class: "menu-desc" }, "修改绑定的手机和邮箱")
              ])
            ]),
            vue.createElementVNode("text", { class: "menu-arrow" }, ">")
          ]),
          vue.createElementVNode("view", {
            class: "menu-item",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.navigateTo("password"))
          }, [
            vue.createElementVNode("view", { class: "menu-left" }, [
              vue.createElementVNode("text", { class: "menu-icon" }, "🔐"),
              vue.createElementVNode("view", { class: "menu-text" }, [
                vue.createElementVNode("text", { class: "menu-title" }, "修改密码"),
                vue.createElementVNode("text", { class: "menu-desc" }, "更新你的登录密码")
              ])
            ]),
            vue.createElementVNode("text", { class: "menu-arrow" }, ">")
          ]),
          vue.createElementVNode("view", {
            class: "menu-item",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.navigateTo("settings"))
          }, [
            vue.createElementVNode("view", { class: "menu-left" }, [
              vue.createElementVNode("text", { class: "menu-icon" }, "⚙️"),
              vue.createElementVNode("view", { class: "menu-text" }, [
                vue.createElementVNode("text", { class: "menu-title" }, "设置"),
                vue.createElementVNode("text", { class: "menu-desc" }, "隐私、通知、显示设置")
              ])
            ]),
            vue.createElementVNode("text", { class: "menu-arrow" }, ">")
          ]),
          vue.createElementVNode("view", {
            class: "menu-item",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.navigateTo("feedback"))
          }, [
            vue.createElementVNode("view", { class: "menu-left" }, [
              vue.createElementVNode("text", { class: "menu-icon" }, "💬"),
              vue.createElementVNode("view", { class: "menu-text" }, [
                vue.createElementVNode("text", { class: "menu-title" }, "帮助与反馈"),
                vue.createElementVNode("text", { class: "menu-desc" }, "向我们提出建议和问题")
              ])
            ]),
            vue.createElementVNode("text", { class: "menu-arrow" }, ">")
          ]),
          vue.createElementVNode("view", {
            class: "menu-item",
            onClick: _cache[4] || (_cache[4] = ($event) => $options.navigateTo("about"))
          }, [
            vue.createElementVNode("view", { class: "menu-left" }, [
              vue.createElementVNode("text", { class: "menu-icon" }, "ℹ️"),
              vue.createElementVNode("view", { class: "menu-text" }, [
                vue.createElementVNode("text", { class: "menu-title" }, "关于我们"),
                vue.createElementVNode("text", { class: "menu-desc" }, '了解"暖愈心伴"信息')
              ])
            ]),
            vue.createElementVNode("text", { class: "menu-arrow" }, ">")
          ])
        ]),
        vue.createElementVNode("view", { class: "logout-section" }, [
          vue.createElementVNode("button", {
            class: "logout-btn",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.confirmLogout && $options.confirmLogout(...args))
          }, "退出登录")
        ])
      ],
      2
      /* CLASS */
    );
  }
  const PagesUserIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-79e6a490"], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/user/index.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        settings: {
          showPsychData: true,
          allowLocation: false,
          testReminder: true,
          appointmentReminder: true,
          messageReminder: true,
          fontSize: this.$themeManager.getFontSize()
        },
        fontModalVisible: false
      };
    },
    computed: {
      fontSizeLabel() {
        const fontMap = {
          small: "小",
          medium: "中",
          large: "大"
        };
        return fontMap[this.settings.fontSize] || "中";
      }
    },
    watch: {
      fontModalVisible(newVal) {
        var _a, _b;
        if (newVal) {
          (_a = this.$refs.fontPopup) == null ? void 0 : _a.open();
        } else {
          (_b = this.$refs.fontPopup) == null ? void 0 : _b.close();
        }
      }
    },
    onLoad() {
      this.loadSettings();
    },
    onShow() {
      this.settings.fontSize = this.$themeManager.getFontSize();
    },
    methods: {
      loadSettings() {
        try {
          const savedSettings = uni.getStorageSync("userSettings");
          if (savedSettings) {
            this.settings = Object.assign(this.settings, savedSettings);
          }
        } catch (e) {
          formatAppLog("error", "at pages/user/settings.vue:223", "加载设置出错", e);
        }
      },
      toggleSetting(key) {
        this.settings[key] = !this.settings[key];
        this.saveSettings();
      },
      changeFontSize(size) {
        this.settings.fontSize = size;
        this.$themeManager.setFontSize(size);
        this.fontModalVisible = false;
        uni.showToast({
          title: "字体大小已更改",
          icon: "success",
          duration: 800
        });
      },
      saveSettings() {
        try {
          uni.setStorageSync("userSettings", this.settings);
          uni.showToast({
            title: "设置已保存",
            icon: "success",
            duration: 1e3
          });
        } catch (e) {
          formatAppLog("error", "at pages/user/settings.vue:249", "保存设置出错", e);
          uni.showToast({
            title: "保存失败",
            icon: "none"
          });
        }
      },
      showPrivacy() {
        uni.showModal({
          title: "隐私政策",
          content: "我们尊重并保护您的个人隐私。本应用采用行业标准的安全措施来保护您的数据安全。详细内容请访问我们的官方网站。",
          showCancel: false,
          confirmText: "知道了"
        });
      },
      showTerms() {
        uni.showModal({
          title: "用户协议",
          content: "使用本应用即表示您同意遵守用户协议。详细条款请访问我们的官方网站。",
          showCancel: false,
          confirmText: "知道了"
        });
      },
      confirmClearCache() {
        uni.showModal({
          title: "清空缓存",
          content: "确定要清空所有本地缓存吗？此操作无法撤销。",
          confirmColor: "#f5576c",
          success: (res) => {
            if (res.confirm) {
              this.clearCache();
            }
          }
        });
      },
      clearCache() {
        try {
          uni.clearStorageSync();
          uni.showToast({
            title: "缓存已清空",
            icon: "success",
            duration: 1e3
          });
        } catch (e) {
          formatAppLog("error", "at pages/user/settings.vue:295", "清空缓存出错", e);
        }
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["settings-container", _ctx.containerClasses])
      },
      [
        vue.createElementVNode("view", { class: "settings-section" }, [
          vue.createElementVNode("view", { class: "section-title" }, "隐私设置"),
          vue.createElementVNode("view", { class: "settings-item" }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("text", { class: "item-label" }, "显示我的心理数据"),
              vue.createElementVNode("text", { class: "item-desc" }, "允许其他用户查看你的心理测试结果概览")
            ]),
            vue.createElementVNode("switch", {
              checked: $data.settings.showPsychData,
              onChange: _cache[0] || (_cache[0] = ($event) => $options.toggleSetting("showPsychData")),
              color: "#667eea"
            }, null, 40, ["checked"])
          ]),
          vue.createElementVNode("view", { class: "settings-item" }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("text", { class: "item-label" }, "允许位置分享"),
              vue.createElementVNode("text", { class: "item-desc" }, "用于推荐周边心理咨询服务")
            ]),
            vue.createElementVNode("switch", {
              checked: $data.settings.allowLocation,
              onChange: _cache[1] || (_cache[1] = ($event) => $options.toggleSetting("allowLocation")),
              color: "#667eea"
            }, null, 40, ["checked"])
          ])
        ]),
        vue.createElementVNode("view", { class: "settings-section" }, [
          vue.createElementVNode("view", { class: "section-title" }, "通知设置"),
          vue.createElementVNode("view", { class: "settings-item" }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("text", { class: "item-label" }, "接收测试提醒"),
              vue.createElementVNode("text", { class: "item-desc" }, "定期提醒你进行心理测试")
            ]),
            vue.createElementVNode("switch", {
              checked: $data.settings.testReminder,
              onChange: _cache[2] || (_cache[2] = ($event) => $options.toggleSetting("testReminder")),
              color: "#667eea"
            }, null, 40, ["checked"])
          ]),
          vue.createElementVNode("view", { class: "settings-item" }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("text", { class: "item-label" }, "接收预约提醒"),
              vue.createElementVNode("text", { class: "item-desc" }, "预约前24小时提前通知")
            ]),
            vue.createElementVNode("switch", {
              checked: $data.settings.appointmentReminder,
              onChange: _cache[3] || (_cache[3] = ($event) => $options.toggleSetting("appointmentReminder")),
              color: "#667eea"
            }, null, 40, ["checked"])
          ]),
          vue.createElementVNode("view", { class: "settings-item" }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("text", { class: "item-label" }, "接收消息提醒"),
              vue.createElementVNode("text", { class: "item-desc" }, "来自医生或平台的消息通知")
            ]),
            vue.createElementVNode("switch", {
              checked: $data.settings.messageReminder,
              onChange: _cache[4] || (_cache[4] = ($event) => $options.toggleSetting("messageReminder")),
              color: "#667eea"
            }, null, 40, ["checked"])
          ])
        ]),
        vue.createElementVNode("view", { class: "settings-section" }, [
          vue.createElementVNode("view", { class: "section-title" }, "显示设置"),
          vue.createElementVNode("view", {
            class: "settings-item",
            onClick: _cache[5] || (_cache[5] = ($event) => $data.fontModalVisible = true)
          }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("text", { class: "item-label" }, "字体大小"),
              vue.createElementVNode(
                "text",
                { class: "item-desc" },
                vue.toDisplayString($options.fontSizeLabel),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("text", { class: "menu-arrow" }, ">")
          ])
        ]),
        vue.createElementVNode("view", { class: "settings-section" }, [
          vue.createElementVNode("view", { class: "section-title" }, "数据与隐私"),
          vue.createElementVNode("view", {
            class: "settings-item",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.showPrivacy && $options.showPrivacy(...args))
          }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("text", { class: "item-label" }, "隐私政策"),
              vue.createElementVNode("text", { class: "item-desc" }, "了解我们如何处理你的数据")
            ]),
            vue.createElementVNode("text", { class: "menu-arrow" }, ">")
          ]),
          vue.createElementVNode("view", {
            class: "settings-item",
            onClick: _cache[7] || (_cache[7] = (...args) => $options.showTerms && $options.showTerms(...args))
          }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("text", { class: "item-label" }, "用户协议"),
              vue.createElementVNode("text", { class: "item-desc" }, "查看服务条款")
            ]),
            vue.createElementVNode("text", { class: "menu-arrow" }, ">")
          ]),
          vue.createElementVNode("view", {
            class: "settings-item",
            onClick: _cache[8] || (_cache[8] = (...args) => $options.confirmClearCache && $options.confirmClearCache(...args))
          }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("text", { class: "item-label" }, "清空缓存"),
              vue.createElementVNode("text", { class: "item-desc" }, "删除本地存储的临时数据")
            ]),
            vue.createElementVNode("text", { class: "menu-arrow" }, ">")
          ])
        ]),
        vue.createElementVNode("view", { class: "settings-section" }, [
          vue.createElementVNode("view", { class: "section-title" }, "关于"),
          vue.createElementVNode("view", { class: "settings-item" }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("text", { class: "item-label" }, "应用版本"),
              vue.createElementVNode("text", { class: "item-desc" }, "v1.2.0")
            ])
          ])
        ]),
        vue.createVNode(
          _component_uni_popup,
          {
            ref: "fontPopup",
            type: "bottom",
            maskClick: true
          },
          {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "popup-container" }, [
                vue.createElementVNode("view", { class: "popup-header" }, [
                  vue.createElementVNode("text", { class: "popup-title" }, "选择字体大小"),
                  vue.createElementVNode("view", {
                    class: "close-btn",
                    onClick: _cache[9] || (_cache[9] = ($event) => $data.fontModalVisible = false)
                  }, "✕")
                ]),
                vue.createElementVNode("view", { class: "popup-content font-options" }, [
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(["font-option", { selected: $data.settings.fontSize === "small" }]),
                      onClick: _cache[10] || (_cache[10] = ($event) => $options.changeFontSize("small"))
                    },
                    [
                      vue.createElementVNode("text", { class: "font-preview small" }, "Aa"),
                      vue.createElementVNode("text", { class: "font-name" }, "小"),
                      $data.settings.fontSize === "small" ? (vue.openBlock(), vue.createElementBlock("text", {
                        key: 0,
                        class: "font-check"
                      }, "✓")) : vue.createCommentVNode("v-if", true)
                    ],
                    2
                    /* CLASS */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(["font-option", { selected: $data.settings.fontSize === "medium" }]),
                      onClick: _cache[11] || (_cache[11] = ($event) => $options.changeFontSize("medium"))
                    },
                    [
                      vue.createElementVNode("text", { class: "font-preview medium" }, "Aa"),
                      vue.createElementVNode("text", { class: "font-name" }, "中（默认）"),
                      $data.settings.fontSize === "medium" ? (vue.openBlock(), vue.createElementBlock("text", {
                        key: 0,
                        class: "font-check"
                      }, "✓")) : vue.createCommentVNode("v-if", true)
                    ],
                    2
                    /* CLASS */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(["font-option", { selected: $data.settings.fontSize === "large" }]),
                      onClick: _cache[12] || (_cache[12] = ($event) => $options.changeFontSize("large"))
                    },
                    [
                      vue.createElementVNode("text", { class: "font-preview large" }, "Aa"),
                      vue.createElementVNode("text", { class: "font-name" }, "大"),
                      $data.settings.fontSize === "large" ? (vue.openBlock(), vue.createElementBlock("text", {
                        key: 0,
                        class: "font-check"
                      }, "✓")) : vue.createCommentVNode("v-if", true)
                    ],
                    2
                    /* CLASS */
                  )
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          },
          512
          /* NEED_PATCH */
        )
      ],
      2
      /* CLASS */
    );
  }
  const PagesUserSettings = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-ce914230"], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/user/settings.vue"]]);
  const _sfc_main$3 = {
    methods: {
      goBack() {
        uni.navigateBack();
      },
      scrollToSection(sectionId) {
        const query = uni.createSelectorQuery();
        query.select(`#${sectionId}`).boundingClientRect((rect) => {
          if (rect) {
            uni.pageScrollTo({
              duration: 300
            });
          }
        }).exec();
      },
      goToFeedback() {
        uni.navigateTo({
          url: "/pages/feedback/index"
        });
      }
    },
    computed: {
      containerClasses() {
        if (this.$store) {
          return this.$store.state.theme.isDarkMode ? "dark-mode" : "";
        }
        return "";
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["help-page", $options.containerClasses])
      },
      [
        vue.createElementVNode("view", { class: "help-content" }, [
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("text", { class: "section-title" }, "快速导航"),
            vue.createElementVNode("view", { class: "quick-nav" }, [
              vue.createElementVNode("view", {
                class: "nav-item",
                onClick: _cache[0] || (_cache[0] = ($event) => $options.scrollToSection("getting-started"))
              }, [
                vue.createElementVNode("text", { class: "nav-icon" }, "🚀"),
                vue.createElementVNode("text", { class: "nav-text" }, "快速开始")
              ]),
              vue.createElementVNode("view", {
                class: "nav-item",
                onClick: _cache[1] || (_cache[1] = ($event) => $options.scrollToSection("features"))
              }, [
                vue.createElementVNode("text", { class: "nav-icon" }, "✨"),
                vue.createElementVNode("text", { class: "nav-text" }, "功能介绍")
              ]),
              vue.createElementVNode("view", {
                class: "nav-item",
                onClick: _cache[2] || (_cache[2] = ($event) => $options.scrollToSection("faq"))
              }, [
                vue.createElementVNode("text", { class: "nav-icon" }, "❓"),
                vue.createElementVNode("text", { class: "nav-text" }, "常见问题")
              ]),
              vue.createElementVNode("view", {
                class: "nav-item",
                onClick: _cache[3] || (_cache[3] = ($event) => $options.scrollToSection("contact"))
              }, [
                vue.createElementVNode("text", { class: "nav-icon" }, "📞"),
                vue.createElementVNode("text", { class: "nav-text" }, "联系我们")
              ])
            ])
          ]),
          vue.createElementVNode("view", {
            class: "section",
            id: "getting-started"
          }, [
            vue.createElementVNode("text", { class: "section-title" }, "🚀 快速开始"),
            vue.createElementVNode("view", { class: "help-card" }, [
              vue.createElementVNode("text", { class: "card-title" }, "第一步：注册账号"),
              vue.createElementVNode("text", { class: "card-text" }, ' 下载应用后点击"注册"，使用邮箱或手机号创建您的账号，设置安全的密码。 ')
            ]),
            vue.createElementVNode("view", { class: "help-card" }, [
              vue.createElementVNode("text", { class: "card-title" }, "第二步：完善个人信息"),
              vue.createElementVNode("text", { class: "card-text" }, " 登录后进入个人中心，完善头像、性别、年龄等信息，帮助我们更好地为您服务。 ")
            ]),
            vue.createElementVNode("view", { class: "help-card" }, [
              vue.createElementVNode("text", { class: "card-title" }, "第三步：开始使用功能"),
              vue.createElementVNode("text", { class: "card-text" }, " 浏览心理测试、预约咨询师、查看健康数据等丰富功能。 ")
            ])
          ]),
          vue.createElementVNode("view", {
            class: "section",
            id: "features"
          }, [
            vue.createElementVNode("text", { class: "section-title" }, "✨ 功能介绍"),
            vue.createElementVNode("view", { class: "help-card" }, [
              vue.createElementVNode("text", { class: "card-title" }, "心理评估测试"),
              vue.createElementVNode("text", { class: "card-text" }, " 提供多种专业的心理评估工具，包括PHQ-7抑郁症评估、GAD-7焦虑症评估、心理应激指数(PSI)等权威测试，帮助您了解自己的心理状态。 ")
            ]),
            vue.createElementVNode("view", { class: "help-card" }, [
              vue.createElementVNode("text", { class: "card-title" }, "在线咨询"),
              vue.createElementVNode("text", { class: "card-text" }, " 与专业的心理咨询师进行预约咨询，获得专业的心理指导和建议，改善您的心理健康。 ")
            ]),
            vue.createElementVNode("view", { class: "help-card" }, [
              vue.createElementVNode("text", { class: "card-title" }, "健康数据追踪"),
              vue.createElementVNode("text", { class: "card-text" }, " 记录和追踪您的健康数据，查看测试结果历史，了解自己的心理健康发展趋势。 ")
            ]),
            vue.createElementVNode("view", { class: "help-card" }, [
              vue.createElementVNode("text", { class: "card-title" }, "消息通知"),
              vue.createElementVNode("text", { class: "card-text" }, " 接收咨询师预约确认、建议推荐等重要信息，不会错过任何重要通知。 ")
            ]),
            vue.createElementVNode("view", { class: "help-card" }, [
              vue.createElementVNode("text", { class: "card-title" }, "隐私保护"),
              vue.createElementVNode("text", { class: "card-text" }, " 所有您的个人信息和测试数据都经过加密存储，我们严格遵守数据隐私政策，保护您的隐私。 ")
            ])
          ]),
          vue.createElementVNode("view", {
            class: "section",
            id: "faq"
          }, [
            vue.createElementVNode("text", { class: "section-title" }, "❓ 常见问题"),
            vue.createElementVNode("view", { class: "help-card" }, [
              vue.createElementVNode("text", { class: "card-title" }, "Q: 我的数据安全吗？"),
              vue.createElementVNode("text", { class: "card-text" }, " A: 是的，我们采用业界领先的加密技术保护您的所有数据。所有个人信息和测试结果都被加密存储在安全的服务器上。我们遵守最严格的数据隐私政策，绝不向第三方泄露您的信息。 ")
            ]),
            vue.createElementVNode("view", { class: "help-card" }, [
              vue.createElementVNode("text", { class: "card-title" }, "Q: 如何修改我的账号信息？"),
              vue.createElementVNode("text", { class: "card-text" }, " A: 进入个人中心 → 账号管理，您可以修改邮箱、手机号、头像等信息。 ")
            ]),
            vue.createElementVNode("view", { class: "help-card" }, [
              vue.createElementVNode("text", { class: "card-title" }, "Q: 忘记密码怎么办？"),
              vue.createElementVNode("text", { class: "card-text" }, ' A: 在登录页面点击"忘记密码"，通过邮箱或手机号验证后可以重置密码。 ')
            ]),
            vue.createElementVNode("view", { class: "help-card" }, [
              vue.createElementVNode("text", { class: "card-title" }, "Q: 心理咨询师是否真实存在？"),
              vue.createElementVNode("text", { class: "card-text" }, " A: 我们的咨询师都是经过认证的专业心理咨询师，具有丰富的咨询经验和相关资质。 ")
            ]),
            vue.createElementVNode("view", { class: "help-card" }, [
              vue.createElementVNode("text", { class: "card-title" }, "Q: 如何取消或修改预约？"),
              vue.createElementVNode("text", { class: "card-text" }, ' A: 进入我的预约，选择要修改的预约，点击"修改"或"取消"按钮。预约前24小时可以修改，建议提前沟通。 ')
            ]),
            vue.createElementVNode("view", { class: "help-card" }, [
              vue.createElementVNode("text", { class: "card-title" }, "Q: 测试结果是否可信？"),
              vue.createElementVNode("text", { class: "card-text" }, " A: 我们提供的所有心理评估工具都是通过科学验证的权威量表，但仅供参考。如有需要，请咨询专业的心理咨询师。 ")
            ])
          ]),
          vue.createElementVNode("view", {
            class: "section",
            id: "contact"
          }, [
            vue.createElementVNode("text", { class: "section-title" }, "📞 联系我们"),
            vue.createElementVNode("view", { class: "help-card" }, [
              vue.createElementVNode("text", { class: "card-title" }, "遇到问题？"),
              vue.createElementVNode("text", { class: "card-text" }, " 如果您遇到任何问题或有建议，欢迎通过以下方式联系我们： ")
            ]),
            vue.createElementVNode("view", { class: "contact-methods" }, [
              vue.createElementVNode("view", {
                class: "method",
                onClick: _cache[4] || (_cache[4] = (...args) => $options.goToFeedback && $options.goToFeedback(...args))
              }, [
                vue.createElementVNode("text", { class: "method-icon" }, "💬"),
                vue.createElementVNode("view", { class: "method-info" }, [
                  vue.createElementVNode("text", { class: "method-name" }, "在线反馈"),
                  vue.createElementVNode("text", { class: "method-desc" }, "提交反馈和建议")
                ])
              ]),
              vue.createElementVNode("view", { class: "method" }, [
                vue.createElementVNode("text", { class: "method-icon" }, "✉️"),
                vue.createElementVNode("view", { class: "method-info" }, [
                  vue.createElementVNode("text", { class: "method-name" }, "电子邮箱"),
                  vue.createElementVNode("text", { class: "method-desc" }, "support@warmmate.com")
                ])
              ])
            ])
          ])
        ])
      ],
      2
      /* CLASS */
    );
  }
  const PagesHelpIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-e6af2099"], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/help/index.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        activeTab: "feedback",
        feedbackForm: {
          type: "feedback",
          email: "",
          content: ""
        },
        faqList: [
          {
            question: "如何修改个人信息？",
            answer: '您可以进入"个人中心" > "账号管理"来修改个人信息，包括邮箱、手机号等。',
            expanded: false
          },
          {
            question: "忘记密码怎么办？",
            answer: '在登录页面点击"忘记密码"，按照提示通过邮箱或手机号进行身份验证后重置密码。',
            expanded: false
          },
          {
            question: "如何导出心理测试报告？",
            answer: '完成心理测试后，可以在结果页面点击"导出"按钮保存或分享测试报告。',
            expanded: false
          },
          {
            question: "心理咨询师如何预约？",
            answer: '在"心理咨询"模块选择咨询师后，选择合适的时间进行预约。咨询师会在确认后通过消息通知您。',
            expanded: false
          },
          {
            question: "数据是否安全和隐私？",
            answer: "我们采用最新的加密技术保护您的个人信息和测试数据，严格遵守隐私政策，绝不将您的数据用于其他目的。",
            expanded: false
          },
          {
            question: "如何联系客服？",
            answer: '您可以通过本页面的"反馈表单"提交问题，我们会尽快为您解答。',
            expanded: false
          }
        ]
      };
    },
    computed: {
      containerClasses() {
        if (this.$store) {
          return this.$store.state.theme.isDarkMode ? "dark-mode" : "";
        }
        return "";
      }
    },
    methods: {
      goBack() {
        uni.navigateBack();
      },
      submitFeedback() {
        if (!this.feedbackForm.content.trim()) {
          uni.showToast({
            title: "请输入反馈内容",
            icon: "none"
          });
          return;
        }
        const feedbackData = {
          type: this.feedbackForm.type,
          email: this.feedbackForm.email || "未提供",
          content: this.feedbackForm.content,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleString()
        };
        try {
          let feedbackHistory = uni.getStorageSync("feedbackHistory") || [];
          feedbackHistory.push(feedbackData);
          uni.setStorageSync("feedbackHistory", feedbackHistory);
          uni.showToast({
            title: "感谢您的反馈！",
            icon: "success",
            duration: 2e3
          });
          setTimeout(() => {
            this.feedbackForm = {
              type: "feedback",
              email: "",
              content: ""
            };
          }, 1500);
        } catch (error2) {
          formatAppLog("error", "at pages/feedback/index.vue:196", "保存反馈失败:", error2);
          uni.showToast({
            title: "反馈提交失败，请重试",
            icon: "none"
          });
        }
      },
      toggleFAQ(index2) {
        this.faqList[index2].expanded = !this.faqList[index2].expanded;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["feedback-page", $options.containerClasses])
      },
      [
        vue.createElementVNode("view", { class: "tab-container" }, [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["tab-item", { active: $data.activeTab === "feedback" }]),
              onClick: _cache[0] || (_cache[0] = ($event) => $data.activeTab = "feedback")
            },
            " 意见反馈 ",
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["tab-item", { active: $data.activeTab === "help" }]),
              onClick: _cache[1] || (_cache[1] = ($event) => $data.activeTab = "help")
            },
            " 常见问题 ",
            2
            /* CLASS */
          )
        ]),
        $data.activeTab === "feedback" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "feedback-section"
        }, [
          vue.createElementVNode("view", { class: "form-group" }, [
            vue.createElementVNode("text", { class: "form-label" }, "反馈类型"),
            vue.createElementVNode("view", { class: "feedback-type-options" }, [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["type-option", { selected: $data.feedbackForm.type === "bug" }]),
                  onClick: _cache[2] || (_cache[2] = ($event) => $data.feedbackForm.type = "bug")
                },
                " 🐛 Bug反馈 ",
                2
                /* CLASS */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["type-option", { selected: $data.feedbackForm.type === "feature" }]),
                  onClick: _cache[3] || (_cache[3] = ($event) => $data.feedbackForm.type = "feature")
                },
                " ✨ 功能建议 ",
                2
                /* CLASS */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["type-option", { selected: $data.feedbackForm.type === "other" }]),
                  onClick: _cache[4] || (_cache[4] = ($event) => $data.feedbackForm.type = "other")
                },
                " 💬 其他反馈 ",
                2
                /* CLASS */
              )
            ])
          ]),
          vue.createElementVNode("view", { class: "form-group" }, [
            vue.createElementVNode("text", { class: "form-label" }, "联系邮箱"),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.feedbackForm.email = $event),
                class: "form-input",
                placeholder: "请输入您的邮箱（可选）",
                type: "email"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.feedbackForm.email]
            ])
          ]),
          vue.createElementVNode("view", { class: "form-group" }, [
            vue.createElementVNode("text", { class: "form-label" }, "反馈内容"),
            vue.withDirectives(vue.createElementVNode(
              "textarea",
              {
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.feedbackForm.content = $event),
                class: "form-textarea",
                placeholder: "请详细描述您的反馈内容（最多500字）...",
                maxlength: "500"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.feedbackForm.content]
            ]),
            vue.createElementVNode(
              "text",
              { class: "char-count" },
              vue.toDisplayString($data.feedbackForm.content.length) + "/500",
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("button", {
            class: "submit-btn",
            onClick: _cache[7] || (_cache[7] = (...args) => $options.submitFeedback && $options.submitFeedback(...args))
          }, "提交反馈"),
          vue.createElementVNode("text", { class: "footer-tips" }, "感谢您的反馈，让我们不断改进！")
        ])) : vue.createCommentVNode("v-if", true),
        $data.activeTab === "help" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "help-section"
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.faqList, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index2,
                class: "faq-item"
              }, [
                vue.createElementVNode("view", {
                  class: "faq-title",
                  onClick: ($event) => $options.toggleFAQ(index2)
                }, [
                  vue.createElementVNode(
                    "text",
                    { class: "faq-question" },
                    vue.toDisplayString(item.question),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    {
                      class: vue.normalizeClass(["faq-icon", { expanded: item.expanded }])
                    },
                    "▼",
                    2
                    /* CLASS */
                  )
                ], 8, ["onClick"]),
                item.expanded ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 0,
                    class: "faq-answer"
                  },
                  vue.toDisplayString(item.answer),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const PagesFeedbackIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-2aa7bac2"], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/feedback/index.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    computed: {
      containerClasses() {
        if (this.$store) {
          return this.$store.state.theme.isDarkMode ? "dark-mode" : "";
        }
        return "";
      }
    },
    methods: {},
    onLoad() {
      uni.setNavigationBarTitle({
        title: "关于我们"
      });
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["about-page", $options.containerClasses])
      },
      [
        vue.createElementVNode("view", { class: "about-content" }, [
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("text", { class: "section-title" }, "应用信息"),
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("text", { class: "label" }, "应用名称"),
              vue.createElementVNode("text", { class: "value" }, "暖愈心伴")
            ]),
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("text", { class: "label" }, "版本号"),
              vue.createElementVNode("text", { class: "value" }, "1.2.0")
            ]),
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("text", { class: "label" }, "描述"),
              vue.createElementVNode("text", { class: "value" }, " 暖愈心伴是一款专业的心理健康管理应用，致力于为用户提供科学、便捷的心理健康服务。 ")
            ])
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("text", { class: "section-title" }, "联系我们"),
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("text", { class: "label" }, "邮箱"),
              vue.createElementVNode("text", { class: "value" }, "support@warmmate.com")
            ]),
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("text", { class: "label" }, "电话"),
              vue.createElementVNode("text", { class: "value" }, "400-123-4567")
            ]),
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("text", { class: "label" }, "地址"),
              vue.createElementVNode("text", { class: "value" }, "北京市朝阳区")
            ])
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("text", { class: "section-title" }, "法律声明"),
            vue.createElementVNode("text", { class: "tips" }, " 本应用所有内容仅供参考，不能替代专业医学建议。如有任何健康问题，请咨询专业医生。 ")
          ]),
          vue.createElementVNode("view", { class: "footer" }, [
            vue.createElementVNode("text", { class: "footer-text" }, "© 2026 Warm-Mate. All rights reserved.")
          ])
        ])
      ],
      2
      /* CLASS */
    );
  }
  const PagesAboutIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-415a4f9d"], ["__file", "C:/Users/while/Desktop/Warm-Mate/pages/about/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/message/message", PagesMessageMessage);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/register/register", PagesRegisterRegister);
  __definePage("pages/phq7-test/index", PagesPhq7TestIndex);
  __definePage("pages/phq7-test/do-test", PagesPhq7TestDoTest);
  __definePage("pages/phq7-test/history", PagesPhq7TestHistory);
  __definePage("pages/phq7-test/gad7", PagesPhq7TestGad7);
  __definePage("pages/phq7-test/cpss", PagesPhq7TestCpss);
  __definePage("pages/phq7-test/ucla", PagesPhq7TestUcla);
  __definePage("pages/phq7-test/psqi", PagesPhq7TestPsqi);
  __definePage("pages/phq7-test/sds", PagesPhq7TestSds);
  __definePage("pages/health/index", PagesHealthIndex);
  __definePage("pages/psychologist/index", PagesPsychologistIndex);
  __definePage("pages/psychologist/appointment", PagesPsychologistAppointment);
  __definePage("pages/psychologist/record", PagesPsychologistRecord);
  __definePage("pages/user/index", PagesUserIndex);
  __definePage("pages/user/settings", PagesUserSettings);
  __definePage("pages/help/index", PagesHelpIndex);
  __definePage("pages/feedback/index", PagesFeedbackIndex);
  __definePage("pages/about/index", PagesAboutIndex);
  const _sfc_main = {
    computed: {
      containerClasses() {
        return `theme-${this.$themeManager.getTheme()} font-${this.$themeManager.getFontSize()}`;
      }
    },
    onLaunch: function() {
      formatAppLog("log", "at App.vue:9", "App Launch");
      this.$themeManager.init();
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:14", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:17", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/while/Desktop/Warm-Mate/App.vue"]]);
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var mixin = {
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: ""
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$u.getRect = this.$uGetRect;
    },
    created() {
      this.$u.getRect = this.$uGetRect;
    },
    computed: {
      // 在2.x版本中，将会把$u挂载到uni对象下，导致在模板中无法使用uni.$u.xxx形式
      // 所以这里通过computed计算属性将其附加到this.$u上，就可以在模板或者js中使用uni.$u.xxx
      // 只在nvue环境通过此方式引入完整的$u，其他平台会出现性能问题，非nvue则按需引入（主要原因是props过大）
      $u() {
        return uni.$u.deepMerge(uni.$u, {
          props: void 0,
          http: void 0,
          mixin: void 0
        });
      },
      /**
       * 生成bem规则类名
       * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
       * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
       * @param {String} name 组件名称
       * @param {Array} fixed 一直会存在的类名
       * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
       * @returns {Array|string}
       */
      bem() {
        return function(name, fixed, change) {
          const prefix = `u-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      // 跳转某一个页面
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          uni[this.linkType]({
            url: url2
          });
        }
      },
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      $uGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = uni.$u.$parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      // 阻止事件冒泡
      preventEvent(e) {
        e && typeof e.stopPropagation === "function" && e.stopPropagation();
      },
      // 空操作
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
      uni.$emit("uOnReachBottom");
    },
    beforeDestroy() {
      if (this.parent && uni.$u.test.array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  };
  const mixin$1 = /* @__PURE__ */ getDefaultExportFromCjs(mixin);
  const mpMixin = {};
  const { toString: toString$1 } = Object.prototype;
  function isArray$1(val) {
    return toString$1.call(val) === "[object Array]";
  }
  function isObject$1(val) {
    return val !== null && typeof val === "object";
  }
  function isDate$1(val) {
    return toString$1.call(val) === "[object Date]";
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray$1(obj)) {
      for (let i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  function deepMerge$1() {
    const result = {};
    function assignValue(val, key) {
      if (typeof result[key] === "object" && typeof val === "object") {
        result[key] = deepMerge$1(result[key], val);
      } else if (typeof val === "object") {
        result[key] = deepMerge$1({}, val);
      } else {
        result[key] = val;
      }
    }
    for (let i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  function isUndefined$1(val) {
    return typeof val === "undefined";
  }
  function encode(val) {
    return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url2, params) {
    if (!params) {
      return url2;
    }
    let serializedParams;
    if (isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      const parts = [];
      forEach(params, (val, key) => {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (isArray$1(val)) {
          key = `${key}[]`;
        } else {
          val = [val];
        }
        forEach(val, (v) => {
          if (isDate$1(v)) {
            v = v.toISOString();
          } else if (isObject$1(v)) {
            v = JSON.stringify(v);
          }
          parts.push(`${encode(key)}=${encode(v)}`);
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      const hashmarkIndex = url2.indexOf("#");
      if (hashmarkIndex !== -1) {
        url2 = url2.slice(0, hashmarkIndex);
      }
      url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url2;
  }
  function isAbsoluteURL(url2) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
  }
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? `${baseURL.replace(/\/+$/, "")}/${relativeURL.replace(/^\/+/, "")}` : baseURL;
  }
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  function settle(resolve, reject, response) {
    const { validateStatus } = response.config;
    const status = response.statusCode;
    if (status && (!validateStatus || validateStatus(status))) {
      resolve(response);
    } else {
      reject(response);
    }
  }
  const mergeKeys$1 = (keys2, config2) => {
    const config3 = {};
    keys2.forEach((prop) => {
      if (!isUndefined$1(config2[prop])) {
        config3[prop] = config2[prop];
      }
    });
    return config3;
  };
  const adapter = (config2) => new Promise((resolve, reject) => {
    const fullPath = buildURL(buildFullPath(config2.baseURL, config2.url), config2.params);
    const _config = {
      url: fullPath,
      header: config2.header,
      complete: (response) => {
        config2.fullPath = fullPath;
        response.config = config2;
        try {
          if (typeof response.data === "string") {
            response.data = JSON.parse(response.data);
          }
        } catch (e) {
        }
        settle(resolve, reject, response);
      }
    };
    let requestTask;
    if (config2.method === "UPLOAD") {
      delete _config.header["content-type"];
      delete _config.header["Content-Type"];
      const otherConfig = {
        filePath: config2.filePath,
        name: config2.name
      };
      const optionalKeys = [
        "files",
        "timeout",
        "formData"
      ];
      requestTask = uni.uploadFile({ ..._config, ...otherConfig, ...mergeKeys$1(optionalKeys, config2) });
    } else if (config2.method === "DOWNLOAD") {
      if (!isUndefined$1(config2.timeout)) {
        _config.timeout = config2.timeout;
      }
      requestTask = uni.downloadFile(_config);
    } else {
      const optionalKeys = [
        "data",
        "method",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      requestTask = uni.request({ ..._config, ...mergeKeys$1(optionalKeys, config2) });
    }
    if (config2.getTask) {
      config2.getTask(requestTask, config2);
    }
  });
  const dispatchRequest = (config2) => adapter(config2);
  function InterceptorManager() {
    this.handlers = [];
  }
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    });
    return this.handlers.length - 1;
  };
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager.prototype.forEach = function forEach2(fn) {
    this.handlers.forEach((h) => {
      if (h !== null) {
        fn(h);
      }
    });
  };
  const mergeKeys = (keys2, globalsConfig, config2) => {
    const config3 = {};
    keys2.forEach((prop) => {
      if (!isUndefined$1(config2[prop])) {
        config3[prop] = config2[prop];
      } else if (!isUndefined$1(globalsConfig[prop])) {
        config3[prop] = globalsConfig[prop];
      }
    });
    return config3;
  };
  const mergeConfig = (globalsConfig, config2 = {}) => {
    const method = config2.method || globalsConfig.method || "GET";
    let config3 = {
      baseURL: globalsConfig.baseURL || "",
      method,
      url: config2.url || "",
      params: config2.params || {},
      custom: { ...globalsConfig.custom || {}, ...config2.custom || {} },
      header: deepMerge$1(globalsConfig.header || {}, config2.header || {})
    };
    const defaultToConfig2Keys = ["getTask", "validateStatus"];
    config3 = { ...config3, ...mergeKeys(defaultToConfig2Keys, globalsConfig, config2) };
    if (method === "DOWNLOAD") {
      if (!isUndefined$1(config2.timeout)) {
        config3.timeout = config2.timeout;
      } else if (!isUndefined$1(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else if (method === "UPLOAD") {
      delete config3.header["content-type"];
      delete config3.header["Content-Type"];
      const uploadKeys = [
        "files",
        "filePath",
        "name",
        "timeout",
        "formData"
      ];
      uploadKeys.forEach((prop) => {
        if (!isUndefined$1(config2[prop])) {
          config3[prop] = config2[prop];
        }
      });
      if (isUndefined$1(config3.timeout) && !isUndefined$1(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else {
      const defaultsKeys = [
        "data",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      config3 = { ...config3, ...mergeKeys(defaultsKeys, globalsConfig, config2) };
    }
    return config3;
  };
  const defaults$1 = {
    baseURL: "",
    header: {},
    method: "GET",
    dataType: "json",
    responseType: "text",
    custom: {},
    timeout: 6e4,
    sslVerify: true,
    firstIpv4: false,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  var clone$2 = function() {
    function _instanceof(obj, type) {
      return type != null && obj instanceof type;
    }
    var nativeMap;
    try {
      nativeMap = Map;
    } catch (_) {
      nativeMap = function() {
      };
    }
    var nativeSet;
    try {
      nativeSet = Set;
    } catch (_) {
      nativeSet = function() {
      };
    }
    var nativePromise;
    try {
      nativePromise = Promise;
    } catch (_) {
      nativePromise = function() {
      };
    }
    function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
      if (typeof circular === "object") {
        depth = circular.depth;
        prototype = circular.prototype;
        includeNonEnumerable = circular.includeNonEnumerable;
        circular = circular.circular;
      }
      var allParents = [];
      var allChildren = [];
      var useBuffer = typeof Buffer != "undefined";
      if (typeof circular == "undefined")
        circular = true;
      if (typeof depth == "undefined")
        depth = Infinity;
      function _clone(parent2, depth2) {
        if (parent2 === null)
          return null;
        if (depth2 === 0)
          return parent2;
        var child;
        var proto2;
        if (typeof parent2 != "object") {
          return parent2;
        }
        if (_instanceof(parent2, nativeMap)) {
          child = new nativeMap();
        } else if (_instanceof(parent2, nativeSet)) {
          child = new nativeSet();
        } else if (_instanceof(parent2, nativePromise)) {
          child = new nativePromise(function(resolve, reject) {
            parent2.then(function(value) {
              resolve(_clone(value, depth2 - 1));
            }, function(err) {
              reject(_clone(err, depth2 - 1));
            });
          });
        } else if (clone2.__isArray(parent2)) {
          child = [];
        } else if (clone2.__isRegExp(parent2)) {
          child = new RegExp(parent2.source, __getRegExpFlags(parent2));
          if (parent2.lastIndex)
            child.lastIndex = parent2.lastIndex;
        } else if (clone2.__isDate(parent2)) {
          child = new Date(parent2.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent2)) {
          if (Buffer.from) {
            child = Buffer.from(parent2);
          } else {
            child = new Buffer(parent2.length);
            parent2.copy(child);
          }
          return child;
        } else if (_instanceof(parent2, Error)) {
          child = Object.create(parent2);
        } else {
          if (typeof prototype == "undefined") {
            proto2 = Object.getPrototypeOf(parent2);
            child = Object.create(proto2);
          } else {
            child = Object.create(prototype);
            proto2 = prototype;
          }
        }
        if (circular) {
          var index2 = allParents.indexOf(parent2);
          if (index2 != -1) {
            return allChildren[index2];
          }
          allParents.push(parent2);
          allChildren.push(child);
        }
        if (_instanceof(parent2, nativeMap)) {
          parent2.forEach(function(value, key) {
            var keyChild = _clone(key, depth2 - 1);
            var valueChild = _clone(value, depth2 - 1);
            child.set(keyChild, valueChild);
          });
        }
        if (_instanceof(parent2, nativeSet)) {
          parent2.forEach(function(value) {
            var entryChild = _clone(value, depth2 - 1);
            child.add(entryChild);
          });
        }
        for (var i in parent2) {
          var attrs = Object.getOwnPropertyDescriptor(parent2, i);
          if (attrs) {
            child[i] = _clone(parent2[i], depth2 - 1);
          }
          try {
            var objProperty = Object.getOwnPropertyDescriptor(parent2, i);
            if (objProperty.set === "undefined") {
              continue;
            }
            child[i] = _clone(parent2[i], depth2 - 1);
          } catch (e) {
            if (e instanceof TypeError) {
              continue;
            } else if (e instanceof ReferenceError) {
              continue;
            }
          }
        }
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(parent2);
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
            if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
              continue;
            }
            child[symbol] = _clone(parent2[symbol], depth2 - 1);
            Object.defineProperty(child, symbol, descriptor);
          }
        }
        if (includeNonEnumerable) {
          var allPropertyNames = Object.getOwnPropertyNames(parent2);
          for (var i = 0; i < allPropertyNames.length; i++) {
            var propertyName = allPropertyNames[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
            if (descriptor && descriptor.enumerable) {
              continue;
            }
            child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
            Object.defineProperty(child, propertyName, descriptor);
          }
        }
        return child;
      }
      return _clone(parent, depth);
    }
    clone2.clonePrototype = function clonePrototype(parent) {
      if (parent === null)
        return null;
      var c = function() {
      };
      c.prototype = parent;
      return new c();
    };
    function __objToStr(o) {
      return Object.prototype.toString.call(o);
    }
    clone2.__objToStr = __objToStr;
    function __isDate(o) {
      return typeof o === "object" && __objToStr(o) === "[object Date]";
    }
    clone2.__isDate = __isDate;
    function __isArray(o) {
      return typeof o === "object" && __objToStr(o) === "[object Array]";
    }
    clone2.__isArray = __isArray;
    function __isRegExp(o) {
      return typeof o === "object" && __objToStr(o) === "[object RegExp]";
    }
    clone2.__isRegExp = __isRegExp;
    function __getRegExpFlags(re) {
      var flags = "";
      if (re.global)
        flags += "g";
      if (re.ignoreCase)
        flags += "i";
      if (re.multiline)
        flags += "m";
      return flags;
    }
    clone2.__getRegExpFlags = __getRegExpFlags;
    return clone2;
  }();
  class Request {
    /**
    * @param {Object} arg - 全局配置
    * @param {String} arg.baseURL - 全局根路径
    * @param {Object} arg.header - 全局header
    * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
    * @param {String} arg.dataType = [json] - 全局默认的dataType
    * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。支付宝小程序不支持
    * @param {Object} arg.custom - 全局默认的自定义参数
    * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认60000。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
    * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
    * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
    * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
    * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
    */
    constructor(arg = {}) {
      if (!isPlainObject(arg)) {
        arg = {};
        formatAppLog("warn", "at node_modules/uview-ui/libs/luch-request/core/Request.js:39", "设置全局参数必须接收一个Object");
      }
      this.config = clone$2({ ...defaults$1, ...arg });
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    /**
    * @Function
    * @param {Request~setConfigCallback} f - 设置全局默认配置
    */
    setConfig(f) {
      this.config = f(this.config);
    }
    middleware(config2) {
      config2 = mergeConfig(this.config, config2);
      const chain = [dispatchRequest, void 0];
      let promise2 = Promise.resolve(config2);
      this.interceptors.request.forEach((interceptor) => {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      this.interceptors.response.forEach((interceptor) => {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
      while (chain.length) {
        promise2 = promise2.then(chain.shift(), chain.shift());
      }
      return promise2;
    }
    /**
    * @Function
    * @param {Object} config - 请求配置项
    * @prop {String} options.url - 请求路径
    * @prop {Object} options.data - 请求参数
    * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
    * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
    * @prop {Object} [options.header = config.header] - 请求header
    * @prop {Object} [options.method = config.method] - 请求方法
    * @returns {Promise<unknown>}
    */
    request(config2 = {}) {
      return this.middleware(config2);
    }
    get(url2, options = {}) {
      return this.middleware({
        url: url2,
        method: "GET",
        ...options
      });
    }
    post(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "POST",
        ...options
      });
    }
    put(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "PUT",
        ...options
      });
    }
    delete(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "DELETE",
        ...options
      });
    }
    options(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "OPTIONS",
        ...options
      });
    }
    upload(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "UPLOAD";
      return this.middleware(config2);
    }
    download(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "DOWNLOAD";
      return this.middleware(config2);
    }
  }
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        // navigateBack页面后退时,回退的层数
        params: {},
        // 传递的参数
        animationType: "pop-in",
        // 窗口动画,只在APP有效
        animationDuration: 300,
        // 窗口动画持续时间,单位毫秒,只在APP有效
        intercept: false
        // 是否需要拦截
      };
      this.route = this.route.bind(this);
    }
    // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    // 整合路由参数
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = uni.$u.queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = uni.$u.queryParams(params);
      return url2 += query;
    }
    // 对外的方法名称
    async route(options = {}, params = {}) {
      let mergeConfig2 = {};
      if (typeof options === "string") {
        mergeConfig2.url = this.mixinParam(options, params);
        mergeConfig2.type = "navigateTo";
      } else {
        mergeConfig2 = uni.$u.deepMerge(this.config, options);
        mergeConfig2.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig2.url === uni.$u.page())
        return;
      if (params.intercept) {
        this.config.intercept = params.intercept;
      }
      mergeConfig2.params = params;
      mergeConfig2 = uni.$u.deepMerge(this.config, mergeConfig2);
      if (typeof uni.$u.routeIntercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          uni.$u.routeIntercept(mergeConfig2, resolve);
        });
        isNext && this.openPage(mergeConfig2);
      } else {
        this.openPage(mergeConfig2);
      }
    }
    // 执行路由跳转
    openPage(config2) {
      const {
        url: url2,
        type,
        delta,
        animationType,
        animationDuration
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  const route = new Router().route;
  function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    const startRGB = hexToRgb(startColor, false);
    const startR = startRGB[0];
    const startG = startRGB[1];
    const startB = startRGB[2];
    const endRGB = hexToRgb(endColor, false);
    const endR = endRGB[0];
    const endG = endRGB[1];
    const endB = endRGB[2];
    const sR = (endR - startR) / step;
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr = [];
    for (let i = 0; i < step; i++) {
      let hex = rgbToHex(`rgb(${Math.round(sR * i + startR)},${Math.round(sG * i + startG)},${Math.round(sB * i + startB)})`);
      if (i === 0)
        hex = rgbToHex(startColor);
      if (i === step - 1)
        hex = rgbToHex(endColor);
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = String(sColor).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      if (!str) {
        return sColorChange;
      }
      return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
    }
    if (/^(rgb|RGB)/.test(sColor)) {
      const arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      return arr.map((val) => Number(val));
    }
    return sColor;
  }
  function rgbToHex(rgb) {
    const _this = rgb;
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      const aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
        hex = String(hex).length == 1 ? `${0}${hex}` : hex;
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    }
    if (reg.test(_this)) {
      const aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      }
      if (aNum.length === 3) {
        let numHex = "#";
        for (let i = 0; i < aNum.length; i += 1) {
          numHex += aNum[i] + aNum[i];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }
  function colorToRgba(color2, alpha) {
    color2 = rgbToHex(color2);
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = String(color2).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      return `rgba(${sColorChange.join(",")},${alpha})`;
    }
    return sColor;
  }
  const colorGradient$1 = {
    colorGradient,
    hexToRgb,
    rgbToHex,
    colorToRgba
  };
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value);
  }
  function url(value) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
  }
  function date(value) {
    if (!value)
      return false;
    if (number(value))
      value = +value;
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
  }
  function string(value) {
    return typeof value === "string";
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value
    );
  }
  function carNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    }
    if (value.length === 8) {
      return xreg.test(value);
    }
    return false;
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range$1(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty$1(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (value === 0 || isNaN(value))
          return true;
        break;
      case "object":
        if (value === null || value.length === 0)
          return true;
        for (const i in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value === "string") {
      try {
        const obj = JSON.parse(value);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function object(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code$1(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function func(value) {
    return typeof value === "function";
  }
  function promise(value) {
    return object(value) && func(value.then) && func(value.catch);
  }
  function image$1(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  const test = {
    email,
    mobile,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range: range$1,
    rangeLength,
    empty: empty$1,
    isEmpty: empty$1,
    jsonString,
    landline,
    object,
    array,
    code: code$1,
    func,
    promise,
    video,
    image: image$1,
    regExp,
    string
  };
  let timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  let flag;
  function throttle(func2, wait = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at node_modules/uview-ui/libs/function/digit.js:45", `${num} 超出了精度限制，结果可能不正确`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round$1(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  function range(min2 = 0, max2 = 0, value = 0) {
    return Math.max(min2, Math.min(max2, Number(value)));
  }
  function getPx(value, unit = false) {
    if (test.number(value)) {
      return unit ? `${value}px` : Number(value);
    }
    if (/(rpx|upx)$/.test(value)) {
      return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)));
    }
    return unit ? `${parseInt(value)}px` : parseInt(value);
  }
  function sleep(value = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min2, max2) {
    if (min2 >= 0 && max2 > 0 && max2 >= min2) {
      const gab = max2 - min2 + 1;
      return Math.floor(Math.random() * gab + min2);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (test.empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item = styleArray[i].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    for (const i in customStyle) {
      const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
      string2 += `${key}:${customStyle[i]};`;
    }
    return trim(string2);
  }
  function addUnit(value = "auto", unit = ((_b) => (_b = ((_a) => (_a = uni == null ? void 0 : uni.$u) == null ? void 0 : _a.config)()) == null ? void 0 : _b.unit)() ?? "px") {
    value = String(value);
    return test.number(value) ? `${value}${unit}` : value;
  }
  function deepClone(obj, cache = /* @__PURE__ */ new WeakMap()) {
    if (obj === null || typeof obj !== "object")
      return obj;
    if (cache.has(obj))
      return cache.get(obj);
    let clone2;
    if (obj instanceof Date) {
      clone2 = new Date(obj.getTime());
    } else if (obj instanceof RegExp) {
      clone2 = new RegExp(obj);
    } else if (obj instanceof Map) {
      clone2 = new Map(Array.from(obj, ([key, value]) => [key, deepClone(value, cache)]));
    } else if (obj instanceof Set) {
      clone2 = new Set(Array.from(obj, (value) => deepClone(value, cache)));
    } else if (Array.isArray(obj)) {
      clone2 = obj.map((value) => deepClone(value, cache));
    } else if (Object.prototype.toString.call(obj) === "[object Object]") {
      clone2 = Object.create(Object.getPrototypeOf(obj));
      cache.set(obj, clone2);
      for (const [key, value] of Object.entries(obj)) {
        clone2[key] = deepClone(value, cache);
      }
    } else {
      clone2 = Object.assign({}, obj);
    }
    cache.set(obj, clone2);
    return clone2;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || target === null || typeof source !== "object" || source === null)
      return target;
    const merged = Array.isArray(target) ? target.slice() : Object.assign({}, target);
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      const sourceValue = source[prop];
      const targetValue = merged[prop];
      if (sourceValue instanceof Date) {
        merged[prop] = new Date(sourceValue);
      } else if (sourceValue instanceof RegExp) {
        merged[prop] = new RegExp(sourceValue);
      } else if (sourceValue instanceof Map) {
        merged[prop] = new Map(sourceValue);
      } else if (sourceValue instanceof Set) {
        merged[prop] = new Set(sourceValue);
      } else if (typeof sourceValue === "object" && sourceValue !== null) {
        merged[prop] = deepMerge(targetValue, sourceValue);
      } else {
        merged[prop] = sourceValue;
      }
    }
    return merged;
  }
  function error(err) {
    {
      formatAppLog("error", "at node_modules/uview-ui/libs/function/index.js:250", `uView提示：${err}`);
    }
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError(
          "fillString must be String"
        );
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date2;
    if (!dateTime) {
      date2 = /* @__PURE__ */ new Date();
    } else if (/^\d{10}$/.test(dateTime == null ? void 0 : dateTime.toString().trim())) {
      date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date2 = new Date(Number(dateTime));
    } else if (typeof dateTime === "string" && dateTime.includes("-") && !dateTime.includes("T")) {
      date2 = new Date(dateTime.replace(/-/g, "/"));
    } else {
      date2 = new Date(dateTime);
    }
    const timeSource = {
      "y": date2.getFullYear().toString(),
      // 年
      "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
      // 月
      "d": date2.getDate().toString().padStart(2, "0"),
      // 日
      "h": date2.getHours().toString().padStart(2, "0"),
      // 时
      "M": date2.getMinutes().toString().padStart(2, "0"),
      // 分
      "s": date2.getSeconds().toString().padStart(2, "0")
      // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format2 = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(/* @__PURE__ */ new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = (/* @__PURE__ */ new Date()).getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "刚刚";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}分钟前`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}小时前`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}天前`;
        break;
      default:
        if (format2 === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}个月前`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}年前`;
          }
        } else {
          tips = timeFormat(timestamp, format2);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value = data[key];
      if (["", void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i = 0; i < value.length; i++) {
              _result.push(`${key}[${i}]=${value[i]}`);
            }
            break;
          case "brackets":
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast$1(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1)
      type = "success";
    let iconName = "";
    switch (type) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
    const n = !isFinite(+number2) ? 0 : +number2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s = "";
    s = (prec ? round$1(n, prec) + "" : `${Math.round(n)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, `$1${sep}$2`);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
  function getDuration(value, unit = true) {
    const valueNum = parseInt(value);
    if (unit) {
      if (/s$/.test(value))
        return value;
      return value > 30 ? `${value}ms` : `${value}s`;
    }
    if (/ms$/.test(value))
      return valueNum;
    if (/s$/.test(value))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value) {
    return `00${value}`.slice(-2);
  }
  function formValidate(instance, event) {
    const formItem2 = uni.$u.$parent.call(instance, "u-form-item");
    const form2 = uni.$u.$parent.call(instance, "u-form");
    if (formItem2 && form2) {
      form2.validateField(formItem2.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (!obj) {
      return;
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys2 = key.split(".");
      let firstObj = obj[keys2[0]] || {};
      for (let i = 1; i < keys2.length; i++) {
        if (firstObj) {
          firstObj = firstObj[keys2[i]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value) {
    if (!obj) {
      return;
    }
    const inFn = function(_obj, keys2, v) {
      if (keys2.length === 1) {
        _obj[keys2[0]] = v;
        return;
      }
      while (keys2.length > 1) {
        const k = keys2[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys2.shift();
        inFn(_obj[k], keys2, v);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys2 = key.split(".");
      inFn(obj, keys2, value);
    } else {
      obj[key] = value;
    }
  }
  function page() {
    var _a;
    const pages2 = getCurrentPages();
    return `/${((_a = pages2[pages2.length - 1]) == null ? void 0 : _a.route) ?? ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  function getHistoryPage(back = 0) {
    const pages2 = getCurrentPages();
    const len = pages2.length;
    return pages2[len - 1 + back];
  }
  function setConfig({
    props: props2 = {},
    config: config2 = {},
    color: color2 = {},
    zIndex: zIndex2 = {}
  }) {
    const {
      deepMerge: deepMerge2
    } = uni.$u;
    uni.$u.config = deepMerge2(uni.$u.config, config2);
    uni.$u.props = deepMerge2(uni.$u.props, props2);
    uni.$u.color = deepMerge2(uni.$u.color, color2);
    uni.$u.zIndex = deepMerge2(uni.$u.zIndex, zIndex2);
  }
  const index = {
    range,
    getPx,
    sleep,
    os,
    sys,
    random,
    guid,
    $parent,
    addStyle,
    addUnit,
    deepClone,
    deepMerge,
    error,
    randomArray,
    timeFormat,
    timeFrom,
    trim,
    queryParams,
    toast: toast$1,
    type2icon,
    priceFormat,
    getDuration,
    padZero,
    formValidate,
    getProperty,
    setProperty,
    page,
    pages,
    getHistoryPage,
    setConfig
  };
  const version = "2.0.38";
  {
    formatAppLog("log", "at node_modules/uview-ui/libs/config/config.js:6", `
 %c uView V${version} %c https://uviewui.com/ 

`, "color: #ffffff; background: #3c9cff; padding:5px 0; border-radius: 5px;");
  }
  const config$2 = {
    v: version,
    version,
    // 主题名称
    type: [
      "primary",
      "success",
      "info",
      "error",
      "warning"
    ],
    // 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
    color: {
      "u-primary": "#2979ff",
      "u-warning": "#ff9900",
      "u-success": "#19be6b",
      "u-error": "#fa3534",
      "u-info": "#909399",
      "u-main-color": "#303133",
      "u-content-color": "#606266",
      "u-tips-color": "#909399",
      "u-light-color": "#c0c4cc"
    },
    // 默认单位，可以通过配置为rpx，那么在用于传入组件大小参数为数值时，就默认为rpx
    unit: "px"
  };
  const actionSheet = {
    // action-sheet组件
    actionSheet: {
      show: false,
      title: "",
      description: "",
      actions: () => [],
      index: "",
      cancelText: "",
      closeOnClickAction: true,
      safeAreaInsetBottom: true,
      openType: "",
      closeOnClickOverlay: true,
      round: 0
    }
  };
  const album = {
    // album 组件
    album: {
      urls: () => [],
      keyName: "",
      singleSize: 180,
      multipleSize: 70,
      space: 6,
      singleMode: "scaleToFill",
      multipleMode: "aspectFill",
      maxCount: 9,
      previewFullImage: true,
      rowCount: 3,
      showMore: true
    }
  };
  const alert = {
    // alert警告组件
    alert: {
      title: "",
      type: "warning",
      description: "",
      closable: false,
      showIcon: false,
      effect: "light",
      center: false,
      fontSize: 14
    }
  };
  const avatar = {
    // avatar 组件
    avatar: {
      src: "",
      shape: "circle",
      size: 40,
      mode: "scaleToFill",
      text: "",
      bgColor: "#c0c4cc",
      color: "#ffffff",
      fontSize: 18,
      icon: "",
      mpAvatar: false,
      randomBgColor: false,
      defaultUrl: "",
      colorIndex: "",
      name: ""
    }
  };
  const avatarGroup = {
    // avatarGroup 组件
    avatarGroup: {
      urls: () => [],
      maxCount: 5,
      shape: "circle",
      mode: "scaleToFill",
      showMore: true,
      size: 40,
      keyName: "",
      gap: 0.5,
      extraValue: 0
    }
  };
  const backtop = {
    // backtop组件
    backtop: {
      mode: "circle",
      icon: "arrow-upward",
      text: "",
      duration: 100,
      scrollTop: 0,
      top: 400,
      bottom: 100,
      right: 20,
      zIndex: 9,
      iconStyle: () => ({
        color: "#909399",
        fontSize: "19px"
      })
    }
  };
  const badge = {
    // 徽标数组件
    badge: {
      isDot: false,
      value: "",
      show: true,
      max: 999,
      type: "error",
      showZero: false,
      bgColor: null,
      color: null,
      shape: "circle",
      numberType: "overflow",
      offset: () => [],
      inverted: false,
      absolute: false
    }
  };
  const button = {
    // button组件
    button: {
      hairline: false,
      type: "info",
      size: "normal",
      shape: "square",
      plain: false,
      disabled: false,
      loading: false,
      loadingText: "",
      loadingMode: "spinner",
      loadingSize: 15,
      openType: "",
      formType: "",
      appParameter: "",
      hoverStopPropagation: true,
      lang: "en",
      sessionFrom: "",
      sendMessageTitle: "",
      sendMessagePath: "",
      sendMessageImg: "",
      showMessageCard: false,
      dataName: "",
      throttleTime: 0,
      hoverStartTime: 0,
      hoverStayTime: 200,
      text: "",
      icon: "",
      iconColor: "",
      color: ""
    }
  };
  const calendar$2 = {
    // calendar 组件
    calendar: {
      title: "日期选择",
      showTitle: true,
      showSubtitle: true,
      mode: "single",
      startText: "开始",
      endText: "结束",
      customList: () => [],
      color: "#3c9cff",
      minDate: 0,
      maxDate: 0,
      defaultDate: null,
      maxCount: Number.MAX_SAFE_INTEGER,
      // Infinity
      rowHeight: 56,
      formatter: null,
      showLunar: false,
      showMark: true,
      confirmText: "确定",
      confirmDisabledText: "确定",
      show: false,
      closeOnClickOverlay: false,
      readonly: false,
      showConfirm: true,
      maxRange: Number.MAX_SAFE_INTEGER,
      // Infinity
      rangePrompt: "",
      showRangePrompt: true,
      allowSameDay: false,
      round: 0,
      monthNum: 3
    }
  };
  const carKeyboard = {
    // 车牌号键盘
    carKeyboard: {
      random: false
    }
  };
  const cell = {
    // cell组件的props
    cell: {
      customClass: "",
      title: "",
      label: "",
      value: "",
      icon: "",
      disabled: false,
      border: true,
      center: false,
      url: "",
      linkType: "navigateTo",
      clickable: false,
      isLink: false,
      required: false,
      arrowDirection: "",
      iconStyle: {},
      rightIconStyle: {},
      rightIcon: "arrow-right",
      titleStyle: {},
      size: "",
      stop: true,
      name: ""
    }
  };
  const cellGroup = {
    // cell-group组件的props
    cellGroup: {
      title: "",
      border: true,
      customStyle: {}
    }
  };
  const checkbox = {
    // checkbox组件
    checkbox: {
      name: "",
      shape: "",
      size: "",
      checkbox: false,
      disabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      iconColor: "",
      label: "",
      labelSize: "",
      labelColor: "",
      labelDisabled: ""
    }
  };
  const checkboxGroup = {
    // checkbox-group组件
    checkboxGroup: {
      name: "",
      value: () => [],
      shape: "square",
      disabled: false,
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      size: 18,
      placement: "row",
      labelSize: 14,
      labelColor: "#303133",
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      iconPlacement: "left",
      borderBottom: false
    }
  };
  const circleProgress = {
    // circleProgress 组件
    circleProgress: {
      percentage: 30
    }
  };
  const code = {
    // code 组件
    code: {
      seconds: 60,
      startText: "获取验证码",
      changeText: "X秒重新获取",
      endText: "重新获取",
      keepRunning: false,
      uniqueKey: ""
    }
  };
  const codeInput = {
    // codeInput 组件
    codeInput: {
      adjustPosition: true,
      maxlength: 6,
      dot: false,
      mode: "box",
      hairline: false,
      space: 10,
      value: "",
      focus: false,
      bold: false,
      color: "#606266",
      fontSize: 18,
      size: 35,
      disabledKeyboard: false,
      borderColor: "#c9cacc",
      disabledDot: true
    }
  };
  const col = {
    // col 组件
    col: {
      span: 12,
      offset: 0,
      justify: "start",
      align: "stretch",
      textAlign: "left"
    }
  };
  const collapse = {
    // collapse 组件
    collapse: {
      value: null,
      accordion: false,
      border: true
    }
  };
  const collapseItem = {
    // collapseItem 组件
    collapseItem: {
      title: "",
      value: "",
      label: "",
      disabled: false,
      isLink: true,
      clickable: true,
      border: true,
      align: "left",
      name: "",
      icon: "",
      duration: 300
    }
  };
  const columnNotice = {
    // columnNotice 组件
    columnNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80,
      step: false,
      duration: 1500,
      disableTouch: true
    }
  };
  const countDown = {
    // u-count-down 计时器组件
    countDown: {
      time: 0,
      format: "HH:mm:ss",
      autoStart: true,
      millisecond: false
    }
  };
  const countTo = {
    // countTo 组件
    countTo: {
      startVal: 0,
      endVal: 0,
      duration: 2e3,
      autoplay: true,
      decimals: 0,
      useEasing: true,
      decimal: ".",
      color: "#606266",
      fontSize: 22,
      bold: false,
      separator: ""
    }
  };
  const datetimePicker = {
    // datetimePicker 组件
    datetimePicker: {
      show: false,
      showToolbar: true,
      value: "",
      title: "",
      mode: "datetime",
      maxDate: new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 0, 1).getTime(),
      minDate: new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1).getTime(),
      minHour: 0,
      maxHour: 23,
      minMinute: 0,
      maxMinute: 59,
      filter: null,
      formatter: null,
      loading: false,
      itemHeight: 44,
      cancelText: "取消",
      confirmText: "确认",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      closeOnClickOverlay: false,
      immediateChange: false,
      defaultIndex: () => []
    }
  };
  const divider = {
    // divider组件
    divider: {
      dashed: false,
      hairline: true,
      dot: false,
      textPosition: "center",
      text: "",
      textSize: 14,
      textColor: "#909399",
      lineColor: "#dcdfe6"
    }
  };
  const empty = {
    // empty组件
    empty: {
      icon: "",
      text: "",
      textColor: "#c0c4cc",
      textSize: 14,
      iconColor: "#c0c4cc",
      iconSize: 90,
      mode: "data",
      width: 160,
      height: 160,
      show: true,
      marginTop: 0
    }
  };
  const form = {
    // form 组件
    form: {
      model: () => ({}),
      rules: () => ({}),
      errorType: "message",
      borderBottom: true,
      labelPosition: "left",
      labelWidth: 45,
      labelAlign: "left",
      labelStyle: () => ({})
    }
  };
  const formItem = {
    // formItem 组件
    formItem: {
      label: "",
      prop: "",
      borderBottom: "",
      labelPosition: "",
      labelWidth: "",
      rightIcon: "",
      leftIcon: "",
      required: false,
      leftIconStyle: ""
    }
  };
  const gap = {
    // gap组件
    gap: {
      bgColor: "transparent",
      height: 20,
      marginTop: 0,
      marginBottom: 0,
      customStyle: {}
    }
  };
  const grid = {
    // grid组件
    grid: {
      col: 3,
      border: false,
      align: "left"
    }
  };
  const gridItem = {
    // grid-item组件
    gridItem: {
      name: null,
      bgColor: "transparent"
    }
  };
  const {
    color: color$3
  } = config$2;
  const icon = {
    // icon组件
    icon: {
      name: "",
      color: color$3["u-content-color"],
      size: "16px",
      bold: false,
      index: "",
      hoverClass: "",
      customPrefix: "uicon",
      label: "",
      labelPos: "right",
      labelSize: "15px",
      labelColor: color$3["u-content-color"],
      space: "3px",
      imgMode: "",
      width: "",
      height: "",
      top: 0,
      stop: false
    }
  };
  const image = {
    // image组件
    image: {
      src: "",
      mode: "aspectFill",
      width: "300",
      height: "225",
      shape: "square",
      radius: 0,
      lazyLoad: true,
      showMenuByLongpress: true,
      loadingIcon: "photo",
      errorIcon: "error-circle",
      showLoading: true,
      showError: true,
      fade: true,
      webp: false,
      duration: 500,
      bgColor: "#f3f4f6"
    }
  };
  const indexAnchor = {
    // indexAnchor 组件
    indexAnchor: {
      text: "",
      color: "#606266",
      size: 14,
      bgColor: "#dedede",
      height: 32
    }
  };
  const indexList = {
    // indexList 组件
    indexList: {
      inactiveColor: "#606266",
      activeColor: "#5677fc",
      indexList: () => [],
      sticky: true,
      customNavHeight: 0
    }
  };
  const input = {
    // index 组件
    input: {
      value: "",
      type: "text",
      fixed: false,
      disabled: false,
      disabledColor: "#f5f7fa",
      clearable: false,
      password: false,
      maxlength: -1,
      placeholder: null,
      placeholderClass: "input-placeholder",
      placeholderStyle: "color: #c0c4cc",
      showWordLimit: false,
      confirmType: "done",
      confirmHold: false,
      holdKeyboard: false,
      focus: false,
      autoBlur: false,
      disableDefaultPadding: false,
      cursor: -1,
      cursorSpacing: 30,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      inputAlign: "left",
      fontSize: "15px",
      color: "#303133",
      prefixIcon: "",
      prefixIconStyle: "",
      suffixIcon: "",
      suffixIconStyle: "",
      border: "surround",
      readonly: false,
      shape: "square",
      formatter: null
    }
  };
  const keyboard = {
    // 键盘组件
    keyboard: {
      mode: "number",
      dotDisabled: false,
      tooltip: true,
      showTips: true,
      tips: "",
      showCancel: true,
      showConfirm: true,
      random: false,
      safeAreaInsetBottom: true,
      closeOnClickOverlay: true,
      show: false,
      overlay: true,
      zIndex: 10075,
      cancelText: "取消",
      confirmText: "确定",
      autoChange: false
    }
  };
  const line = {
    // line组件
    line: {
      color: "#d6d7d9",
      length: "100%",
      direction: "row",
      hairline: true,
      margin: 0,
      dashed: false
    }
  };
  const lineProgress = {
    // lineProgress 组件
    lineProgress: {
      activeColor: "#19be6b",
      inactiveColor: "#ececec",
      percentage: 0,
      showText: true,
      height: 12
    }
  };
  const {
    color: color$2
  } = config$2;
  const link = {
    // link超链接组件props参数
    link: {
      color: color$2["u-primary"],
      fontSize: 15,
      underLine: false,
      href: "",
      mpTips: "链接已复制，请在浏览器打开",
      lineColor: "",
      text: ""
    }
  };
  const list = {
    // list 组件
    list: {
      showScrollbar: false,
      lowerThreshold: 50,
      upperThreshold: 0,
      scrollTop: 0,
      offsetAccuracy: 10,
      enableFlex: false,
      pagingEnabled: false,
      scrollable: true,
      scrollIntoView: "",
      scrollWithAnimation: false,
      enableBackToTop: false,
      height: 0,
      width: 0,
      preLoadScreen: 1
    }
  };
  const listItem = {
    // listItem 组件
    listItem: {
      anchor: ""
    }
  };
  const {
    color: color$1
  } = config$2;
  const loadingIcon = {
    // loading-icon加载中图标组件
    loadingIcon: {
      show: true,
      color: color$1["u-tips-color"],
      textColor: color$1["u-tips-color"],
      vertical: false,
      mode: "spinner",
      size: 24,
      textSize: 15,
      text: "",
      timingFunction: "ease-in-out",
      duration: 1200,
      inactiveColor: ""
    }
  };
  const loadingPage = {
    // loading-page组件
    loadingPage: {
      loadingText: "正在加载",
      image: "",
      loadingMode: "circle",
      loading: false,
      bgColor: "#ffffff",
      color: "#C8C8C8",
      fontSize: 19,
      iconSize: 28,
      loadingColor: "#C8C8C8"
    }
  };
  const loadmore = {
    // loadmore 组件
    loadmore: {
      status: "loadmore",
      bgColor: "transparent",
      icon: true,
      fontSize: 14,
      iconSize: 17,
      color: "#606266",
      loadingIcon: "spinner",
      loadmoreText: "加载更多",
      loadingText: "正在加载...",
      nomoreText: "没有更多了",
      isDot: false,
      iconColor: "#b7b7b7",
      marginTop: 10,
      marginBottom: 10,
      height: "auto",
      line: false,
      lineColor: "#E6E8EB",
      dashed: false
    }
  };
  const modal = {
    // modal 组件
    modal: {
      show: false,
      title: "",
      content: "",
      confirmText: "确认",
      cancelText: "取消",
      showConfirmButton: true,
      showCancelButton: false,
      confirmColor: "#2979ff",
      cancelColor: "#606266",
      buttonReverse: false,
      zoom: true,
      asyncClose: false,
      closeOnClickOverlay: false,
      negativeTop: 0,
      width: "650rpx",
      confirmButtonShape: "",
      duration: 400
    }
  };
  const color = {
    primary: "#3c9cff",
    info: "#909399",
    default: "#909399",
    warning: "#f9ae3d",
    error: "#f56c6c",
    success: "#5ac725",
    mainColor: "#303133",
    contentColor: "#606266",
    tipsColor: "#909399",
    lightColor: "#c0c4cc",
    borderColor: "#e4e7ed"
  };
  const navbar = {
    // navbar 组件
    navbar: {
      safeAreaInsetTop: true,
      placeholder: false,
      fixed: true,
      border: false,
      leftIcon: "arrow-left",
      leftText: "",
      rightText: "",
      rightIcon: "",
      title: "",
      bgColor: "#ffffff",
      titleWidth: "400rpx",
      height: "44px",
      leftIconSize: 20,
      leftIconColor: color.mainColor,
      autoBack: false,
      titleStyle: ""
    }
  };
  const noNetwork = {
    // noNetwork
    noNetwork: {
      tips: "哎呀，网络信号丢失",
      zIndex: "",
      image: "data:image/png;base64,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"
    }
  };
  const noticeBar = {
    // noticeBar
    noticeBar: {
      text: () => [],
      direction: "row",
      step: false,
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      speed: 80,
      fontSize: 14,
      duration: 2e3,
      disableTouch: true,
      url: "",
      linkType: "navigateTo"
    }
  };
  const notify = {
    // notify组件
    notify: {
      top: 0,
      type: "primary",
      color: "#ffffff",
      bgColor: "",
      message: "",
      duration: 3e3,
      fontSize: 15,
      safeAreaInsetTop: false
    }
  };
  const numberBox = {
    // 步进器组件
    numberBox: {
      name: "",
      value: 0,
      min: 1,
      max: Number.MAX_SAFE_INTEGER,
      step: 1,
      integer: false,
      disabled: false,
      disabledInput: false,
      asyncChange: false,
      inputWidth: 35,
      showMinus: true,
      showPlus: true,
      decimalLength: null,
      longPress: true,
      color: "#323233",
      buttonSize: 30,
      bgColor: "#EBECEE",
      cursorSpacing: 100,
      disableMinus: false,
      disablePlus: false,
      iconStyle: ""
    }
  };
  const numberKeyboard = {
    // 数字键盘
    numberKeyboard: {
      mode: "number",
      dotDisabled: false,
      random: false
    }
  };
  const overlay = {
    // overlay组件
    overlay: {
      show: false,
      zIndex: 10070,
      duration: 300,
      opacity: 0.5
    }
  };
  const parse = {
    // parse
    parse: {
      copyLink: true,
      errorImg: "",
      lazyLoad: false,
      loadingImg: "",
      pauseVideo: true,
      previewImg: true,
      setTitle: true,
      showImgMenu: true
    }
  };
  const picker = {
    // picker
    picker: {
      show: false,
      showToolbar: true,
      title: "",
      columns: () => [],
      loading: false,
      itemHeight: 44,
      cancelText: "取消",
      confirmText: "确定",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      keyName: "text",
      closeOnClickOverlay: false,
      defaultIndex: () => [],
      immediateChange: false
    }
  };
  const popup = {
    // popup组件
    popup: {
      show: false,
      overlay: true,
      mode: "bottom",
      duration: 300,
      closeable: false,
      overlayStyle: () => {
      },
      closeOnClickOverlay: true,
      zIndex: 10075,
      safeAreaInsetBottom: true,
      safeAreaInsetTop: false,
      closeIconPos: "top-right",
      round: 0,
      zoom: true,
      bgColor: "",
      overlayOpacity: 0.5
    }
  };
  const radio = {
    // radio组件
    radio: {
      name: "",
      shape: "",
      disabled: "",
      labelDisabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      labelSize: "",
      label: "",
      labelColor: "",
      size: "",
      iconColor: "",
      placement: ""
    }
  };
  const radioGroup = {
    // radio-group组件
    radioGroup: {
      value: "",
      disabled: false,
      shape: "circle",
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      name: "",
      size: 18,
      placement: "row",
      label: "",
      labelColor: "#303133",
      labelSize: 14,
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      borderBottom: false,
      iconPlacement: "left"
    }
  };
  const rate = {
    // rate组件
    rate: {
      value: 1,
      count: 5,
      disabled: false,
      size: 18,
      inactiveColor: "#b2b2b2",
      activeColor: "#FA3534",
      gutter: 4,
      minCount: 1,
      allowHalf: false,
      activeIcon: "star-fill",
      inactiveIcon: "star",
      touchable: true
    }
  };
  const readMore = {
    // readMore
    readMore: {
      showHeight: 400,
      toggle: false,
      closeText: "展开阅读全文",
      openText: "收起",
      color: "#2979ff",
      fontSize: 14,
      textIndent: "2em",
      name: ""
    }
  };
  const row = {
    // row
    row: {
      gutter: 0,
      justify: "start",
      align: "center"
    }
  };
  const rowNotice = {
    // rowNotice
    rowNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80
    }
  };
  const scrollList = {
    // scrollList
    scrollList: {
      indicatorWidth: 50,
      indicatorBarWidth: 20,
      indicator: true,
      indicatorColor: "#f2f2f2",
      indicatorActiveColor: "#3c9cff",
      indicatorStyle: ""
    }
  };
  const search = {
    // search
    search: {
      shape: "round",
      bgColor: "#f2f2f2",
      placeholder: "请输入关键字",
      clearabled: true,
      focus: false,
      showAction: true,
      actionStyle: () => ({}),
      actionText: "搜索",
      inputAlign: "left",
      inputStyle: () => ({}),
      disabled: false,
      borderColor: "transparent",
      searchIconColor: "#909399",
      searchIconSize: 22,
      color: "#606266",
      placeholderColor: "#909399",
      searchIcon: "search",
      margin: "0",
      animation: false,
      value: "",
      maxlength: "-1",
      height: 32,
      label: null
    }
  };
  const section = {
    // u-section组件
    section: {
      title: "",
      subTitle: "更多",
      right: true,
      fontSize: 15,
      bold: true,
      color: "#303133",
      subColor: "#909399",
      showLine: true,
      lineColor: "",
      arrow: true
    }
  };
  const skeleton = {
    // skeleton
    skeleton: {
      loading: true,
      animate: true,
      rows: 0,
      rowsWidth: "100%",
      rowsHeight: 18,
      title: true,
      titleWidth: "50%",
      titleHeight: 18,
      avatar: false,
      avatarSize: 32,
      avatarShape: "circle"
    }
  };
  const slider = {
    // slider组件
    slider: {
      value: 0,
      blockSize: 18,
      min: 0,
      max: 100,
      step: 1,
      activeColor: "#2979ff",
      inactiveColor: "#c0c4cc",
      blockColor: "#ffffff",
      showValue: false,
      disabled: false,
      blockStyle: () => {
      }
    }
  };
  const statusBar = {
    // statusBar
    statusBar: {
      bgColor: "transparent"
    }
  };
  const steps = {
    // steps组件
    steps: {
      direction: "row",
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#969799",
      activeIcon: "",
      inactiveIcon: "",
      dot: false
    }
  };
  const stepsItem = {
    // steps-item组件
    stepsItem: {
      title: "",
      desc: "",
      iconSize: 17,
      error: false
    }
  };
  const sticky = {
    // sticky组件
    sticky: {
      offsetTop: 0,
      customNavHeight: 0,
      disabled: false,
      bgColor: "transparent",
      zIndex: "",
      index: ""
    }
  };
  const subsection = {
    // subsection组件
    subsection: {
      list: [],
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#303133",
      mode: "button",
      fontSize: 12,
      bold: true,
      bgColor: "#eeeeef",
      keyName: "name"
    }
  };
  const swipeAction = {
    // swipe-action组件
    swipeAction: {
      autoClose: true
    }
  };
  const swipeActionItem = {
    // swipeActionItem 组件
    swipeActionItem: {
      show: false,
      name: "",
      disabled: false,
      threshold: 20,
      autoClose: true,
      options: [],
      duration: 300
    }
  };
  const swiper = {
    // swiper 组件
    swiper: {
      list: () => [],
      indicator: false,
      indicatorActiveColor: "#FFFFFF",
      indicatorInactiveColor: "rgba(255, 255, 255, 0.35)",
      indicatorStyle: "",
      indicatorMode: "line",
      autoplay: true,
      current: 0,
      currentItemId: "",
      interval: 3e3,
      duration: 300,
      circular: false,
      previousMargin: 0,
      nextMargin: 0,
      acceleration: false,
      displayMultipleItems: 1,
      easingFunction: "default",
      keyName: "url",
      imgMode: "aspectFill",
      height: 130,
      bgColor: "#f3f4f6",
      radius: 4,
      loading: false,
      showTitle: false
    }
  };
  const swipterIndicator = {
    // swiperIndicator 组件
    swiperIndicator: {
      length: 0,
      current: 0,
      indicatorActiveColor: "",
      indicatorInactiveColor: "",
      indicatorMode: "line"
    }
  };
  const _switch = {
    // switch
    switch: {
      loading: false,
      disabled: false,
      size: 25,
      activeColor: "#2979ff",
      inactiveColor: "#ffffff",
      value: false,
      activeValue: true,
      inactiveValue: false,
      asyncChange: false,
      space: 0
    }
  };
  const tabbar = {
    // tabbar
    tabbar: {
      value: null,
      safeAreaInsetBottom: true,
      border: true,
      zIndex: 1,
      activeColor: "#1989fa",
      inactiveColor: "#7d7e80",
      fixed: true,
      placeholder: true
    }
  };
  const tabbarItem = {
    //
    tabbarItem: {
      name: null,
      icon: "",
      badge: null,
      dot: false,
      text: "",
      badgeStyle: "top: 6px;right:2px;"
    }
  };
  const tabs = {
    //
    tabs: {
      duration: 300,
      list: () => [],
      lineColor: "#3c9cff",
      activeStyle: () => ({
        color: "#303133"
      }),
      inactiveStyle: () => ({
        color: "#606266"
      }),
      lineWidth: 20,
      lineHeight: 3,
      lineBgSize: "cover",
      itemStyle: () => ({
        height: "44px"
      }),
      scrollable: true,
      current: 0,
      keyName: "name"
    }
  };
  const tag = {
    // tag 组件
    tag: {
      type: "primary",
      disabled: false,
      size: "medium",
      shape: "square",
      text: "",
      bgColor: "",
      color: "",
      borderColor: "",
      closeColor: "#C6C7CB",
      name: "",
      plainFill: false,
      plain: false,
      closable: false,
      show: true,
      icon: ""
    }
  };
  const text = {
    // text 组件
    text: {
      type: "",
      show: true,
      text: "",
      prefixIcon: "",
      suffixIcon: "",
      mode: "",
      href: "",
      format: "",
      call: false,
      openType: "",
      bold: false,
      block: false,
      lines: "",
      color: "#303133",
      size: 15,
      iconStyle: () => ({
        fontSize: "15px"
      }),
      decoration: "none",
      margin: 0,
      lineHeight: "",
      align: "left",
      wordWrap: "normal"
    }
  };
  const textarea = {
    // textarea 组件
    textarea: {
      value: "",
      placeholder: "",
      placeholderClass: "textarea-placeholder",
      placeholderStyle: "color: #c0c4cc",
      height: 70,
      confirmType: "done",
      disabled: false,
      count: false,
      focus: false,
      autoHeight: false,
      fixed: false,
      cursorSpacing: 0,
      cursor: "",
      showConfirmBar: true,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      disableDefaultPadding: false,
      holdKeyboard: false,
      maxlength: 140,
      border: "surround",
      formatter: null
    }
  };
  const toast = {
    // toast组件
    toast: {
      zIndex: 10090,
      loading: false,
      text: "",
      icon: "",
      type: "",
      loadingMode: "",
      show: "",
      overlay: false,
      position: "center",
      params: () => {
      },
      duration: 2e3,
      isTab: false,
      url: "",
      callback: null,
      back: false
    }
  };
  const toolbar = {
    // toolbar 组件
    toolbar: {
      show: true,
      cancelText: "取消",
      confirmText: "确认",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      title: ""
    }
  };
  const tooltip = {
    // tooltip 组件
    tooltip: {
      text: "",
      copyText: "",
      size: 14,
      color: "#606266",
      bgColor: "transparent",
      direction: "top",
      zIndex: 10071,
      showCopy: true,
      buttons: () => [],
      overlay: true,
      showToast: true
    }
  };
  const transition = {
    // transition动画组件的props
    transition: {
      show: false,
      mode: "fade",
      duration: "300",
      timingFunction: "ease-out"
    }
  };
  const upload = {
    // upload组件
    upload: {
      accept: "image",
      capture: () => ["album", "camera"],
      compressed: true,
      camera: "back",
      maxDuration: 60,
      uploadIcon: "camera-fill",
      uploadIconColor: "#D3D4D6",
      useBeforeRead: false,
      previewFullImage: true,
      maxCount: 52,
      disabled: false,
      imageMode: "aspectFill",
      name: "",
      sizeType: () => ["original", "compressed"],
      multiple: false,
      deletable: true,
      maxSize: Number.MAX_VALUE,
      fileList: () => [],
      uploadText: "",
      width: 80,
      height: 80,
      previewImage: true
    }
  };
  const props = {
    ...actionSheet,
    ...album,
    ...alert,
    ...avatar,
    ...avatarGroup,
    ...backtop,
    ...badge,
    ...button,
    ...calendar$2,
    ...carKeyboard,
    ...cell,
    ...cellGroup,
    ...checkbox,
    ...checkboxGroup,
    ...circleProgress,
    ...code,
    ...codeInput,
    ...col,
    ...collapse,
    ...collapseItem,
    ...columnNotice,
    ...countDown,
    ...countTo,
    ...datetimePicker,
    ...divider,
    ...empty,
    ...form,
    ...formItem,
    ...gap,
    ...grid,
    ...gridItem,
    ...icon,
    ...image,
    ...indexAnchor,
    ...indexList,
    ...input,
    ...keyboard,
    ...line,
    ...lineProgress,
    ...link,
    ...list,
    ...listItem,
    ...loadingIcon,
    ...loadingPage,
    ...loadmore,
    ...modal,
    ...navbar,
    ...noNetwork,
    ...noticeBar,
    ...notify,
    ...numberBox,
    ...numberKeyboard,
    ...overlay,
    ...parse,
    ...picker,
    ...popup,
    ...radio,
    ...radioGroup,
    ...rate,
    ...readMore,
    ...row,
    ...rowNotice,
    ...scrollList,
    ...search,
    ...section,
    ...skeleton,
    ...slider,
    ...statusBar,
    ...steps,
    ...stepsItem,
    ...sticky,
    ...subsection,
    ...swipeAction,
    ...swipeActionItem,
    ...swiper,
    ...swipterIndicator,
    ..._switch,
    ...tabbar,
    ...tabbarItem,
    ...tabs,
    ...tag,
    ...text,
    ...textarea,
    ...toast,
    ...toolbar,
    ...tooltip,
    ...transition,
    ...upload
  };
  const zIndex = {
    toast: 10090,
    noNetwork: 10080,
    // popup包含popup，actionsheet，keyboard，picker的值
    popup: 10075,
    mask: 10070,
    navbar: 980,
    topTips: 975,
    sticky: 970,
    indexListSticky: 965
  };
  let platform = "none";
  platform = "vue3";
  platform = "plus";
  const platform$1 = platform;
  const $u = {
    route,
    date: index.timeFormat,
    // 另名date
    colorGradient: colorGradient$1.colorGradient,
    hexToRgb: colorGradient$1.hexToRgb,
    rgbToHex: colorGradient$1.rgbToHex,
    colorToRgba: colorGradient$1.colorToRgba,
    test,
    type: ["primary", "success", "error", "warning", "info"],
    http: new Request(),
    config: config$2,
    // uView配置信息相关，比如版本号
    zIndex,
    debounce,
    throttle,
    mixin: mixin$1,
    mpMixin,
    props,
    ...index,
    color,
    platform: platform$1
  };
  uni.$u = $u;
  const install = (Vue2) => {
    Vue2.filter("timeFormat", (timestamp, format2) => uni.$u.timeFormat(timestamp, format2));
    Vue2.filter("date", (timestamp, format2) => uni.$u.timeFormat(timestamp, format2));
    Vue2.filter("timeFrom", (timestamp, format2) => uni.$u.timeFrom(timestamp, format2));
    Vue2.prototype.$u = $u;
    Vue2.mixin(mixin$1);
  };
  const uView = {
    install
  };
  //! moment.js
  //! version : 2.30.1
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var hookCallback;
  function hooks() {
    return hookCallback.apply(null, arguments);
  }
  function setHookCallback(callback) {
    hookCallback = callback;
  }
  function isArray(input2) {
    return input2 instanceof Array || Object.prototype.toString.call(input2) === "[object Array]";
  }
  function isObject(input2) {
    return input2 != null && Object.prototype.toString.call(input2) === "[object Object]";
  }
  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
      return Object.getOwnPropertyNames(obj).length === 0;
    } else {
      var k;
      for (k in obj) {
        if (hasOwnProp(obj, k)) {
          return false;
        }
      }
      return true;
    }
  }
  function isUndefined(input2) {
    return input2 === void 0;
  }
  function isNumber(input2) {
    return typeof input2 === "number" || Object.prototype.toString.call(input2) === "[object Number]";
  }
  function isDate(input2) {
    return input2 instanceof Date || Object.prototype.toString.call(input2) === "[object Date]";
  }
  function map(arr, fn) {
    var res = [], i, arrLen = arr.length;
    for (i = 0; i < arrLen; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }
  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }
    if (hasOwnProp(b, "toString")) {
      a.toString = b.toString;
    }
    if (hasOwnProp(b, "valueOf")) {
      a.valueOf = b.valueOf;
    }
    return a;
  }
  function createUTC(input2, format2, locale2, strict) {
    return createLocalOrUTC(input2, format2, locale2, strict, true).utc();
  }
  function defaultParsingFlags() {
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false
    };
  }
  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }
    return m._pf;
  }
  var some;
  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function(fun) {
      var t = Object(this), len = t.length >>> 0, i;
      for (i = 0; i < len; i++) {
        if (i in t && fun.call(this, t[i], i, t)) {
          return true;
        }
      }
      return false;
    };
  }
  function isValid(m) {
    var flags = null, parsedParts = false, isNowValid = m._d && !isNaN(m._d.getTime());
    if (isNowValid) {
      flags = getParsingFlags(m);
      parsedParts = some.call(flags.parsedDateParts, function(i) {
        return i != null;
      });
      isNowValid = flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
      if (m._strict) {
        isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
      }
    }
    if (Object.isFrozen == null || !Object.isFrozen(m)) {
      m._isValid = isNowValid;
    } else {
      return isNowValid;
    }
    return m._isValid;
  }
  function createInvalid(flags) {
    var m = createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }
    return m;
  }
  var momentProperties = hooks.momentProperties = [], updateInProgress = false;
  function copyConfig(to2, from2) {
    var i, prop, val, momentPropertiesLen = momentProperties.length;
    if (!isUndefined(from2._isAMomentObject)) {
      to2._isAMomentObject = from2._isAMomentObject;
    }
    if (!isUndefined(from2._i)) {
      to2._i = from2._i;
    }
    if (!isUndefined(from2._f)) {
      to2._f = from2._f;
    }
    if (!isUndefined(from2._l)) {
      to2._l = from2._l;
    }
    if (!isUndefined(from2._strict)) {
      to2._strict = from2._strict;
    }
    if (!isUndefined(from2._tzm)) {
      to2._tzm = from2._tzm;
    }
    if (!isUndefined(from2._isUTC)) {
      to2._isUTC = from2._isUTC;
    }
    if (!isUndefined(from2._offset)) {
      to2._offset = from2._offset;
    }
    if (!isUndefined(from2._pf)) {
      to2._pf = getParsingFlags(from2);
    }
    if (!isUndefined(from2._locale)) {
      to2._locale = from2._locale;
    }
    if (momentPropertiesLen > 0) {
      for (i = 0; i < momentPropertiesLen; i++) {
        prop = momentProperties[i];
        val = from2[prop];
        if (!isUndefined(val)) {
          to2[prop] = val;
        }
      }
    }
    return to2;
  }
  function Moment(config2) {
    copyConfig(this, config2);
    this._d = new Date(config2._d != null ? config2._d.getTime() : NaN);
    if (!this.isValid()) {
      this._d = /* @__PURE__ */ new Date(NaN);
    }
    if (updateInProgress === false) {
      updateInProgress = true;
      hooks.updateOffset(this);
      updateInProgress = false;
    }
  }
  function isMoment(obj) {
    return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
  }
  function warn(msg2) {
    if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
      formatAppLog("warn", "at node_modules/moment/dist/moment.js:281", "Deprecation warning: " + msg2);
    }
  }
  function deprecate(msg2, fn) {
    var firstTime = true;
    return extend(function() {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(null, msg2);
      }
      if (firstTime) {
        var args = [], arg, i, key, argLen = arguments.length;
        for (i = 0; i < argLen; i++) {
          arg = "";
          if (typeof arguments[i] === "object") {
            arg += "\n[" + i + "] ";
            for (key in arguments[0]) {
              if (hasOwnProp(arguments[0], key)) {
                arg += key + ": " + arguments[0][key] + ", ";
              }
            }
            arg = arg.slice(0, -2);
          } else {
            arg = arguments[i];
          }
          args.push(arg);
        }
        warn(
          msg2 + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
        );
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }
  var deprecations = {};
  function deprecateSimple(name, msg2) {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(name, msg2);
    }
    if (!deprecations[name]) {
      warn(msg2);
      deprecations[name] = true;
    }
  }
  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;
  function isFunction(input2) {
    return typeof Function !== "undefined" && input2 instanceof Function || Object.prototype.toString.call(input2) === "[object Function]";
  }
  function set(config2) {
    var prop, i;
    for (i in config2) {
      if (hasOwnProp(config2, i)) {
        prop = config2[i];
        if (isFunction(prop)) {
          this[i] = prop;
        } else {
          this["_" + i] = prop;
        }
      }
    }
    this._config = config2;
    this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
    );
  }
  function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }
    for (prop in parentConfig) {
      if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
        res[prop] = extend({}, res[prop]);
      }
    }
    return res;
  }
  function Locale(config2) {
    if (config2 != null) {
      this.set(config2);
    }
  }
  var keys;
  if (Object.keys) {
    keys = Object.keys;
  } else {
    keys = function(obj) {
      var i, res = [];
      for (i in obj) {
        if (hasOwnProp(obj, i)) {
          res.push(i);
        }
      }
      return res;
    };
  }
  var defaultCalendar = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  };
  function calendar(key, mom, now2) {
    var output = this._calendar[key] || this._calendar["sameElse"];
    return isFunction(output) ? output.call(mom, now2) : output;
  }
  function zeroFill(number2, targetLength, forceSign) {
    var absNumber = "" + Math.abs(number2), zerosToFill = targetLength - absNumber.length, sign2 = number2 >= 0;
    return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }
  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
  function addFormatToken(token2, padded, ordinal2, callback) {
    var func2 = callback;
    if (typeof callback === "string") {
      func2 = function() {
        return this[callback]();
      };
    }
    if (token2) {
      formatTokenFunctions[token2] = func2;
    }
    if (padded) {
      formatTokenFunctions[padded[0]] = function() {
        return zeroFill(func2.apply(this, arguments), padded[1], padded[2]);
      };
    }
    if (ordinal2) {
      formatTokenFunctions[ordinal2] = function() {
        return this.localeData().ordinal(
          func2.apply(this, arguments),
          token2
        );
      };
    }
  }
  function removeFormattingTokens(input2) {
    if (input2.match(/\[[\s\S]/)) {
      return input2.replace(/^\[|\]$/g, "");
    }
    return input2.replace(/\\/g, "");
  }
  function makeFormatFunction(format2) {
    var array2 = format2.match(formattingTokens), i, length;
    for (i = 0, length = array2.length; i < length; i++) {
      if (formatTokenFunctions[array2[i]]) {
        array2[i] = formatTokenFunctions[array2[i]];
      } else {
        array2[i] = removeFormattingTokens(array2[i]);
      }
    }
    return function(mom) {
      var output = "", i2;
      for (i2 = 0; i2 < length; i2++) {
        output += isFunction(array2[i2]) ? array2[i2].call(mom, format2) : array2[i2];
      }
      return output;
    };
  }
  function formatMoment(m, format2) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }
    format2 = expandFormat(format2, m.localeData());
    formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
    return formatFunctions[format2](m);
  }
  function expandFormat(format2, locale2) {
    var i = 5;
    function replaceLongDateFormatTokens(input2) {
      return locale2.longDateFormat(input2) || input2;
    }
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format2)) {
      format2 = format2.replace(
        localFormattingTokens,
        replaceLongDateFormatTokens
      );
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }
    return format2;
  }
  var defaultLongDateFormat = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  function longDateFormat(key) {
    var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format2 || !formatUpper) {
      return format2;
    }
    this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
      if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
        return tok.slice(1);
      }
      return tok;
    }).join("");
    return this._longDateFormat[key];
  }
  var defaultInvalidDate = "Invalid date";
  function invalidDate() {
    return this._invalidDate;
  }
  var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
  function ordinal(number2) {
    return this._ordinal.replace("%d", number2);
  }
  var defaultRelativeTime = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  };
  function relativeTime(number2, withoutSuffix, string2, isFuture) {
    var output = this._relativeTime[string2];
    return isFunction(output) ? output(number2, withoutSuffix, string2, isFuture) : output.replace(/%d/i, number2);
  }
  function pastFuture(diff2, output) {
    var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
    return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
  }
  var aliases = {
    D: "date",
    dates: "date",
    date: "date",
    d: "day",
    days: "day",
    day: "day",
    e: "weekday",
    weekdays: "weekday",
    weekday: "weekday",
    E: "isoWeekday",
    isoweekdays: "isoWeekday",
    isoweekday: "isoWeekday",
    DDD: "dayOfYear",
    dayofyears: "dayOfYear",
    dayofyear: "dayOfYear",
    h: "hour",
    hours: "hour",
    hour: "hour",
    ms: "millisecond",
    milliseconds: "millisecond",
    millisecond: "millisecond",
    m: "minute",
    minutes: "minute",
    minute: "minute",
    M: "month",
    months: "month",
    month: "month",
    Q: "quarter",
    quarters: "quarter",
    quarter: "quarter",
    s: "second",
    seconds: "second",
    second: "second",
    gg: "weekYear",
    weekyears: "weekYear",
    weekyear: "weekYear",
    GG: "isoWeekYear",
    isoweekyears: "isoWeekYear",
    isoweekyear: "isoWeekYear",
    w: "week",
    weeks: "week",
    week: "week",
    W: "isoWeek",
    isoweeks: "isoWeek",
    isoweek: "isoWeek",
    y: "year",
    years: "year",
    year: "year"
  };
  function normalizeUnits(units) {
    return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
  }
  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {}, normalizedProp, prop;
    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }
    return normalizedInput;
  }
  var priorities = {
    date: 9,
    day: 11,
    weekday: 11,
    isoWeekday: 11,
    dayOfYear: 4,
    hour: 13,
    millisecond: 16,
    minute: 14,
    month: 8,
    quarter: 7,
    second: 15,
    weekYear: 1,
    isoWeekYear: 1,
    week: 5,
    isoWeek: 5,
    year: 1
  };
  function getPrioritizedUnits(unitsObj) {
    var units = [], u;
    for (u in unitsObj) {
      if (hasOwnProp(unitsObj, u)) {
        units.push({ unit: u, priority: priorities[u] });
      }
    }
    units.sort(function(a, b) {
      return a.priority - b.priority;
    });
    return units;
  }
  var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, match1to2NoLeadingZero = /^[1-9]\d?/, match1to2HasZero = /^([1-9]\d|\d)/, regexes;
  regexes = {};
  function addRegexToken(token2, regex, strictRegex) {
    regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
      return isStrict && strictRegex ? strictRegex : regex;
    };
  }
  function getParseRegexForToken(token2, config2) {
    if (!hasOwnProp(regexes, token2)) {
      return new RegExp(unescapeFormat(token2));
    }
    return regexes[token2](config2._strict, config2._locale);
  }
  function unescapeFormat(s) {
    return regexEscape(
      s.replace("\\", "").replace(
        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
        function(matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
        }
      )
    );
  }
  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function absFloor(number2) {
    if (number2 < 0) {
      return Math.ceil(number2) || 0;
    } else {
      return Math.floor(number2);
    }
  }
  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion, value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }
    return value;
  }
  var tokens = {};
  function addParseToken(token2, callback) {
    var i, func2 = callback, tokenLen;
    if (typeof token2 === "string") {
      token2 = [token2];
    }
    if (isNumber(callback)) {
      func2 = function(input2, array2) {
        array2[callback] = toInt(input2);
      };
    }
    tokenLen = token2.length;
    for (i = 0; i < tokenLen; i++) {
      tokens[token2[i]] = func2;
    }
  }
  function addWeekParseToken(token2, callback) {
    addParseToken(token2, function(input2, array2, config2, token3) {
      config2._w = config2._w || {};
      callback(input2, config2._w, config2, token3);
    });
  }
  function addTimeToArrayFromToken(token2, input2, config2) {
    if (input2 != null && hasOwnProp(tokens, token2)) {
      tokens[token2](input2, config2._a, config2, token2);
    }
  }
  function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }
  var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
  addFormatToken("Y", 0, 0, function() {
    var y = this.year();
    return y <= 9999 ? zeroFill(y, 4) : "+" + y;
  });
  addFormatToken(0, ["YY", 2], 0, function() {
    return this.year() % 100;
  });
  addFormatToken(0, ["YYYY", 4], 0, "year");
  addFormatToken(0, ["YYYYY", 5], 0, "year");
  addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
  addRegexToken("Y", matchSigned);
  addRegexToken("YY", match1to2, match2);
  addRegexToken("YYYY", match1to4, match4);
  addRegexToken("YYYYY", match1to6, match6);
  addRegexToken("YYYYYY", match1to6, match6);
  addParseToken(["YYYYY", "YYYYYY"], YEAR);
  addParseToken("YYYY", function(input2, array2) {
    array2[YEAR] = input2.length === 2 ? hooks.parseTwoDigitYear(input2) : toInt(input2);
  });
  addParseToken("YY", function(input2, array2) {
    array2[YEAR] = hooks.parseTwoDigitYear(input2);
  });
  addParseToken("Y", function(input2, array2) {
    array2[YEAR] = parseInt(input2, 10);
  });
  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }
  hooks.parseTwoDigitYear = function(input2) {
    return toInt(input2) + (toInt(input2) > 68 ? 1900 : 2e3);
  };
  var getSetYear = makeGetSet("FullYear", true);
  function getIsLeapYear() {
    return isLeapYear(this.year());
  }
  function makeGetSet(unit, keepTime) {
    return function(value) {
      if (value != null) {
        set$1(this, unit, value);
        hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get(this, unit);
      }
    };
  }
  function get(mom, unit) {
    if (!mom.isValid()) {
      return NaN;
    }
    var d = mom._d, isUTC = mom._isUTC;
    switch (unit) {
      case "Milliseconds":
        return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
      case "Seconds":
        return isUTC ? d.getUTCSeconds() : d.getSeconds();
      case "Minutes":
        return isUTC ? d.getUTCMinutes() : d.getMinutes();
      case "Hours":
        return isUTC ? d.getUTCHours() : d.getHours();
      case "Date":
        return isUTC ? d.getUTCDate() : d.getDate();
      case "Day":
        return isUTC ? d.getUTCDay() : d.getDay();
      case "Month":
        return isUTC ? d.getUTCMonth() : d.getMonth();
      case "FullYear":
        return isUTC ? d.getUTCFullYear() : d.getFullYear();
      default:
        return NaN;
    }
  }
  function set$1(mom, unit, value) {
    var d, isUTC, year, month, date2;
    if (!mom.isValid() || isNaN(value)) {
      return;
    }
    d = mom._d;
    isUTC = mom._isUTC;
    switch (unit) {
      case "Milliseconds":
        return void (isUTC ? d.setUTCMilliseconds(value) : d.setMilliseconds(value));
      case "Seconds":
        return void (isUTC ? d.setUTCSeconds(value) : d.setSeconds(value));
      case "Minutes":
        return void (isUTC ? d.setUTCMinutes(value) : d.setMinutes(value));
      case "Hours":
        return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
      case "Date":
        return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
      case "FullYear":
        break;
      default:
        return;
    }
    year = value;
    month = mom.month();
    date2 = mom.date();
    date2 = date2 === 29 && month === 1 && !isLeapYear(year) ? 28 : date2;
    void (isUTC ? d.setUTCFullYear(year, month, date2) : d.setFullYear(year, month, date2));
  }
  function stringGet(units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
      return this[units]();
    }
    return this;
  }
  function stringSet(units, value) {
    if (typeof units === "object") {
      units = normalizeObjectUnits(units);
      var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
      for (i = 0; i < prioritizedLen; i++) {
        this[prioritized[i].unit](units[prioritized[i].unit]);
      }
    } else {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units](value);
      }
    }
    return this;
  }
  function mod(n, x) {
    return (n % x + x) % x;
  }
  var indexOf;
  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function(o) {
      var i;
      for (i = 0; i < this.length; ++i) {
        if (this[i] === o) {
          return i;
        }
      }
      return -1;
    };
  }
  function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
      return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
  }
  addFormatToken("M", ["MM", 2], "Mo", function() {
    return this.month() + 1;
  });
  addFormatToken("MMM", 0, 0, function(format2) {
    return this.localeData().monthsShort(this, format2);
  });
  addFormatToken("MMMM", 0, 0, function(format2) {
    return this.localeData().months(this, format2);
  });
  addRegexToken("M", match1to2, match1to2NoLeadingZero);
  addRegexToken("MM", match1to2, match2);
  addRegexToken("MMM", function(isStrict, locale2) {
    return locale2.monthsShortRegex(isStrict);
  });
  addRegexToken("MMMM", function(isStrict, locale2) {
    return locale2.monthsRegex(isStrict);
  });
  addParseToken(["M", "MM"], function(input2, array2) {
    array2[MONTH] = toInt(input2) - 1;
  });
  addParseToken(["MMM", "MMMM"], function(input2, array2, config2, token2) {
    var month = config2._locale.monthsParse(input2, token2, config2._strict);
    if (month != null) {
      array2[MONTH] = month;
    } else {
      getParsingFlags(config2).invalidMonth = input2;
    }
  });
  var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
    "_"
  ), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
  function localeMonths(m, format2) {
    if (!m) {
      return isArray(this._months) ? this._months : this._months["standalone"];
    }
    return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m.month()];
  }
  function localeMonthsShort(m, format2) {
    if (!m) {
      return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m.month()];
  }
  function handleStrictParse(monthName, format2, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i = 0; i < 12; ++i) {
        mom = createUTC([2e3, i]);
        this._shortMonthsParse[i] = this.monthsShort(
          mom,
          ""
        ).toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format2 === "MMM") {
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format2 === "MMM") {
        ii = indexOf.call(this._shortMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeMonthsParse(monthName, format2, strict) {
    var i, mom, regex;
    if (this._monthsParseExact) {
      return handleStrictParse.call(this, monthName, format2, strict);
    }
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }
    for (i = 0; i < 12; i++) {
      mom = createUTC([2e3, i]);
      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp(
          "^" + this.months(mom, "").replace(".", "") + "$",
          "i"
        );
        this._shortMonthsParse[i] = new RegExp(
          "^" + this.monthsShort(mom, "").replace(".", "") + "$",
          "i"
        );
      }
      if (!strict && !this._monthsParse[i]) {
        regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
        this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
      }
      if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }
  function setMonth(mom, value) {
    if (!mom.isValid()) {
      return mom;
    }
    if (typeof value === "string") {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value);
        if (!isNumber(value)) {
          return mom;
        }
      }
    }
    var month = value, date2 = mom.date();
    date2 = date2 < 29 ? date2 : Math.min(date2, daysInMonth(mom.year(), month));
    void (mom._isUTC ? mom._d.setUTCMonth(month, date2) : mom._d.setMonth(month, date2));
    return mom;
  }
  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      hooks.updateOffset(this, true);
      return this;
    } else {
      return get(this, "Month");
    }
  }
  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }
  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      if (!hasOwnProp(this, "_monthsShortRegex")) {
        this._monthsShortRegex = defaultMonthsShortRegex;
      }
      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }
  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      if (!hasOwnProp(this, "_monthsRegex")) {
        this._monthsRegex = defaultMonthsRegex;
      }
      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
    }
  }
  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var shortPieces = [], longPieces = [], mixedPieces = [], i, mom, shortP, longP;
    for (i = 0; i < 12; i++) {
      mom = createUTC([2e3, i]);
      shortP = regexEscape(this.monthsShort(mom, ""));
      longP = regexEscape(this.months(mom, ""));
      shortPieces.push(shortP);
      longPieces.push(longP);
      mixedPieces.push(longP);
      mixedPieces.push(shortP);
    }
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp(
      "^(" + longPieces.join("|") + ")",
      "i"
    );
    this._monthsShortStrictRegex = new RegExp(
      "^(" + shortPieces.join("|") + ")",
      "i"
    );
  }
  function createDate(y, m, d, h, M, s, ms) {
    var date2;
    if (y < 100 && y >= 0) {
      date2 = new Date(y + 400, m, d, h, M, s, ms);
      if (isFinite(date2.getFullYear())) {
        date2.setFullYear(y);
      }
    } else {
      date2 = new Date(y, m, d, h, M, s, ms);
    }
    return date2;
  }
  function createUTCDate(y) {
    var date2, args;
    if (y < 100 && y >= 0) {
      args = Array.prototype.slice.call(arguments);
      args[0] = y + 400;
      date2 = new Date(Date.UTC.apply(null, args));
      if (isFinite(date2.getUTCFullYear())) {
        date2.setUTCFullYear(y);
      }
    } else {
      date2 = new Date(Date.UTC.apply(null, arguments));
    }
    return date2;
  }
  function firstWeekOffset(year, dow, doy) {
    var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
  }
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }
    return {
      year: resYear,
      dayOfYear: resDayOfYear
    };
  }
  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }
    return {
      week: resWeek,
      year: resYear
    };
  }
  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }
  addFormatToken("w", ["ww", 2], "wo", "week");
  addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
  addRegexToken("w", match1to2, match1to2NoLeadingZero);
  addRegexToken("ww", match1to2, match2);
  addRegexToken("W", match1to2, match1to2NoLeadingZero);
  addRegexToken("WW", match1to2, match2);
  addWeekParseToken(
    ["w", "ww", "W", "WW"],
    function(input2, week, config2, token2) {
      week[token2.substr(0, 1)] = toInt(input2);
    }
  );
  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }
  var defaultLocaleWeek = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6
    // The week that contains Jan 6th is the first week of the year.
  };
  function localeFirstDayOfWeek() {
    return this._week.dow;
  }
  function localeFirstDayOfYear() {
    return this._week.doy;
  }
  function getSetWeek(input2) {
    var week = this.localeData().week(this);
    return input2 == null ? week : this.add((input2 - week) * 7, "d");
  }
  function getSetISOWeek(input2) {
    var week = weekOfYear(this, 1, 4).week;
    return input2 == null ? week : this.add((input2 - week) * 7, "d");
  }
  addFormatToken("d", 0, "do", "day");
  addFormatToken("dd", 0, 0, function(format2) {
    return this.localeData().weekdaysMin(this, format2);
  });
  addFormatToken("ddd", 0, 0, function(format2) {
    return this.localeData().weekdaysShort(this, format2);
  });
  addFormatToken("dddd", 0, 0, function(format2) {
    return this.localeData().weekdays(this, format2);
  });
  addFormatToken("e", 0, 0, "weekday");
  addFormatToken("E", 0, 0, "isoWeekday");
  addRegexToken("d", match1to2);
  addRegexToken("e", match1to2);
  addRegexToken("E", match1to2);
  addRegexToken("dd", function(isStrict, locale2) {
    return locale2.weekdaysMinRegex(isStrict);
  });
  addRegexToken("ddd", function(isStrict, locale2) {
    return locale2.weekdaysShortRegex(isStrict);
  });
  addRegexToken("dddd", function(isStrict, locale2) {
    return locale2.weekdaysRegex(isStrict);
  });
  addWeekParseToken(["dd", "ddd", "dddd"], function(input2, week, config2, token2) {
    var weekday = config2._locale.weekdaysParse(input2, token2, config2._strict);
    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config2).invalidWeekday = input2;
    }
  });
  addWeekParseToken(["d", "e", "E"], function(input2, week, config2, token2) {
    week[token2] = toInt(input2);
  });
  function parseWeekday(input2, locale2) {
    if (typeof input2 !== "string") {
      return input2;
    }
    if (!isNaN(input2)) {
      return parseInt(input2, 10);
    }
    input2 = locale2.weekdaysParse(input2);
    if (typeof input2 === "number") {
      return input2;
    }
    return null;
  }
  function parseIsoWeekday(input2, locale2) {
    if (typeof input2 === "string") {
      return locale2.weekdaysParse(input2) % 7 || 7;
    }
    return isNaN(input2) ? null : input2;
  }
  function shiftWeekdays(ws, n) {
    return ws.slice(n, 7).concat(ws.slice(0, n));
  }
  var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
  function localeWeekdays(m, format2) {
    var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
    return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
  }
  function localeWeekdaysShort(m) {
    return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
  }
  function localeWeekdaysMin(m) {
    return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
  }
  function handleStrictParse$1(weekdayName, format2, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];
      for (i = 0; i < 7; ++i) {
        mom = createUTC([2e3, 1]).day(i);
        this._minWeekdaysParse[i] = this.weekdaysMin(
          mom,
          ""
        ).toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(
          mom,
          ""
        ).toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format2 === "dddd") {
        ii = indexOf.call(this._weekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format2 === "ddd") {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format2 === "dddd") {
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format2 === "ddd") {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeWeekdaysParse(weekdayName, format2, strict) {
    var i, mom, regex;
    if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(this, weekdayName, format2, strict);
    }
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }
    for (i = 0; i < 7; i++) {
      mom = createUTC([2e3, 1]).day(i);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp(
          "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
          "i"
        );
        this._shortWeekdaysParse[i] = new RegExp(
          "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
          "i"
        );
        this._minWeekdaysParse[i] = new RegExp(
          "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
          "i"
        );
      }
      if (!this._weekdaysParse[i]) {
        regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
        this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
      }
      if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }
  function getSetDayOfWeek(input2) {
    if (!this.isValid()) {
      return input2 != null ? this : NaN;
    }
    var day = get(this, "Day");
    if (input2 != null) {
      input2 = parseWeekday(input2, this.localeData());
      return this.add(input2 - day, "d");
    } else {
      return day;
    }
  }
  function getSetLocaleDayOfWeek(input2) {
    if (!this.isValid()) {
      return input2 != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input2 == null ? weekday : this.add(input2 - weekday, "d");
  }
  function getSetISODayOfWeek(input2) {
    if (!this.isValid()) {
      return input2 != null ? this : NaN;
    }
    if (input2 != null) {
      var weekday = parseIsoWeekday(input2, this.localeData());
      return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
      return this.day() || 7;
    }
  }
  function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        this._weekdaysRegex = defaultWeekdaysRegex;
      }
      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }
  function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysShortRegex")) {
        this._weekdaysShortRegex = defaultWeekdaysShortRegex;
      }
      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }
  function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysMinRegex")) {
        this._weekdaysMinRegex = defaultWeekdaysMinRegex;
      }
      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }
  function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
      mom = createUTC([2e3, 1]).day(i);
      minp = regexEscape(this.weekdaysMin(mom, ""));
      shortp = regexEscape(this.weekdaysShort(mom, ""));
      longp = regexEscape(this.weekdays(mom, ""));
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    }
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp(
      "^(" + longPieces.join("|") + ")",
      "i"
    );
    this._weekdaysShortStrictRegex = new RegExp(
      "^(" + shortPieces.join("|") + ")",
      "i"
    );
    this._weekdaysMinStrictRegex = new RegExp(
      "^(" + minPieces.join("|") + ")",
      "i"
    );
  }
  function hFormat() {
    return this.hours() % 12 || 12;
  }
  function kFormat() {
    return this.hours() || 24;
  }
  addFormatToken("H", ["HH", 2], 0, "hour");
  addFormatToken("h", ["hh", 2], 0, hFormat);
  addFormatToken("k", ["kk", 2], 0, kFormat);
  addFormatToken("hmm", 0, 0, function() {
    return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });
  addFormatToken("hmmss", 0, 0, function() {
    return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  addFormatToken("Hmm", 0, 0, function() {
    return "" + this.hours() + zeroFill(this.minutes(), 2);
  });
  addFormatToken("Hmmss", 0, 0, function() {
    return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  function meridiem(token2, lowercase) {
    addFormatToken(token2, 0, 0, function() {
      return this.localeData().meridiem(
        this.hours(),
        this.minutes(),
        lowercase
      );
    });
  }
  meridiem("a", true);
  meridiem("A", false);
  function matchMeridiem(isStrict, locale2) {
    return locale2._meridiemParse;
  }
  addRegexToken("a", matchMeridiem);
  addRegexToken("A", matchMeridiem);
  addRegexToken("H", match1to2, match1to2HasZero);
  addRegexToken("h", match1to2, match1to2NoLeadingZero);
  addRegexToken("k", match1to2, match1to2NoLeadingZero);
  addRegexToken("HH", match1to2, match2);
  addRegexToken("hh", match1to2, match2);
  addRegexToken("kk", match1to2, match2);
  addRegexToken("hmm", match3to4);
  addRegexToken("hmmss", match5to6);
  addRegexToken("Hmm", match3to4);
  addRegexToken("Hmmss", match5to6);
  addParseToken(["H", "HH"], HOUR);
  addParseToken(["k", "kk"], function(input2, array2, config2) {
    var kInput = toInt(input2);
    array2[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(["a", "A"], function(input2, array2, config2) {
    config2._isPm = config2._locale.isPM(input2);
    config2._meridiem = input2;
  });
  addParseToken(["h", "hh"], function(input2, array2, config2) {
    array2[HOUR] = toInt(input2);
    getParsingFlags(config2).bigHour = true;
  });
  addParseToken("hmm", function(input2, array2, config2) {
    var pos = input2.length - 2;
    array2[HOUR] = toInt(input2.substr(0, pos));
    array2[MINUTE] = toInt(input2.substr(pos));
    getParsingFlags(config2).bigHour = true;
  });
  addParseToken("hmmss", function(input2, array2, config2) {
    var pos1 = input2.length - 4, pos2 = input2.length - 2;
    array2[HOUR] = toInt(input2.substr(0, pos1));
    array2[MINUTE] = toInt(input2.substr(pos1, 2));
    array2[SECOND] = toInt(input2.substr(pos2));
    getParsingFlags(config2).bigHour = true;
  });
  addParseToken("Hmm", function(input2, array2, config2) {
    var pos = input2.length - 2;
    array2[HOUR] = toInt(input2.substr(0, pos));
    array2[MINUTE] = toInt(input2.substr(pos));
  });
  addParseToken("Hmmss", function(input2, array2, config2) {
    var pos1 = input2.length - 4, pos2 = input2.length - 2;
    array2[HOUR] = toInt(input2.substr(0, pos1));
    array2[MINUTE] = toInt(input2.substr(pos1, 2));
    array2[SECOND] = toInt(input2.substr(pos2));
  });
  function localeIsPM(input2) {
    return (input2 + "").toLowerCase().charAt(0) === "p";
  }
  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
  function localeMeridiem(hours2, minutes2, isLower) {
    if (hours2 > 11) {
      return isLower ? "pm" : "PM";
    } else {
      return isLower ? "am" : "AM";
    }
  }
  var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
  };
  var locales = {}, localeFamilies = {}, globalLocale;
  function commonPrefix(arr1, arr2) {
    var i, minl = Math.min(arr1.length, arr2.length);
    for (i = 0; i < minl; i += 1) {
      if (arr1[i] !== arr2[i]) {
        return i;
      }
    }
    return minl;
  }
  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace("_", "-") : key;
  }
  function chooseLocale(names) {
    var i = 0, j, next, locale2, split;
    while (i < names.length) {
      split = normalizeLocale(names[i]).split("-");
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split("-") : null;
      while (j > 0) {
        locale2 = loadLocale(split.slice(0, j).join("-"));
        if (locale2) {
          return locale2;
        }
        if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
          break;
        }
        j--;
      }
      i++;
    }
    return globalLocale;
  }
  function isLocaleNameSane(name) {
    return !!(name && name.match("^[^/\\\\]*$"));
  }
  function loadLocale(name) {
    var oldLocale = null, aliasedRequire;
    if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
      try {
        oldLocale = globalLocale._abbr;
        aliasedRequire = require;
        aliasedRequire("./locale/" + name);
        getSetGlobalLocale(oldLocale);
      } catch (e) {
        locales[name] = null;
      }
    }
    return locales[name];
  }
  function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
      if (isUndefined(values)) {
        data = getLocale(key);
      } else {
        data = defineLocale(key, values);
      }
      if (data) {
        globalLocale = data;
      } else {
        if (typeof console !== "undefined" && console.warn) {
          formatAppLog(
            "warn",
            "at node_modules/moment/dist/moment.js:2188",
            "Locale " + key + " not found. Did you forget to load it?"
          );
        }
      }
    }
    return globalLocale._abbr;
  }
  function defineLocale(name, config2) {
    if (config2 !== null) {
      var locale2, parentConfig = baseConfig;
      config2.abbr = name;
      if (locales[name] != null) {
        deprecateSimple(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        );
        parentConfig = locales[name]._config;
      } else if (config2.parentLocale != null) {
        if (locales[config2.parentLocale] != null) {
          parentConfig = locales[config2.parentLocale]._config;
        } else {
          locale2 = loadLocale(config2.parentLocale);
          if (locale2 != null) {
            parentConfig = locale2._config;
          } else {
            if (!localeFamilies[config2.parentLocale]) {
              localeFamilies[config2.parentLocale] = [];
            }
            localeFamilies[config2.parentLocale].push({
              name,
              config: config2
            });
            return null;
          }
        }
      }
      locales[name] = new Locale(mergeConfigs(parentConfig, config2));
      if (localeFamilies[name]) {
        localeFamilies[name].forEach(function(x) {
          defineLocale(x.name, x.config);
        });
      }
      getSetGlobalLocale(name);
      return locales[name];
    } else {
      delete locales[name];
      return null;
    }
  }
  function updateLocale(name, config2) {
    if (config2 != null) {
      var locale2, tmpLocale, parentConfig = baseConfig;
      if (locales[name] != null && locales[name].parentLocale != null) {
        locales[name].set(mergeConfigs(locales[name]._config, config2));
      } else {
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
          parentConfig = tmpLocale._config;
        }
        config2 = mergeConfigs(parentConfig, config2);
        if (tmpLocale == null) {
          config2.abbr = name;
        }
        locale2 = new Locale(config2);
        locale2.parentLocale = locales[name];
        locales[name] = locale2;
      }
      getSetGlobalLocale(name);
    } else {
      if (locales[name] != null) {
        if (locales[name].parentLocale != null) {
          locales[name] = locales[name].parentLocale;
          if (name === getSetGlobalLocale()) {
            getSetGlobalLocale(name);
          }
        } else if (locales[name] != null) {
          delete locales[name];
        }
      }
    }
    return locales[name];
  }
  function getLocale(key) {
    var locale2;
    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }
    if (!key) {
      return globalLocale;
    }
    if (!isArray(key)) {
      locale2 = loadLocale(key);
      if (locale2) {
        return locale2;
      }
      key = [key];
    }
    return chooseLocale(key);
  }
  function listLocales() {
    return keys(locales);
  }
  function checkOverflow(m) {
    var overflow, a = m._a;
    if (a && getParsingFlags(m).overflow === -2) {
      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }
      getParsingFlags(m).overflow = overflow;
    }
    return m;
  }
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
    ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
    ["YYYY-DDD", /\d{4}-\d{3}/],
    ["YYYY-MM", /\d{4}-\d\d/, false],
    ["YYYYYYMMDD", /[+-]\d{10}/],
    ["YYYYMMDD", /\d{8}/],
    ["GGGG[W]WWE", /\d{4}W\d{3}/],
    ["GGGG[W]WW", /\d{4}W\d{2}/, false],
    ["YYYYDDD", /\d{7}/],
    ["YYYYMM", /\d{6}/, false],
    ["YYYY", /\d{4}/, false]
  ], isoTimes = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/]
  ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
  };
  function configFromISO(config2) {
    var i, l, string2 = config2._i, match = extendedIsoRegex.exec(string2) || basicIsoRegex.exec(string2), allowTime, dateFormat, timeFormat2, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
    if (match) {
      getParsingFlags(config2).iso = true;
      for (i = 0, l = isoDatesLen; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }
      if (dateFormat == null) {
        config2._isValid = false;
        return;
      }
      if (match[3]) {
        for (i = 0, l = isoTimesLen; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            timeFormat2 = (match[2] || " ") + isoTimes[i][0];
            break;
          }
        }
        if (timeFormat2 == null) {
          config2._isValid = false;
          return;
        }
      }
      if (!allowTime && timeFormat2 != null) {
        config2._isValid = false;
        return;
      }
      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = "Z";
        } else {
          config2._isValid = false;
          return;
        }
      }
      config2._f = dateFormat + (timeFormat2 || "") + (tzFormat || "");
      configFromStringAndFormat(config2);
    } else {
      config2._isValid = false;
    }
  }
  function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
      untruncateYear(yearStr),
      defaultLocaleMonthsShort.indexOf(monthStr),
      parseInt(dayStr, 10),
      parseInt(hourStr, 10),
      parseInt(minuteStr, 10)
    ];
    if (secondStr) {
      result.push(parseInt(secondStr, 10));
    }
    return result;
  }
  function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
      return 2e3 + year;
    } else if (year <= 999) {
      return 1900 + year;
    }
    return year;
  }
  function preprocessRFC2822(s) {
    return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function checkWeekday(weekdayStr, parsedInput, config2) {
    if (weekdayStr) {
      var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
        parsedInput[0],
        parsedInput[1],
        parsedInput[2]
      ).getDay();
      if (weekdayProvided !== weekdayActual) {
        getParsingFlags(config2).weekdayMismatch = true;
        config2._isValid = false;
        return false;
      }
    }
    return true;
  }
  function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
      return obsOffsets[obsOffset];
    } else if (militaryOffset) {
      return 0;
    } else {
      var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
      return h * 60 + m;
    }
  }
  function configFromRFC2822(config2) {
    var match = rfc2822.exec(preprocessRFC2822(config2._i)), parsedArray;
    if (match) {
      parsedArray = extractFromRFC2822Strings(
        match[4],
        match[3],
        match[2],
        match[5],
        match[6],
        match[7]
      );
      if (!checkWeekday(match[1], parsedArray, config2)) {
        return;
      }
      config2._a = parsedArray;
      config2._tzm = calculateOffset(match[8], match[9], match[10]);
      config2._d = createUTCDate.apply(null, config2._a);
      config2._d.setUTCMinutes(config2._d.getUTCMinutes() - config2._tzm);
      getParsingFlags(config2).rfc2822 = true;
    } else {
      config2._isValid = false;
    }
  }
  function configFromString(config2) {
    var matched = aspNetJsonRegex.exec(config2._i);
    if (matched !== null) {
      config2._d = /* @__PURE__ */ new Date(+matched[1]);
      return;
    }
    configFromISO(config2);
    if (config2._isValid === false) {
      delete config2._isValid;
    } else {
      return;
    }
    configFromRFC2822(config2);
    if (config2._isValid === false) {
      delete config2._isValid;
    } else {
      return;
    }
    if (config2._strict) {
      config2._isValid = false;
    } else {
      hooks.createFromInputFallback(config2);
    }
  }
  hooks.createFromInputFallback = deprecate(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function(config2) {
      config2._d = /* @__PURE__ */ new Date(config2._i + (config2._useUTC ? " UTC" : ""));
    }
  );
  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return c;
  }
  function currentDateArray(config2) {
    var nowValue = new Date(hooks.now());
    if (config2._useUTC) {
      return [
        nowValue.getUTCFullYear(),
        nowValue.getUTCMonth(),
        nowValue.getUTCDate()
      ];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }
  function configFromArray(config2) {
    var i, date2, input2 = [], currentDate, expectedWeekday, yearToUse;
    if (config2._d) {
      return;
    }
    currentDate = currentDateArray(config2);
    if (config2._w && config2._a[DATE] == null && config2._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config2);
    }
    if (config2._dayOfYear != null) {
      yearToUse = defaults(config2._a[YEAR], currentDate[YEAR]);
      if (config2._dayOfYear > daysInYear(yearToUse) || config2._dayOfYear === 0) {
        getParsingFlags(config2)._overflowDayOfYear = true;
      }
      date2 = createUTCDate(yearToUse, 0, config2._dayOfYear);
      config2._a[MONTH] = date2.getUTCMonth();
      config2._a[DATE] = date2.getUTCDate();
    }
    for (i = 0; i < 3 && config2._a[i] == null; ++i) {
      config2._a[i] = input2[i] = currentDate[i];
    }
    for (; i < 7; i++) {
      config2._a[i] = input2[i] = config2._a[i] == null ? i === 2 ? 1 : 0 : config2._a[i];
    }
    if (config2._a[HOUR] === 24 && config2._a[MINUTE] === 0 && config2._a[SECOND] === 0 && config2._a[MILLISECOND] === 0) {
      config2._nextDay = true;
      config2._a[HOUR] = 0;
    }
    config2._d = (config2._useUTC ? createUTCDate : createDate).apply(
      null,
      input2
    );
    expectedWeekday = config2._useUTC ? config2._d.getUTCDay() : config2._d.getDay();
    if (config2._tzm != null) {
      config2._d.setUTCMinutes(config2._d.getUTCMinutes() - config2._tzm);
    }
    if (config2._nextDay) {
      config2._a[HOUR] = 24;
    }
    if (config2._w && typeof config2._w.d !== "undefined" && config2._w.d !== expectedWeekday) {
      getParsingFlags(config2).weekdayMismatch = true;
    }
  }
  function dayOfYearFromWeekInfo(config2) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
    w = config2._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;
      weekYear = defaults(
        w.GG,
        config2._a[YEAR],
        weekOfYear(createLocal(), 1, 4).year
      );
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config2._locale._week.dow;
      doy = config2._locale._week.doy;
      curWeek = weekOfYear(createLocal(), dow, doy);
      weekYear = defaults(w.gg, config2._a[YEAR], curWeek.year);
      week = defaults(w.w, curWeek.week);
      if (w.d != null) {
        weekday = w.d;
        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        weekday = w.e + dow;
        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        weekday = dow;
      }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config2)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config2)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config2._a[YEAR] = temp.year;
      config2._dayOfYear = temp.dayOfYear;
    }
  }
  hooks.ISO_8601 = function() {
  };
  hooks.RFC_2822 = function() {
  };
  function configFromStringAndFormat(config2) {
    if (config2._f === hooks.ISO_8601) {
      configFromISO(config2);
      return;
    }
    if (config2._f === hooks.RFC_2822) {
      configFromRFC2822(config2);
      return;
    }
    config2._a = [];
    getParsingFlags(config2).empty = true;
    var string2 = "" + config2._i, i, parsedInput, tokens2, token2, skipped, stringLength = string2.length, totalParsedInputLength = 0, era, tokenLen;
    tokens2 = expandFormat(config2._f, config2._locale).match(formattingTokens) || [];
    tokenLen = tokens2.length;
    for (i = 0; i < tokenLen; i++) {
      token2 = tokens2[i];
      parsedInput = (string2.match(getParseRegexForToken(token2, config2)) || [])[0];
      if (parsedInput) {
        skipped = string2.substr(0, string2.indexOf(parsedInput));
        if (skipped.length > 0) {
          getParsingFlags(config2).unusedInput.push(skipped);
        }
        string2 = string2.slice(
          string2.indexOf(parsedInput) + parsedInput.length
        );
        totalParsedInputLength += parsedInput.length;
      }
      if (formatTokenFunctions[token2]) {
        if (parsedInput) {
          getParsingFlags(config2).empty = false;
        } else {
          getParsingFlags(config2).unusedTokens.push(token2);
        }
        addTimeToArrayFromToken(token2, parsedInput, config2);
      } else if (config2._strict && !parsedInput) {
        getParsingFlags(config2).unusedTokens.push(token2);
      }
    }
    getParsingFlags(config2).charsLeftOver = stringLength - totalParsedInputLength;
    if (string2.length > 0) {
      getParsingFlags(config2).unusedInput.push(string2);
    }
    if (config2._a[HOUR] <= 12 && getParsingFlags(config2).bigHour === true && config2._a[HOUR] > 0) {
      getParsingFlags(config2).bigHour = void 0;
    }
    getParsingFlags(config2).parsedDateParts = config2._a.slice(0);
    getParsingFlags(config2).meridiem = config2._meridiem;
    config2._a[HOUR] = meridiemFixWrap(
      config2._locale,
      config2._a[HOUR],
      config2._meridiem
    );
    era = getParsingFlags(config2).era;
    if (era !== null) {
      config2._a[YEAR] = config2._locale.erasConvertYear(era, config2._a[YEAR]);
    }
    configFromArray(config2);
    checkOverflow(config2);
  }
  function meridiemFixWrap(locale2, hour, meridiem2) {
    var isPm;
    if (meridiem2 == null) {
      return hour;
    }
    if (locale2.meridiemHour != null) {
      return locale2.meridiemHour(hour, meridiem2);
    } else if (locale2.isPM != null) {
      isPm = locale2.isPM(meridiem2);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    } else {
      return hour;
    }
  }
  function configFromStringAndArray(config2) {
    var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config2._f.length;
    if (configfLen === 0) {
      getParsingFlags(config2).invalidFormat = true;
      config2._d = /* @__PURE__ */ new Date(NaN);
      return;
    }
    for (i = 0; i < configfLen; i++) {
      currentScore = 0;
      validFormatFound = false;
      tempConfig = copyConfig({}, config2);
      if (config2._useUTC != null) {
        tempConfig._useUTC = config2._useUTC;
      }
      tempConfig._f = config2._f[i];
      configFromStringAndFormat(tempConfig);
      if (isValid(tempConfig)) {
        validFormatFound = true;
      }
      currentScore += getParsingFlags(tempConfig).charsLeftOver;
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
      getParsingFlags(tempConfig).score = currentScore;
      if (!bestFormatIsValid) {
        if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
          if (validFormatFound) {
            bestFormatIsValid = true;
          }
        }
      } else {
        if (currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
        }
      }
    }
    extend(config2, bestMoment || tempConfig);
  }
  function configFromObject(config2) {
    if (config2._d) {
      return;
    }
    var i = normalizeObjectUnits(config2._i), dayOrDate = i.day === void 0 ? i.date : i.day;
    config2._a = map(
      [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
      function(obj) {
        return obj && parseInt(obj, 10);
      }
    );
    configFromArray(config2);
  }
  function createFromConfig(config2) {
    var res = new Moment(checkOverflow(prepareConfig(config2)));
    if (res._nextDay) {
      res.add(1, "d");
      res._nextDay = void 0;
    }
    return res;
  }
  function prepareConfig(config2) {
    var input2 = config2._i, format2 = config2._f;
    config2._locale = config2._locale || getLocale(config2._l);
    if (input2 === null || format2 === void 0 && input2 === "") {
      return createInvalid({ nullInput: true });
    }
    if (typeof input2 === "string") {
      config2._i = input2 = config2._locale.preparse(input2);
    }
    if (isMoment(input2)) {
      return new Moment(checkOverflow(input2));
    } else if (isDate(input2)) {
      config2._d = input2;
    } else if (isArray(format2)) {
      configFromStringAndArray(config2);
    } else if (format2) {
      configFromStringAndFormat(config2);
    } else {
      configFromInput(config2);
    }
    if (!isValid(config2)) {
      config2._d = null;
    }
    return config2;
  }
  function configFromInput(config2) {
    var input2 = config2._i;
    if (isUndefined(input2)) {
      config2._d = new Date(hooks.now());
    } else if (isDate(input2)) {
      config2._d = new Date(input2.valueOf());
    } else if (typeof input2 === "string") {
      configFromString(config2);
    } else if (isArray(input2)) {
      config2._a = map(input2.slice(0), function(obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config2);
    } else if (isObject(input2)) {
      configFromObject(config2);
    } else if (isNumber(input2)) {
      config2._d = new Date(input2);
    } else {
      hooks.createFromInputFallback(config2);
    }
  }
  function createLocalOrUTC(input2, format2, locale2, strict, isUTC) {
    var c = {};
    if (format2 === true || format2 === false) {
      strict = format2;
      format2 = void 0;
    }
    if (locale2 === true || locale2 === false) {
      strict = locale2;
      locale2 = void 0;
    }
    if (isObject(input2) && isObjectEmpty(input2) || isArray(input2) && input2.length === 0) {
      input2 = void 0;
    }
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale2;
    c._i = input2;
    c._f = format2;
    c._strict = strict;
    return createFromConfig(c);
  }
  function createLocal(input2, format2, locale2, strict) {
    return createLocalOrUTC(input2, format2, locale2, strict, false);
  }
  var prototypeMin = deprecate(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other < this ? this : other;
      } else {
        return createInvalid();
      }
    }
  ), prototypeMax = deprecate(
    "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other > this ? this : other;
      } else {
        return createInvalid();
      }
    }
  );
  function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }
  function min() {
    var args = [].slice.call(arguments, 0);
    return pickBy("isBefore", args);
  }
  function max() {
    var args = [].slice.call(arguments, 0);
    return pickBy("isAfter", args);
  }
  var now = function() {
    return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
  };
  var ordering = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
  ];
  function isDurationValid(m) {
    var key, unitHasDecimal = false, i, orderLen = ordering.length;
    for (key in m) {
      if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
        return false;
      }
    }
    for (i = 0; i < orderLen; ++i) {
      if (m[ordering[i]]) {
        if (unitHasDecimal) {
          return false;
        }
        if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
          unitHasDecimal = true;
        }
      }
    }
    return true;
  }
  function isValid$1() {
    return this._isValid;
  }
  function createInvalid$1() {
    return createDuration(NaN);
  }
  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
    this._isValid = isDurationValid(normalizedInput);
    this._milliseconds = +milliseconds2 + seconds2 * 1e3 + // 1000
    minutes2 * 6e4 + // 1000 * 60
    hours2 * 1e3 * 60 * 60;
    this._days = +days2 + weeks2 * 7;
    this._months = +months2 + quarters * 3 + years2 * 12;
    this._data = {};
    this._locale = getLocale();
    this._bubble();
  }
  function isDuration(obj) {
    return obj instanceof Duration;
  }
  function absRound(number2) {
    if (number2 < 0) {
      return Math.round(-1 * number2) * -1;
    } else {
      return Math.round(number2);
    }
  }
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
    for (i = 0; i < len; i++) {
      if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }
  function offset(token2, separator) {
    addFormatToken(token2, 0, 0, function() {
      var offset2 = this.utcOffset(), sign2 = "+";
      if (offset2 < 0) {
        offset2 = -offset2;
        sign2 = "-";
      }
      return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
    });
  }
  offset("Z", ":");
  offset("ZZ", "");
  addRegexToken("Z", matchShortOffset);
  addRegexToken("ZZ", matchShortOffset);
  addParseToken(["Z", "ZZ"], function(input2, array2, config2) {
    config2._useUTC = true;
    config2._tzm = offsetFromString(matchShortOffset, input2);
  });
  var chunkOffset = /([\+\-]|\d\d)/gi;
  function offsetFromString(matcher, string2) {
    var matches = (string2 || "").match(matcher), chunk, parts, minutes2;
    if (matches === null) {
      return null;
    }
    chunk = matches[matches.length - 1] || [];
    parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
    minutes2 = +(parts[1] * 60) + toInt(parts[2]);
    return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
  }
  function cloneWithOffset(input2, model) {
    var res, diff2;
    if (model._isUTC) {
      res = model.clone();
      diff2 = (isMoment(input2) || isDate(input2) ? input2.valueOf() : createLocal(input2).valueOf()) - res.valueOf();
      res._d.setTime(res._d.valueOf() + diff2);
      hooks.updateOffset(res, false);
      return res;
    } else {
      return createLocal(input2).local();
    }
  }
  function getDateOffset(m) {
    return -Math.round(m._d.getTimezoneOffset());
  }
  hooks.updateOffset = function() {
  };
  function getSetOffset(input2, keepLocalTime, keepMinutes) {
    var offset2 = this._offset || 0, localAdjust;
    if (!this.isValid()) {
      return input2 != null ? this : NaN;
    }
    if (input2 != null) {
      if (typeof input2 === "string") {
        input2 = offsetFromString(matchShortOffset, input2);
        if (input2 === null) {
          return this;
        }
      } else if (Math.abs(input2) < 16 && !keepMinutes) {
        input2 = input2 * 60;
      }
      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }
      this._offset = input2;
      this._isUTC = true;
      if (localAdjust != null) {
        this.add(localAdjust, "m");
      }
      if (offset2 !== input2) {
        if (!keepLocalTime || this._changeInProgress) {
          addSubtract(
            this,
            createDuration(input2 - offset2, "m"),
            1,
            false
          );
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    } else {
      return this._isUTC ? offset2 : getDateOffset(this);
    }
  }
  function getSetZone(input2, keepLocalTime) {
    if (input2 != null) {
      if (typeof input2 !== "string") {
        input2 = -input2;
      }
      this.utcOffset(input2, keepLocalTime);
      return this;
    } else {
      return -this.utcOffset();
    }
  }
  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }
  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;
      if (keepLocalTime) {
        this.subtract(getDateOffset(this), "m");
      }
    }
    return this;
  }
  function setOffsetToParsedOffset() {
    if (this._tzm != null) {
      this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === "string") {
      var tZone = offsetFromString(matchOffset, this._i);
      if (tZone != null) {
        this.utcOffset(tZone);
      } else {
        this.utcOffset(0, true);
      }
    }
    return this;
  }
  function hasAlignedHourOffset(input2) {
    if (!this.isValid()) {
      return false;
    }
    input2 = input2 ? createLocal(input2).utcOffset() : 0;
    return (this.utcOffset() - input2) % 60 === 0;
  }
  function isDaylightSavingTime() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }
    var c = {}, other;
    copyConfig(c, this);
    c = prepareConfig(c);
    if (c._a) {
      other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }
    return this._isDSTShifted;
  }
  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }
  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }
  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }
  var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function createDuration(input2, key) {
    var duration = input2, match = null, sign2, ret, diffRes;
    if (isDuration(input2)) {
      duration = {
        ms: input2._milliseconds,
        d: input2._days,
        M: input2._months
      };
    } else if (isNumber(input2) || !isNaN(+input2)) {
      duration = {};
      if (key) {
        duration[key] = +input2;
      } else {
        duration.milliseconds = +input2;
      }
    } else if (match = aspNetRegex.exec(input2)) {
      sign2 = match[1] === "-" ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign2,
        h: toInt(match[HOUR]) * sign2,
        m: toInt(match[MINUTE]) * sign2,
        s: toInt(match[SECOND]) * sign2,
        ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
        // the millisecond decimal point is included in the match
      };
    } else if (match = isoRegex.exec(input2)) {
      sign2 = match[1] === "-" ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign2),
        M: parseIso(match[3], sign2),
        w: parseIso(match[4], sign2),
        d: parseIso(match[5], sign2),
        h: parseIso(match[6], sign2),
        m: parseIso(match[7], sign2),
        s: parseIso(match[8], sign2)
      };
    } else if (duration == null) {
      duration = {};
    } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
      diffRes = momentsDifference(
        createLocal(duration.from),
        createLocal(duration.to)
      );
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }
    ret = new Duration(duration);
    if (isDuration(input2) && hasOwnProp(input2, "_locale")) {
      ret._locale = input2._locale;
    }
    if (isDuration(input2) && hasOwnProp(input2, "_isValid")) {
      ret._isValid = input2._isValid;
    }
    return ret;
  }
  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid$1;
  function parseIso(inp, sign2) {
    var res = inp && parseFloat(inp.replace(",", "."));
    return (isNaN(res) ? 0 : res) * sign2;
  }
  function positiveMomentsDifference(base, other) {
    var res = {};
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, "M").isAfter(other)) {
      --res.months;
    }
    res.milliseconds = +other - +base.clone().add(res.months, "M");
    return res;
  }
  function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
      return { milliseconds: 0, months: 0 };
    }
    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }
    return res;
  }
  function createAdder(direction, name) {
    return function(val, period) {
      var dur, tmp;
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(
          name,
          "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
        );
        tmp = val;
        val = period;
        period = tmp;
      }
      dur = createDuration(val, period);
      addSubtract(this, dur, direction);
      return this;
    };
  }
  function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
    if (!mom.isValid()) {
      return;
    }
    updateOffset = updateOffset == null ? true : updateOffset;
    if (months2) {
      setMonth(mom, get(mom, "Month") + months2 * isAdding);
    }
    if (days2) {
      set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
    }
    if (milliseconds2) {
      mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
    }
    if (updateOffset) {
      hooks.updateOffset(mom, days2 || months2);
    }
  }
  var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
  function isString(input2) {
    return typeof input2 === "string" || input2 instanceof String;
  }
  function isMomentInput(input2) {
    return isMoment(input2) || isDate(input2) || isString(input2) || isNumber(input2) || isNumberOrStringArray(input2) || isMomentInputObject(input2) || input2 === null || input2 === void 0;
  }
  function isMomentInputObject(input2) {
    var objectTest = isObject(input2) && !isObjectEmpty(input2), propertyTest = false, properties = [
      "years",
      "year",
      "y",
      "months",
      "month",
      "M",
      "days",
      "day",
      "d",
      "dates",
      "date",
      "D",
      "hours",
      "hour",
      "h",
      "minutes",
      "minute",
      "m",
      "seconds",
      "second",
      "s",
      "milliseconds",
      "millisecond",
      "ms"
    ], i, property, propertyLen = properties.length;
    for (i = 0; i < propertyLen; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input2, property);
    }
    return objectTest && propertyTest;
  }
  function isNumberOrStringArray(input2) {
    var arrayTest = isArray(input2), dataTypeTest = false;
    if (arrayTest) {
      dataTypeTest = input2.filter(function(item) {
        return !isNumber(item) && isString(input2);
      }).length === 0;
    }
    return arrayTest && dataTypeTest;
  }
  function isCalendarSpec(input2) {
    var objectTest = isObject(input2) && !isObjectEmpty(input2), propertyTest = false, properties = [
      "sameDay",
      "nextDay",
      "lastDay",
      "nextWeek",
      "lastWeek",
      "sameElse"
    ], i, property;
    for (i = 0; i < properties.length; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input2, property);
    }
    return objectTest && propertyTest;
  }
  function getCalendarFormat(myMoment, now2) {
    var diff2 = myMoment.diff(now2, "days", true);
    return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
  }
  function calendar$1(time, formats) {
    if (arguments.length === 1) {
      if (!arguments[0]) {
        time = void 0;
        formats = void 0;
      } else if (isMomentInput(arguments[0])) {
        time = arguments[0];
        formats = void 0;
      } else if (isCalendarSpec(arguments[0])) {
        formats = arguments[0];
        time = void 0;
      }
    }
    var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
    return this.format(
      output || this.localeData().calendar(format2, this, createLocal(now2))
    );
  }
  function clone() {
    return new Moment(this);
  }
  function isAfter(input2, units) {
    var localInput = isMoment(input2) ? input2 : createLocal(input2);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() > localInput.valueOf();
    } else {
      return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
  }
  function isBefore(input2, units) {
    var localInput = isMoment(input2) ? input2 : createLocal(input2);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() < localInput.valueOf();
    } else {
      return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
  }
  function isBetween(from2, to2, units, inclusivity) {
    var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
      return false;
    }
    inclusivity = inclusivity || "()";
    return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
  }
  function isSame(input2, units) {
    var localInput = isMoment(input2) ? input2 : createLocal(input2), inputMs;
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() === localInput.valueOf();
    } else {
      inputMs = localInput.valueOf();
      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
  }
  function isSameOrAfter(input2, units) {
    return this.isSame(input2, units) || this.isAfter(input2, units);
  }
  function isSameOrBefore(input2, units) {
    return this.isSame(input2, units) || this.isBefore(input2, units);
  }
  function diff(input2, units, asFloat) {
    var that, zoneDelta, output;
    if (!this.isValid()) {
      return NaN;
    }
    that = cloneWithOffset(input2, this);
    if (!that.isValid()) {
      return NaN;
    }
    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
    units = normalizeUnits(units);
    switch (units) {
      case "year":
        output = monthDiff(this, that) / 12;
        break;
      case "month":
        output = monthDiff(this, that);
        break;
      case "quarter":
        output = monthDiff(this, that) / 3;
        break;
      case "second":
        output = (this - that) / 1e3;
        break;
      case "minute":
        output = (this - that) / 6e4;
        break;
      case "hour":
        output = (this - that) / 36e5;
        break;
      case "day":
        output = (this - that - zoneDelta) / 864e5;
        break;
      case "week":
        output = (this - that - zoneDelta) / 6048e5;
        break;
      default:
        output = this - that;
    }
    return asFloat ? output : absFloor(output);
  }
  function monthDiff(a, b) {
    if (a.date() < b.date()) {
      return -monthDiff(b, a);
    }
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
      adjust = (b - anchor) / (anchor2 - anchor);
    }
    return -(wholeMonthDiff + adjust) || 0;
  }
  hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function toString() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function toISOString(keepOffset) {
    if (!this.isValid()) {
      return null;
    }
    var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
      return formatMoment(
        m,
        utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
      );
    }
    if (isFunction(Date.prototype.toISOString)) {
      if (utc) {
        return this.toDate().toISOString();
      } else {
        return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
      }
    }
    return formatMoment(
      m,
      utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
    );
  }
  function inspect() {
    if (!this.isValid()) {
      return "moment.invalid(/* " + this._i + " */)";
    }
    var func2 = "moment", zone = "", prefix, year, datetime, suffix;
    if (!this.isLocal()) {
      func2 = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
      zone = "Z";
    }
    prefix = "[" + func2 + '("]';
    year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
    datetime = "-MM-DD[T]HH:mm:ss.SSS";
    suffix = zone + '[")]';
    return this.format(prefix + year + datetime + suffix);
  }
  function format(inputString) {
    if (!inputString) {
      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }
  function from(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function fromNow(withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
  }
  function to(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function toNow(withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
  }
  function locale(key) {
    var newLocaleData;
    if (key === void 0) {
      return this._locale._abbr;
    } else {
      newLocaleData = getLocale(key);
      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }
      return this;
    }
  }
  var lang = deprecate(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function(key) {
      if (key === void 0) {
        return this.localeData();
      } else {
        return this.locale(key);
      }
    }
  );
  function localeData() {
    return this._locale;
  }
  var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
  function mod$1(dividend, divisor) {
    return (dividend % divisor + divisor) % divisor;
  }
  function localStartOfDate(y, m, d) {
    if (y < 100 && y >= 0) {
      return new Date(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return new Date(y, m, d).valueOf();
    }
  }
  function utcStartOfDate(y, m, d) {
    if (y < 100 && y >= 0) {
      return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return Date.UTC(y, m, d);
    }
  }
  function startOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === void 0 || units === "millisecond" || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units) {
      case "year":
        time = startOfDate(this.year(), 0, 1);
        break;
      case "quarter":
        time = startOfDate(
          this.year(),
          this.month() - this.month() % 3,
          1
        );
        break;
      case "month":
        time = startOfDate(this.year(), this.month(), 1);
        break;
      case "week":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - this.weekday()
        );
        break;
      case "isoWeek":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1)
        );
        break;
      case "day":
      case "date":
        time = startOfDate(this.year(), this.month(), this.date());
        break;
      case "hour":
        time = this._d.valueOf();
        time -= mod$1(
          time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
          MS_PER_HOUR
        );
        break;
      case "minute":
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_MINUTE);
        break;
      case "second":
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_SECOND);
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }
  function endOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === void 0 || units === "millisecond" || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units) {
      case "year":
        time = startOfDate(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        time = startOfDate(
          this.year(),
          this.month() - this.month() % 3 + 3,
          1
        ) - 1;
        break;
      case "month":
        time = startOfDate(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - this.weekday() + 7
        ) - 1;
        break;
      case "isoWeek":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1) + 7
        ) - 1;
        break;
      case "day":
      case "date":
        time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        time = this._d.valueOf();
        time += MS_PER_HOUR - mod$1(
          time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
          MS_PER_HOUR
        ) - 1;
        break;
      case "minute":
        time = this._d.valueOf();
        time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
        break;
      case "second":
        time = this._d.valueOf();
        time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }
  function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function unix() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function toDate() {
    return new Date(this.valueOf());
  }
  function toArray() {
    var m = this;
    return [
      m.year(),
      m.month(),
      m.date(),
      m.hour(),
      m.minute(),
      m.second(),
      m.millisecond()
    ];
  }
  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
    };
  }
  function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  }
  function isValid$2() {
    return isValid(this);
  }
  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }
  function invalidAt() {
    return getParsingFlags(this).overflow;
  }
  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  addFormatToken("N", 0, 0, "eraAbbr");
  addFormatToken("NN", 0, 0, "eraAbbr");
  addFormatToken("NNN", 0, 0, "eraAbbr");
  addFormatToken("NNNN", 0, 0, "eraName");
  addFormatToken("NNNNN", 0, 0, "eraNarrow");
  addFormatToken("y", ["y", 1], "yo", "eraYear");
  addFormatToken("y", ["yy", 2], 0, "eraYear");
  addFormatToken("y", ["yyy", 3], 0, "eraYear");
  addFormatToken("y", ["yyyy", 4], 0, "eraYear");
  addRegexToken("N", matchEraAbbr);
  addRegexToken("NN", matchEraAbbr);
  addRegexToken("NNN", matchEraAbbr);
  addRegexToken("NNNN", matchEraName);
  addRegexToken("NNNNN", matchEraNarrow);
  addParseToken(
    ["N", "NN", "NNN", "NNNN", "NNNNN"],
    function(input2, array2, config2, token2) {
      var era = config2._locale.erasParse(input2, token2, config2._strict);
      if (era) {
        getParsingFlags(config2).era = era;
      } else {
        getParsingFlags(config2).invalidEra = input2;
      }
    }
  );
  addRegexToken("y", matchUnsigned);
  addRegexToken("yy", matchUnsigned);
  addRegexToken("yyy", matchUnsigned);
  addRegexToken("yyyy", matchUnsigned);
  addRegexToken("yo", matchEraYearOrdinal);
  addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
  addParseToken(["yo"], function(input2, array2, config2, token2) {
    var match;
    if (config2._locale._eraYearOrdinalRegex) {
      match = input2.match(config2._locale._eraYearOrdinalRegex);
    }
    if (config2._locale.eraYearOrdinalParse) {
      array2[YEAR] = config2._locale.eraYearOrdinalParse(input2, match);
    } else {
      array2[YEAR] = parseInt(input2, 10);
    }
  });
  function localeEras(m, format2) {
    var i, l, date2, eras = this._eras || getLocale("en")._eras;
    for (i = 0, l = eras.length; i < l; ++i) {
      switch (typeof eras[i].since) {
        case "string":
          date2 = hooks(eras[i].since).startOf("day");
          eras[i].since = date2.valueOf();
          break;
      }
      switch (typeof eras[i].until) {
        case "undefined":
          eras[i].until = Infinity;
          break;
        case "string":
          date2 = hooks(eras[i].until).startOf("day").valueOf();
          eras[i].until = date2.valueOf();
          break;
      }
    }
    return eras;
  }
  function localeErasParse(eraName, format2, strict) {
    var i, l, eras = this.eras(), name, abbr, narrow;
    eraName = eraName.toUpperCase();
    for (i = 0, l = eras.length; i < l; ++i) {
      name = eras[i].name.toUpperCase();
      abbr = eras[i].abbr.toUpperCase();
      narrow = eras[i].narrow.toUpperCase();
      if (strict) {
        switch (format2) {
          case "N":
          case "NN":
          case "NNN":
            if (abbr === eraName) {
              return eras[i];
            }
            break;
          case "NNNN":
            if (name === eraName) {
              return eras[i];
            }
            break;
          case "NNNNN":
            if (narrow === eraName) {
              return eras[i];
            }
            break;
        }
      } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
        return eras[i];
      }
    }
  }
  function localeErasConvertYear(era, year) {
    var dir = era.since <= era.until ? 1 : -1;
    if (year === void 0) {
      return hooks(era.since).year();
    } else {
      return hooks(era.since).year() + (year - era.offset) * dir;
    }
  }
  function getEraName() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].name;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].name;
      }
    }
    return "";
  }
  function getEraNarrow() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].narrow;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].narrow;
      }
    }
    return "";
  }
  function getEraAbbr() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].abbr;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].abbr;
      }
    }
    return "";
  }
  function getEraYear() {
    var i, l, dir, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      dir = eras[i].since <= eras[i].until ? 1 : -1;
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
        return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
      }
    }
    return this.year();
  }
  function erasNameRegex(isStrict) {
    if (!hasOwnProp(this, "_erasNameRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNameRegex : this._erasRegex;
  }
  function erasAbbrRegex(isStrict) {
    if (!hasOwnProp(this, "_erasAbbrRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasAbbrRegex : this._erasRegex;
  }
  function erasNarrowRegex(isStrict) {
    if (!hasOwnProp(this, "_erasNarrowRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNarrowRegex : this._erasRegex;
  }
  function matchEraAbbr(isStrict, locale2) {
    return locale2.erasAbbrRegex(isStrict);
  }
  function matchEraName(isStrict, locale2) {
    return locale2.erasNameRegex(isStrict);
  }
  function matchEraNarrow(isStrict, locale2) {
    return locale2.erasNarrowRegex(isStrict);
  }
  function matchEraYearOrdinal(isStrict, locale2) {
    return locale2._eraYearOrdinalRegex || matchUnsigned;
  }
  function computeErasParse() {
    var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, erasName, erasAbbr, erasNarrow, eras = this.eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      erasName = regexEscape(eras[i].name);
      erasAbbr = regexEscape(eras[i].abbr);
      erasNarrow = regexEscape(eras[i].narrow);
      namePieces.push(erasName);
      abbrPieces.push(erasAbbr);
      narrowPieces.push(erasNarrow);
      mixedPieces.push(erasName);
      mixedPieces.push(erasAbbr);
      mixedPieces.push(erasNarrow);
    }
    this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
    this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
    this._erasNarrowRegex = new RegExp(
      "^(" + narrowPieces.join("|") + ")",
      "i"
    );
  }
  addFormatToken(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100;
  });
  addFormatToken(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function addWeekYearFormatToken(token2, getter) {
    addFormatToken(0, [token2, token2.length], 0, getter);
  }
  addWeekYearFormatToken("gggg", "weekYear");
  addWeekYearFormatToken("ggggg", "weekYear");
  addWeekYearFormatToken("GGGG", "isoWeekYear");
  addWeekYearFormatToken("GGGGG", "isoWeekYear");
  addRegexToken("G", matchSigned);
  addRegexToken("g", matchSigned);
  addRegexToken("GG", match1to2, match2);
  addRegexToken("gg", match1to2, match2);
  addRegexToken("GGGG", match1to4, match4);
  addRegexToken("gggg", match1to4, match4);
  addRegexToken("GGGGG", match1to6, match6);
  addRegexToken("ggggg", match1to6, match6);
  addWeekParseToken(
    ["gggg", "ggggg", "GGGG", "GGGGG"],
    function(input2, week, config2, token2) {
      week[token2.substr(0, 2)] = toInt(input2);
    }
  );
  addWeekParseToken(["gg", "GG"], function(input2, week, config2, token2) {
    week[token2] = hooks.parseTwoDigitYear(input2);
  });
  function getSetWeekYear(input2) {
    return getSetWeekYearHelper.call(
      this,
      input2,
      this.week(),
      this.weekday() + this.localeData()._week.dow,
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function getSetISOWeekYear(input2) {
    return getSetWeekYearHelper.call(
      this,
      input2,
      this.isoWeek(),
      this.isoWeekday(),
      1,
      4
    );
  }
  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }
  function getISOWeeksInISOWeekYear() {
    return weeksInYear(this.isoWeekYear(), 1, 4);
  }
  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }
  function getWeeksInWeekYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
  }
  function getSetWeekYearHelper(input2, week, weekday, dow, doy) {
    var weeksTarget;
    if (input2 == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input2, dow, doy);
      if (week > weeksTarget) {
        week = weeksTarget;
      }
      return setWeekAll.call(this, input2, week, weekday, dow, doy);
    }
  }
  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date2 = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    this.year(date2.getUTCFullYear());
    this.month(date2.getUTCMonth());
    this.date(date2.getUTCDate());
    return this;
  }
  addFormatToken("Q", 0, "Qo", "quarter");
  addRegexToken("Q", match1);
  addParseToken("Q", function(input2, array2) {
    array2[MONTH] = (toInt(input2) - 1) * 3;
  });
  function getSetQuarter(input2) {
    return input2 == null ? Math.ceil((this.month() + 1) / 3) : this.month((input2 - 1) * 3 + this.month() % 3);
  }
  addFormatToken("D", ["DD", 2], "Do", "date");
  addRegexToken("D", match1to2, match1to2NoLeadingZero);
  addRegexToken("DD", match1to2, match2);
  addRegexToken("Do", function(isStrict, locale2) {
    return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
  });
  addParseToken(["D", "DD"], DATE);
  addParseToken("Do", function(input2, array2) {
    array2[DATE] = toInt(input2.match(match1to2)[0]);
  });
  var getSetDayOfMonth = makeGetSet("Date", true);
  addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  addRegexToken("DDD", match1to3);
  addRegexToken("DDDD", match3);
  addParseToken(["DDD", "DDDD"], function(input2, array2, config2) {
    config2._dayOfYear = toInt(input2);
  });
  function getSetDayOfYear(input2) {
    var dayOfYear = Math.round(
      (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
    ) + 1;
    return input2 == null ? dayOfYear : this.add(input2 - dayOfYear, "d");
  }
  addFormatToken("m", ["mm", 2], 0, "minute");
  addRegexToken("m", match1to2, match1to2HasZero);
  addRegexToken("mm", match1to2, match2);
  addParseToken(["m", "mm"], MINUTE);
  var getSetMinute = makeGetSet("Minutes", false);
  addFormatToken("s", ["ss", 2], 0, "second");
  addRegexToken("s", match1to2, match1to2HasZero);
  addRegexToken("ss", match1to2, match2);
  addParseToken(["s", "ss"], SECOND);
  var getSetSecond = makeGetSet("Seconds", false);
  addFormatToken("S", 0, 0, function() {
    return ~~(this.millisecond() / 100);
  });
  addFormatToken(0, ["SS", 2], 0, function() {
    return ~~(this.millisecond() / 10);
  });
  addFormatToken(0, ["SSS", 3], 0, "millisecond");
  addFormatToken(0, ["SSSS", 4], 0, function() {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ["SSSSS", 5], 0, function() {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ["SSSSSS", 6], 0, function() {
    return this.millisecond() * 1e3;
  });
  addFormatToken(0, ["SSSSSSS", 7], 0, function() {
    return this.millisecond() * 1e4;
  });
  addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
    return this.millisecond() * 1e5;
  });
  addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
    return this.millisecond() * 1e6;
  });
  addRegexToken("S", match1to3, match1);
  addRegexToken("SS", match1to3, match2);
  addRegexToken("SSS", match1to3, match3);
  var token, getSetMillisecond;
  for (token = "SSSS"; token.length <= 9; token += "S") {
    addRegexToken(token, matchUnsigned);
  }
  function parseMs(input2, array2) {
    array2[MILLISECOND] = toInt(("0." + input2) * 1e3);
  }
  for (token = "S"; token.length <= 9; token += "S") {
    addParseToken(token, parseMs);
  }
  getSetMillisecond = makeGetSet("Milliseconds", false);
  addFormatToken("z", 0, 0, "zoneAbbr");
  addFormatToken("zz", 0, 0, "zoneName");
  function getZoneAbbr() {
    return this._isUTC ? "UTC" : "";
  }
  function getZoneName() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var proto = Moment.prototype;
  proto.add = add;
  proto.calendar = calendar$1;
  proto.clone = clone;
  proto.diff = diff;
  proto.endOf = endOf;
  proto.format = format;
  proto.from = from;
  proto.fromNow = fromNow;
  proto.to = to;
  proto.toNow = toNow;
  proto.get = stringGet;
  proto.invalidAt = invalidAt;
  proto.isAfter = isAfter;
  proto.isBefore = isBefore;
  proto.isBetween = isBetween;
  proto.isSame = isSame;
  proto.isSameOrAfter = isSameOrAfter;
  proto.isSameOrBefore = isSameOrBefore;
  proto.isValid = isValid$2;
  proto.lang = lang;
  proto.locale = locale;
  proto.localeData = localeData;
  proto.max = prototypeMax;
  proto.min = prototypeMin;
  proto.parsingFlags = parsingFlags;
  proto.set = stringSet;
  proto.startOf = startOf;
  proto.subtract = subtract;
  proto.toArray = toArray;
  proto.toObject = toObject;
  proto.toDate = toDate;
  proto.toISOString = toISOString;
  proto.inspect = inspect;
  if (typeof Symbol !== "undefined" && Symbol.for != null) {
    proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
      return "Moment<" + this.format() + ">";
    };
  }
  proto.toJSON = toJSON;
  proto.toString = toString;
  proto.unix = unix;
  proto.valueOf = valueOf;
  proto.creationData = creationData;
  proto.eraName = getEraName;
  proto.eraNarrow = getEraNarrow;
  proto.eraAbbr = getEraAbbr;
  proto.eraYear = getEraYear;
  proto.year = getSetYear;
  proto.isLeapYear = getIsLeapYear;
  proto.weekYear = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;
  proto.quarter = proto.quarters = getSetQuarter;
  proto.month = getSetMonth;
  proto.daysInMonth = getDaysInMonth;
  proto.week = proto.weeks = getSetWeek;
  proto.isoWeek = proto.isoWeeks = getSetISOWeek;
  proto.weeksInYear = getWeeksInYear;
  proto.weeksInWeekYear = getWeeksInWeekYear;
  proto.isoWeeksInYear = getISOWeeksInYear;
  proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
  proto.date = getSetDayOfMonth;
  proto.day = proto.days = getSetDayOfWeek;
  proto.weekday = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear = getSetDayOfYear;
  proto.hour = proto.hours = getSetHour;
  proto.minute = proto.minutes = getSetMinute;
  proto.second = proto.seconds = getSetSecond;
  proto.millisecond = proto.milliseconds = getSetMillisecond;
  proto.utcOffset = getSetOffset;
  proto.utc = setOffsetToUTC;
  proto.local = setOffsetToLocal;
  proto.parseZone = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST = isDaylightSavingTime;
  proto.isLocal = isLocal;
  proto.isUtcOffset = isUtcOffset;
  proto.isUtc = isUtc;
  proto.isUTC = isUtc;
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;
  proto.dates = deprecate(
    "dates accessor is deprecated. Use date instead.",
    getSetDayOfMonth
  );
  proto.months = deprecate(
    "months accessor is deprecated. Use month instead",
    getSetMonth
  );
  proto.years = deprecate(
    "years accessor is deprecated. Use year instead",
    getSetYear
  );
  proto.zone = deprecate(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    getSetZone
  );
  proto.isDSTShifted = deprecate(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    isDaylightSavingTimeShifted
  );
  function createUnix(input2) {
    return createLocal(input2 * 1e3);
  }
  function createInZone() {
    return createLocal.apply(null, arguments).parseZone();
  }
  function preParsePostFormat(string2) {
    return string2;
  }
  var proto$1 = Locale.prototype;
  proto$1.calendar = calendar;
  proto$1.longDateFormat = longDateFormat;
  proto$1.invalidDate = invalidDate;
  proto$1.ordinal = ordinal;
  proto$1.preparse = preParsePostFormat;
  proto$1.postformat = preParsePostFormat;
  proto$1.relativeTime = relativeTime;
  proto$1.pastFuture = pastFuture;
  proto$1.set = set;
  proto$1.eras = localeEras;
  proto$1.erasParse = localeErasParse;
  proto$1.erasConvertYear = localeErasConvertYear;
  proto$1.erasAbbrRegex = erasAbbrRegex;
  proto$1.erasNameRegex = erasNameRegex;
  proto$1.erasNarrowRegex = erasNarrowRegex;
  proto$1.months = localeMonths;
  proto$1.monthsShort = localeMonthsShort;
  proto$1.monthsParse = localeMonthsParse;
  proto$1.monthsRegex = monthsRegex;
  proto$1.monthsShortRegex = monthsShortRegex;
  proto$1.week = localeWeek;
  proto$1.firstDayOfYear = localeFirstDayOfYear;
  proto$1.firstDayOfWeek = localeFirstDayOfWeek;
  proto$1.weekdays = localeWeekdays;
  proto$1.weekdaysMin = localeWeekdaysMin;
  proto$1.weekdaysShort = localeWeekdaysShort;
  proto$1.weekdaysParse = localeWeekdaysParse;
  proto$1.weekdaysRegex = weekdaysRegex;
  proto$1.weekdaysShortRegex = weekdaysShortRegex;
  proto$1.weekdaysMinRegex = weekdaysMinRegex;
  proto$1.isPM = localeIsPM;
  proto$1.meridiem = localeMeridiem;
  function get$1(format2, index2, field, setter) {
    var locale2 = getLocale(), utc = createUTC().set(setter, index2);
    return locale2[field](utc, format2);
  }
  function listMonthsImpl(format2, index2, field) {
    if (isNumber(format2)) {
      index2 = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
    if (index2 != null) {
      return get$1(format2, index2, field, "month");
    }
    var i, out = [];
    for (i = 0; i < 12; i++) {
      out[i] = get$1(format2, i, field, "month");
    }
    return out;
  }
  function listWeekdaysImpl(localeSorted, format2, index2, field) {
    if (typeof localeSorted === "boolean") {
      if (isNumber(format2)) {
        index2 = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
    } else {
      format2 = localeSorted;
      index2 = format2;
      localeSorted = false;
      if (isNumber(format2)) {
        index2 = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
    }
    var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
    if (index2 != null) {
      return get$1(format2, (index2 + shift) % 7, field, "day");
    }
    for (i = 0; i < 7; i++) {
      out[i] = get$1(format2, (i + shift) % 7, field, "day");
    }
    return out;
  }
  function listMonths(format2, index2) {
    return listMonthsImpl(format2, index2, "months");
  }
  function listMonthsShort(format2, index2) {
    return listMonthsImpl(format2, index2, "monthsShort");
  }
  function listWeekdays(localeSorted, format2, index2) {
    return listWeekdaysImpl(localeSorted, format2, index2, "weekdays");
  }
  function listWeekdaysShort(localeSorted, format2, index2) {
    return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysShort");
  }
  function listWeekdaysMin(localeSorted, format2, index2) {
    return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysMin");
  }
  getSetGlobalLocale("en", {
    eras: [
      {
        since: "0001-01-01",
        until: Infinity,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD"
      },
      {
        since: "0000-12-31",
        until: -Infinity,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC"
      }
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(number2) {
      var b = number2 % 10, output = toInt(number2 % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
      return number2 + output;
    }
  });
  hooks.lang = deprecate(
    "moment.lang is deprecated. Use moment.locale instead.",
    getSetGlobalLocale
  );
  hooks.langData = deprecate(
    "moment.langData is deprecated. Use moment.localeData instead.",
    getLocale
  );
  var mathAbs = Math.abs;
  function abs() {
    var data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);
    return this;
  }
  function addSubtract$1(duration, input2, value, direction) {
    var other = createDuration(input2, value);
    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;
    return duration._bubble();
  }
  function add$1(input2, value) {
    return addSubtract$1(this, input2, value, 1);
  }
  function subtract$1(input2, value) {
    return addSubtract$1(this, input2, value, -1);
  }
  function absCeil(number2) {
    if (number2 < 0) {
      return Math.floor(number2);
    } else {
      return Math.ceil(number2);
    }
  }
  function bubble() {
    var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
    if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
      milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
      days2 = 0;
      months2 = 0;
    }
    data.milliseconds = milliseconds2 % 1e3;
    seconds2 = absFloor(milliseconds2 / 1e3);
    data.seconds = seconds2 % 60;
    minutes2 = absFloor(seconds2 / 60);
    data.minutes = minutes2 % 60;
    hours2 = absFloor(minutes2 / 60);
    data.hours = hours2 % 24;
    days2 += absFloor(hours2 / 24);
    monthsFromDays = absFloor(daysToMonths(days2));
    months2 += monthsFromDays;
    days2 -= absCeil(monthsToDays(monthsFromDays));
    years2 = absFloor(months2 / 12);
    months2 %= 12;
    data.days = days2;
    data.months = months2;
    data.years = years2;
    return this;
  }
  function daysToMonths(days2) {
    return days2 * 4800 / 146097;
  }
  function monthsToDays(months2) {
    return months2 * 146097 / 4800;
  }
  function as(units) {
    if (!this.isValid()) {
      return NaN;
    }
    var days2, months2, milliseconds2 = this._milliseconds;
    units = normalizeUnits(units);
    if (units === "month" || units === "quarter" || units === "year") {
      days2 = this._days + milliseconds2 / 864e5;
      months2 = this._months + daysToMonths(days2);
      switch (units) {
        case "month":
          return months2;
        case "quarter":
          return months2 / 3;
        case "year":
          return months2 / 12;
      }
    } else {
      days2 = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
        case "week":
          return days2 / 7 + milliseconds2 / 6048e5;
        case "day":
          return days2 + milliseconds2 / 864e5;
        case "hour":
          return days2 * 24 + milliseconds2 / 36e5;
        case "minute":
          return days2 * 1440 + milliseconds2 / 6e4;
        case "second":
          return days2 * 86400 + milliseconds2 / 1e3;
        case "millisecond":
          return Math.floor(days2 * 864e5) + milliseconds2;
        default:
          throw new Error("Unknown unit " + units);
      }
    }
  }
  function makeAs(alias) {
    return function() {
      return this.as(alias);
    };
  }
  var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y"), valueOf$1 = asMilliseconds;
  function clone$1() {
    return createDuration(this);
  }
  function get$2(units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + "s"]() : NaN;
  }
  function makeGetter(name) {
    return function() {
      return this.isValid() ? this._data[name] : NaN;
    };
  }
  var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
  function weeks() {
    return absFloor(this.days() / 7);
  }
  var round = Math.round, thresholds = {
    ss: 44,
    // a few seconds to seconds
    s: 45,
    // seconds to minute
    m: 45,
    // minutes to hour
    h: 22,
    // hours to day
    d: 26,
    // days to month/week
    w: null,
    // weeks to month
    M: 11
    // months to year
  };
  function substituteTimeAgo(string2, number2, withoutSuffix, isFuture, locale2) {
    return locale2.relativeTime(number2 || 1, !!withoutSuffix, string2, isFuture);
  }
  function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
    var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
    if (thresholds2.w != null) {
      a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
    }
    a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale2;
    return substituteTimeAgo.apply(null, a);
  }
  function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === void 0) {
      return round;
    }
    if (typeof roundingFunction === "function") {
      round = roundingFunction;
      return true;
    }
    return false;
  }
  function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === void 0) {
      return false;
    }
    if (limit === void 0) {
      return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === "s") {
      thresholds.ss = limit - 1;
    }
    return true;
  }
  function humanize(argWithSuffix, argThresholds) {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var withSuffix = false, th = thresholds, locale2, output;
    if (typeof argWithSuffix === "object") {
      argThresholds = argWithSuffix;
      argWithSuffix = false;
    }
    if (typeof argWithSuffix === "boolean") {
      withSuffix = argWithSuffix;
    }
    if (typeof argThresholds === "object") {
      th = Object.assign({}, thresholds, argThresholds);
      if (argThresholds.s != null && argThresholds.ss == null) {
        th.ss = argThresholds.s - 1;
      }
    }
    locale2 = this.localeData();
    output = relativeTime$1(this, !withSuffix, th, locale2);
    if (withSuffix) {
      output = locale2.pastFuture(+this, output);
    }
    return locale2.postformat(output);
  }
  var abs$1 = Math.abs;
  function sign(x) {
    return (x > 0) - (x < 0) || +x;
  }
  function toISOString$1() {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
    if (!total) {
      return "P0D";
    }
    minutes2 = absFloor(seconds2 / 60);
    hours2 = absFloor(minutes2 / 60);
    seconds2 %= 60;
    minutes2 %= 60;
    years2 = absFloor(months2 / 12);
    months2 %= 12;
    s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
    totalSign = total < 0 ? "-" : "";
    ymSign = sign(this._months) !== sign(total) ? "-" : "";
    daysSign = sign(this._days) !== sign(total) ? "-" : "";
    hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
    return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
  }
  var proto$2 = Duration.prototype;
  proto$2.isValid = isValid$1;
  proto$2.abs = abs;
  proto$2.add = add$1;
  proto$2.subtract = subtract$1;
  proto$2.as = as;
  proto$2.asMilliseconds = asMilliseconds;
  proto$2.asSeconds = asSeconds;
  proto$2.asMinutes = asMinutes;
  proto$2.asHours = asHours;
  proto$2.asDays = asDays;
  proto$2.asWeeks = asWeeks;
  proto$2.asMonths = asMonths;
  proto$2.asQuarters = asQuarters;
  proto$2.asYears = asYears;
  proto$2.valueOf = valueOf$1;
  proto$2._bubble = bubble;
  proto$2.clone = clone$1;
  proto$2.get = get$2;
  proto$2.milliseconds = milliseconds;
  proto$2.seconds = seconds;
  proto$2.minutes = minutes;
  proto$2.hours = hours;
  proto$2.days = days;
  proto$2.weeks = weeks;
  proto$2.months = months;
  proto$2.years = years;
  proto$2.humanize = humanize;
  proto$2.toISOString = toISOString$1;
  proto$2.toString = toISOString$1;
  proto$2.toJSON = toISOString$1;
  proto$2.locale = locale;
  proto$2.localeData = localeData;
  proto$2.toIsoString = deprecate(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    toISOString$1
  );
  proto$2.lang = lang;
  addFormatToken("X", 0, 0, "unix");
  addFormatToken("x", 0, 0, "valueOf");
  addRegexToken("x", matchSigned);
  addRegexToken("X", matchTimestamp);
  addParseToken("X", function(input2, array2, config2) {
    config2._d = new Date(parseFloat(input2) * 1e3);
  });
  addParseToken("x", function(input2, array2, config2) {
    config2._d = new Date(toInt(input2));
  });
  //! moment.js
  hooks.version = "2.30.1";
  setHookCallback(createLocal);
  hooks.fn = proto;
  hooks.min = min;
  hooks.max = max;
  hooks.now = now;
  hooks.utc = createUTC;
  hooks.unix = createUnix;
  hooks.months = listMonths;
  hooks.isDate = isDate;
  hooks.locale = getSetGlobalLocale;
  hooks.invalid = createInvalid;
  hooks.duration = createDuration;
  hooks.isMoment = isMoment;
  hooks.weekdays = listWeekdays;
  hooks.parseZone = createInZone;
  hooks.localeData = getLocale;
  hooks.isDuration = isDuration;
  hooks.monthsShort = listMonthsShort;
  hooks.weekdaysMin = listWeekdaysMin;
  hooks.defineLocale = defineLocale;
  hooks.updateLocale = updateLocale;
  hooks.locales = listLocales;
  hooks.weekdaysShort = listWeekdaysShort;
  hooks.normalizeUnits = normalizeUnits;
  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat = getCalendarFormat;
  hooks.prototype = proto;
  hooks.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    // <input type="datetime-local" step="0.001" />
    DATE: "YYYY-MM-DD",
    // <input type="date" />
    TIME: "HH:mm",
    // <input type="time" />
    TIME_SECONDS: "HH:mm:ss",
    // <input type="time" step="1" />
    TIME_MS: "HH:mm:ss.SSS",
    // <input type="time" step="0.001" />
    WEEK: "GGGG-[W]WW",
    // <input type="week" />
    MONTH: "YYYY-MM"
    // <input type="month" />
  };
  const getHttp = () => {
    var _a;
    return ((_a = uni.$u) == null ? void 0 : _a.http) || uni.request;
  };
  const api = {
    /**
     * 登录
     */
    login(params) {
      return getHttp().post("/login", params, { custom: { auth: false } });
    },
    /**
     * 注册
     */
    register(params) {
      return getHttp().post("/register", params, { custom: { auth: false } });
    },
    /**
     * 发送消息
     */
    message(params) {
      return getHttp().post("/message", params, { custom: { auth: true } });
    },
    /**
     * 消息分页
     */
    messagePage(params) {
      return getHttp().get("/message", { params });
    },
    /**
     * 问卷结果相关API
     */
    questionnaire: {
      // 保存问卷结果
      saveResult(data) {
        return getHttp().post("/questionnaireResults/savePhq9Result", data);
      },
      // 获取用户问卷结果列表
      getUserResults(userId) {
        return getHttp().get(`/questionnaireResults/listByUserId/${userId}`);
      },
      // 获取用户最新问卷结果
      getLatestResult(userId) {
        return getHttp().get(`/questionnaireResults/latestByUserId/${userId}`);
      },
      // 获取问卷结果详情
      getResultDetail(id) {
        return getHttp().get(`/questionnaireResults/${id}`);
      },
      // 删除问卷结果
      deleteResult(id) {
        return getHttp().delete(`/questionnaireResults/${id}`);
      },
      // 批量删除问卷结果
      batchDeleteResult(ids) {
        return getHttp().delete("/questionnaireResults/batch", { data: ids });
      },
      // 统计问卷结果数量
      getResultCount(params) {
        return getHttp().get("/questionnaireResults/count", { params });
      }
    },
    /**
     * 预约申请相关API
     */
    appointment: {
      // 保存预约申请
      saveAppointment(data) {
        return getHttp().post("/appointment/saveAppointment", data);
      },
      // 获取预约申请列表
      getAppointmentList(params) {
        return getHttp().get("/appointment/list", { params });
      },
      // 根据医生ID获取预约申请列表
      getAppointmentByDoctorId(doctorId) {
        return getHttp().get(`/appointment/listByDoctorId/${doctorId}`);
      },
      // 根据患者手机号获取预约申请列表
      getAppointmentByPatientPhone(patientPhone) {
        return getHttp().get(`/appointment/listByPatientPhone/${patientPhone}`);
      },
      // 获取预约申请详情
      getAppointmentDetail(id) {
        return getHttp().get(`/appointment/${id}`);
      },
      // 更新预约申请
      updateAppointment(data) {
        return http.put("/appointment", data);
      },
      // 删除预约申请
      deleteAppointment(id) {
        return http.delete(`/appointment/${id}`);
      },
      // 批量删除预约申请
      batchDeleteAppointment(ids) {
        return http.delete("/appointment/batch", { data: ids });
      },
      // 统计预约申请数量
      getAppointmentCount(params) {
        return http.get("/appointment/count", { params });
      }
    }
  };
  const env = "local";
  const prod = {
    baseUrl: "http://112.125.123.4:9001/alibaba-ai/v1"
    // 生产环境'
  };
  const dev = {
    baseUrl: "http://112.125.123.4:7001/alibaba-ai/v1"
    // 开发环境'
  };
  const local = {
    baseUrl: "http://112.125.123.4:8001/alibaba-ai/v1"
    // 本地环境'
  };
  const config = {
    dev,
    prod,
    local
  };
  const config$1 = config[env];
  class ThemeManager {
    constructor() {
      this.state = vue.reactive({
        currentTheme: "light",
        currentFontSize: "medium"
      });
      this.listeners = [];
      this.init();
    }
    init() {
      try {
        const settings = uni.getStorageSync("userSettings");
        if (settings) {
          this.state.currentTheme = settings.theme || "light";
          this.state.currentFontSize = settings.fontSize || "medium";
        }
      } catch (e) {
        formatAppLog("error", "at common/store/theme.js:26", "加载主题设置出错", e);
      }
    }
    /**
     * 获取当前主题
     */
    getTheme() {
      return this.state.currentTheme;
    }
    /**
     * 获取当前字体大小
     */
    getFontSize() {
      return this.state.currentFontSize;
    }
    /**
     * 设置主题并通知所有监听者
     */
    setTheme(theme) {
      if (this.state.currentTheme !== theme) {
        this.state.currentTheme = theme;
        this.updateSettings();
        this.notifyListeners();
      }
    }
    /**
     * 设置字体大小并通知所有监听者
     */
    setFontSize(fontSize) {
      if (this.state.currentFontSize !== fontSize) {
        this.state.currentFontSize = fontSize;
        this.updateSettings();
        this.notifyListeners();
      }
    }
    /**
     * 更新本地存储
     */
    updateSettings() {
      try {
        const settings = uni.getStorageSync("userSettings") || {};
        settings.theme = this.state.currentTheme;
        settings.fontSize = this.state.currentFontSize;
        uni.setStorageSync("userSettings", settings);
      } catch (e) {
        formatAppLog("error", "at common/store/theme.js:76", "保存主题设置出错", e);
      }
    }
    /**
     * 添加监听者
     */
    subscribe(callback) {
      this.listeners.push(callback);
      return () => {
        this.listeners = this.listeners.filter((listener) => listener !== callback);
      };
    }
    /**
     * 通知所有监听者
     */
    notifyListeners() {
      this.listeners.forEach((callback) => {
        try {
          callback({
            theme: this.state.currentTheme,
            fontSize: this.state.currentFontSize
          });
        } catch (e) {
          formatAppLog("error", "at common/store/theme.js:101", "通知监听者出错", e);
        }
      });
    }
    /**
     * 获取主题配置
     */
    getThemeConfig() {
      const themes = {
        light: {
          backgroundColor: "#f5f5f5",
          textColor: "#333333",
          sectionBackground: "#ffffff",
          borderColor: "#f0f0f0",
          descColor: "#999999",
          navBackground: "#667eea",
          navText: "#ffffff"
        },
        dark: {
          backgroundColor: "#1a1a1a",
          textColor: "#ffffff",
          sectionBackground: "#2d2d2d",
          borderColor: "#444444",
          descColor: "#aaaaaa",
          navBackground: "#1a1a1a",
          navText: "#ffffff"
        },
        auto: {
          // 由浅色主题作为默认
          backgroundColor: "#f5f5f5",
          textColor: "#333333",
          sectionBackground: "#ffffff",
          borderColor: "#f0f0f0",
          descColor: "#999999",
          navBackground: "#667eea",
          navText: "#ffffff"
        }
      };
      return themes[this.state.currentTheme] || themes.light;
    }
  }
  const themeManager = new ThemeManager();
  const initRequest = (vm) => {
    uni.$u.http.setConfig((config2) => {
      config2.baseURL = config$1.baseUrl;
      config2.custom = { catch: true, auth: true };
      return config2;
    });
    uni.$u.http.interceptors.request.use((config2) => {
      var _a;
      uni.showLoading({
        title: "加载中"
      });
      config2.data = config2.data || {};
      if ((_a = config2 == null ? void 0 : config2.custom) == null ? void 0 : _a.auth) {
        config2.header["Access-Token"] = uni.getStorageSync("Access-Token");
      }
      return config2;
    }, (config2) => {
      return Promise.reject(config2);
    });
    uni.$u.http.interceptors.response.use((response) => {
      var _a;
      const data = response.data;
      const custom = (_a = response.config) == null ? void 0 : _a.custom;
      if (data.code !== 200) {
        if (custom.toast !== false) {
          uni.$u.toast(data.message);
        }
        if (401 == data.code) {
          uni.removeStorageSync("Access-Token");
          setTimeout(() => {
            uni.$u.route("/pages/login/login");
          }, 1e3);
        }
        if (custom == null ? void 0 : custom.catch) {
          return Promise.reject(data);
        } else {
          return new Promise(() => {
          });
        }
      }
      uni.hideLoading();
      return data === void 0 ? {} : data;
    }, (response) => {
      uni.$u.toast("工程师被UFO带走了-_-!");
      return Promise.reject(response);
    });
  };
  function createApp() {
    const app = vue.createVueApp(App);
    app.component("msg", msg);
    const prototypeProxy = new Proxy({}, {
      get(target, prop) {
        return target[prop];
      },
      set(target, prop, value) {
        target[prop] = value;
        if (prop === "$u" && value) {
          app.config.globalProperties.$u = value;
          if (typeof uni !== "undefined") {
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
        if (prop === "$u" && value) {
          app.config.globalProperties.$u = value;
          if (typeof uni !== "undefined") {
            uni.$u = value;
          }
        }
        return true;
      }
    });
    try {
      if (uView && typeof uView.install === "function") {
        uView.install(VueShim);
      }
    } catch (e) {
      formatAppLog("warn", "at main.js:70", "uView install encountered error:", e);
      if (typeof uni !== "undefined" && uni.$u) {
        app.config.globalProperties.$u = uni.$u;
      }
    }
    App.mpType = "app";
    hooks.locale("zh-cn");
    app.config.globalProperties.$moment = hooks;
    app.config.globalProperties.$api = api;
    app.config.globalProperties.$config = config$1;
    app.config.globalProperties.$themeManager = themeManager;
    app.mixin({
      data() {
        return {
          _themeForceUpdate: 0
          // 强制更新标志
        };
      },
      computed: {
        currentTheme() {
          this._themeForceUpdate;
          return this.$themeManager.state.currentTheme;
        },
        currentFontSize() {
          this._themeForceUpdate;
          return this.$themeManager.state.currentFontSize;
        },
        containerClasses() {
          return `theme-${this.currentTheme} font-${this.currentFontSize}`;
        }
      },
      created() {
        this.unsubscribeTheme = this.$themeManager.subscribe(() => {
          this._themeForceUpdate++;
        });
      },
      beforeUnmount() {
        if (this.unsubscribeTheme) {
          this.unsubscribeTheme();
        }
      }
    });
    initRequest();
    return { app };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
