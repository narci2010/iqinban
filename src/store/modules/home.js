let state = {
  timeOptions: [ // 数据统计，首页
    {
      value: '今日',
      label: '今日'
    },
    {
      value: '本周',
      label: '本周'
    },
    {
      value: '近一个月',
      label: '近一个月'
    },
    {
      value: '近三个月',
      label: '近三个月'
    },
    {
      value: '近一年',
      label: '近一年'
    },
    {
      value: '全部时间',
      label: '全部时间'
    }
  ],
  typeOptions: [ // 数据统计，首页
    {
      value: '学生',
      label: '学生'
    },
    {
      value: '教师',
      label: '教师'
    },
    {
      value: '班级',
      label: '班级'
    },
    {
      value: '课程',
      label: '课程'
    },
    {
      value: '新增学生',
      label: '新增学生'
    },
    {
      value: '新增教师',
      label: '新增教师'
    }
  ]
}

const getters = {
  timeOptions: state => state.timeOptions,
  typeOptions: state => state.typeOptions
}

export default {
  state,
  getters
}
