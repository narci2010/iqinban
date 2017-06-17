/**
 * Created by caiyuhao on 2017/5/9.
 */
import Mock from 'mockjs/dist/mock-min'

function createOptions (text) {
  let data = Mock.mock({
    'list|1-15': [{
      'value|+1': 1,
      'label|+1': 1
    }]
  })
  let tmp = []
  data.list.forEach((item, index) => {
    item.label = text + item.label
    tmp.push(item)
  })
  return tmp
}

export default {
  createOptions: createOptions
}
