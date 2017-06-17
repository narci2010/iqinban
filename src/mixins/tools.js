/**
 * Created by caiyuhao on 2017/5/4.
 */
const toolMixins = {
  methods: {
    uuid () {
      return Math.random().toString(36).substring(3, 20)
    },
    addClass (obj, cls) {
      let objClass = obj.className
      let blank = (objClass !== '') ? ' ' : ''
      obj.className = objClass + blank + cls
    },
    removeClass (obj, cls) {
      let objClass = ' ' + obj.className + ' '
      objClass = objClass.replace(/(\s+)/gi, ' ')
      let removed = objClass.replace(' ' + cls + ' ', ' ')
      removed = removed.replace(/(^\s+)|(\s+$)/g, '')
      obj.className = removed
    },
    hasClass (obj, cls) {
      let objClass = obj.className
      let objClassLst = objClass.split(/\s+/)
      for (let x in objClassLst) {
        if (objClassLst[x] === cls) {
          return true
        }
      }
      return false
    },
    toggleClass (obj, cls) {
      if (this.hasClass(obj, cls)) {
        this.removeClass(obj, cls)
      } else {
        this.addClass(obj, cls)
      }
    },
    curStyle (elem) {
      return elem.currentStyle || document.defaultView.getComputedStyle(elem)
    },
    client () {
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
        s: document.documentElement.scrollHeight
      }
    }
  }
}

export {
  toolMixins
}
