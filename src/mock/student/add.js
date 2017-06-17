/**
 * Created by caiyuhao on 2017/5/7.
 */
import Mock from 'mockjs/dist/mock-min'

function createData () {
  let data = Mock.mock({
    'list|1-15': [{
      'id|+1': 1,
      'name': function () {
        return '用户' + Math.random().toString(36).substring(3, 10)
      },
      'truename': function () {
        return Math.random().toString(36).substring(3, 20)
      },
      'sex': function () {
        return Math.random() > 0.5 ? '男' : '女'
      },
      'city': function () {
        return '城市' + Math.ceil(Math.random() * 1000)
      },
      'age': function () {
        return Math.ceil(Math.random() * 20)
      }
    }]
  })
  return data.list
}

export default {
  createData: createData
}
