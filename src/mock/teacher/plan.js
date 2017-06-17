/**
 * Created by caiyuhao on 2017/5/6.
 */
import Mock from 'mockjs/dist/mock-min'

const list = ['一', '二', '三', '四', '五', '六', '七', '八', '九']

function getUserInfo () {
  let data = Mock.mock({
    'list|1-20': [{
      'id|+1': 1,
      'name': function () {
        return '课程名' + Math.ceil(Math.random() * 100)
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
        return '教师' + Math.ceil(Math.random() * 9)
      },
      'starttime': '2017-05-04',
      'process': function () {
        return '进度' + Math.ceil(Math.random() * 9)
      }
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
