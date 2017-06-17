import Mock from 'mockjs/dist/mock-min'

function getData () {
  let data = Mock.mock({
    'list|1-30': [{
      'id|+1': 1,
      'type': '单选题',
      'summary': '某某某某某某某某某某某',
      'point': '基础乐理',
      'level': '英皇3级',
      'date': '2017-06-08'
    }]
  })
  return data.list
}

export default { getData }
