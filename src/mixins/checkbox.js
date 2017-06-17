/**
 * Created by caiyuhao on 2017/5/9.
 */
const checkboxMixins = {
  methods: {
    handleIconClick () {
      window.alert(this.keyword)
    },
    handleCheckAllChange (value) {
      console.log(value)
    },
    handleCheckAllClear (index) {
      console.log(index)
    },
    handleCheckedChange (value) {
      console.log(value)
    },
    onIndeterminateChange (val, index) {
      this.isIndeterminate.splice(index, 1, val)
    },
    onCheckAllChange (val, index) {
      this.checkAll.splice(index, 1, val)
    }
  }
}

export {
  checkboxMixins
}
