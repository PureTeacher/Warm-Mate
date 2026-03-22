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
                </view>
                <view class="item-content">
                    <text class="username-text">{{ accountInfo.username }}</text>
                </view>
                <view class="item-action">
                    <button class="edit-btn" @click="openUsernameModal">
                        修改
                    </button>
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

        <!-- 账号安全部分 -->
        <view class="account-section">
            <view class="section-title">账号安全</view>

            <view class="account-item">
                <view class="item-label">
                    <text class="label-text">修改密码</text>
                </view>
                <view class="item-content">
                    <text class="security-text">定期更新密码保护账号安全</text>
                </view>
                <view class="item-action">
                    <button class="edit-btn" @click="navigateToPassword">
                        修改
                    </button>
                </view>
            </view>

            <view class="account-item">
                <view class="item-label">
                    <text class="label-text">登录日志</text>
                </view>
                <view class="item-content">
                    <text class="security-text">查看账号的登录历史记录</text>
                </view>
                <view class="item-action">
                    <button class="edit-btn" @click="showLoginHistory">查看</button>
                </view>
            </view>
        </view>

        <!-- 修改用户名弹窗 -->
        <view
            v-if="showUsernameModal"
            class="modal-overlay"
            @click="showUsernameModal = false"
        >
            <view class="modal-content" @click.stop>
                <view class="modal-header">
                    <text class="modal-title">修改用户名</text>
                    <view class="modal-close" @click="showUsernameModal = false"
                        >✕</view
                    >
                </view>
                <view class="modal-body">
                    <input
                        v-model="usernameInput"
                        type="text"
                        placeholder="请输入新用户名"
                        class="modal-input"
                    />
                </view>
                <view class="modal-footer">
                    <button class="btn-cancel" @click="showUsernameModal = false">
                        取消
                    </button>
                    <button class="btn-confirm" @click="updateUsername">
                        确认
                    </button>
                </view>
            </view>
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
            <view class="modal-content" @click.stop>
                <view class="modal-header">
                    <text class="modal-title">修改手机号</text>
                    <view class="modal-close" @click="showPhoneModal = false">
                        ✕
                    </view>
                </view>
                <view class="modal-body">
                    <input
                        v-model="phoneInput"
                        type="number"
                        placeholder="请输入新手机号"
                        class="modal-input"
                    />
                </view>
                <view class="modal-footer">
                    <button class="btn-cancel" @click="showPhoneModal = false">
                        取消
                    </button>
                    <button class="btn-confirm" @click="confirmPhoneUpdate">
                        确认
                    </button>
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
                    <view class="modal-close" @click="showHistoryModal = false">✕</view>
                </view>
                <view class="history-controls">
                    <button class="btn-clear" @click="clearAllLogs" v-if="loginHistory.length > 0">
                        清空所有
                    </button>
                </view>
                <view class="history-list">
                    <view v-if="loginLoading" class="loading-tip">
                        <text>加载中...</text>
                    </view>
                    <view v-else-if="loginHistory.length === 0" class="empty-tip">
                        <text>暂无登录记录</text>
                    </view>
                    <view
                        v-for="log in loginHistory"
                        :key="log.id"
                        class="history-item"
                    >
                        <view class="history-info">
                            <view class="history-device">{{ log.device_info }}</view>
                            <view class="history-time">
                                {{ formatTime(log.login_time) }}
                            </view>
                            <view v-if="log.ip_address" class="history-ip">
                                IP: {{ log.ip_address }}
                            </view>
                        </view>
                        <button 
                            class="btn-delete"
                            @click="deleteLoginLog(log.id)"
                        >
                            删除
                        </button>
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
            },
            emailInput: "",
            phoneInput: "",
            usernameInput: "",
            phoneCode: "",
            codeCountdown: 0,
            phoneLoading: false,
            loginHistory: [],
            showEmailModal: false,
            showPhoneModal: false,
            showUsernameModal: false,
            showHistoryModal: false,
            loginLoading: false,
        };
    },
    computed: {
        containerClasses() {
            const isDark = uni.getStorageSync("darkMode");
            return isDark ? "dark-mode" : "";
        },
        maskedPhone() {
            const phone = this.accountInfo.phone;
            if (!phone) return "未绑定";
            return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
        },
    },
    onLoad() {
        console.log("账号管理页面加载");
        this.loadAccountInfo();
    },
    onShow() {
        // 刷新主题
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
                    };
                }
            } catch (e) {
                console.error("加载账号信息失败", e);
            }
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
        openUsernameModal() {
            this.usernameInput = this.accountInfo.username || "";
            this.showUsernameModal = true;
        },
        openEmailModal() {
            this.emailInput = this.accountInfo.email || "";
            this.showEmailModal = true;
        },
        openPhoneModal() {
            this.phoneInput = this.accountInfo.phone || "";
            this.showPhoneModal = true;
        },
        updateUsername() {
            if (!this.validateUsername()) {
                return;
            }

            uni.showLoading({
                title: "更新中...",
            });

            this.$api.account.updateAccountInfo({ 
                username: this.usernameInput
            })
                .then(res => {
                    uni.hideLoading();
                    if (res && res.code === 200) {
                        this.accountInfo.username = this.usernameInput;
                        uni.showToast({
                            title: "用户名修改成功",
                            icon: "success",
                        });
                        this.showUsernameModal = false;
                    } else {
                        uni.showToast({
                            title: res?.message || "修改失败",
                            icon: "none",
                        });
                    }
                })
                .catch(err => {
                    uni.hideLoading();
                    uni.showToast({
                        title: "修改失败: " + err.message,
                        icon: "none",
                    });
                });
        },
        updateEmail() {
            if (!this.validateEmail()) {
                return;
            }

            uni.showLoading({
                title: "更新中...",
            });

            this.$api.account.updateAccountInfo({ 
                email: this.emailInput
            })
                .then(res => {
                    uni.hideLoading();
                    if (res && res.code === 200) {
                        this.accountInfo.email = this.emailInput;
                        uni.showToast({
                            title: "邮箱修改成功",
                            icon: "success",
                        });
                        this.showEmailModal = false;
                    } else {
                        uni.showToast({
                            title: res?.message || "修改失败",
                            icon: "none",
                        });
                    }
                })
                .catch(err => {
                    uni.hideLoading();
                    uni.showToast({
                        title: "修改失败: " + err.message,
                        icon: "none",
                    });
                });
        },
        sendPhoneCode() {
            // 暂未实现，直接进行验证
            this.confirmPhoneUpdate();
        },
        confirmPhoneUpdate() {
            if (!this.validatePhone()) {
                return;
            }

            uni.showLoading({
                title: "更新中...",
            });

            this.$api.account.updateAccountInfo({ 
                phone: this.phoneInput
            })
                .then(res => {
                    uni.hideLoading();
                    if (res && res.code === 200) {
                        this.accountInfo.phone = this.phoneInput;
                        uni.showToast({
                            title: "手机号修改成功",
                            icon: "success",
                        });
                        this.showPhoneModal = false;
                    } else {
                        uni.showToast({
                            title: res?.message || "修改失败",
                            icon: "none",
                        });
                    }
                })
                .catch(err => {
                    uni.hideLoading();
                    uni.showToast({
                        title: "修改失败: " + err.message,
                        icon: "none",
                    });
                });
        },
        navigateToPassword() {
            uni.navigateTo({
                url: "/pages/user/change-password",
            });
        },
        showLoginHistory() {
            this.loginLoading = true;
            this.showHistoryModal = true;
            this.loadLoginHistory();
        },
        loadLoginHistory() {
            this.loginLoading = true;
            this.$api.account.getLatestLoginLogs({ limit: 20 })
                .then(res => {
                    this.loginLoading = false;
                    if (res && res.code === 200) {
                        this.loginHistory = res.data || [];
                    } else {
                        uni.showToast({
                            title: res?.message || "加载失败",
                            icon: "none",
                        });
                    }
                })
                .catch(err => {
                    this.loginLoading = false;
                    uni.showToast({
                        title: "加载失败: " + err.message,
                        icon: "none",
                    });
                });
        },
        deleteLoginLog(logId) {
            uni.showModal({
                title: "删除登录日志",
                content: "确定要删除这条登录记录吗？",
                confirmText: "删除",
                cancelText: "取消",
                success: (res) => {
                    if (res.confirm) {
                        this.$api.account.deleteLoginLog(logId)
                            .then(response => {
                                if (response && response.code === 200) {
                                    uni.showToast({
                                        title: "删除成功",
                                        icon: "success",
                                    });
                                    this.loadLoginHistory();
                                } else {
                                    uni.showToast({
                                        title: response?.message || "删除失败",
                                        icon: "none",
                                    });
                                }
                            })
                            .catch(err => {
                                uni.showToast({
                                    title: "删除失败: " + err.message,
                                    icon: "none",
                                });
                            });
                    }
                }
            });
        },
        clearAllLogs() {
            uni.showModal({
                title: "清空登录日志",
                content: "确定要清空所有登录记录吗？此操作不可撤销。",
                confirmText: "清空",
                cancelText: "取消",
                confirmColor: "#f5576c",
                success: (res) => {
                    if (res.confirm) {
                        this.$api.account.clearLoginLogs()
                            .then(response => {
                                if (response && response.code === 200) {
                                    uni.showToast({
                                        title: "清空成功",
                                        icon: "success",
                                    });
                                    this.loginHistory = [];
                                } else {
                                    uni.showToast({
                                        title: response?.message || "清空失败",
                                        icon: "none",
                                    });
                                }
                            })
                            .catch(err => {
                                uni.showToast({
                                    title: "清空失败: " + err.message,
                                    icon: "none",
                                });
                            });
                    }
                }
            });
        },
        formatTime(timestamp) {
            // 处理 MySQL 返回的时间戳格式 (YYYY-MM-DD HH:MM:SS)
            let date;
            if (typeof timestamp === 'string') {
                date = new Date(timestamp.replace(' ', 'T'));
            } else {
                date = new Date(timestamp);
            }
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
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                if (days < 30) {
                    return `${days}天前`;
                } else {
                    // 返回具体时间
                    return date.toLocaleString('zh-CN', {
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                }
            }
        }
    }
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
            background-color: #fff;
            box-sizing: border-box;
            height: 80rpx;

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

    .security-text {
        font-size: 24rpx;
        color: #999;

        .dark-mode & {
            color: #aaa;
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
                background-color: #fff;
                box-sizing: border-box;
                height: 80rpx;

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
                    background-color: #fff;
                    box-sizing: border-box;
                    height: 80rpx;

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

// 登录日志样式
.history-controls {
    padding: 16rpx 30rpx;
    border-bottom: 1rpx solid #eee;
    display: flex;
    justify-content: flex-end;
    gap: 10rpx;

    .btn-clear {
        padding: 8rpx 16rpx;
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

.loading-tip,
.empty-tip {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40rpx 20rpx;
    color: #999;
    font-size: 28rpx;

    .dark-mode & {
        color: #aaa;
    }
}

.history-item {
    .history-info {
        .history-device {
            font-size: 28rpx;
            color: #333;
            margin-bottom: 8rpx;
            font-weight: 500;

            .dark-mode & {
                color: #fff;
            }
        }

        .history-time {
            font-size: 24rpx;
            color: #999;
            margin-bottom: 4rpx;

            .dark-mode & {
                color: #aaa;
            }
        }

        .history-ip {
            font-size: 22rpx;
            color: #bbb;

            .dark-mode & {
                color: #888;
            }
        }
    }

    .btn-delete {
        padding: 8rpx 16rpx;
        background-color: #f0f0f0;
        color: #999;
        border-radius: 6rpx;
        font-size: 22rpx;
        border: none;
        margin-left: 10rpx;

        .dark-mode & {
            background-color: #333;
            color: #aaa;
        }

        &:active {
            opacity: 0.7;
        }
    }
}

</style>
