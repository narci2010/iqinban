/**
 * Created by caiyuhao on 2017/5/9.
 */
import Mock from 'mockjs/dist/mock-min'

const list = ['一', '二', '三', '四', '五', '六', '七', '八', '九']

function getData () {
  let data = Mock.mock({
    'list|1-50': [{
      'id|+1': 1,
      'name': function () {
        return list[Math.floor(Math.random() * 3)] + '年' + list[Math.floor(Math.random() * 9)] + '班'
      },
      'level': function () {
        return Math.ceil(Math.random() * 9)
      },
      'type': function () {
        return Math.ceil(Math.random() * 9)
      },
      'teacher': function () {
        return '教师' + Math.ceil(Math.random() * 100)
      },
      'number': function () {
        return Math.ceil(Math.random() * 500)
      },
      'address': function () {
        return Math.ceil(Math.random() * 9)
      },
      'date': '2017-05-09'
    }]
  })
  return data.list
}

export default {
  getData: getData
}
