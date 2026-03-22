<template>
    <view :class="['forgot-password-page', containerClasses]">
        <!-- 导航栏 -->
        <view class="nav-header">
            <text class="nav-back" @click="goBack">← 返回</text>
            <text class="nav-title">找回密码</text>
            <view class="nav-placeholder"></view>
        </view>

        <view class="container">
            <!-- 步骤指示 -->
            <view class="steps">
                <view :class="['step', { active: currentStep >= 1 }]">
                    <text class="step-number">1</text>
                    <text class="step-label">验证身份</text>
                </view>
                <view
                    class="step-divider"
                    :class="{ active: currentStep >= 2 }"
                ></view>
                <view :class="['step', { active: currentStep >= 2 }]">
                    <text class="step-number">2</text>
                    <text class="step-label">重置密码</text>
                </view>
            </view>

            <!-- 第一步：验证身份 -->
            <view v-if="currentStep === 1" class="step-content">
                <text class="step-title">验证您的身份</text>
                <text class="step-desc"
                    >请输入注册时使用的手机号，我们将发送验证码到您的手机</text
                >

                <view class="form">
                    <u--form
                        labelPosition="left"
                        :model="verifyModel"
                        :rules="verifyRules"
                        ref="verifyForm"
                        labelWidth="70"
                    >
                        <u-form-item
                            label="手机号"
                            prop="phone"
                            borderBottom
                            customStyle="margin-bottom: 25px"
                        >
                            <u--input
                                placeholder="请输入注册手机号"
                                v-model="verifyModel.phone"
                                border="none"
                                type="number"
                                prefixIcon="phone"
                            />
                        </u-form-item>

                        <u-form-item
                            label="验证码"
                            prop="code"
                            borderBottom
                            customStyle="margin-bottom: 25px"
                        >
                            <view class="code-input">
                                <u--input
                                    placeholder="请输入验证码"
                                    v-model="verifyModel.code"
                                    border="none"
                                    type="number"
                                    style="flex: 1"
                                />
                                <u-button
                                    type="info"
                                    size="small"
                                    :text="codeButtonText"
                                    :disabled="codeCountdown > 0"
                                    @click="sendCode"
                                    customStyle="min-width: 120rpx"
                                />
                            </view>
                        </u-form-item>
                    </u--form>

                    <u-button
                        type="success"
                        text="下一步"
                        :loading="isVerifying"
                        @click="verifyIdentity"
                        customStyle="margin-top: 35px"
                    />
                </view>
            </view>

            <!-- 第二步：重置密码 -->
            <view v-if="currentStep === 2" class="step-content">
                <text class="step-title">设置新密码</text>
                <text class="step-desc">请输入您的新密码，密码需要6-16位</text>

                <view class="form">
                    <u--form
                        labelPosition="left"
                        :model="resetModel"
                        :rules="resetRules"
                        ref="resetForm"
                        labelWidth="70"
                    >
                        <u-form-item
                            label="新密码"
                            prop="newPassword"
                            borderBottom
                            customStyle="margin-bottom: 25px"
                        >
                            <u--input
                                placeholder="请输入6-16位新密码"
                                v-model="resetModel.newPassword"
                                border="none"
                                password
                                clearable
                                prefixIcon="lock"
                            />
                        </u-form-item>

                        <u-form-item
                            label="确认密码"
                            prop="confirmPassword"
                            borderBottom
                            customStyle="margin-bottom: 25px"
                        >
                            <u--input
                                placeholder="请再次输入密码"
                                v-model="resetModel.confirmPassword"
                                border="none"
                                password
                                clearable
                                prefixIcon="lock"
                            />
                        </u-form-item>
                    </u--form>

                    <!-- 密码强度提示 -->
                    <view class="password-strength">
                        <text class="strength-label">密码强度：</text>
                        <view class="strength-bars">
                            <view
                                v-for="i in 3"
                                :key="i"
                                :class="[
                                    'strength-bar',
                                    getPasswordStrength(i),
                                ]"
                            ></view>
                        </view>
                        <text class="strength-text">{{ strengthText }}</text>
                    </view>

                    <!-- 密码需求 -->
                    <view class="password-requirements">
                        <view
                            class="requirement"
                            :class="{ met: hasMinLength }"
                        >
                            <text class="check-icon">✓</text>
                            <text class="requirement-text">6-16个字符</text>
                        </view>
                        <view class="requirement" :class="{ met: hasLetters }">
                            <text class="check-icon">✓</text>
                            <text class="requirement-text">包含字母</text>
                        </view>
                        <view class="requirement" :class="{ met: hasNumbers }">
                            <text class="check-icon">✓</text>
                            <text class="requirement-text">包含数字</text>
                        </view>
                    </view>

                    <u-button
                        type="success"
                        text="重置密码"
                        :loading="isResetting"
                        @click="resetPassword"
                        customStyle="margin-top: 35px"
                    />
                </view>
            </view>

            <!-- 成功状态 -->
            <view v-if="currentStep === 3" class="step-content success">
                <view class="success-icon">✓</view>
                <text class="success-title">密码重置成功!</text>
                <text class="success-desc"
                    >您的密码已成功重置，请使用新密码登录</text
                >
                <u-button
                    type="success"
                    text="返回登录"
                    @click="goToLogin"
                    customStyle="margin-top: 50px"
                />
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            currentStep: 1,
            codeCountdown: 0,
            isVerifying: false,
            isResetting: false,
            verifyModel: {
                phone: "",
                code: "",
            },
            resetModel: {
                newPassword: "",
                confirmPassword: "",
            },
            verifyRules: {
                phone: [
                    {
                        required: true,
                        message: "请输入手机号",
                        trigger: ["change", "blur"],
                    },
                    {
                        validator: (rule, value, callback) => {
                            if (uni.$u.test.mobile(value)) {
                                callback();
                            } else {
                                callback(new Error("手机号码不正确"));
                            }
                        },
                        trigger: ["blur"],
                    },
                ],
                code: [
                    {
                        required: true,
                        message: "请输入验证码",
                        trigger: ["change", "blur"],
                    },
                    {
                        len: 6,
                        message: "验证码为6位数字",
                        trigger: ["blur"],
                    },
                ],
            },
            resetRules: {
                newPassword: [
                    {
                        required: true,
                        message: "请输入新密码",
                        trigger: ["change", "blur"],
                    },
                    {
                        type: "string",
                        min: 6,
                        max: 16,
                        message: "密码长度6-16位",
                        trigger: ["blur"],
                    },
                ],
                confirmPassword: [
                    {
                        required: true,
                        message: "请确认密码",
                        trigger: ["change", "blur"],
                    },
                    {
                        validator: (rule, value, callback) => {
                            if (value === this.resetModel.newPassword) {
                                callback();
                            } else {
                                callback(new Error("两次输入密码不一致"));
                            }
                        },
                        trigger: ["blur"],
                    },
                ],
            },
        };
    },
    computed: {
        containerClasses() {
            if (this.$themeManager) {
                const theme = this.$themeManager.getTheme();
                return theme === "dark" ? "dark-mode" : "";
            }
            return "";
        },
        codeButtonText() {
            return this.codeCountdown > 0
                ? `${this.codeCountdown}s`
                : "发送验证码";
        },
        strengthText() {
            const password = this.resetModel.newPassword;
            if (!password) return "";
            if (password.length < 6) return "弱";
            if (this.hasLetters && this.hasNumbers) return "强";
            return "中等";
        },
        hasMinLength() {
            return (
                this.resetModel.newPassword.length >= 6 &&
                this.resetModel.newPassword.length <= 16
            );
        },
        hasLetters() {
            return /[a-zA-Z]/.test(this.resetModel.newPassword);
        },
        hasNumbers() {
            return /[0-9]/.test(this.resetModel.newPassword);
        },
    },
    methods: {
        goBack() {
            uni.navigateBack();
        },
        async sendCode() {
            try {
                const validateRes = await this.$refs.verifyForm.validate();
                if (!validateRes) {
                    return;
                }

                // TODO: 调用发送验证码接口
                uni.$u.toast("验证码已发送到您的手机");
                this.startCountdown();
            } catch (error) {
                uni.$u.toast("发送验证码失败，请重试");
            }
        },
        startCountdown() {
            this.codeCountdown = 60;
            const timer = setInterval(() => {
                this.codeCountdown--;
                if (this.codeCountdown === 0) {
                    clearInterval(timer);
                }
            }, 1000);
        },
        async verifyIdentity() {
            try {
                this.isVerifying = true;
                const validateRes = await this.$refs.verifyForm.validate();
                if (!validateRes) {
                    this.isVerifying = false;
                    return;
                }

                // TODO: 调用验证接口
                console.log("验证信息：", this.verifyModel);
                uni.$u.toast("身份验证成功");
                this.currentStep = 2;
            } catch (error) {
                uni.$u.toast("验证失败，请检查信息后重试");
            } finally {
                this.isVerifying = false;
            }
        },
        getPasswordStrength(level) {
            const password = this.resetModel.newPassword;
            if (!password || password.length < 6) return "";

            let strength = 0;
            if (/[a-z]/.test(password)) strength++;
            if (/[A-Z]/.test(password)) strength++;
            if (/[0-9]/.test(password)) strength++;

            if (level <= strength) {
                return strength >= 3
                    ? "strong"
                    : strength >= 2
                      ? "medium"
                      : "weak";
            }
            return "";
        },
        async resetPassword() {
            try {
                this.isResetting = true;
                const validateRes = await this.$refs.resetForm.validate();
                if (!validateRes) {
                    this.isResetting = false;
                    return;
                }

                // TODO: 调用重置密码接口
                console.log("重置密码信息：", this.resetModel);
                uni.$u.toast("密码重置成功");
                this.currentStep = 3;
            } catch (error) {
                uni.$u.toast("密码重置失败，请重试");
            } finally {
                this.isResetting = false;
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
.forgot-password-page {
    background: #f5f5f5;
    min-height: 100vh;
    transition: background-color 0.3s ease;

    &.dark-mode {
        background: #1a1a1a;

        .nav-header {
            background: #2a2a2a;
            border-bottom-color: #444;

            .nav-back,
            .nav-title {
                color: #ffffff;
            }
        }

        .container {
            .steps {
                .step {
                    color: #999999;

                    &.active {
                        color: #667eea;
                    }

                    .step-number {
                        background: transparent;
                        border-color: #444444;
                    }

                    &.active .step-number {
                        background: #667eea;
                        border-color: #667eea;
                        color: #ffffff;
                    }
                }

                .step-divider {
                    background: #444444;

                    &.active {
                        background: #667eea;
                    }
                }
            }

            .step-content {
                background: #2a2a2a;

                .step-title {
                    color: #ffffff;
                }

                .step-desc {
                    color: #b0b0b0;
                }

                .form {
                    :deep(.u-form-item__label) {
                        color: #ffffff;
                    }

                    :deep(.u--input__input) {
                        color: #ffffff;
                    }

                    :deep(.u--input__placeholder) {
                        color: #999999;
                    }

                    :deep(.u-form-item__body__children) {
                        border-bottom-color: #444444 !important;
                    }

                    .code-input {
                        display: flex;
                        gap: 10rpx;
                        align-items: center;
                    }
                }

                .password-strength {
                    margin: 25rpx 0;
                    padding: 15rpx;
                    background: #333333;
                    border-radius: 8rpx;

                    .strength-label {
                        color: #b0b0b0;
                        font-size: 24rpx;
                    }

                    .strength-bars {
                        display: flex;
                        gap: 8rpx;
                        margin: 10rpx 0;

                        .strength-bar {
                            flex: 1;
                            height: 4rpx;
                            border-radius: 2rpx;
                            background: #444444;

                            &.weak {
                                background: #f56c6c;
                            }

                            &.medium {
                                background: #e6a23c;
                            }

                            &.strong {
                                background: #67c26a;
                            }
                        }
                    }

                    .strength-text {
                        color: #b0b0b0;
                        font-size: 22rpx;
                    }
                }

                .password-requirements {
                    margin: 20rpx 0;

                    .requirement {
                        display: flex;
                        align-items: center;
                        padding: 8rpx 0;
                        color: #999999;
                        font-size: 24rpx;

                        &.met {
                            color: #67c26a;
                        }

                        .check-icon {
                            margin-right: 8rpx;
                            display: inline-block;
                            width: 24rpx;
                        }

                        .requirement-text {
                            flex: 1;
                        }
                    }
                }

                &.success {
                    text-align: center;
                    padding: 60rpx 20rpx;

                    .success-icon {
                        font-size: 80rpx;
                        color: #67c26a;
                        margin-bottom: 20rpx;
                        display: block;
                        animation: scaleIn 0.5s ease-out;
                    }

                    .success-title {
                        display: block;
                        font-size: 32rpx;
                        font-weight: bold;
                        color: #ffffff;
                        margin-bottom: 15rpx;
                    }

                    .success-desc {
                        display: block;
                        font-size: 26rpx;
                        color: #b0b0b0;
                    }
                }
            }
        }
    }

    .nav-header {
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15rpx 20rpx;
        padding-top: max(15rpx, env(safe-area-inset-top));
        border-bottom: 1rpx solid #f0f0f0;
        position: sticky;
        top: 0;
        z-index: 100;
        transition: background-color 0.3s ease;

        .nav-back {
            font-size: 28rpx;
            color: #333;
            padding: 10rpx;
            width: 50rpx;
            height: 50rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: color 0.3s ease;
        }

        .nav-title {
            font-size: 32rpx;
            font-weight: bold;
            color: #333;
            flex: 1;
            text-align: center;
            transition: color 0.3s ease;
        }

        .nav-placeholder {
            width: 50rpx;
        }
    }

    .container {
        padding: 30rpx 20rpx;
        max-width: 600rpx;
        margin: 0 auto;
        transition: background-color 0.3s ease;

        .steps {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 50rpx;

            .step {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8rpx;
                flex: 1;
                color: #999999;
                transition: color 0.3s ease;

                &.active {
                    color: #667eea;
                }

                .step-number {
                    width: 40rpx;
                    height: 40rpx;
                    border: 2rpx solid #ddd;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    transition: all 0.3s ease;
                }

                &.active .step-number {
                    background: #667eea;
                    border-color: #667eea;
                    color: white;
                }

                .step-label {
                    font-size: 22rpx;
                }
            }

            .step-divider {
                flex: 1;
                height: 2rpx;
                background: #ddd;
                margin: 0 10rpx;
                margin-top: 20rpx;
                transition: background-color 0.3s ease;

                &.active {
                    background: #667eea;
                }
            }
        }

        .step-content {
            background: white;
            border-radius: 16rpx;
            padding: 30rpx;
            transition: background-color 0.3s ease;

            .step-title {
                display: block;
                font-size: 32rpx;
                font-weight: bold;
                color: #333;
                margin-bottom: 10rpx;
                transition: color 0.3s ease;
            }

            .step-desc {
                display: block;
                font-size: 24rpx;
                color: #999;
                margin-bottom: 30rpx;
                transition: color 0.3s ease;
            }

            .form {
                :deep(.u-form-item) {
                    margin-bottom: 25rpx;
                }

                :deep(.u-form-item__label) {
                    color: #333;
                    transition: color 0.3s ease;
                }

                :deep(.u--input__input) {
                    color: #333;
                    font-size: 28rpx;
                    transition: color 0.3s ease;
                }

                :deep(.u--input__placeholder) {
                    color: #cccccc;
                }

                :deep(.u-form-item__body__children) {
                    border-bottom: 1rpx solid #eeeeee;
                }

                .code-input {
                    display: flex;
                    gap: 10rpx;
                    align-items: center;
                }
            }

            .password-strength {
                margin: 25rpx 0;
                padding: 15rpx;
                background: #f5f5f5;
                border-radius: 8rpx;

                .strength-label {
                    font-size: 24rpx;
                    color: #666;
                }

                .strength-bars {
                    display: flex;
                    gap: 8rpx;
                    margin: 10rpx 0;

                    .strength-bar {
                        flex: 1;
                        height: 4rpx;
                        border-radius: 2rpx;
                        background: #ddd;

                        &.weak {
                            background: #f56c6c;
                        }

                        &.medium {
                            background: #e6a23c;
                        }

                        &.strong {
                            background: #67c26a;
                        }
                    }
                }

                .strength-text {
                    font-size: 22rpx;
                    color: #666;
                }
            }

            .password-requirements {
                margin: 20rpx 0;

                .requirement {
                    display: flex;
                    align-items: center;
                    padding: 8rpx 0;
                    color: #999;
                    font-size: 24rpx;

                    &.met {
                        color: #67c26a;
                    }

                    .check-icon {
                        margin-right: 8rpx;
                        display: inline-block;
                        width: 24rpx;
                    }

                    .requirement-text {
                        flex: 1;
                    }
                }
            }
        }
    }
}

/* 动画 */
@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.5);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
