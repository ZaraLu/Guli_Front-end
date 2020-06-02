import request from '@/utils/request'

export default {
  // 讲师列表（条件查询分页）
  getTeacherListPage(current, limit, teacherQuery) {
    return request({
      url: `/eduservice/edu-teacher/pageTeacherCondition`,
      method: 'post',
      // teacherQuery后端使用RequestBody获取数据
      // data表示把对象转换成json传递到接口
      params: { current, limit },
      data: teacherQuery
    })
  },

  // 删除讲师
  deleteTeacherById(id) {
    return request({
      url: `/eduservice/edu-teacher/${id}`,
      method: 'delete',
    })
  },

  addTeacher(teacher) {
    return request({
      url: `/eduservice/edu-teacher/addTeacher`,
      method: 'post',
      data: teacher
    })
  },

  getTeacherInfo(id) {
    return request({
      url: `/eduservice/edu-teacher/${id}`,
      method: 'get'
    })
  },

  updateTeacher(teacher) {
    return request({
      url: `/eduservice/edu-teacher/updateTeacher`,
      method: 'put',
      data: teacher
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
