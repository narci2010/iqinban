/**
 * Created by caiyuhao on 2017/5/7.
 */
import Mock from 'mockjs/dist/mock-min'

const nums = ['一', '二', '三', '四', '五', '六', '七', '八']

function getUserInfo () {
  let data = Mock.mock({
    'list|1-20': [{
      'id|+1': 1,
      'index': function () {
        return '第' + nums[Math.floor(Math.random() * 8)] + '课'
      },
      'name': function () {
        return '乐理基础' + Math.floor(Math.random() * 100)
      },
      'classroom': '英皇1班',
      'time': '09:00~11:30'
    }]
  })
  return data.list
}

function createData () {
  let tmp = Mock.mock({
    'list|6': [{
      'id|+1': 1,
      'course|7': [{
        'active': function () {
          return Math.random() > 0.5
        },
        'text': ''
      }]
    }]
  })
  return tmp.list
}

export default {
  getUserInfo: getUserInfo,
  createData: createData
}
