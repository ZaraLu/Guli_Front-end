import request from '@/utils/request'

export default {
  // 课程列表
  getSubjectList() {
    return request({
      url: `/eduservice/subject/getAllSubject`,
      method: 'get'
    })
  }
}

// export function getList(params) {
//   return request({
//     url: '/table/list',
//     method: 'get',
//     params
//   })
// }
