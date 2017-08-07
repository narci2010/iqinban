const scrollMixins = {
  methods: {
    scroll (fn) {
      let beforeScrollTop = document.body.scrollTop || document.documentElement.scrollTop
      console.log(beforeScrollTop)
      fn = fn || function () {}
      window.addEventListener('scroll', () => {
        let afterScrollTop = document.body.scrollTop || document.documentElement.scrollTop
        console.log(afterScrollTop)
        let delta = afterScrollTop - beforeScrollTop
        if (delta === 0) return false
        fn(delta > 0 ? 'down' : 'up', delta)
        beforeScrollTop = afterScrollTop
      }, false)
    },
    touch (fn) {
      let [startx, starty] = [0, 0]
      // 获得角度
      function getAngle (angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI
      }
      // 根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
      function getDirection (startx, starty, endx, endy) {
        let angx = endx - startx
        let angy = endy - starty
        let result = 0
        // 如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
          return result
        }
        let angle = getAngle(angx, angy)
        if (angle >= -135 && angle <= -45) {
          result = 1
        } else if (angle > 45 && angle < 135) {
          result = 2
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
          result = 3
        } else if (angle >= -45 && angle <= 45) {
          result = 4
        }
        return result
      }
      // 手指接触屏幕
      document.addEventListener('touchstart', function (e) {
        startx = e.touches[0].pageX
        starty = e.touches[0].pageY
      }, false)
      // 手指离开屏幕
      document.addEventListener('touchmove', function (e) {
        let [endx, endy] = [0, 0]
        endx = e.changedTouches[0].pageX
        endy = e.changedTouches[0].pageY
        let direction = getDirection(startx, starty, endx, endy)
        let scrollTop = document.body.scrollTop
        switch (direction) {
          case 1:
            fn('down', scrollTop)
            break
          case 2:
            fn('up', scrollTop)
            break
          default:
            break
        }
      }, false)
    }
  },
  mounted () {
    let el = this.$refs.tabbar.$el
    const fn = (direction, delta) => {
      if (Math.abs(delta) >= 60 && direction === 'down') {
        el.style.height = 0
        el.style.zIndex = -1
        this.hasTabbar = false
        this.needFix = false
      } else if (Math.abs(delta) < 60 && direction === 'up') {
        el.style.height = '50px'
        this.hasTabbar = true
        this.needFix = true
        el.style.zIndex = '99'
      }
    }
    this.scroll(fn)
    this.touch(fn)
  },
  data () {
    return {
      hasTabbar: true,
      needFix: true
    }
  }
}

export {
  scrollMixins
}
