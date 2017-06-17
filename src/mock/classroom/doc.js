/**
 * Created by caiyuhao on 2017/5/9.
 */
import Mock from 'mockjs/dist/mock-min'

const list = ['一', '二', '三', '四', '五', '六', '七', '八', '九']

let data = Mock.mock({
  'list|1-50': [{
    'id|+1': 1,
    'name': function () {
      return '文档' + Math.ceil(Math.random() * 100)
    },
    'type': function () {
      return '类型' + Math.ceil(Math.random() * 9)
    },
    'level': function () {
      return '等级' + Math.ceil(Math.random() * 9)
    },
    'classroom': function () {
      return list[Math.floor(Math.random() * 3)] + '年' + list[Math.floor(Math.random() * 9)] + '班'
    },
    'teacher': function () {
      return '助教' + Math.ceil(Math.random() * 100)
    },
    'status': function () {
      return '状态' + Math.ceil(Math.random() * 9)
    },
    'score': function () {
      return 60 + Math.floor(Math.random() * 40)
    },
    'starttime': '2017-05-05',
    'endtime': '2017-05-05'
  }]
})

export default {
  tableData: data.list
}
