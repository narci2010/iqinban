/**
 * Created by caiyuhao on 2017/5/7.
 */
import Mock from 'mockjs/dist/mock-min'

function createEventData () {
  let data = Mock.mock({
    'list': [{
      name: '教师',
      id: 1,
      number: 9,
      'list|1-20': [{
        title: '任务超期',
        content: '张三未对英皇二级B班点名',
        sub: '原定时间：2017-2-9，14:00-15:00。',
        time: '2017-2-9'
      }]
    }, {
      name: '学生',
      id: 2,
      number: 6,
      'list|1-20': [{
        title: '任务超期',
        content: '张三未对英皇二级B班点名',
        sub: '原定时间：2017-2-9，14:00-15:00。',
        time: '2017-2-9'
      }]
    }, {
      name: '机构',
      id: 3,
      number: 29,
      'list|1-20': [{
        title: '任务超期',
        content: '张三未对英皇二级B班点名',
        sub: '原定时间：2017-2-9，14:00-15:00。',
        time: '2017-2-9'
      }]
    }]
  })
  return data.list
}

export default {
  createEventData: createEventData
}
