const http = uni.$u.http;
const api = {
    /**
     * 登录
     */
    login(params) {
        return http.post("/login", params, { custom: { auth: false, catch: true, toast: false } });
    },

    /**
     * 注册
     */
    register(params) {
        return http.post("/register", params, { custom: { auth: false, catch: true, toast: false } });
    },

    /**
     * 发送消息
     */
    message(params) {
        return http.post("/message", params, { custom: { auth: true } });
    },

    /**
     * 消息分页
     */
    messagePage(params) {
        return http.get("/message", { params });
    },

    /**
     * 问卷结果相关API
     */
    questionnaire: {
        // 保存问卷结果
        saveResult(data) {
            return http.post("/questionnaireResults/savePhq9Result", data);
        },

        // 获取用户问卷结果列表
        getUserResults(userId) {
            return http.get(`/questionnaireResults/listByUserId/${userId}`);
        },

        // 获取用户最新问卷结果
        getLatestResult(userId) {
            return http.get(`/questionnaireResults/latestByUserId/${userId}`);
        },

        // 获取问卷结果详情
        getResultDetail(id) {
            return http.get(`/questionnaireResults/${id}`);
        },

        // 删除问卷结果
        deleteResult(id) {
            return http.delete(`/questionnaireResults/${id}`);
        },

        // 批量删除问卷结果
        batchDeleteResult(ids) {
            return http.delete("/questionnaireResults/batch", { data: ids });
        },

        // 统计问卷结果数量
        getResultCount(params) {
            return http.get("/questionnaireResults/count", { params });
        },
    },

    /**
     * 预约申请相关API
     */
    appointment: {
        // 保存预约申请
        saveAppointment(data) {
            return http.post("/appointment/saveAppointment", data);
        },

        // 获取预约申请列表
        getAppointmentList(params) {
            return http.get("/appointment/list", { params });
        },

        // 根据医生ID获取预约申请列表
        getAppointmentByDoctorId(doctorId) {
            return http.get(`/appointment/listByDoctorId/${doctorId}`);
        },

        // 根据患者手机号获取预约申请列表
        getAppointmentByPatientPhone(patientPhone) {
            return http.get(`/appointment/listByPatientPhone/${patientPhone}`);
        },

        // 获取预约申请详情
        getAppointmentDetail(id) {
            return http.get(`/appointment/${id}`);
        },

        // 更新预约申请
        updateAppointment(data) {
            return http.put("/appointment", data);
        },

        // 删除预约申请
        deleteAppointment(id) {
            return http.delete(`/appointment/${id}`);
        },

        // 批量删除预约申请
        batchDeleteAppointment(ids) {
            return http.delete("/appointment/batch", { data: ids });
        },

        // 统计预约申请数量
        getAppointmentCount(params) {
            return http.get("/appointment/count", { params });
        },
    },

    /**
     * 账户管理相关API
     */
    account: {
        // 获取账户信息
        getAccountInfo() {
            return http.get("/user/account");
        },

        // 更新账户基本信息
        updateAccountInfo(data) {
            return http.put("/user/account", data);
        },

        // 更新邮箱
        updateEmail(data) {
            return http.put("/user/email", data);
        },

        // 发送邮箱验证码
        sendEmailCode(email) {
            return http.post("/user/email/code", { email });
        },

        // 验证邮箱
        verifyEmail(data) {
            return http.post("/user/email/verify", data);
        },

        // 更新手机号
        updatePhone(data) {
            return http.put("/user/phone", data);
        },

        // 发送手机验证码
        sendPhoneCode(phone) {
            return http.post("/user/phone/code", { phone });
        },

        // 验证手机号
        verifyPhone(data) {
            return http.post("/user/phone/verify", data);
        },

        // 修改密码
        changePassword(data) {
            return http.post("/user/password/change", data);
        },

        // 获取登录设备列表
        getDeviceList() {
            return http.get("/user/devices");
        },

        // 设备登出
        logoutDevice(deviceId) {
            return http.post(`/user/devices/${deviceId}/logout`);
        },

        // 获取登录历史
        getLoginHistory(params) {
            return http.get("/user/login-history", { params });
        },

        // 绑定微信
        bindWechat(data) {
            return http.post("/user/wechat/bind", data);
        },

        // 解绑微信
        unbindWechat() {
            return http.post("/user/wechat/unbind");
        },

        // 绑定QQ
        bindQQ(data) {
            return http.post("/user/qq/bind", data);
        },

        // 解绑QQ
        unbindQQ() {
            return http.post("/user/qq/unbind");
        },

        // 获取账户安全状态
        getSecurityStatus() {
            return http.get("/user/security-status");
        },
    },
};

export default api;
