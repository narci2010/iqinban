export const createData = (length) => {
  return new Promise((resolve, reject) => {
    let data = []
    for (let i = 0; i < length; i++) {
      data.push({
        col0: i,
        col1: '木某某',
        col2: '某某某某',
        col3: 'xx',
        col4: '某某某某',
        col5: '某某',
        col6: 'xxxxxxxxxxx',
        col7: 'xxxx-xx-xx'
      })
    }
    resolve(data)
  })
}
