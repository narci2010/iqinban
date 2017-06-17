import { ApiUrl, form } from '../config'
import qs from 'querystring'

let login = (userString, password, thirdPartyType, openId, deviceId) => {
  form.post(ApiUrl + '/login', qs.stringify({
    userString: userString,
    password: password,
    deviceId: deviceId,
    thirdPartyType: thirdPartyType,
    openId: openId
  })).then(res => {
    let data = res.data
    if (data.d) {
      return {
        success: true,
        data: data.d
      }
    } else if (data.e) {
      return {
        success: false,
        data: data.e
      }
    } else {
      return {
        success: false,
        data: '未经处理的异常'
      }
    }
  }).catch(err => {
    // 捕获Promise异常
    console.log(err)
  })
}

export {
  login
}
