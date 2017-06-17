<!-- 习题首页 -->
<template>
  <div class="i-exercise">
    <div class="i-secondary-menu i-third-menu">
      <i-tabbar
        class="i-small-tabbar"
        title="全部习题"
        num="100"
        unit="个"
        button-text="上传习题"
        link="/teacher/add">
        <el-button slot="button" type="primary" size="mini" class="i-small-primary-button" @click="go">新建习题</el-button>
        <div class="i-student-tabbar-pane" slot="pane">
          <i-checkbox-group>
            <i-checkbox
              v-for="i in 2" :key="i"
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
  import ITabbar from '../../../components/tabbar'
  import ICheckboxGroup from '../../../components/checkboxgroup'
  import ICheckbox from '../../../components/checkbox'
  import { checkboxMixins } from '../../../mixins/checkbox'

  import options from '../../../mock/options'

  const name = ['习题等级：', '习题类型：']

  export default {
    components: {
      ITabbar,
      ICheckboxGroup,
      ICheckbox
    },
    mixins: [checkboxMixins],
    methods: {
      go () {
        console.log(1)
      }
    },
    data () {
      return {
        keyword: '',
        checkAll: [false, false, false, false],
        isIndeterminate: [true, true, true, true],
        cities: options.options,
        names: name
      }
    }
  }
</script>
<style lang="less">
  @import "../../../assets/v2/base";
  @import "../../../assets/v2/images";

  .i-exercise {
    padding-top: 75px;
    .i-exercise-pane {
      max-width: @--main-width;
      margin: 0 auto 60px;
    }
  }
</style>
