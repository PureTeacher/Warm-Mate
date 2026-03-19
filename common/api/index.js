const http = uni.$u.http;
const api = {
    /**
     * 登录
     */
    login(params) {
        return http.post("/login", params, { custom: { auth: false } });
    },

    /**
     * 注册
     */
    register(params) {
        return http.post("/register", params, { custom: { auth: false } });
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
};

export default api;
