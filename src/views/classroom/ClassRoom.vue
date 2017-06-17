<!-- 班级 -->
<template>
  <div class="i-student">
    <div class="i-secondary-menu">
      <i-tabbar
        title="全部班级"
        num="354"
        unit="个"
        button-text="创建班级"
        link="/classroom/add">
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
  import { checkboxMixins } from '../../mixins/checkbox'

  import options from '../../mock/options'

  const name = ['课程等级：', '创建时间：', '课程类型：', '校区：']

  export default {
    components: {
      ITabbar,
      ICheckboxGroup,
      ICheckbox
    },
    mixins: [checkboxMixins],
    data () {
      return {
        keyword: '',
        checkAll: [false, false, false, false],
        isIndeterminate: [true, true, true, true],
        cities: options.cityOptions,
        names: name
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/main";
</style>
