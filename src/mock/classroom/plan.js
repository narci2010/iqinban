/**
 * Created by caiyuhao on 2017/5/9.
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

function teacherTableData () {
  let data = Mock.mock({
    'list|1-50': [{
      'id|+1': 1,
      'name': function () {
        return '课程' + Math.ceil(Math.random() * 100)
      },
      'type': function () {
        return '类型' + Math.ceil(Math.random() * 9)
      },
      'level': function () {
        return '等级' + Math.ceil(Math.random() * 9)
      },
      'address': function () {
        return '校区' + Math.ceil(Math.random() * 9)
      },
      'age': function () {
        return Math.ceil(Math.random() * 20) + 10
      },
      'sex': function () {
        return Math.random() > 0.5 ? '男' : '女'
      },
      'tel': 'xxxx-xx-xx',
      'time': function () {
        return Math.ceil(Math.random() * 20)
      }
    }]
  })
  return data.list
}

function studentTableData () {
  let data = Mock.mock({
    'list|1-50': [{
      'id|+1': 1,
      'name': function () {
        return '学生' + Math.ceil(Math.random() * 100)
      },
      'level': function () {
        return '等级' + Math.ceil(Math.random() * 9)
      },
      'age': function () {
        return Math.ceil(Math.random() * 20) + 10
      },
      'address': function () {
        return '校区' + Math.ceil(Math.random() * 9)
      },
      'teacher': function () {
        return '教师' + Math.ceil(Math.random() * 100)
      },
      'sex': function () {
        return Math.random() > 0.5 ? '男' : '女'
      },
      'tel': 'xxxx-xx-xx',
      'time': '2017-05-10'
    }]
  })
  return data.list
}

export default {
  getUserInfo: getUserInfo,
  createData: createData,
  teacherTableData: teacherTableData,
  studentTableData: studentTableData
}
