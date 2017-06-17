/**
 * Created by caiyuhao on 2017/5/7.
 */
const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    top: 50,
    left: '5%',
    right: '5%',
    bottom: '5%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLine: {
        lineStyle: {
          color: '#A8A8C3'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#A8A8C3'
        }
      },
      splitLine: {
        lineStyle: {
          color: ['#F1F1F1'],
          type: 'dashed'
        }
      }
    }
  ],
  series: [
    {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      areaStyle: {
        normal: {
          color: '#C0D9FA'
        }
      },
      lineStyle: {
        normal: {
          color: '#C0D9FA'
        }
      },
      itemStyle: {
        normal: {
          color: '#4993fa'
        }
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  ]
}
const options = [
  {
    value: '1',
    label: '学生'
  }, {
    value: '2',
    label: '教师'
  }, {
    value: '3',
    label: '班级'
  }, {
    value: '4',
    label: '课程'
  }, {
    value: '5',
    label: '新增学生'
  }, {
    value: '6',
    label: '新增教师'
  }
]
const list = [
  {
    label: '姓名',
    content: '某某某'
  },
  {
    label: '年龄',
    content: 21
  },
  {
    label: '性别',
    content: '男'
  },
  {
    label: '城市',
    content: '上海',
    showDivide: true
  },
  {
    label: '资格认证',
    content: '已通过'
  },
  {
    label: '教育经历',
    content: '某某某某某某某某某某某某某某某某某某某'
  },
  {
    label: '所获荣誉',
    content: '某某某某某某某某某某某某某'
  },
  {
    label: '自我介绍',
    content: '某某某某某某某某某某某某某',
    showDivide: true
  },
  {
    label: '校区',
    content: '某某某某',
    showLink: true
  },
  {
    label: '教师类型',
    content: '某某某某'
  },
  {
    label: '教学范围',
    content: '某某某某某某某某某某某'
  },
  {
    label: '教学时间',
    content: '时间1、时间2'
  },
  {
    label: '备注',
    content: '某某某某某某某某某某某'
  }
]
const levels = [
  {
    label: '等级1',
    value: 1
  }, {
    label: '等级2',
    value: 2
  }, {
    label: '等级3',
    value: 3
  }, {
    label: '全部等级',
    value: 4
  }
]
const times = [
  {
    label: '今日',
    value: 1
  }, {
    label: '本周',
    value: 2
  }, {
    label: '近一个月',
    value: 3
  }, {
    label: '近三个月',
    value: 4
  }, {
    label: '近一年',
    value: 5
  }, {
    label: '全部时间',
    value: 6
  }
]
const checks = ['一级', '二级', '三级', '四级', '五级', '六级', '七级', '八级', '九级']
const checkWeeks = ['一', '二', '三', '四', '五', '六']
const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

export default {
  option: option,
  options: options,
  list: list,
  levels: levels,
  times: times,
  checks: checks,
  checkWeeks: checkWeeks,
  weeks: weeks
}
