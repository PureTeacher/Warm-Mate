<template>
    <view class="profile-container">
        <!-- 用户信息区域 -->
        <view class="user-info">
            <view class="avatar-section">
                <image class="avatar" src="/static/avatar-default.png" mode="aspectFit" />
                <view class="user-details">
                    <text class="username">用户名</text>
                    <text class="user-id">ID: 123456</text>
                </view>
            </view>
        </view>

        <!-- 功能列表 -->
        <view class="function-list">
            <view class="function-item" @click="navigateToAccount">
                <text class="item-icon">👤</text>
                <text class="item-text">账号管理</text>
                <text class="item-arrow">></text>
            </view>
            <view class="function-item" @click="navigateToSettings">
                <text class="item-icon">⚙️</text>
                <text class="item-text">设置</text>
                <text class="item-arrow">></text>
            </view>
            <view class="function-item" @click="navigateToHelp">
                <text class="item-icon">❓</text>
                <text class="item-text">帮助与反馈</text>
                <text class="item-arrow">></text>
            </view>
            <view class="function-item" @click="navigateToAbout">
                <text class="item-icon">ℹ️</text>
                <text class="item-text">关于我们</text>
                <text class="item-arrow">></text>
            </view>
        </view>

        <!-- 退出登录按钮 -->
        <view class="logout-section">
            <button class="logout-btn" @click="logout">退出登录</button>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    },
    onLoad() {
        // 检查登录状态
        const accessToken = uni.getStorageSync("Access-Token");
        if (!accessToken) {
            uni.$u.route("/pages/login/login");
        }
    },
    methods: {
        navigateToAccount() {
            // 跳转到账号管理页面（可以后续创建）
            uni.$u.toast("账号管理功能开发中");
        },
        navigateToSettings() {
            uni.$u.toast("设置功能开发中");
        },
        navigateToHelp() {
            uni.$u.toast("帮助与反馈功能开发中");
        },
        navigateToAbout() {
            uni.$u.toast("关于我们功能开发中");
        },
        logout() {
            uni.removeStorageSync("Access-Token");
            uni.$u.toast("已退出登录");
            uni.$u.route("/pages/login/login");
        },
    },
};
</script>

<style lang="scss" scoped>
.profile-container {
    background: #f8f8f8;
    min-height: 100vh;
    padding: 40rpx;
}

.user-info {
    background: white;
    border-radius: 16rpx;
    padding: 40rpx;
    margin-bottom: 40rpx;
    box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
}

.avatar-section {
    display: flex;
    align-items: center;
}

.avatar {
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    margin-right: 30rpx;
}

.user-details {
    flex: 1;
}

.username {
    font-size: 36rpx;
    font-weight: bold;
    color: #333;
    display: block;
    margin-bottom: 10rpx;
}

.user-id {
    font-size: 28rpx;
    color: #666;
}

.function-list {
    background: white;
    border-radius: 16rpx;
    overflow: hidden;
    box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
}

.function-item {
    display: flex;
    align-items: center;
    padding: 40rpx;
    border-bottom: 1rpx solid #f0f0f0;
    transition: background 0.2s;
}

.function-item:last-child {
    border-bottom: none;
}

.function-item:active {
    background: #f8f8f8;
}

.item-icon {
    font-size: 32rpx;
    margin-right: 30rpx;
    width: 50rpx;
    text-align: center;
}

.item-text {
    flex: 1;
    font-size: 32rpx;
    color: #333;
}

.item-arrow {
    font-size: 28rpx;
    color: #ccc;
}

.logout-section {
    margin-top: 80rpx;
    padding: 0 40rpx;
}

.logout-btn {
    width: 100%;
    background: #ff4757;
    color: white;
    border: none;
    border-radius: 12rpx;
    height: 88rpx;
    font-size: 32rpx;
    font-weight: bold;
}

.logout-btn::after {
    border: none;
}
</style>