let state = {
  teacherCard: [
    {
      label: '联系方式'
    },
    {
      label: '邮箱'
    },
    {
      label: '通讯地址',
      split: true
    },
    {
      label: '账户状态'
    },
    {
      label: '入职时间'
    },
    {
      label: '权限等级',
      split: true
    },
    {
      label: '微信'
    },
    {
      label: '微博'
    }
  ],
  teacherStatics: [
    {
      label: '姓名'
    },
    {
      label: '年龄'
    },
    {
      label: '性别'
    },
    {
      label: '城市',
      split: true
    },
    {
      label: '教育经历'
    },
    {
      label: '所获荣誉'
    },
    {
      label: '自我介绍'
    },
    {
      label: '教师资格认证',
      split: true
    },
    {
      label: '教师类型'
    },
    {
      label: '教学范围'
    },
    {
      label: '教学时间'
    },
    {
      label: '备注'
    }
  ]
}

const getters = {
  teacherCard: state => state.teacherCard,
  teacherStatics: state => state.teacherStatics
}

export default {
  state,
  getters
}
