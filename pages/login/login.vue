<template>
    <view :class="['login', containerClasses]">
        <!-- 背景装饰元素 -->
        <view class="bg-decoration bg-decoration-1"></view>
        <view class="bg-decoration bg-decoration-2"></view>
        <view class="container">
            <!-- logo -->
            <view class="logo">
                <u-avatar
                    src="/static/logo4.png"
                    shape="square"
                    size="100"
                    class="logo-avatar"
                ></u-avatar>
            </view>
            <!-- 标题图片 -->
            <view class="title">
                <image
                    src="/static/标题.png"
                    class="title-image"
                    mode="aspectFit"
                ></image>
            </view>
            <!-- 用户名密码表单 -->
            <view class="form">
                <u--form
                    labelPosition="left"
                    :model="model"
                    :rules="rules"
                    ref="loginForm"
                    labelWidth="80"
                >
                    <u-form-item
                        label="用户名"
                        prop="user.username"
                        borderBottom
                        customStyle="margin-bottom: 10px"
                    >
                        <u--input
                            placeholder="请输入用户名或手机号"
                            v-model="model.user.username"
                            border="none"
                        />
                    </u-form-item>
                    <u-form-item
                        label="密码"
                        prop="user.password"
                        borderBottom
                        customStyle="margin: 10px 0"
                    >
                        <u--input
                            placeholder="请输入密码"
                            v-model="model.user.password"
                            border="none"
                            password
                            clearable
                        />
                    </u-form-item>
                </u--form>
                <u-button
                    type="primary"
                    text="登录"
                    customStyle="margin-top: 50px; background: linear-gradient(135deg, #e07856 0%, #d4744e 100%)"
                    shape="circle"
                    @click="submit"
                />
            </view>
            <!-- 脚注功能 -->
            <view class="footer">
                <text class="footer-text" @click="register">账号注册</text>
                <text class="footer-divider">·</text>
                <text class="footer-text" @click="forgetPassword"
                    >忘记密码</text
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
            modalShow: false,
            retrievePwd: {
                username: "",
                email: "",
            },
            model: {
                user: {
                    username: "",
                    password: "",
                },
            },
            rules: {
                "user.username": [
                    {
                        required: true,
                        message: "请输入用户名",
                        trigger: ["change", "blur"],
                    },
                ],
                "user.password": [
                    {
                        type: "string",
                        min: 6,
                        max: 16,
                        required: true,
                        message: "请输入6-16位密码",
                        trigger: ["blur"],
                    },
                ],
            },
        };
    },
    onLoad() {},
    methods: {
        async submit() {
            try {
                console.log("===== 开始执行登录流程 =====");
                // 1. 表单验证
                let validateRes;
                try {
                    validateRes = await this.$refs.loginForm.validate();
                } catch (validateErr) {
                    console.error("表单验证异常：", validateErr);
                    uni.$u.toast("请检查填写的信息是否正确");
                    return;
                }

                console.log("表单验证结果：", validateRes);
                if (!validateRes) {
                    console.log("表单验证失败，终止登录");
                    uni.$u.toast("请检查填写的信息是否正确");
                    return;
                }

                // 2. 准备请求参数
                const param = this.model.user;
                console.log("登录请求参数：", param);

                // 3. 调用登录接口（关键：打印完整返回值）
                const result = await this.$api.login(param);
                console.log("登录接口完整返回值：", JSON.stringify(result));

                // 4. 校验接口返回（兼容常见的code=200格式）
                const isSuccess =
                    result.success || result.code === 200 || result.code === 0;
                if (isSuccess) {
                    // 检查是否有accessToken
                    const accessToken =
                        result.data?.accessToken ||
                        result.token ||
                        result.data?.token;
                    if (!accessToken) {
                        throw new Error(
                            "接口未返回token，字段可能是token/accessToken，请核对",
                        );
                    }

                    // 5. 存储Token（和登出的Key保持一致）
                    uni.setStorageSync("Access-Token", accessToken);
                    console.log("Token存储成功：", accessToken);

                    // 6. 存储用户 ID
                    const userId = result.data?.id || result.id;
                    if (userId) {
                        uni.setStorageSync("userId", userId);
                        console.log("用户ID存储成功：", userId);
                    }

                    // ！！关键修复：用reLaunch清空页面栈，和登出保持一致
                    uni.reLaunch({
                        url: "/pages/index/index", // 确认pages.json里的首页路径
                        success: () => {
                            console.log("跳转首页成功");
                        },
                        fail: (err) => {
                            console.error("跳转首页失败：", err);
                            uni.$u.toast(
                                "登录成功，但跳转失败，请检查首页路径",
                            );
                        },
                    });
                } else {
                    // 根据不同的错误码显示相应的错误信息
                    let errMsg = "登录失败";
                    if (result.code === 401) {
                        errMsg = "用户名或密码错误";
                    } else if (result.code === 404) {
                        errMsg = "用户不存在";
                    } else {
                        errMsg =
                            result.message || result.msg || "登录失败，请重试";
                    }
                    console.log("登录接口返回失败：", errMsg);
                    uni.$u.toast(errMsg);
                }
            } catch (error) {
                // 捕获所有异常并打印（关键：能看到具体错在哪）
                console.error("登录流程异常：", error);
                const errMsg = error.message || "网络错误，请检查连接后重试";
                uni.$u.toast(errMsg);
            }
        },
        register() {
            uni.$u.route("/pages/register/register");
        },
        forgetPassword() {
            uni.$u.route("/pages/login/forget-password");
        },
    },
};
</script>

<style lang="scss">
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes bounce {
    0%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

@keyframes float {
    0%,
    100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-8px);
    }
}

@keyframes shimmer {
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0.6;
    }
}

@keyframes subtleShimmer {
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0.9;
    }
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(224, 120, 86, 0.4);
    }
    70% {
        box-shadow: 0 0 0 12px rgba(224, 120, 86, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(224, 120, 86, 0);
    }
}

@keyframes rotateBg {
    from {
        transform: rotate(0deg) translateX(150px) rotate(0deg);
    }
    to {
        transform: rotate(360deg) translateX(150px) rotate(-360deg);
    }
}

@keyframes rotateBgReverse {
    from {
        transform: rotate(0deg) translateX(-150px) rotate(0deg);
    }
    to {
        transform: rotate(-360deg) translateX(-150px) rotate(360deg);
    }
}

@keyframes wiggle {
    0%,
    100% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-2px);
    }
    75% {
        transform: translateX(2px);
    }
}

.login {
    .bg-decoration {
        position: fixed;
        border-radius: 50%;
        opacity: 0.1;
        pointer-events: none;

        &-1 {
            width: 400px;
            height: 400px;
            top: -100px;
            right: -100px;
            background: linear-gradient(135deg, #e07856 0%, #d4744e 100%);
            animation: rotateBg 20s infinite linear;
        }

        &-2 {
            width: 300px;
            height: 300px;
            bottom: -80px;
            left: -80px;
            background: linear-gradient(135deg, #d4744e 0%, #e07856 100%);
            animation: rotateBgReverse 15s infinite linear;
        }
    }

    .container {
        background: linear-gradient(
            to bottom,
            #fff8f3 0%,
            #ffe8d6 50%,
            #fff5f0 100%
        );
        width: 100vw;
        padding-top: 10vh;
        position: relative;
        z-index: 1;
        // #ifndef H5
        height: 90vh;
        // endif
        animation: fadeInDown 0.8s ease-out;

        .logo {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            width: 100vw;
            filter: drop-shadow(0 4rpx 12rpx rgba(224, 120, 86, 0.15));
            animation: slideInUp 0.8s ease-out 0.1s backwards;

            .logo-avatar {
                animation: float 3s ease-in-out infinite;
            }
        }

        .title {
            text-align: center;
            margin-top: 20px;
            animation: slideInUp 0.8s ease-out 0.2s backwards;
        }

        .title-image {
            width: 480rpx;
            height: 180rpx;
            display: block;
            margin: 0 auto;
        }

        .title-text {
            font-size: 40px;
            font-weight: 700;
            color: #d4744e;
            letter-spacing: 2rpx;
            animation: subtleShimmer 3s ease-in-out infinite;
        }

        .form {
            padding: 0 80px;
            margin-top: 15px;
            animation: slideInUp 0.8s ease-out 0.3s backwards;

            ::v-deep .u-form-item {
                margin-bottom: 24px;

                .u--input__input-box {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;

                    &:hover {
                        transform: translateY(-2px);
                    }
                }
            }

            ::v-deep .u--input {
                font-size: 16px;
            }

            ::v-deep .u--input__input {
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

                &:focus {
                    transform: scale(1.02);
                }
            }

            ::v-deep .u-btn {
                background: linear-gradient(135deg, #e07856 0%, #d4744e 100%);
                color: white;
                font-weight: 700;
                font-size: 18px;
                border-radius: 24px;
                box-shadow: 0 8rpx 24rpx rgba(224, 120, 86, 0.25);
                border: none;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                overflow: hidden;

                &::before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    transition:
                        width 0.6s,
                        height 0.6s;
                }

                &:active {
                    transform: scale(0.95);
                    box-shadow: 0 12rpx 32rpx rgba(224, 120, 86, 0.35);
                    animation: pulse 0.6s ease-out;
                }

                &:hover {
                    animation: bounce 0.6s ease-in-out;
                    box-shadow: 0 12rpx 28rpx rgba(224, 120, 86, 0.3);
                }
            }
        }

        .footer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            text-align: center;
            align-items: center;
            margin-top: 40px;
            animation: slideInUp 0.8s ease-out 0.4s backwards;

            .footer-text {
                font-size: 14px;
                color: #d4744e;
                padding: 15px;
                font-weight: 600;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                cursor: pointer;
                position: relative;

                &::after {
                    content: "";
                    position: absolute;
                    bottom: 5px;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #e07856, #d4744e);
                    transform: translateX(-50%);
                    transition: width 0.3s ease-out;
                }

                &:hover {
                    animation: wiggle 0.4s ease-in-out;

                    &::after {
                        width: 70%;
                    }
                }

                &:active {
                    opacity: 0.7;
                }
            }

            .footer-divider {
                font-size: 14px;
                color: #d4744e;
                margin: 0 5px;
                opacity: 0.5;
                animation: shimmer 2.5s ease-in-out infinite;
            }
        }
    }
}
</style>
