import Mock from 'mockjs/dist/mock-min'

/**
 * 教材基本信息
 * @type {{name: string, level: string, type: string, summary: string, date: string}}
 */
let material = {
  name: '约翰汤普森钢琴基础教程',
  level: '某某等级',
  type: '某某类型',
  summary: '精读英语教程(第2册)(英语专业1、2年级用)》(沈黎/编/复旦大学出版社)为大学英语专业本科的精读课本，以一、二年级学生为主要对象。全书共有四册，每一册供一学期使用，另配单独成册的练习答案。',
  date: '2017-06-12'
}

/**
 * 获取课件
 */
const getCourseWareList = () => {
  let data = Mock.mock({
    'list|1-15': [{
      'id|+1': 1,
      'name': function () {
        return '课件' + Math.ceil(Math.random() * 30)
      },
      'date': '2017-06-12',
      'level': function () {
        return '英皇' + Math.ceil(Math.random() * 3) + '级'
      },
      'total': function () {
        return '共' + Math.ceil(Math.random() * 9) + '个知识点'
      }
    }]
  })
  return data.list
}

/**
 * 获取试卷
 */
const getCoursePaperList = () => {
  let data = Mock.mock({
    'list|1-15': [{
      'id|+1': 1,
      'name': function () {
        return '试卷' + Math.ceil(Math.random() * 30)
      },
      'level': function () {
        return '英皇' + Math.ceil(Math.random() * 3) + '级'
      },
      'time': function () {
        return Math.ceil(Math.random() * 3) + '小时'
      },
      'date': '2017-0-12',
      'total': function () {
        return Math.ceil(Math.random() * 30)
      }
    }]
  })
  return data.list
}

export default { material, getCourseWareList, getCoursePaperList }
