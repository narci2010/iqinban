import Vue from 'vue'
import Router from 'vue-router'
import LoadingBar from '@/components/loading-bar'
Vue.use(LoadingBar)

// 主页
import Home from '@/views/home/Index' // 默认
import Schedule from '@/views/home/Schedule' // 课程表
import HomeDone from '@/views/home/Done' // 代办事项
import HomeData from '@/views/home/Data' // 数据统计
// 设置
import Setting from '@/views/setting/Index' // 默认
import System from '@/views/setting/System' // 教学系统
import Information from '@/views/setting/Info' // 机构资料
import Admin from '@/views/setting/Admin' // 后台功能
// 学生
import Student from '@/views/student/Index' // 默认
import StudentDetail from '@/views/student/detail/Index' // 详情-默认
import StudentDetailPlan from '@/views/student/detail/Plan' // 教学计划
import StudentDetailInfo from '@/views/student/detail/Info' // 基本信息统计
import StudentDetailRecord from '@/views/student/detail/Record' // 教学记录
import StudentDetailDoc from '@/views/student/detail/Doc' // 文档
import StudentAdd from '@/views/student/Add' // 新增
// 教师
import Teacher from '@/views/teacher/Index' // 默认
import TeacherDetail from '@/views/teacher/detail/Index' // 详情-默认
import TeacherDetailPlan from '@/views/teacher/detail/Plan' // 教学计划
import TeacherDetailInfo from '@/views/teacher/detail/Info' // 基本信息统计
import TeacherDetailRecord from '@/views/teacher/detail/Record' // 教学记录
import TeacherAdd from '@/views/teacher/Add' // 新增
// 班级
import Classroom from '@/views/classroom/Index' // 默认
import ClassroomDetail from '@/views/classroom/detail/Index' // 详情-默认
import ClassroomDetailPlan from '@/views/classroom/detail/Plan' // 教学计划
import ClassroomDetailInfo from '@/views/classroom/detail/Info' // 基本信息统计
import ClassroomDetailRecord from '@/views/classroom/detail/Record' // 教学记录
import ClassroomDetailDoc from '@/views/classroom/detail/Doc' // 文档
import ClassroomAdd from '@/views/classroom/Add' // 新增
// 课程
import Course from '@/views/course/Index' // 默认
import CourseAdd from '@/views/course/Add' // 创建课程
import CourseDetail from '@/views/course/Detail' // 课程详情

Vue.use(Router)

const route = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: Schedule,
          name: 'Schedule'
        },
        {
          path: 'home/done',
          component: HomeDone,
          name: 'HomeDone'
        },
        {
          path: 'home/data',
          component: HomeData,
          name: 'HomeData'
        }
      ]
    },
    {
      path: '/setting',
      component: Setting,
      children: [
        {
          path: '',
          component: Information,
          name: 'Setting'
        },
        {
          path: 'system',
          component: System,
          name: 'System'
        },
        {
          path: 'admin',
          component: Admin,
          name: 'Admin'
        }
      ]
    },
    {
      path: '/student',
      component: Student,
      name: 'Student'
    },
    {
      path: '/student/detail',
      component: StudentDetail,
      children: [
        {
          path: '',
          name: 'StudentDetailPlan',
          component: StudentDetailPlan
        },
        {
          path: 'info',
          name: 'StudentDetailInfo',
          component: StudentDetailInfo
        },
        {
          path: 'record',
          name: 'StudentDetailRecord',
          component: StudentDetailRecord
        },
        {
          path: 'doc',
          name: 'StudentDetailDoc',
          component: StudentDetailDoc
        }
      ]
    },
    {
      path: '/student/add',
      name: 'StudentAdd',
      component: StudentAdd
    },
    {
      path: '/teacher',
      component: Teacher,
      name: 'Teacher'
    },
    {
      path: '/teacher/detail',
      component: TeacherDetail,
      children: [
        {
          path: '',
          name: 'TeacherDetailPlan',
          component: TeacherDetailPlan
        },
        {
          path: 'info',
          name: 'TeacherDetailInfo',
          component: TeacherDetailInfo
        },
        {
          path: 'record',
          name: 'TeacherDetailRecord',
          component: TeacherDetailRecord
        }
      ]
    },
    {
      path: '/teacher/add',
      name: 'TeacherAdd',
      component: TeacherAdd
    },
    {
      path: '/classroom',
      component: Classroom,
      name: 'Classroom'
    },
    {
      path: '/classroom/detail',
      component: ClassroomDetail,
      children: [
        {
          path: '',
          name: 'ClassroomDetailPlan',
          component: ClassroomDetailPlan
        },
        {
          path: 'info',
          name: 'ClassroomDetailInfo',
          component: ClassroomDetailInfo
        },
        {
          path: 'record',
          name: 'ClassroomDetailRecord',
          component: ClassroomDetailRecord
        },
        {
          path: 'doc',
          name: 'ClassroomDetailDoc',
          component: ClassroomDetailDoc
        }
      ]
    },
    {
      path: '/classroom/add',
      name: 'ClassroomAdd',
      component: ClassroomAdd
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
    {
      path: '/course/add',
      name: 'CourseAdd',
      component: CourseAdd
    },
    {
      path: '/course/detail',
      name: 'CourseDetail',
      component: CourseDetail
    }
  ]
})

route.beforeEach((to, from, next) => {
  LoadingBar.start()
  next()
})
route.afterEach(route => {
  LoadingBar.finish()
})

export default route
