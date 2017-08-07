let state = {
  options: { // 时间选择器配置文件
    start: '07:30',
    step: '00:15',
    end: '20:30'
  },
  weeks: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'], // 周定义，第一天周日
  items: ['一', '二', '三', '四', '五', '六'],
  freezes: [
    {
      value: '一个月',
      label: '一个月'
    },
    {
      value: '二个月',
      label: '二个月'
    },
    {
      value: '三个月',
      label: '三个月'
    },
    {
      value: '四个月',
      label: '四个月'
    },
    {
      value: '五个月',
      label: '五个月'
    },
    {
      value: '六个月',
      label: '六个月'
    },
    {
      value: '一年',
      label: '一年'
    }
  ],
  filters: [
    {
      label: '按课程类型',
      items: [
        {
          label: '一对一',
          value: '一对一'
        },
        {
          label: '一对多',
          value: '一对多'
        },
        {
          label: '乐理与音乐修养',
          value: '乐理与音乐修养'
        }
      ]
    },
    {
      label: '按课程等级',
      items: []
    },
    {
      label: '上课',
      items: [
        {
          label: '正常上课',
          value: '正常上课'
        },
        {
          label: '课程取消',
          value: '课程取消'
        },
        {
          label: '教师旷课',
          value: '教师旷课'
        },
        {
          label: '学生旷课',
          value: '学生旷课'
        }
      ]
    },
    {
      label: '课后',
      items: [
        {
          label: '按时布置学习内容',
          value: '按时布置学习内容'
        },
        {
          label: '超时布置学习内容',
          value: '超时布置学习内容'
        },
        {
          label: '批改作业',
          value: '批改作业'
        },
        {
          label: '超时批改作业',
          value: '超时批改作业'
        },
        {
          label: '安排考试',
          value: '安排考试'
        },
        {
          label: '超时安排考试',
          value: '超时安排考试'
        }
      ]
    },
    {
      label: '冻结学生账号',
      items: [
        {
          label: '开始冻结',
          value: '开始冻结'
        },
        {
          label: '解除冻结',
          value: '解除冻结'
        }
      ]
    },
    {
      label: '其他变更',
      items: [
        {
          label: '学生加入班级',
          value: '学生加入班级'
        },
        {
          label: '学生离开班级',
          value: '学生离开班级'
        },
        {
          label: '教师与学生绑定',
          value: '教师与学生绑定'
        },
        {
          label: '教师与学生解除绑定',
          value: '教师与学生解除绑定'
        }
      ]
    }
  ]
}

const getters = {
  datePickerOptions: state => state.options,
  weeks: state => state.weeks,
  items: state => state.items,
  freezes: state => state.freezes,
  filters: state => state.filters
}

export default {
  state,
  getters
}
