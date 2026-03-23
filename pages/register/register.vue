<template>
    <view :class="['register', containerClasses]">
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
                    ref="registerForm"
                    labelWidth="80"
                >
                    <u-form-item
                        label="手机号"
                        prop="user.phone"
                        borderBottom
                        customStyle="margin-bottom: 10px"
                    >
                        <u--input
                            placeholder="请输入手机号"
                            v-model="model.user.phone"
                            border="none"
                        ></u--input>
                    </u-form-item>
                    <u-form-item
                        label="用户名"
                        prop="user.username"
                        borderBottom
                        customStyle="margin-bottom: 10px"
                    >
                        <u--input
                            placeholder="请输入用户名"
                            v-model="model.user.username"
                            border="none"
                        ></u--input>
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
                        >
                        </u--input>
                    </u-form-item>
                    <u-form-item
                        label="确认密码"
                        prop="user.passwordVerify"
                        borderBottom
                        customStyle="margin: 10px 0"
                    >
                        <u--input
                            placeholder="请确认密码"
                            v-model="model.user.passwordVerify"
                            border="none"
                            password
                            clearable
                        >
                        </u--input>
                    </u-form-item>
                </u--form>
                <u-button
                    type="primary"
                    text="注册"
                    customStyle="margin-top: 50px"
                    shape="circle"
                    @click="submit"
                >
                </u-button>
            </view>
            <!-- 脚注功能 -->
            <view class="footer">
                <text class="footer-text" @click="hasAccount">已有账号</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        let _this = this;
        return {
            title: "暖愈心伴",
            model: {
                user: {
                    username: "",
                    password: "",
                    phone: "",
                    email: "",
                },
            },
            rules: {
                "user.phone": [
                    {
                        required: true,
                        message: "请输入手机号",
                        trigger: ["change", "blur"],
                    },
                    {
                        validator: (rule, value, callback) => {
                            return uni.$u.test.mobile(value);
                        },
                        message: "手机号码不正确",
                        trigger: ["blur"],
                    },
                ],
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
                "user.passwordVerify": [
                    {
                        type: "string",
                        min: 6,
                        max: 16,
                        required: true,
                        message: "请输入6-16位确认密码",
                        trigger: ["blur"],
                    },
                    {
                        validator: (rule, value, callback) => {
                            return value === _this.model.user.password;
                        },
                        message: "两次密码不一致",
                        trigger: ["blur"],
                    },
                ],
            },
        };
    },
    onLoad() {},
    methods: {
        // 注册提交
        submit() {
            let validateRes;
            try {
                validateRes = this.$refs.registerForm.validate();
            } catch (validateErr) {
                console.error("表单验证异常：", validateErr);
                uni.$u.toast("请填写完整的表单信息");
                return;
            }

            validateRes
                .then((res) => {
                    if (!res) {
                        uni.$u.toast("请填写完整的表单信息");
                        return;
                    }

                    let param = {
                        username: this.model.user.username,
                        password: this.model.user.password,
                        phone: this.model.user.phone,
                        email: this.model.user.email || undefined,
                    };
                    this.$api
                        .register(param)
                        .then((res) => {
                            // 检查后端返回的code是否为200
                            if (res.code === 200) {
                                uni.$u.toast("注册成功");
                                setTimeout(() => {
                                    uni.$u.route("/pages/login/login");
                                }, 1000);
                            } else {
                                // 根据不同的错误码显示相应的错误信息
                                let errMsg = "注册失败";
                                if (res.code === 409) {
                                    errMsg = "用户名已存在，请更换用户名";
                                } else if (res.code === 400) {
                                    errMsg =
                                        res.message ||
                                        "填写信息不完整或格式错误";
                                } else {
                                    errMsg = res.message || "注册失败，请重试";
                                }
                                uni.$u.toast(errMsg);
                            }
                        })
                        .catch((err) => {
                            const errMsg =
                                err.message || "网络错误，请检查连接后重试";
                            uni.$u.toast(errMsg);
                        });
                })
                .catch((err) => {
                    // 表单验证失败
                    console.error("表单验证失败：", err);
                    uni.$u.toast("请填写完整的表单信息");
                });
        },
        // 已有账号
        hasAccount() {
            uni.$u.route("/pages/login/login");
        },
    },
};
</script>

<style lang="scss">
.register {
    .container {
        background: linear-gradient(
            to bottom,
            #fff8f3 0%,
            #ffe8d6 50%,
            #fff5f0 100%
        );
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
            filter: drop-shadow(0 4rpx 12rpx rgba(224, 120, 86, 0.15));
        }

        .title {
            text-align: center;
            margin-top: 20px;
            font-size: 40px;
            font-weight: 700;
            color: #d4744e;
            letter-spacing: 2rpx;
        }

        .form {
            padding: 0 30px;
            margin-top: 40px;

            ::v-deep .u-form-item {
                margin-bottom: 24px;
            }

            ::v-deep .u--input {
                font-size: 16px;
            }

            ::v-deep .u-btn {
                background: linear-gradient(135deg, #e07856 0%, #d4744e 100%);
                color: white;
                font-weight: 700;
                font-size: 18px;
                border-radius: 24px;
                box-shadow: 0 8rpx 24rpx rgba(224, 120, 86, 0.25);
                border: none;

                &:active {
                    transform: scale(0.98);
                    box-shadow: 0 12rpx 28rpx rgba(224, 120, 86, 0.3);
                }
            }
        }

        .footer {
            flex-direction: row;
            justify-content: center;
            text-align: center;
            align-items: center;
            margin-top: 40px;

            .footer-text {
                font-size: 14px;
                color: #d4744e;
                padding: 15px;
                font-weight: 600;
                transition: all 0.3s;

                &:active {
                    opacity: 0.7;
                }
            }
        }
    }
}
</style>
