<template>
    <view :class="['login', containerClasses]">
        <view class="container">
            <!-- logo -->
            <view class="logo">
                <u-avatar
                    src="/static/logo2.png"
                    shape="square"
                    size="100"
                ></u-avatar>
            </view>
            <!-- title -->
            <view class="title">
                <h2>{{ title }}</h2>
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
                    type="success"
                    text="登录"
                    customStyle="margin-top: 50px"
                    shape="circle"
                    @click="submit"
                />
            </view>
            <!-- 脚注功能 -->
            <view class="footer">
                <text class="footer-text" @click="register">账号注册</text>
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
                        errMsg = result.message || result.msg || "登录失败，请重试";
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
    },
};
</script>

<style lang="scss">
.login {
    .container {
        background: #fff;
        width: 100vw;
        padding-top: 10vh;
        // #ifndef H5
        height: 90vh;
        // endif

        .logo {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            width: 100vw;
        }

        .title {
            text-align: center;
            margin-top: 20px;
        }

        .form {
            padding: 0 30px;
            margin-top: 40px;
        }

        .footer {
            // 修正：添加display:flex，否则flex布局属性无效
            display: flex;
            flex-direction: row;
            justify-content: center;
            text-align: center;
            align-items: center;
            margin-top: 40px;

            .footer-text {
                font-size: 14px;
                color: #296db5;
                padding: 15px;
            }
        }
    }
}
</style>
