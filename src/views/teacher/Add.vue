<!-- 新增教师 -->
<template>
  <div class="i-student-add">
    <div class="i-secondary-menu">
      <i-top-menu title="新增教师"></i-top-menu>
    </div>
    <div class="i-student-add-content">
      <div class="i-student-add-inner">
        <el-row :gutter="40" class="i-student-add-row">
          <el-col :span="18">
            <el-input
              placeholder=""
              icon="search"
              v-model="input"
              :on-icon-click="handleIconClick">
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" class="i-button i-cancel" style="width: 100%;" @click="showReqPane">{{ buttonText }}</el-button>
          </el-col>
        </el-row>
        <div class="i-student-add-pane" v-if="showReq">
          <el-table
            stripe
            :data="reqArr"
            style="width: 100%">
            <el-table-column
              width="50">
              <template scope="scope">
                <div class="i-student-table-ico"></div>
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              width="130"
              label="用户名">
            </el-table-column>
            <el-table-column
              prop="truename"
              width="130"
              label="真实姓名">
            </el-table-column>
            <el-table-column
              prop="id"
              label="ID">
            </el-table-column>
            <el-table-column
              prop="sex"
              label="性别">
            </el-table-column>
            <el-table-column
              prop="city"
              label="城市">
            </el-table-column>
            <el-table-column
              prop="age"
              label="琴龄">
            </el-table-column>
            <el-table-column
              width="260">
              <template scope="scope">
                <el-button type="primary" class="i-button i-cancel" style="width: 100px;float: right;margin-right:12px;">发送邀请</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="i-student-add-pane" v-if="showRes">
          <el-table
            stripe
            :data="resArr"
            style="width: 100%">
            <el-table-column
              width="50">
              <template scope="scope">
                <div class="i-student-table-ico"></div>
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              width="130"
              label="用户名">
            </el-table-column>
            <el-table-column
              prop="truename"
              width="130"
              label="真实姓名">
            </el-table-column>
            <el-table-column
              prop="id"
              label="ID">
            </el-table-column>
            <el-table-column
              prop="sex"
              label="性别">
            </el-table-column>
            <el-table-column
              prop="city"
              label="城市">
            </el-table-column>
            <el-table-column
              prop="age"
              label="琴龄">
            </el-table-column>
            <el-table-column
              width="260">
              <template scope="scope">
                <el-button type="primary" class="i-button i-danger" style="width: 100px;">拒绝</el-button>
                <el-button type="primary" class="i-button i-cancel" style="width: 100px;">接受</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ITopMenu from '../../components/topmenu'
  import add from '../../mock/teacher/add'

  export default {
    components: {
      ITopMenu
    },
    methods: {
      handleIconClick (val) {
        this.createReqData()
        this.showReq = true
      },
      showReqPane () {
        if (this.showRes) {
          this.showRes = false
          this.buttonText = '查看教师申请'
        } else {
          this.showRes = true
          this.buttonText = '隐藏教师申请'
          this.createResData()
        }
      },
      createData () {
        return add.createData()
      },
      createReqData () {
        this.reqArr = this.createData()
      },
      createResData () {
        this.resArr = this.createData()
      }
    },
    data () {
      return {
        input: '',
        buttonText: '查看教师申请',
        reqArr: [],
        resArr: [],
        showReq: false,
        showRes: false
      }
    }
  }
</script>
