export const filterTime = time => {
  let hour = Math.floor(time / 60)
  let minute = time % 60
  return (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute)
}

export const filterWeek = w => {
  let week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  return week[w]
}

export const filterNum = num => {
  let china = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
  num = num + 1
  if (num > 10) {
    let temp = ''
    let y = num % 10
    let s = Math.floor(num / 10)
    if (s - 1 === 0) {
      temp += '十'
    } else {
      temp += china[s - 1] + '十'
    }
    if (y === 0) {
      return temp
    } else {
      return temp + china[y - 1]
    }
  } else {
    return china[num - 1]
  }
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}

export const formatDate = (date, fmt) => {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
