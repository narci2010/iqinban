/**
 * Created by Paytham<caiyuhao2015@gmail.com> on 2017/5/7.
 */
const lineOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    top: 100,
    left: 41,
    right: 41,
    bottom: '5%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLine: {
        lineStyle: {
          color: '#9e9ebc'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#9e9ebc'
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
          color: 'rgba(40, 124, 236, 0.3)'
        }
      },
      lineStyle: {
        normal: {
          color: 'rgba(40, 124, 236, 0.3)'
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
const barOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: ['使用', '原创'],
    itemWidth: 11,
    itemHeight: 11,
    textStyle: {
      color: '#707070'
    },
    right: 41,
    top: 20
  },
  grid: {
    top: 100,
    left: 41,
    right: 41,
    bottom: '5%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['教材', '试卷', '试题'],
      axisLine: {
        lineStyle: {
          color: '#9e9ebc'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#9e9ebc'
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
      name: '使用',
      type: 'bar',
      itemStyle: {
        normal: {
          color: '#d8d8d8'
        }
      },
      data: [120, 132, 101]
    },
    {
      name: '原创',
      type: 'bar',
      itemStyle: {
        normal: {
          color: '#4993fa'
        }
      },
      barGap: '-100%',
      barCategoryGap: '77%',
      data: [100, 122, 66]
    }
  ]
}

export default {
  lineOption: lineOption,
  barOption: barOption
}
