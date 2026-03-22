<template>
    <view class="register-page">
        <view class="register-container">
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
                <text class="app-subtitle">创建账号开始心理健康之旅</text>
            </view>

            <!-- 注册表单 -->
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
                        placeholder="请输入密码(6-16位)"
                        class="text-input"
                        @blur="validatePassword"
                    />
                </view>
                <text v-if="errors.password" class="error-msg">{{
                    errors.password
                }}</text>

                <!-- 确认密码输入框 -->
                <view class="input-item">
                    <text class="input-label">确认密码</text>
                    <input
                        v-model="formData.passwordConfirm"
                        type="password"
                        placeholder="请再次输入密码"
                        class="text-input"
                        @blur="validatePasswordConfirm"
                    />
                </view>
                <text v-if="errors.passwordConfirm" class="error-msg">{{
                    errors.passwordConfirm
                }}</text>

                <!-- 注册按钮 -->
                <button
                    class="register-btn"
                    @click="handleRegister"
                    :disabled="isLoading"
                >
                    {{ isLoading ? "注册中..." : "注册" }}
                </button>
            </view>

            <!-- 分割线 -->
            <view class="divider-section">
                <view class="divider-line"></view>
                <text class="divider-text">已有账号？</text>
                <view class="divider-line"></view>
            </view>

            <!-- 登录链接 -->
            <view class="login-section">
                <text>
                    <text class="link" @click="goToLogin">返回登录</text>
                </text>
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
                passwordConfirm: "",
            },
            errors: {
                phone: "",
                password: "",
                passwordConfirm: "",
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
        validatePasswordConfirm() {
            const passwordConfirm = this.formData.passwordConfirm;
            if (!passwordConfirm) {
                this.errors.passwordConfirm = "请确认密码";
                return false;
            }
            if (passwordConfirm !== this.formData.password) {
                this.errors.passwordConfirm = "两次密码不一致";
                return false;
            }
            this.errors.passwordConfirm = "";
            return true;
        },
        async handleRegister() {
            try {
                // 验证表单
                if (
                    !this.validatePhone() ||
                    !this.validatePassword() ||
                    !this.validatePasswordConfirm()
                ) {
                    return;
                }

                this.isLoading = true;

                // 调用注册接口
                const result = await this.$api.register({
                    username: this.formData.phone,
                    password: this.formData.password,
                });

                // 判断注册是否成功
                if (result.code === 200 || result.success) {
                    uni.$u.toast("注册成功，请登录");

                    // 延迟1秒后跳转到登录页
                    setTimeout(() => {
                        uni.reLaunch({
                            url: "/pages/login/login",
                        });
                    }, 1000);
                } else {
                    uni.$u.toast(result.message || "注册失败，请重试");
                }
            } catch (error) {
                console.error("注册错误：", error);
                uni.$u.toast("注册失败，请重试");
            } finally {
                this.isLoading = false;
            }
        },
        goToLogin() {
            uni.reLaunch({
                url: "/pages/login/login",
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.register-page {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30rpx;
    box-sizing: border-box;
}

.register-container {
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

/* 注册按钮 */
.register-btn {
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

.register-btn:active:not([disabled]) {
    transform: scale(0.98);
    box-shadow: 0 2rpx 8rpx rgba(102, 126, 234, 0.2);
}

.register-btn[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
}

/* ============= 分割线 ============= */
.divider-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40rpx 0;
    gap: 15rpx;
    font-size: 24rpx;
    color: #999999;

    .divider-line {
        flex: 1;
        height: 1rpx;
        background: #e0e0e0;
    }

    .divider-text {
        flex-shrink: 0;
        padding: 0 5rpx;
    }
}

/* ============= 登录链接 ============= */
.login-section {
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
    .register-page {
        background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
    }

    .register-container {
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

    .divider-section {
        .divider-line {
            background: #444444;
        }

        .divider-text {
            color: #888888;
        }
    }

    .login-section {
        color: #cccccc;
        border-top-color: #444444;

        .link {
            color: #667eea;
        }
    }
}
</style>
