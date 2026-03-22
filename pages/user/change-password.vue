<template>
    <view :class="['password-container', containerClasses]">
        <!-- 页面头部 -->
        <view class="page-header">
            <text class="page-title">修改密码</text>
            <text class="page-desc">定期更新密码，保护账号安全</text>
        </view>

        <!-- 表单部分 -->
        <view class="form-section">
            <!-- 当前密码 -->
            <view class="form-group">
                <view class="form-label">
                    <text class="label-text">当前密码</text>
                    <text class="label-required">*</text>
                </view>
                <view class="password-input-wrapper">
                    <input
                        v-model="currentPassword"
                        :type="showCurrentPassword ? 'text' : 'password'"
                        placeholder="请输入当前密码"
                        class="password-input"
                        @blur="validateCurrentPassword"
                    />
                    <text
                        class="toggle-password-btn"
                        @click="showCurrentPassword = !showCurrentPassword"
                    >
                        {{ showCurrentPassword ? "隐藏" : "显示" }}
                    </text>
                </view>
                <text v-if="currentPasswordError" class="error-text">
                    {{ currentPasswordError }}
                </text>
            </view>

            <!-- 新密码 -->
            <view class="form-group">
                <view class="form-label">
                    <text class="label-text">新密码</text>
                    <text class="label-required">*</text>
                </view>
                <view class="password-input-wrapper">
                    <input
                        v-model="newPassword"
                        :type="showNewPassword ? 'text' : 'password'"
                        placeholder="请输入新密码"
                        class="password-input"
                        @input="validateNewPassword"
                    />
                    <text
                        class="toggle-password-btn"
                        @click="showNewPassword = !showNewPassword"
                    >
                        {{ showNewPassword ? "隐藏" : "显示" }}
                    </text>
                </view>
                <text v-if="newPasswordError" class="error-text">
                    {{ newPasswordError }}
                </text>

                <!-- 密码强度指示器 -->
                <view class="strength-indicator">
                    <text class="strength-label">密码强度：</text>
                    <view class="strength-bar">
                        <view
                            class="strength-fill"
                            :class="'strength-' + passwordStrength"
                            :style="{ width: strengthWidth }"
                        ></view>
                    </view>
                    <text
                        class="strength-text"
                        :class="'strength-' + passwordStrength"
                    >
                        {{ strengthText }}
                    </text>
                </view>

                <!-- 密码要求检查表 -->
                <view class="requirements-checklist">
                    <text class="requirements-title">密码需满足以下条件：</text>

                    <view class="requirement-item">
                        <text :class="['requirement-icon', { met: lengthMet }]">
                            {{ lengthMet ? "✓" : "○" }}
                        </text>
                        <text class="requirement-text">
                            至少 8 个字符（最多 32 个字符）
                        </text>
                    </view>

                    <view class="requirement-item">
                        <text
                            :class="['requirement-icon', { met: upperCaseMet }]"
                        >
                            {{ upperCaseMet ? "✓" : "○" }}
                        </text>
                        <text class="requirement-text">
                            包含至少 1 个大写字母（A-Z）
                        </text>
                    </view>

                    <view class="requirement-item">
                        <text
                            :class="['requirement-icon', { met: lowerCaseMet }]"
                        >
                            {{ lowerCaseMet ? "✓" : "○" }}
                        </text>
                        <text class="requirement-text">
                            包含至少 1 个小写字母（a-z）
                        </text>
                    </view>

                    <view class="requirement-item">
                        <text :class="['requirement-icon', { met: digitMet }]">
                            {{ digitMet ? "✓" : "○" }}
                        </text>
                        <text class="requirement-text">
                            包含至少 1 个数字（0-9）
                        </text>
                    </view>

                    <view class="requirement-item">
                        <text
                            :class="[
                                'requirement-icon',
                                { met: specialCharMet },
                            ]"
                        >
                            {{ specialCharMet ? "✓" : "○" }}
                        </text>
                        <text class="requirement-text">
                            包含至少 1
                            个特殊字符（!@#$%^&*()_+-=[]{}；'："\\|,.<>/?）
                        </text>
                    </view>
                </view>
            </view>

            <!-- 确认密码 -->
            <view class="form-group">
                <view class="form-label">
                    <text class="label-text">确认密码</text>
                    <text class="label-required">*</text>
                </view>
                <view class="password-input-wrapper">
                    <input
                        v-model="confirmPassword"
                        :type="showConfirmPassword ? 'text' : 'password'"
                        placeholder="请再次输入新密码"
                        class="password-input"
                        @blur="validateConfirmPassword"
                    />
                    <text
                        class="toggle-password-btn"
                        @click="showConfirmPassword = !showConfirmPassword"
                    >
                        {{ showConfirmPassword ? "隐藏" : "显示" }}
                    </text>
                </view>
                <text v-if="confirmPasswordError" class="error-text">
                    {{ confirmPasswordError }}
                </text>
            </view>

            <!-- 安全提示 -->
            <view class="security-notice">
                <text class="notice-icon">ℹ️</text>
                <text class="notice-text">
                    密码修改后，请妥善保管，不要泄露给他人。为了账号安全，请定期更换密码。
                </text>
            </view>
        </view>

        <!-- 操作按钮 -->
        <view class="action-section">
            <button class="cancel-btn" @click="navigateBack">取消</button>
            <button
                class="submit-btn"
                :class="{ disabled: !canSubmit }"
                :disabled="!canSubmit"
                :loading="submitLoading"
                @click="submitPasswordChange"
            >
                确认修改
            </button>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
            showCurrentPassword: false,
            showNewPassword: false,
            showConfirmPassword: false,
            currentPasswordError: "",
            newPasswordError: "",
            confirmPasswordError: "",
            submitLoading: false,
            containerClasses: "",
        };
    },
    computed: {
        lengthMet() {
            return (
                this.newPassword.length >= 8 && this.newPassword.length <= 32
            );
        },
        upperCaseMet() {
            return /[A-Z]/.test(this.newPassword);
        },
        lowerCaseMet() {
            return /[a-z]/.test(this.newPassword);
        },
        digitMet() {
            return /\d/.test(this.newPassword);
        },
        specialCharMet() {
            return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/.test(
                this.newPassword,
            );
        },
        passwordStrength() {
            const requirements = [
                this.lengthMet,
                this.upperCaseMet,
                this.lowerCaseMet,
                this.digitMet,
                this.specialCharMet,
            ];
            const metCount = requirements.filter(Boolean).length;

            if (metCount <= 2) return "weak";
            if (metCount <= 3) return "medium";
            return "strong";
        },
        strengthText() {
            switch (this.passwordStrength) {
                case "weak":
                    return "弱";
                case "medium":
                    return "中等";
                case "strong":
                    return "强";
                default:
                    return "未设置";
            }
        },
        strengthWidth() {
            if (!this.newPassword) return "0";
            switch (this.passwordStrength) {
                case "weak":
                    return "33.33%";
                case "medium":
                    return "66.66%";
                case "strong":
                    return "100%";
                default:
                    return "0";
            }
        },
        canSubmit() {
            return (
                this.currentPassword &&
                this.newPassword &&
                this.confirmPassword &&
                !this.currentPasswordError &&
                !this.newPasswordError &&
                !this.confirmPasswordError &&
                this.passwordStrength !== "weak"
            );
        },
    },
    onLoad() {
        console.log("修改密码页面加载");
        this.applyTheme();
    },
    onShow() {
        this.applyTheme();
    },
    methods: {
        applyTheme() {
            const isDark = uni.getStorageSync("darkMode");
            this.containerClasses = isDark ? "dark-mode" : "";
        },
        validateCurrentPassword() {
            this.currentPasswordError = "";
            if (!this.currentPassword) {
                this.currentPasswordError = "请输入当前密码";
                return false;
            }
            return true;
        },
        validateNewPassword() {
            this.newPasswordError = "";
            if (!this.newPassword) {
                return true;
            }
            if (this.newPassword.length < 8) {
                this.newPasswordError = "密码长度至少 8 个字符";
                return false;
            }
            if (this.newPassword.length > 32) {
                this.newPasswordError = "密码长度不能超过 32 个字符";
                return false;
            }
            if (this.newPassword === this.currentPassword) {
                this.newPasswordError = "新密码不能与当前密码相同";
                return false;
            }
            return true;
        },
        validateConfirmPassword() {
            this.confirmPasswordError = "";
            if (!this.confirmPassword) {
                this.confirmPasswordError = "请再次输入新密码";
                return false;
            }
            if (this.confirmPassword !== this.newPassword) {
                this.confirmPasswordError = "两次输入的密码不一致";
                return false;
            }
            return true;
        },
        submitPasswordChange() {
            // 最终验证
            if (!this.validateCurrentPassword()) {
                return;
            }
            if (!this.validateNewPassword()) {
                return;
            }
            if (!this.validateConfirmPassword()) {
                return;
            }

            // 检查密码强度
            if (this.passwordStrength === "weak") {
                uni.showToast({
                    title: "密码强度过弱，请加强密码复杂性",
                    icon: "none",
                });
                return;
            }

            this.submitLoading = true;
            uni.showLoading({
                title: "修改中...",
            });

            // 模拟API调用 - 实际应该调用真实的API
            setTimeout(() => {
                uni.hideLoading();
                this.submitLoading = false;

                // 模拟API成功
                uni.showToast({
                    title: "密码修改成功，请重新登录",
                    icon: "success",
                    duration: 2000,
                });

                // 2秒后跳转到登录页面
                setTimeout(() => {
                    uni.reLaunch({
                        url: "/pages/login/login",
                    });
                }, 2000);
            }, 1500);
        },
        navigateBack() {
            uni.navigateBack({
                delta: 1,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.password-container {
    padding: 20rpx 0;
    background-color: #f5f5f5;
    min-height: 100vh;

    &.dark-mode {
        background-color: #1a1a1a;
        color: #fff;
    }
}

.page-header {
    padding: 40rpx 30rpx 20rpx;
    text-align: center;

    .page-title {
        display: block;
        font-size: 36rpx;
        font-weight: bold;
        margin-bottom: 10rpx;
        color: #333;

        .dark-mode & {
            color: #fff;
        }
    }

    .page-desc {
        display: block;
        font-size: 28rpx;
        color: #999;

        .dark-mode & {
            color: #ccc;
        }
    }
}

.form-section {
    margin: 20rpx;
    background-color: #fff;
    border-radius: 12rpx;
    padding: 30rpx;

    .dark-mode & {
        background-color: #2a2a2a;
    }
}

.form-group {
    margin-bottom: 24rpx;

    &:last-child {
        margin-bottom: 0;
    }

    .form-label {
        display: flex;
        align-items: center;
        margin-bottom: 12rpx;

        .label-text {
            font-size: 28rpx;
            font-weight: 500;
            color: #333;

            .dark-mode & {
                color: #fff;
            }
        }

        .label-required {
            color: #f5576c;
            margin-left: 4rpx;
        }
    }

    .password-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;

        .password-input {
            width: 100%;
            padding: 20rpx 40rpx 20rpx 20rpx;
            border: 1rpx solid #ddd;
            border-radius: 8rpx;
            font-size: 28rpx;
            color: #333;
            box-sizing: border-box;
            height: 80rpx;
            line-height: 40rpx;

            .dark-mode & {
                background-color: #333;
                border-color: #555;
                color: #fff;
            }
        }

        .toggle-password-btn {
            position: absolute;
            right: 16rpx;
            font-size: 22rpx;
            color: #667eea;
            padding: 8rpx 12rpx;
            cursor: pointer;

            .dark-mode & {
                color: #8da0ff;
            }
        }
    }

    .error-text {
        display: block;
        margin-top: 8rpx;
        font-size: 22rpx;
        color: #f5576c;
    }

    .strength-indicator {
        display: flex;
        align-items: center;
        gap: 12rpx;
        margin-top: 16rpx;
        padding: 12rpx;
        background-color: #f9f9f9;
        border-radius: 8rpx;

        .dark-mode & {
            background-color: #333;
        }

        .strength-label {
            font-size: 24rpx;
            color: #666;
            white-space: nowrap;

            .dark-mode & {
                color: #aaa;
            }
        }

        .strength-bar {
            flex: 1;
            height: 4rpx;
            background-color: #eee;
            border-radius: 2rpx;
            overflow: hidden;

            .dark-mode & {
                background-color: #555;
            }

            .strength-fill {
                height: 100%;
                border-radius: 2rpx;
                transition: width 0.3s ease;

                &.strength-weak {
                    background-color: #f5576c;
                }

                &.strength-medium {
                    background-color: #ff9f43;
                }

                &.strength-strong {
                    background-color: #00a65a;
                }
            }
        }

        .strength-text {
            font-size: 24rpx;
            min-width: 40rpx;

            &.strength-weak {
                color: #f5576c;
            }

            &.strength-medium {
                color: #ff9f43;
            }

            &.strength-strong {
                color: #00a65a;
            }
        }
    }

    .requirements-checklist {
        margin-top: 16rpx;
        padding: 16rpx;
        background-color: #f9f9f9;
        border-radius: 8rpx;
        border-left: 4rpx solid #667eea;

        .dark-mode & {
            background-color: #333;
            border-left-color: #8da0ff;
        }

        .requirements-title {
            display: block;
            font-size: 24rpx;
            color: #666;
            margin-bottom: 12rpx;

            .dark-mode & {
                color: #aaa;
            }
        }

        .requirement-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 8rpx;
            font-size: 22rpx;
            color: #999;

            .dark-mode & {
                color: #bbb;
            }

            &:last-child {
                margin-bottom: 0;
            }

            .requirement-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: 24rpx;
                height: 24rpx;
                margin-right: 8rpx;
                font-size: 18rpx;
                color: #ddd;

                &.met {
                    color: #00a65a;
                }
            }

            .requirement-text {
                flex: 1;
            }
        }
    }
}

.security-notice {
    display: flex;
    gap: 12rpx;
    padding: 16rpx;
    background-color: #fef0f0;
    border-radius: 8rpx;
    margin-top: 24rpx;

    .dark-mode & {
        background-color: #3a1a1a;
    }

    .notice-icon {
        font-size: 28rpx;
        flex-shrink: 0;
    }

    .notice-text {
        font-size: 24rpx;
        color: #f5576c;
        line-height: 1.5;

        .dark-mode & {
            color: #ff8a9b;
        }
    }
}

.action-section {
    display: flex;
    gap: 16rpx;
    padding: 30rpx;
    margin-top: 20rpx;

    .cancel-btn,
    .submit-btn {
        flex: 1;
        padding: 16rpx;
        border-radius: 8rpx;
        font-size: 32rpx;
        font-weight: 600;
        border: none;
    }

    .cancel-btn {
        background-color: #f5f5f5;
        color: #333;

        .dark-mode & {
            background-color: #333;
            color: #fff;
        }

        &:active {
            opacity: 0.8;
        }
    }

    .submit-btn {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: #fff;

        &:active:not(.disabled) {
            opacity: 0.9;
        }

        &.disabled {
            background: #ccc;
            color: #999;
        }
    }
}
</style>
