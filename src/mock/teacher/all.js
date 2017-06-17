/**
 * Created by caiyuhao on 2017/5/7.
 */
import Mock from 'mockjs/dist/mock-min'

function getData () {
  let data = Mock.mock({
    'list|1-100': [{
      'id|+1': 1,
      'name': function () {
        return '课程' + Math.ceil(Math.random() * 10000)
      },
      'type': function () {
        return Math.ceil(Math.random() * 9)
      },
      'level': function () {
        return Math.ceil(Math.random() * 9)
      },
      'classroom': function () {
        return '三年' + Math.ceil(Math.random() * 1000) + '班'
      },
      'tel': function () {
        let tel = '1'
        for (let i = 0; i < 10; i++) {
          tel += Math.floor(Math.random() * 10)
        }
        return tel
      },
      'number': function () {
        return Math.ceil(Math.random() * 1000)
      },
      'address': function () {
        return Math.ceil(Math.random() * 9)
      },
      'date': function () {
        let month = Math.ceil(Math.random() * 12)
        let day = Math.ceil(Math.random() * 28)
        return '2017-' + month + '-' + day
      }
    }]
  })
  return data.list
}

export default {
  getData: getData
}
