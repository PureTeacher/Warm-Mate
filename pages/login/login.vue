<template>
    <view class="login-page">
        <view class="login-container">
            <!-- logo -->
            <view class="logo-section">
                <u-avatar
                    src="/static/logo2.png"
                    shape="square"
                    size="100"
                ></u-avatar>
            </view>

            <!-- title -->
            <view class="title-section">
                <text class="app-title">{{ title }}</text>
                <text class="app-subtitle">专业心理健康陪伴</text>
            </view>

            <!-- 登录表单 -->
            <view class="form-section">
                <!-- 手机号输入框 -->
                <view class="input-item">
                    <text class="input-label">手机号</text>
                    <input
                        v-model="formData.phone"
                        type="number"
                        placeholder="请输入手机号"
                        class="text-input"
                        @blur="validatePhone"
                    />
                </view>
                <text v-if="errors.phone" class="error-msg">{{
                    errors.phone
                }}</text>

                <!-- 密码输入框 -->
                <view class="input-item">
                    <text class="input-label">密码</text>
                    <input
                        v-model="formData.password"
                        type="password"
                        placeholder="请输入密码"
                        class="text-input"
                        @blur="validatePassword"
                    />
                </view>
                <text v-if="errors.password" class="error-msg">{{
                    errors.password
                }}</text>

                <!-- 忘记密码 -->
                <view class="forget-pwd-link">
                    <text @click="goToForgotPassword">忘记密码?</text>
                </view>

                <!-- 登录按钮 -->
                <button
                    class="login-btn"
                    @click="handleLogin"
                    :disable="isLoading"
                >
                    {{ isLoading ? "登录中..." : "登录" }}
                </button>
            </view>

            <!-- 分割线 -->
            <view class="divider-section">
                <view class="divider-line"></view>
                <text class="divider-text">或使用其他方式登录</text>
                <view class="divider-line"></view>
            </view>

            <!-- 其他登录选项 -->
            <view class="social-section">
                <view class="social-btn" @click="handleWechatLogin">
                    <text>微信登录</text>
                </view>
            </view>

            <!-- 注册链接 -->
            <view class="register-section">
                <text
                    >没有账号？<text class="link" @click="goToRegister"
                        >立即注册</text
                    ></text
                >
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: "暖愈心伴",
            isLoading: false,
            formData: {
                phone: "",
                password: "",
            },
            errors: {
                phone: "",
                password: "",
            },
        };
    },
    onLoad() {
        // 检查是否已登录
        const token = uni.getStorageSync("Access-Token");
        if (token) {
            uni.reLaunch({
                url: "/pages/index/index",
            });
        }
    },
    methods: {
        validatePhone() {
            const phone = this.formData.phone.trim();
            if (!phone) {
                this.errors.phone = "请输入手机号";
                return false;
            }
            if (!/^1[3-9]\d{9}$/.test(phone)) {
                this.errors.phone = "手机号格式不正确";
                return false;
            }
            this.errors.phone = "";
            return true;
        },
        validatePassword() {
            const password = this.formData.password;
            if (!password) {
                this.errors.password = "请输入密码";
                return false;
            }
            if (password.length < 6 || password.length > 16) {
                this.errors.password = "密码长度为6-16位";
                return false;
            }
            this.errors.password = "";
            return true;
        },
        async handleLogin() {
            try {
                // 验证表单
                if (!this.validatePhone() || !this.validatePassword()) {
                    return;
                }

                this.isLoading = true;

                // 调用登录接口
                const result = await this.$api.login({
                    username: this.formData.phone,
                    password: this.formData.password,
                });

                // 判断登录是否成功
                if (result.code === 200 || result.success) {
                    const token =
                        result.data?.accessToken ||
                        result.data?.token ||
                        result.token;

                    if (!token) {
                        uni.$u.toast("登录异常：未获取到token");
                        return;
                    }

                    // 保存token和用户信息
                    uni.setStorageSync("Access-Token", token);
                    if (result.data?.user) {
                        uni.setStorageSync("userInfo", result.data.user);
                    }

                    uni.$u.toast("登录成功");

                    // 跳转首页
                    uni.reLaunch({
                        url: "/pages/index/index",
                    });
                } else {
                    uni.$u.toast(result.message || "登录失败，请检查账号密码");
                }
            } catch (error) {
                console.error("登录错误：", error);
                uni.$u.toast("登录失败，请重试");
            } finally {
                this.isLoading = false;
            }
        },
        goToForgotPassword() {
            uni.navigateTo({
                url: "/pages/login/forgot-password",
            });
        },
        goToRegister() {
            uni.navigateTo({
                url: "/pages/register/register",
            });
        },
        handleWechatLogin() {
            uni.$u.toast("微信登录开发中");
        },
    },
};
</script>

<style lang="scss" scoped>
.login-page {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30rpx;
    box-sizing: border-box;
}

.login-container {
    width: 100%;
    max-width: 500rpx;
    background: white;
    border-radius: 16rpx;
    padding: 50rpx 30rpx;
    box-shadow: 0 4rpx 24rpx rgba(0, 0, 0, 0.1);
}

/* ============= LOGO ============= */
.logo-section {
    display: flex;
    justify-content: center;
    margin-bottom: 40rpx;
}

/* ============= 标题 ============= */
.title-section {
    text-align: center;
    margin-bottom: 50rpx;

    .app-title {
        display: block;
        font-size: 40rpx;
        font-weight: bold;
        color: #333333;
        margin-bottom: 12rpx;
    }

    .app-subtitle {
        display: block;
        font-size: 26rpx;
        color: #999999;
        letter-spacing: 1rpx;
    }
}

/* ============= 表单 ============= */
.form-section {
    margin-bottom: 40rpx;
}

/* 输入框容器 */
.input-item {
    display: flex;
    align-items: center;
    height: 70rpx;
    margin-bottom: 10rpx;
    border-bottom: 2rpx solid #f0f0f0;
    padding-bottom: 10rpx;
}

.input-label {
    width: 80rpx;
    flex-shrink: 0;
    font-size: 28rpx;
    color: #333333;
    font-weight: 500;
}

.text-input {
    flex: 1;
    height: 60rpx;
    margin-left: 20rpx;
    padding: 0 15rpx;
    font-size: 28rpx;
    color: #333333;
    background: #fafafa;
    border-radius: 8rpx;
    border: 1rpx solid transparent;
}

.text-input::placeholder {
    color: #cccccc;
}

.text-input:focus {
    background: white;
    border: 1rpx solid #667eea;
    outline: none;
}

/* 错误消息 */
.error-msg {
    display: block;
    font-size: 22rpx;
    color: #f56c6c;
    margin-left: 80rpx;
    margin-bottom: 20rpx;
    margin-top: -8rpx;
}

/* 忘记密码 */
.forget-pwd-link {
    text-align: right;
    margin-bottom: 30rpx;
    margin-top: 10rpx;

    text {
        font-size: 24rpx;
        color: #667eea;
        cursor: pointer;
        padding: 5rpx 0;

        &:active {
            opacity: 0.7;
        }
    }
}

/* 登录按钮 */
.login-btn {
    width: 100%;
    height: 70rpx;
    margin-top: 20rpx;
    margin-bottom: 30rpx;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-size: 30rpx;
    font-weight: bold;
    border: none;
    border-radius: 10rpx;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4rpx 12rpx rgba(102, 126, 234, 0.3);
}

.login-btn:active:not([disabled]) {
    transform: scale(0.98);
    box-shadow: 0 2rpx 8rpx rgba(102, 126, 234, 0.2);
}

.login-btn[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
}

/* ============= 分割线 ============= */
.divider-section {
    display: flex;
    align-items: center;
    margin: 40rpx 0;
    gap: 15rpx;

    .divider-line {
        flex: 1;
        height: 1rpx;
        background: #e0e0e0;
    }

    .divider-text {
        font-size: 24rpx;
        color: #999999;
        flex-shrink: 0;
        padding: 0 5rpx;
    }
}

/* ============= 社交登录 ============= */
.social-section {
    display: flex;
    justify-content: center;
    margin-bottom: 40rpx;
}

.social-btn {
    width: 100%;
    height: 70rpx;
    background: #f5f5f5;
    border: 1rpx solid #e0e0e0;
    border-radius: 10rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28rpx;
    color: #333333;
    cursor: pointer;
    transition: all 0.3s;
}

.social-btn:active {
    background: #eeeeee;
    transform: scale(0.98);
}

/* ============= 注册链接 ============= */
.register-section {
    text-align: center;
    font-size: 24rpx;
    color: #666666;
    padding-top: 20rpx;
    border-top: 1rpx solid #f0f0f0;

    .link {
        color: #667eea;
        font-weight: bold;

        &:active {
            opacity: 0.7;
        }
    }
}

/* ============= 暗色模式 ============= */
@media (prefers-color-scheme: dark) {
    .login-page {
        background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
    }

    .login-container {
        background: #2a2a2a;
        box-shadow: 0 4rpx 24rpx rgba(0, 0, 0, 0.5);
    }

    .title-section {
        .app-title {
            color: #ffffff;
        }

        .app-subtitle {
            color: #b0b0b0;
        }
    }

    .input-item {
        border-bottom-color: #444444;
    }

    .input-label {
        color: #ffffff;
    }

    .text-input {
        background: #333333;
        color: #ffffff;
        border-color: transparent;
    }

    .text-input::placeholder {
        color: #666666;
    }

    .text-input:focus {
        background: #3a3a3a;
        border-color: #667eea;
    }

    .error-msg {
        color: #ff6b6b;
    }

    .forget-pwd-link text {
        color: #667eea;
    }

    .divider-section {
        .divider-line {
            background: #444444;
        }

        .divider-text {
            color: #888888;
        }
    }

    .social-btn {
        background: #333333;
        border-color: #444444;
        color: #ffffff;

        &:active {
            background: #3a3a3a;
        }
    }

    .register-section {
        border-top-color: #444444;
        color: #cccccc;
    }
}

/* ============= 响应式 ============= */
@media (max-width: 400rpx) {
    .login-container {
        padding: 40rpx 20rpx;
    }

    .title-section {
        margin-bottom: 40rpx;

        .app-title {
            font-size: 36rpx;
        }

        .app-subtitle {
            font-size: 22rpx;
        }
    }

    .input-item {
        height: 60rpx;
        flex-wrap: wrap;
    }

    .input-label {
        width: 100%;
        margin-bottom: 8rpx;
    }

    .text-input {
        margin-left: 0;
        width: 100%;
    }
}
</style>
