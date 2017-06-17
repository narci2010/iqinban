<template>
  <div class="i-student">
    <div class="i-secondary-menu">
      <i-tabbar
        title="全部学生"
        num="354"
        unit="人"
        button-text="新增学生"
        link="/student/add">
        <div class="i-student-tabbar-pane" slot="pane">
          <i-checkbox-group>
            <i-checkbox
              v-for="i in 4" :key="i"
              :index = "i-1"
              :label="names[i-1]"
              :is-indeterminate="isIndeterminate[i-1]"
              :check-all="checkAll[i-1]"
              :items="cities[i-1]"
              :on-handle-check-all-change="handleCheckAllChange"
              :on-handle-checked-change="handleCheckedChange"
              :on-handle-check-all-clear="handleCheckAllClear"
              @onIndeterminateChange="onIndeterminateChange"
              @onCheckAllChange="onCheckAllChange"
            ></i-checkbox>
          </i-checkbox-group>
        </div>
      </i-tabbar>
    </div>
    <div class="i-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import ITabbar from '../../components/tabbar'
  import ICheckboxGroup from '../../components/checkboxgroup'
  import ICheckbox from '../../components/checkbox'
  import student from '../../mock/options'
  import { checkboxMixins } from '../../mixins/checkbox'

  const name = ['课程等级：', '创建时间：', '课程类型：', '校区：']

  export default {
    components: {
      ITabbar,
      ICheckbox,
      ICheckboxGroup
    },
    mixins: [checkboxMixins],
    data () {
      return {
        keyword: '',
        checkAll: [false, false, false, false],
        isIndeterminate: [true, true, true, true],
        cities: student.cityOptions,
        names: name
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/main";
</style>
