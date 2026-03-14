<template>
    <view class="page-container">
        <!-- 顶部导航栏 -->
        <view class="header">
            <text class="sunshine-title">暖愈心伴</text>
            <text class="logout-btn" @click="logout">退出登录</text>
        </view>

        <!-- 卡片列表区域（禁止滚动） -->
        <view
            class="content"
            :style="{ minHeight: screenMinHeight + 'rpx', overflow: 'hidden' }"
        >
            <!-- 卡片容器：flex双列布局 -->
            <view class="content-wrapper">
                <view class="card-container">
                    <!-- 循环生成卡片 -->
                    <view
                        v-for="(item, index) in cardList"
                        :key="item.id"
                        class="card"
                        :style="{ background: item.gradient }"
                        @click="navigateTo(item.path)"
                    >
                        <view class="card-header">
                            <view class="emoji-container">
                                <image
                                    class="card-emoji"
                                    :src="item.iconPath"
                                    mode="aspectFit"
                                />
                            </view>
                            <view class="card-tag">{{ item.tag }}</view>
                        </view>
                        <view class="card-content">
                            <text class="card-title">{{ item.title }}</text>
                            <text class="card-desc">{{ item.desc }}</text>
                        </view>
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
            screenMinHeight: 1500, // 默认值（单位：rpx）
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
                    gradient:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                },
                {
                    id: 2,
                    title: "健康科普",
                    desc: "专业健康知识｜科学养生，健康生活",
                    iconPath: "/static/custom-icon-2.png",
                    path: "/pages/health/index",
                    bgColor: "#E3F2FD",
                    tag: "知识分享",
                    gradient:
                        "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                },
                {
                    id: 3,
                    title: "心理医生",
                    desc: "专业心理咨询师｜一对一专业指导",
                    iconPath: "/static/custom-icon-3.png",
                    path: "/pages/psychologist/index",
                    bgColor: "#FFF8E1",
                    tag: "专业咨询",
                    gradient:
                        "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                },
                {
                    id: 4,
                    title: "AI交流",
                    desc: "智能心理助手｜24小时在线陪伴",
                    iconPath: "/static/custom-icon-4.png",
                    path: "/pages/message/message",
                    bgColor: "#FCE4EC",
                    tag: "智能陪伴",
                    gradient:
                        "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                },
            ],
        };
    },
    onLoad() {
        // uni.removeStorageSync("Access-Token");
        const accessToken = uni.getStorageSync("Access-Token");
        // console.log("accessToken")
        // console.log(accessToken)
        if (!accessToken) {
            uni.$u.route("/pages/login/login");
        }
    },
    mounted() {
        // 获取设备信息
        const systemInfo = uni.getSystemInfoSync();
        // 核心计算公式：将物理像素高度转换为 rpx
        this.screenMinHeight = Math.ceil(
            systemInfo.screenHeight * (750 / systemInfo.windowWidth),
        );
    },
    methods: {
        loadMore() {
            console.log("触发加载更多");
            // 这里可添加分页加载逻辑
        },
        navigateTo(path) {
            uni.navigateTo({
                url: path,
            });
        },
        logout() {
            uni.removeStorageSync("Access-Token");
            uni.$u.toast("已退出登录");
            uni.$u.route("/pages/login/login");
        },
    },
};
</script>

<style lang="scss">
.page-container {
    background: white;
    min-height: 100vh;
    height: 100vh;
    width: 100%;
    overflow: hidden;
}

.content {
    height: calc(100vh - 120rpx);
    overflow: hidden;
}

/* 卡片头部样式 */
.card-header {
    position: relative;
    height: 200rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16rpx 16rpx 0 0;
    overflow: hidden;
}

.emoji-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10rpx);
}

.card-emoji {
    width: 130rpx;
    height: 130rpx;
    border-radius: 50%;
    object-fit: contain;
    filter: drop-shadow(0 4rpx 8rpx rgba(0, 0, 0, 0.1));
}

.card-tag {
    position: absolute;
    top: 20rpx;
    right: 20rpx;
    background: rgba(255, 255, 255, 0.9);
    color: #666;
    font-size: 20rpx;
    padding: 8rpx 16rpx;
    border-radius: 20rpx;
    font-weight: 500;
    backdrop-filter: blur(10rpx);
}

.header {
    height: 120rpx;
    padding-top: var(--status-bar-height);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
    box-shadow: 0 4rpx 20rpx rgba(102, 126, 234, 0.3);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10rpx);
    }

    .logout-btn {
        position: absolute;
        right: 20rpx;
        top: calc(var(--status-bar-height) + 30rpx);
        color: #ffffff;
        font-size: 24rpx;
        border: 1rpx solid rgba(255, 255, 255, 0.8);
        border-radius: 16rpx;
        padding: 8rpx 18rpx;
        z-index: 20;
        background: rgba(255, 255, 255, 0.2);
    }
}

/* 卡片容器样式 */
.card-container {
    display: flex;
    flex-wrap: wrap;
    padding: 30rpx;
    justify-content: space-between;
    gap: 0;
}

.card {
    width: calc(50% - 15rpx);
    margin-bottom: 30rpx;
    border-radius: 20rpx;
    overflow: hidden;
    box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.12);
    transition: all 0.3s ease;
    min-height: 320rpx;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 20rpx;
        z-index: 1;
    }

    &:active {
        transform: translateY(-4rpx) scale(0.98);
        box-shadow: 0 12rpx 40rpx rgba(0, 0, 0, 0.15);
    }
}

.card-content {
    padding: 30rpx;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20rpx);
    position: relative;
    z-index: 2;
    min-height: 120rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.card-title {
    display: block;
    font-size: 32rpx;
    font-weight: 700;
    color: #333;
    margin-bottom: 12rpx;
    text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
}

.card-desc {
    display: block;
    font-size: 24rpx;
    color: #666;
    line-height: 1.5;
    opacity: 0.9;
}

.content {
    flex: 1;
    background: white;
    padding: 20rpx 0;
    min-height: 750rpx;
    position: relative;
}

.content-wrapper {
    min-height: 1000rpx;
    max-width: 750rpx;
    background: white;
    border-radius: 24rpx;
    box-shadow: 0 12rpx 40rpx rgba(0, 0, 0, 0.08);
    margin: 0 auto;
    padding: 0;
    position: relative;
    z-index: 1;
    // border: 1rpx solid rgba(0, 0, 0, 0.1);
}

.sunshine-title {
    font-weight: 700;
    color: #ffffff;
    text-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.3);
    font-size: 36rpx;
    position: relative;
    display: inline-block;
    z-index: 2;
    letter-spacing: 1rpx;
}

.sunshine-title::before {
    position: absolute;
    left: -45rpx;
    top: -5rpx;
    font-size: 36rpx;
    filter: drop-shadow(0 2rpx 6rpx rgba(0, 0, 0, 0.2));
}
</style>
