let state = {
  classroomCard: [
    {
      label: '班级名'
    },
    {
      label: '班级ID',
      split: true
    },
    {
      label: '班级类型'
    },
    {
      label: '课程等级'
    },
    {
      label: '教师',
      type: 'link',
      link: '/'
    },
    {
      label: '学生',
      type: 'link',
      link: '/'
    },
    {
      label: '创建日期',
      split: true
    },
    {
      label: '绑定教材'
    },
    {
      label: '备注'
    }
  ]
}

const getters = {
  classroomCard: state => state.classroomCard
}

export default {
  state,
  getters
}
