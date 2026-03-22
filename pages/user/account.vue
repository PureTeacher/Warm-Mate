<template>
    <view :class="['account-container', containerClasses]">
        <!-- 页面头部 -->
        <view class="page-header">
            <text class="page-title">账号管理</text>
            <text class="page-desc">管理你的账号信息和安全设置</text>
        </view>

        <!-- 基本信息部分 -->
        <view class="account-section">
            <view class="section-title">基本信息</view>

            <!-- 用户名 -->
            <view class="account-item">
                <view class="item-label">
                    <text class="label-text">用户名</text>
                    <text class="label-required">*</text>
                </view>
                <view class="item-content">
                    <input
                        v-model="accountInfo.username"
                        type="text"
                        placeholder="请输入用户名"
                        class="account-input"
                        @blur="validateUsername"
                    />
                </view>
            </view>

            <!-- 注册邮箱 -->
            <view class="account-item">
                <view class="item-label">
                    <text class="label-text">注册邮箱</text>
                </view>
                <view class="item-content">
                    <text class="email-text">{{
                        accountInfo.email || "未绑定"
                    }}</text>
                    <text v-if="accountInfo.email" class="status-badge verified"
                        >✓ 已验证</text
                    >
                </view>
                <view class="item-action">
                    <button class="edit-btn" @click="openEmailModal">
                        {{ accountInfo.email ? "修改" : "绑定" }}
                    </button>
                </view>
            </view>

            <!-- 绑定手机 -->
            <view class="account-item">
                <view class="item-label">
                    <text class="label-text">绑定手机</text>
                </view>
                <view class="item-content">
                    <text class="phone-text">{{ maskedPhone }}</text>
                    <text v-if="accountInfo.phone" class="status-badge verified"
                        >✓ 已验证</text
                    >
                </view>
                <view class="item-action">
                    <button class="edit-btn" @click="openPhoneModal">
                        {{ accountInfo.phone ? "修改" : "绑定" }}
                    </button>
                </view>
            </view>
        </view>

        <!-- 社交账号部分 -->
        <view class="account-section">
            <view class="section-title">社交账号</view>

            <view class="social-item">
                <view class="social-header">
                    <text class="social-icon">🔗</text>
                    <text class="social-name">微信</text>
                </view>
                <view class="social-status">
                    <text
                        v-if="accountInfo.wechatBound"
                        class="status-badge verified"
                    >
                        已绑定
                    </text>
                    <text v-else class="status-badge unbound">未绑定</text>
                </view>
                <button
                    class="social-btn"
                    :class="{ 'unbind-btn': accountInfo.wechatBound }"
                    @click="toggleWechatBinding"
                >
                    {{ accountInfo.wechatBound ? "解绑" : "绑定" }}
                </button>
            </view>

            <view class="social-item">
                <view class="social-header">
                    <text class="social-icon">🆔</text>
                    <text class="social-name">QQ</text>
                </view>
                <view class="social-status">
                    <text
                        v-if="accountInfo.qqBound"
                        class="status-badge verified"
                    >
                        已绑定
                    </text>
                    <text v-else class="status-badge unbound">未绑定</text>
                </view>
                <button
                    class="social-btn"
                    :class="{ 'unbind-btn': accountInfo.qqBound }"
                    @click="toggleQqBinding"
                >
                    {{ accountInfo.qqBound ? "解绑" : "绑定" }}
                </button>
            </view>
        </view>

        <!-- 账号安全部分 -->
        <view class="account-section">
            <view class="section-title">账号安全</view>

            <view class="account-item security-item">
                <view class="item-left">
                    <text class="item-label">修改密码</text>
                    <text class="item-desc">定期更新密码保护账号安全</text>
                </view>
                <button class="edit-btn" @click="navigateToPassword">
                    修改
                </button>
            </view>

            <view class="account-item security-item">
                <view class="item-left">
                    <text class="item-label">登录设备</text>
                    <text class="item-desc">查看和管理登录过的设备</text>
                </view>
                <button class="edit-btn" @click="showDeviceList">管理</button>
            </view>

            <view class="account-item security-item">
                <view class="item-left">
                    <text class="item-label">登录日志</text>
                    <text class="item-desc">查看账号的登录历史记录</text>
                </view>
                <button class="edit-btn" @click="showLoginHistory">查看</button>
            </view>
        </view>

        <!-- 操作按钮 -->
        <view class="action-section">
            <button
                class="save-btn"
                :loading="saveLoading"
                @click="saveAccountInfo"
            >
                保存修改
            </button>
        </view>

        <!-- 修改邮箱弹窗 -->
        <view
            v-if="showEmailModal"
            class="modal-overlay"
            @click="showEmailModal = false"
        >
            <view class="modal-content" @click.stop>
                <view class="modal-header">
                    <text class="modal-title">修改邮箱</text>
                    <view class="modal-close" @click="showEmailModal = false"
                        >✕</view
                    >
                </view>
                <view class="modal-body">
                    <input
                        v-model="emailInput"
                        type="text"
                        placeholder="请输入新邮箱地址"
                        class="modal-input"
                    />
                </view>
                <view class="modal-footer">
                    <button class="btn-cancel" @click="showEmailModal = false">
                        取消
                    </button>
                    <button class="btn-confirm" @click="updateEmail">
                        确认
                    </button>
                </view>
            </view>
        </view>

        <!-- 修改手机弹窗 -->
        <view
            v-if="showPhoneModal"
            class="modal-overlay"
            @click="showPhoneModal = false"
        >
            <view class="modal-content phone-modal-content" @click.stop>
                <view class="modal-header">
                    <text class="modal-title">修改手机号</text>
                    <view class="modal-close" @click="showPhoneModal = false">
                        ✕
                    </view>
                </view>
                <view class="modal-body">
                    <view class="form-group">
                        <text class="form-label">新手机号</text>
                        <input
                            v-model="phoneInput"
                            type="number"
                            placeholder="请输入新手机号"
                            class="form-input"
                        />
                    </view>
                    <view class="form-group">
                        <view class="verify-section">
                            <input
                                v-model="phoneCode"
                                type="text"
                                placeholder="验证码"
                                class="form-input verify-input"
                            />
                            <button
                                class="send-code-btn"
                                :disabled="codeCountdown > 0"
                                @click="sendPhoneCode"
                            >
                                {{
                                    codeCountdown > 0
                                        ? `${codeCountdown}s`
                                        : "发送验证码"
                                }}
                            </button>
                        </view>
                    </view>
                </view>
                <view class="modal-footer">
                    <button
                        class="btn btn-cancel"
                        @click="showPhoneModal = false"
                    >
                        取消
                    </button>
                    <button
                        class="btn btn-confirm"
                        :loading="phoneLoading"
                        @click="confirmPhoneUpdate"
                    >
                        确认修改
                    </button>
                </view>
            </view>
        </view>

        <!-- 设备列表弹窗 -->
        <view
            v-if="showDeviceModal"
            class="modal-overlay-bottom"
            @click="showDeviceModal = false"
        >
            <view class="device-modal" @click.stop>
                <view class="modal-header">
                    <text class="modal-title">登录设备</text>
                </view>
                <view class="device-list">
                    <view
                        v-for="device in deviceList"
                        :key="device.id"
                        class="device-item"
                    >
                        <view class="device-info">
                            <text class="device-name">{{
                                device.deviceName
                            }}</text>
                            <text class="device-time">
                                最后登录: {{ formatTime(device.lastLoginTime) }}
                            </text>
                        </view>
                        <button
                            class="logout-device-btn"
                            @click="logoutDevice(device.id)"
                        >
                            退出登录
                        </button>
                    </view>
                </view>
            </view>
        </view>

        <!-- 登录历史弹窗 -->
        <view
            v-if="showHistoryModal"
            class="modal-overlay-bottom"
            @click="showHistoryModal = false"
        >
            <view class="history-modal" @click.stop>
                <view class="modal-header">
                    <text class="modal-title">登录日志</text>
                </view>
                <view class="history-list">
                    <view
                        v-for="log in loginHistory"
                        :key="log.id"
                        class="history-item"
                    >
                        <view class="history-info">
                            <text class="history-device">{{
                                log.deviceInfo
                            }}</text>
                            <text class="history-time">
                                {{ formatTime(log.loginTime) }}
                            </text>
                            <text class="history-location">{{
                                log.location || "未知位置"
                            }}</text>
                        </view>
                        <text class="status-badge verified">{{
                            log.status
                        }}</text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            accountInfo: {
                username: "",
                email: "",
                phone: "",
                wechatBound: false,
                qqBound: false,
            },
            emailInput: "",
            phoneInput: "",
            phoneCode: "",
            codeCountdown: 0,
            saveLoading: false,
            phoneLoading: false,
            deviceList: [],
            loginHistory: [],
            containerClasses: "",
            showEmailModal: false,
            showPhoneModal: false,
            showDeviceModal: false,
            showHistoryModal: false,
        };
    },
    computed: {
        maskedPhone() {
            const phone = this.accountInfo.phone;
            if (!phone) return "未绑定";
            return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
        },
    },
    onLoad() {
        console.log("账号管理页面加载");
        this.loadAccountInfo();
        this.applyTheme();
    },
    onShow() {
        this.applyTheme();
    },
    methods: {
        loadAccountInfo() {
            try {
                const userInfo = uni.getStorageSync("userInfo");
                if (userInfo) {
                    this.accountInfo = {
                        username: userInfo.username || "",
                        email: userInfo.email || "",
                        phone: userInfo.phone || "",
                        wechatBound: userInfo.wechatBound || false,
                        qqBound: userInfo.qqBound || false,
                    };
                }
            } catch (e) {
                console.error("加载账号信息失败", e);
            }
        },
        applyTheme() {
            const isDark = uni.getStorageSync("darkMode");
            this.containerClasses = isDark ? "dark-mode" : "";
        },
        validateUsername() {
            if (!this.accountInfo.username.trim()) {
                uni.showToast({
                    title: "用户名不能为空",
                    icon: "none",
                });
                return false;
            }
            if (
                this.accountInfo.username.length < 2 ||
                this.accountInfo.username.length > 20
            ) {
                uni.showToast({
                    title: "用户名长度为2-20个字符",
                    icon: "none",
                });
                return false;
            }
            return true;
        },
        validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.emailInput)) {
                uni.showToast({
                    title: "请输入有效的邮箱地址",
                    icon: "none",
                });
                return false;
            }
            return true;
        },
        validatePhone() {
            const phoneRegex = /^1[3-9]\d{9}$/;
            if (!phoneRegex.test(this.phoneInput)) {
                uni.showToast({
                    title: "请输入有效的手机号码",
                    icon: "none",
                });
                return false;
            }
            return true;
        },
        openEmailModal() {
            this.emailInput = this.accountInfo.email || "";
            this.showEmailModal = true;
        },
        openPhoneModal() {
            this.phoneInput = this.accountInfo.phone || "";
            this.phoneCode = "";
            this.showPhoneModal = true;
        },
        updateEmail() {
            if (!this.validateEmail()) {
                return;
            }

            uni.showLoading({
                title: "更新中...",
            });

            // 模拟API调用
            setTimeout(() => {
                uni.hideLoading();
                this.accountInfo.email = this.emailInput;
                uni.showToast({
                    title: "邮箱修改成功",
                    icon: "success",
                });
                this.showEmailModal = false;
            }, 1000);
        },
        sendPhoneCode() {
            if (!this.validatePhone()) {
                return;
            }

            uni.showLoading({
                title: "发送中...",
            });

            // 模拟发送验证码
            setTimeout(() => {
                uni.hideLoading();
                this.codeCountdown = 60;
                const timer = setInterval(() => {
                    this.codeCountdown--;
                    if (this.codeCountdown <= 0) {
                        clearInterval(timer);
                    }
                }, 1000);
                uni.showToast({
                    title: "验证码已发送",
                    icon: "success",
                });
            }, 500);
        },
        confirmPhoneUpdate() {
            if (!this.validatePhone()) {
                return;
            }
            if (!this.phoneCode || this.phoneCode.length < 4) {
                uni.showToast({
                    title: "请输入验证码",
                    icon: "none",
                });
                return;
            }

            this.phoneLoading = true;
            uni.showLoading({
                title: "验证中...",
            });

            // 模拟API调用
            setTimeout(() => {
                uni.hideLoading();
                this.phoneLoading = false;
                this.accountInfo.phone = this.phoneInput;
                uni.showToast({
                    title: "手机号修改成功",
                    icon: "success",
                });
                this.showPhoneModal = false;
            }, 1000);
        },
        toggleWechatBinding() {
            if (this.accountInfo.wechatBound) {
                this.confirmUnbind("微信");
            } else {
                this.bindWechat();
            }
        },
        toggleQqBinding() {
            if (this.accountInfo.qqBound) {
                this.confirmUnbind("QQ");
            } else {
                this.bindQq();
            }
        },
        bindWechat() {
            uni.showToast({
                title: "微信绑定功能开发中",
                icon: "none",
            });
        },
        bindQq() {
            uni.showToast({
                title: "QQ绑定功能开发中",
                icon: "none",
            });
        },
        confirmUnbind(platform) {
            uni.showModal({
                title: "解绑确认",
                content: `确定要解绑${platform}账号吗？`,
                confirmText: "确定",
                cancelText: "取消",
                success: (res) => {
                    if (res.confirm) {
                        this.unbindPlatform(platform);
                    }
                },
            });
        },
        unbindPlatform(platform) {
            uni.showLoading({
                title: "解绑中...",
            });

            setTimeout(() => {
                uni.hideLoading();
                if (platform === "微信") {
                    this.accountInfo.wechatBound = false;
                } else if (platform === "QQ") {
                    this.accountInfo.qqBound = false;
                }
                uni.showToast({
                    title: `已解绑${platform}`,
                    icon: "success",
                });
            }, 1000);
        },
        navigateToPassword() {
            uni.navigateTo({
                url: "/pages/user/change-password",
            });
        },
        showDeviceList() {
            this.loadDevices();
            this.showDeviceModal = true;
        },
        showLoginHistory() {
            this.loadLoginHistory();
            this.showHistoryModal = true;
        },
        loadDevices() {
            // 模拟设备列表数据
            this.deviceList = [
                {
                    id: 1,
                    deviceName: "iPhone 12 - Safari",
                    lastLoginTime: new Date().getTime() - 1000 * 60 * 5,
                },
                {
                    id: 2,
                    deviceName: "Android - Chrome",
                    lastLoginTime: new Date().getTime() - 1000 * 60 * 60 * 2,
                },
                {
                    id: 3,
                    deviceName: "Windows - Edge",
                    lastLoginTime: new Date().getTime() - 1000 * 60 * 60 * 24,
                },
            ];
        },
        loadLoginHistory() {
            // 模拟登录历史数据
            this.loginHistory = [
                {
                    id: 1,
                    deviceInfo: "iPhone 12 - Safari",
                    loginTime: new Date().getTime() - 1000 * 60 * 5,
                    location: "北京",
                    status: "成功",
                },
                {
                    id: 2,
                    deviceInfo: "Android - Chrome",
                    loginTime: new Date().getTime() - 1000 * 60 * 60 * 2,
                    location: "上海",
                    status: "成功",
                },
                {
                    id: 3,
                    deviceInfo: "Windows - Edge",
                    loginTime: new Date().getTime() - 1000 * 60 * 60 * 24,
                    location: "深圳",
                    status: "成功",
                },
            ];
        },
        logoutDevice(deviceId) {
            uni.showModal({
                title: "退出登录",
                content: "确定要在该设备上退出登录吗？",
                success: (res) => {
                    if (res.confirm) {
                        this.deviceList = this.deviceList.filter(
                            (d) => d.id !== deviceId,
                        );
                        uni.showToast({
                            title: "已退出该设备",
                            icon: "success",
                        });
                    }
                },
            });
        },
        formatTime(timestamp) {
            const date = new Date(timestamp);
            const now = new Date();
            const diff = now - date;

            if (diff < 1000 * 60) {
                return "刚刚";
            } else if (diff < 1000 * 60 * 60) {
                const minutes = Math.floor(diff / (1000 * 60));
                return `${minutes}分钟前`;
            } else if (diff < 1000 * 60 * 60 * 24) {
                const hours = Math.floor(diff / (1000 * 60 * 60));
                return `${hours}小时前`;
            } else {
                return date.toLocaleDateString();
            }
        },
        saveAccountInfo() {
            if (!this.validateUsername()) {
                return;
            }

            this.saveLoading = true;
            uni.showLoading({
                title: "保存中...",
            });

            // 模拟API调用
            setTimeout(() => {
                uni.hideLoading();
                this.saveLoading = false;

                // 保存到本地存储
                const userInfo = uni.getStorageSync("userInfo") || {};
                userInfo.username = this.accountInfo.username;
                userInfo.email = this.accountInfo.email;
                userInfo.phone = this.accountInfo.phone;
                userInfo.wechatBound = this.accountInfo.wechatBound;
                userInfo.qqBound = this.accountInfo.qqBound;
                uni.setStorageSync("userInfo", userInfo);

                uni.showToast({
                    title: "账号信息已保存",
                    icon: "success",
                });
            }, 1000);
        },
    },
};
</script>

<style lang="scss" scoped>
.account-container {
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

.account-section {
    margin: 20rpx;
    background-color: #fff;
    border-radius: 12rpx;
    padding: 30rpx;

    .dark-mode & {
        background-color: #2a2a2a;
    }

    .section-title {
        font-size: 28rpx;
        font-weight: 600;
        margin-bottom: 20rpx;
        color: #333;

        .dark-mode & {
            color: #fff;
        }
    }
}

.account-item {
    display: flex;
    align-items: center;
    padding: 20rpx 0;
    border-bottom: 1rpx solid #eee;

    .dark-mode & {
        border-bottom-color: #444;
    }

    &:last-child {
        border-bottom: none;
    }

    .item-label {
        display: flex;
        align-items: center;
        min-width: 120rpx;
        color: #666;

        .dark-mode & {
            color: #aaa;
        }

        .label-text {
            font-size: 28rpx;
        }

        .label-required {
            color: #f5576c;
            margin-left: 4rpx;
        }
    }

    .item-content {
        flex: 1;
        margin-left: 20rpx;
        display: flex;
        align-items: center;

        .account-input {
            width: 100%;
            padding: 12rpx;
            border: 1rpx solid #ddd;
            border-radius: 6rpx;
            font-size: 28rpx;
            color: #333;
            height: 80rpx;
            line-height: 56rpx;

            .dark-mode & {
                background-color: #333;
                border-color: #555;
                color: #fff;
            }
        }

        .email-text,
        .phone-text {
            font-size: 28rpx;
            color: #333;

            .dark-mode & {
                color: #fff;
            }
        }
    }

    .item-action {
        margin-left: auto;
    }

    .edit-btn {
        padding: 8rpx 20rpx;
        background-color: #667eea;
        color: #fff;
        border-radius: 6rpx;
        font-size: 24rpx;
        border: none;

        &:active {
            background-color: #5568d3;
        }
    }

    &.security-item {
        flex-direction: column;
        align-items: flex-start;

        .item-left {
            flex: 1;
            display: flex;
            flex-direction: column;

            .item-label {
                min-width: auto;
                margin-bottom: 8rpx;
                color: #333;

                .dark-mode & {
                    color: #fff;
                }
            }

            .item-desc {
                font-size: 24rpx;
                color: #999;

                .dark-mode & {
                    color: #aaa;
                }
            }
        }

        .edit-btn {
            margin-top: 16rpx;
            align-self: flex-end;
        }
    }
}

.status-badge {
    font-size: 22rpx;
    padding: 4rpx 12rpx;
    border-radius: 12rpx;
    margin-left: 10rpx;

    &.verified {
        background-color: #eef6f5;
        color: #00a65a;

        .dark-mode & {
            background-color: #1a3a36;
        }
    }

    &.unbound {
        background-color: #fef0f0;
        color: #f5576c;

        .dark-mode & {
            background-color: #3a1a1a;
        }
    }
}

.social-item {
    display: flex;
    align-items: center;
    padding: 20rpx;
    background-color: #f9f9f9;
    border-radius: 8rpx;
    margin-bottom: 16rpx;

    .dark-mode & {
        background-color: #333;
    }

    .social-header {
        display: flex;
        align-items: center;
        flex: 1;

        .social-icon {
            font-size: 40rpx;
            margin-right: 12rpx;
        }

        .social-name {
            font-size: 28rpx;
            color: #333;

            .dark-mode & {
                color: #fff;
            }
        }
    }

    .social-status {
        margin: 0 20rpx;
    }

    .social-btn {
        padding: 8rpx 16rpx;
        background-color: #667eea;
        color: #fff;
        border-radius: 6rpx;
        font-size: 24rpx;
        border: none;

        &.unbind-btn {
            background-color: #f5576c;
        }

        &:active {
            opacity: 0.8;
        }
    }
}

.action-section {
    padding: 30rpx;
    margin-top: 20rpx;

    .save-btn {
        width: 100%;
        padding: 16rpx;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: #fff;
        border-radius: 8rpx;
        font-size: 32rpx;
        font-weight: 600;
        border: none;

        &:active {
            opacity: 0.9;
        }
    }
}

// 弹窗覆盖层样式
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    .modal-content {
        background-color: #fff;
        border-radius: 12rpx;
        padding: 0;
        max-width: 95%;
        width: 500rpx;
        box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.15);

        .dark-mode & {
            background-color: #2a2a2a;
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20rpx;
            border-bottom: 1rpx solid #eee;

            .dark-mode & {
                border-bottom-color: #444;
            }

            .modal-title {
                font-size: 32rpx;
                font-weight: 600;
                color: #333;

                .dark-mode & {
                    color: #fff;
                }
            }

            .modal-close {
                font-size: 32rpx;
                color: #999;
                cursor: pointer;
            }
        }

        .modal-body {
            padding: 20rpx;

            .modal-input {
                width: 100%;
                padding: 12rpx;
                border: 1rpx solid #ddd;
                border-radius: 6rpx;
                font-size: 28rpx;
                color: #333;
                box-sizing: border-box;
                height: 80rpx;
                line-height: 56rpx;

                .dark-mode & {
                    background-color: #333;
                    border-color: #555;
                    color: #fff;
                }
            }

            .form-group {
                margin-bottom: 16rpx;

                .form-label {
                    display: block;
                    font-size: 24rpx;
                    color: #666;
                    margin-bottom: 8rpx;

                    .dark-mode & {
                        color: #aaa;
                    }
                }

                .form-input {
                    width: 100%;
                    padding: 12rpx;
                    border: 1rpx solid #ddd;
                    border-radius: 6rpx;
                    font-size: 28rpx;
                    color: #333;
                    box-sizing: border-box;
                    height: 80rpx;
                    line-height: 56rpx;

                    .dark-mode & {
                        background-color: #333;
                        border-color: #555;
                        color: #fff;
                    }
                }

                .verify-section {
                    display: flex;
                    gap: 10rpx;

                    .verify-input {
                        flex: 1;
                    }

                    .send-code-btn {
                        padding: 12rpx 16rpx;
                        background-color: #667eea;
                        color: #fff;
                        border-radius: 6rpx;
                        font-size: 22rpx;
                        border: none;
                        white-space: nowrap;

                        &:disabled {
                            background-color: #ccc;
                        }

                        &:active:not(:disabled) {
                            background-color: #5568d3;
                        }
                    }
                }
            }
        }

        .modal-footer {
            display: flex;
            gap: 10rpx;
            padding: 20rpx;
            border-top: 1rpx solid #eee;

            .dark-mode & {
                border-top-color: #444;
            }

            .btn-cancel,
            .btn-confirm {
                flex: 1;
                padding: 12rpx;
                border-radius: 6rpx;
                font-size: 28rpx;
                border: none;
            }

            .btn-cancel {
                background-color: #f5f5f5;
                color: #333;

                .dark-mode & {
                    background-color: #333;
                    color: #fff;
                }
            }

            .btn-confirm {
                background-color: #667eea;
                color: #fff;

                &:active {
                    background-color: #5568d3;
                }
            }
        }
    }
}

.modal-overlay-bottom {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 999;

    .device-modal,
    .history-modal {
        background-color: #fff;
        border-radius: 12rpx 12rpx 0 0;
        max-height: 500rpx;
        display: flex;
        flex-direction: column;

        .dark-mode & {
            background-color: #2a2a2a;
        }
    }

    .modal-header {
        padding: 20rpx 30rpx;
        border-bottom: 1rpx solid #eee;

        .dark-mode & {
            border-bottom-color: #444;
        }

        .modal-title {
            font-size: 32rpx;
            font-weight: 600;
            color: #333;

            .dark-mode & {
                color: #fff;
            }
        }
    }

    .device-list,
    .history-list {
        flex: 1;
        overflow-y: auto;
        padding: 20rpx 0;
    }
}

// Phone modal特殊样式
.phone-modal-content {
    max-width: 95%;
    width: 500rpx;
    max-height: 80vh;
    border-radius: 12rpx;
    position: relative;
}

.device-item,
.history-item {
    display: flex;
    align-items: center;
    padding: 16rpx 30rpx;
    border-bottom: 1rpx solid #f0f0f0;

    .dark-mode & {
        border-bottom-color: #333;
    }

    .device-info,
    .history-info {
        flex: 1;
        display: flex;
        flex-direction: column;

        .device-name,
        .history-device {
            font-size: 28rpx;
            color: #333;
            margin-bottom: 6rpx;

            .dark-mode & {
                color: #fff;
            }
        }

        .device-time,
        .history-time {
            font-size: 24rpx;
            color: #999;

            .dark-mode & {
                color: #aaa;
            }
        }

        .history-location {
            font-size: 22rpx;
            color: #bbb;
            margin-top: 4rpx;

            .dark-mode & {
                color: #888;
            }
        }
    }

    .logout-device-btn {
        padding: 8rpx 20rpx;
        background-color: #f5576c;
        color: #fff;
        border-radius: 6rpx;
        font-size: 24rpx;
        border: none;

        &:active {
            opacity: 0.8;
        }
    }
}
</style>
