/**
 * Created by caiyuhao on 2017/5/9.
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
    label: '班级名',
    type: 'text',
    content: '某某某'
  },
  {
    label: '班级类型',
    type: 'text',
    content: '类型一'
  },
  {
    label: '课程等级',
    type: 'text',
    content: '某某某级'
  },
  {
    label: '教师',
    type: 'link',
    content: '某某某'
  },
  {
    label: '创建日期',
    type: 'text',
    content: '2017-05-09'
  },
  {
    label: '学生',
    type: 'link',
    showDivide: true,
    content: '某某某、某某等xx人'
  },
  {
    label: '校区',
    type: 'text',
    showLink: true,
    content: '某某某某'
  },
  {
    label: '绑定教材',
    type: 'text',
    content: '教材1、教材2'
  },
  {
    label: '备注',
    type: 'text',
    content: '某某某某某某某某某某某某某某某某某某某某某某某某某某某'
  }
]

const levels = [{
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
}]

const times = [{
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
}]

export default {
  option: option,
  options: options,
  list: list,
  levels: levels,
  times: times
}
