/**
 * 存储localStorage
 * @param name
 * @param item
 */
export const setStorage = (name, item) => {
  if (!name) return
  if (typeof item !== 'string') {
    item = JSON.stringify(item)
  }
  window.localStorage.setItem(name, item)
}

/**
 * 获取localStorage
 * @param name
 */
export const getStorage = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 * @param name
 */
export const removeStorage = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
