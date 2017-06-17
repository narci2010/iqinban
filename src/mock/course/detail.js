/**
 * Created by caiyuhao on 2017/5/7.
 */
import Mock from 'mockjs/dist/mock-min'

const options = [
  {
    value: 1,
    label: '1'
  },
  {
    value: 2,
    label: '2'
  },
  {
    value: 3,
    label: '3'
  }
]

const list = {
  name: '某某某某',
  classroom: '某某某某班',
  type: '一对多',
  level: '某某某某级',
  teacher: '某某某',
  students: '某某某、某某等xx人',
  date: '2017-05-04',
  addr: '某某某某某某某某xxx某某某xx',
  resource: '教材1、教材2',
  progress: '第xx课',
  summary: '第xx课某某某某某某某某某'
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
  createData: createData,
  list: list,
  options: options
}
