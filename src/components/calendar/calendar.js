/**
 * Created by Paytham<caiyuhao2015@gmail.com> on 2017/4/1.
 * @author Paytham <Paytham<caiyuhao2015@gmail.com>2015@gmail.com>
 * @version v1.0
 * @description 日历工具类
 */
let d = new Date()
let nowDay = d.getDate()
let nowMonth = d.getMonth()
let nowYear = d.getFullYear()
let feb = leapYear(new Date().getFullYear()) ? 29 : 28
// 每月的天数
const months = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// 判断是否是闰年
function leapYear (year) {
  return !(year % (year % 100 ? 4 : 400))
}

/**
 * 上周或者下周
 * @param bool +1 or -1
 */
export const transWeek = (bool) => {
  if (bool !== 1 && bool !== -1) return
  nowDay = nowDay + bool * 7
  if (nowDay <= 0) {
    nowMonth -= 1
    if (nowMonth < 0) {
      nowYear -= 1
      nowMonth += 12
    }
    if (nowMonth === 0) {
      nowDay += months[0]
    } else {
      nowDay += months[nowMonth]
    }
  } else if (nowDay > months[nowMonth]) {
    nowMonth += 1
    if (nowMonth > 11) {
      nowYear += 1
      nowMonth -= 12
    }
    if (nowMonth === 0) {
      nowDay -= months[11]
    } else {
      nowDay -= months[nowMonth - 1]
    }
  }
  let weekStartDate = new Date(nowYear, nowMonth, nowDay)
  return formatDate(weekStartDate)
}
// 日期格式化
export const formatDate = () => {
  return nowYear + '年' + (nowMonth + 1) + '月'
}

// 日期格式化，获取年
export const getYear = () => {
  return nowYear
}
export const setYear = (year) => {
  nowYear = year
}

// 日期格式化，获取月
export const getMonth = () => {
  return nowMonth + 1
}
export const setMonth = (month) => {
  nowMonth = month
}

// 获取今天是本周中的第几天
export const getDay = () => {
  return d.getDay()
}

// 周中文名称定义
export const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

export default {
  weeks,
  getDay,
  getYear,
  setYear,
  getMonth,
  setMonth,
  formatDate,
  transWeek
}

