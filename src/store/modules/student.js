let state = {
  // 学生名片
  card: [
    {
      label: '用户名'
    },
    {
      label: '联系人'
    },
    {
      label: '联系方式'
    },
    {
      label: '邮箱',
      split: true
    },
    {
      label: '账户状态'
    },
    {
      label: '入学时间'
    },
    {
      label: '主管教师',
      split: true
    },
    {
      label: '微信'
    },
    {
      label: '微博'
    }
  ],
  statics: [
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
      label: '琴龄'
    },
    {
      label: '考试经历'
    },
    {
      label: '所获荣誉',
      split: true
    },
    {
      label: '当前课程等级'
    },
    {
      label: '备注'
    }
  ]
}

const getters = {
  card: state => state.card,
  statics: state => state.statics
}

export default {
  state,
  getters
}
