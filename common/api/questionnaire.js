// 问卷结果相关API
export const questionnaireApi = {
  // 保存问卷结果
  saveResult(data) {
    return uni.$u.http.post('/questionnaireResults/savePhq9Result', data)
  },

  // 获取用户问卷结果列表
  getUserResults(userId) {
    return uni.$u.http.get(`/questionnaireResults/listByUserId/${userId}`)
  },

  // 获取用户最新问卷结果
  getLatestResult(userId) {
    return uni.$u.http.get(`/questionnaireResults/latestByUserId/${userId}`)
  },

  // 获取问卷结果详情
  getResultDetail(id) {
    return uni.$u.http.get(`/questionnaireResults/${id}`)
  },

  // 删除问卷结果
  deleteResult(id) {
    return uni.$u.http.delete(`/questionnaireResults/${id}`)
  },

  // 批量删除问卷结果
  batchDeleteResult(ids) {
    return uni.$u.http.delete('/questionnaireResults/batch', { data: ids })
  },

  // 统计问卷结果数量
  getResultCount(params) {
    return uni.$u.http.get('/questionnaireResults/count', { params })
  }
}
