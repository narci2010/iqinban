<!-- 教学记录 -->
<template>
  <div class="i-content is-menubar is-tabbar">
    <i-card title="任课教师教学记录">
      <div slot="button">
        <el-button size="mini" class="i-button__ctrl i-button__ctrl-mini i-button__primary-text">显示全部</el-button>
      </div>
      <div slot="body">
        <el-row :gutter="20">
          <el-col v-for="i in 2" :key="i" :span="6">
            <div class="card__item-t" :class="{ 'is-freezed': i === 2 }">
              <img alt="ico" :src="src">
              <p>
                <span>某某某</span>
                <span>2016.03.01-2017.02.01</span>
              </p>
              <el-popover
                placement="bottom"
                title=""
                width="104"
                :offset="-20"
                trigger="click"
                popper-class="i-popover i-popover__small">
                <div class="i-popover__content i-popover__content-small">
                  <a class="i-popover__item" href="javascript:">删除</a>
                </div>
                <a href="javascript:" slot="reference" class="card__more"><i class="iconfont icon-morecopy_px"></i></a>
              </el-popover>
            </div>
          </el-col>
        </el-row>
      </div>
    </i-card>
    <i-card title="">
      <i-sortable slot="sup" label="学生学习记录" :status="status">
        <a class="i-popover__item" href="javascript:" @click="changeStatus('ascend')">姓名拼音升序</a>
        <a class="i-popover__item" href="javascript:" @click="changeStatus('descend')">姓名拼音降序</a>
        <a class="i-popover__item" href="javascript:" @click="changeStatus('ascend')">进班时间升序</a>
        <a class="i-popover__item" href="javascript:" @click="changeStatus('descend')">进班时间降序</a>
      </i-sortable>
      <div slot="button">
        <el-button size="mini" class="i-button__ctrl i-button__ctrl-mini i-button__primary-text">显示全部</el-button>
      </div>
      <div slot="body">
        <el-row :gutter="20">
          <el-col v-for="i in 13" :key="i" :span="6">
            <div class="card__item-t" :class="{ 'is-freezed': i === 2 }">
              <img alt="ico" :src="src">
              <p>
                <span>某某某</span>
                <span>2016.03.01-2017.02.01</span>
              </p>
              <el-popover
                placement="bottom"
                title=""
                width="104"
                :offset="-20"
                trigger="click"
                popper-class="i-popover i-popover__small">
                <div class="i-popover__content i-popover__content-small">
                  <a class="i-popover__item" href="javascript:">删除</a>
                </div>
                <a href="javascript:" slot="reference" class="card__more"><i class="iconfont icon-morecopy_px"></i></a>
              </el-popover>
            </div>
          </el-col>
        </el-row>
      </div>
    </i-card>
  </div>
</template>

<script>
  import ICard from '@/components/card'
  import ISortable from '@/components/sortable'
  import { createData } from '@/mock/table'
  import src from '@/assets/img/ico.jpg'

  export default {
    name: 'ClassroomDetailPlan',
    components: {
      ICard,
      ISortable
    },
    methods: {
      getData () {
        let num = Math.ceil(Math.random() * 8)
        createData(num).then(data => {
          this.tableData = data
        })
      },
      changeStatus (val) {
        this.status = val
      }
    },
    data () {
      return {
        tableData: [],
        src: src,
        status: 'normal',
        course: [1, 1, 1, 1, 1, 1] // 模拟课程
      }
    },
    mounted () {
      this.getData()
    }
  }
</script>

<style lang="scss" scoped>
  .card__more {
    color: #7e8795;
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px 6px;
  }
  .card__item-t, .card__item-b {
    background: #fff;
    height: 100px;
    border-radius: 2px;
    position: relative;
    margin-bottom: 20px;
    &.is-freezed {
      > p {
        > span {
          color: #9e9ebc;
        }
      }
      > img {
        opacity: 0.5;
      }
      &:after {
        position: absolute;
        content: '已冻结';
        font-size: 12px;
        color: rgba(52, 167, 217, 0.9);
        right: 28px;
        top: 43px;
      }
    }
    > img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      float: left;
      margin: 30px 0 0 30px;
    }
    > p {
      margin-left: 90px;
      padding-top: 30px;
      > span {
        display: block;
        font-size: 12px;
        color: rgba(54, 72, 97, 0.9);
        margin-bottom: 10px;
        & + span {
          color: #9e9ebc;
        }
      }
    }
  }
</style>
