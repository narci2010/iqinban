import Vue from 'vue'
import Router from 'vue-router'
import LoadingBar from '../components/loading-bar'
Vue.use(LoadingBar)

// 主页
import Home from '@/views/home/Home'
import HomeDone from '@/views/home/Done'
import HomeData from '@/views/home/Data'
import HomeSchedule from '@/views/home/Schedule'
// 班级
import ClassRoom from '@/views/classroom/ClassRoom'
import ClassRoomAll from '@/views/classroom/All'
import ClassRoomAdd from '@/views/classroom/Add'
import ClassRoomBasic from '@/views/classroom/detail/Basic'
import ClassRoomDetail from '@/views/classroom/detail/Detail'
import ClassRoomDoc from '@/views/classroom/detail/Doc'
import ClassRoomPlan from '@/views/classroom/detail/Plan'
import ClassRoomRecord from '@/views/classroom/detail/Record'
// 课程
import Course from '@/views/course/Course'
import CourseAll from '@/views/course/All'
import CourseDetail from '@/views/course/Detail'
import CourseAdd from '@/views/course/Add'
// 课程资源
import Resource from '@/views/resource/Resource'
// 课程资源-习题
import RExe from '@/views/resource/exercise/Exercise'
import RExeAll from '@/views/resource/exercise/All'
// 课程资源-教材
import RMat from '@/views/resource/material/Material'
import RMatAll from '@/views/resource/material/All'
import RMatAdd from '@/views/resource/material/Add'
import RMatDetail from '@/views/resource/material/Detail'
// 课程资源-教材-课件
import RMatNew from '@/views/resource/material/courseware/New'
import RMatPreview from '@/views/resource/material/courseware/Preview'
// 课程资源-教材-习题
import RPapPreview from '@/views/resource/material/paper/Preview'
import RPapNew from '@/views/resource/material/paper/New'

// 学生
import Student from '@/views/student/Student'
import StudentAll from '@/views/student/All'
import StudentAdd from '@/views/student/Add'
import StudentDetail from '@/views/student/detail/Detail'
import StudentRecord from '@/views/student/detail/Record'
import StudentBasic from '@/views/student/detail//Basic'
import StudentPlan from '@/views/student/detail/Plan'
import StudentDoc from '@/views/student/detail/Doc'
// 教师
import Teacher from '@/views/teacher/Teacher'
import TeacherAll from '@/views/teacher/All'
import TeacherAdd from '@/views/teacher/Add'
import TeacherDetail from '@/views/teacher/detail/Detail'
import TeacherRecord from '@/views/teacher/detail/Record'
import TeacherBasic from '@/views/teacher/detail//Basic'
import TeacherPlan from '@/views/teacher/detail/Plan'
// 设置
import Setting from '@/views/setting/Setting'
import SettingInfo from '@/views/setting/Information'
import SettingSystem from '@/views/setting/System'
import SettingAdmin from '@/views/setting/Admin'

Vue.use(Router)

const route = new Router({
  routes: [{
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeSchedule
      }, {
        path: 'home/done',
        name: 'Done',
        component: HomeDone
      }, {
        path: 'home/data',
        name: 'Data',
        component: HomeData
      }
    ]
  }, {
    path: '/classroom',
    component: ClassRoom,
    children: [
      {
        path: '',
        name: 'ClassRoom',
        component: ClassRoomAll
      }, {
        path: 'add',
        name: 'ClassRoomAdd',
        component: ClassRoomAdd
      }, {
        path: 'detail',
        component: ClassRoomDetail,
        children: [
          {
            path: '',
            name: 'ClassRoomDetail',
            component: ClassRoomRecord
          }, {
            path: 'basic',
            name: 'ClassRoomBasic',
            component: ClassRoomBasic
          }, {
            path: 'plan',
            name: 'ClassRoomPlan',
            component: ClassRoomPlan
          }, {
            path: 'doc',
            name: 'ClassRoomDoc',
            component: ClassRoomDoc
          }
        ]
      }
    ]
  }, {
    path: '/course',
    component: Course,
    children: [
      {
        path: '',
        name: 'Course',
        component: CourseAll
      }, {
        path: 'detail',
        name: 'CourseDetail',
        component: CourseDetail
      }, {
        path: 'add',
        name: 'CourseAdd',
        component: CourseAdd
      }
    ]
  }, {
    path: '/resource',
    component: Resource,
    children: [
      {
        path: '',
        component: RMat,
        children: [
          {
            path: '',
            name: 'RMat',
            component: RMatAll
          },
          {
            path: 'new/:type',
            name: 'RMatNew',
            component: RMatNew
          },
          {
            path: 'paper/new/:type',
            name: 'RPapNew',
            component: RPapNew
          },
          {
            path: 'preview',
            name: 'RMatPreview',
            component: RMatPreview
          },
          {
            path: 'paper/preview',
            name: 'RPapPreview',
            component: RPapPreview
          },
          {
            path: 'detail',
            name: 'RMatDetail',
            component: RMatDetail
          },
          {
            path: 'add',
            name: 'RMatAdd',
            component: RMatAdd
          }
        ]
      },
      {
        path: 'exercise',
        component: RExe,
        children: [
          {
            path: '',
            name: 'RExe',
            component: RExeAll
          }
        ]
      }
    ]
  }, {
    path: '/student',
    component: Student,
    children: [
      {
        path: '',
        name: 'Student',
        component: StudentAll
      }, {
        path: 'add',
        name: 'StudentAdd',
        component: StudentAdd
      }, {
        path: 'detail',
        component: StudentDetail,
        children: [
          {
            path: '',
            name: 'StudentDetail',
            component: StudentRecord
          }, {
            path: 'basic',
            name: 'StudentBasic',
            component: StudentBasic
          }, {
            path: 'plan',
            name: 'StudentPlan',
            component: StudentPlan
          }, {
            path: 'doc',
            name: 'StudentDoc',
            component: StudentDoc
          }
        ]
      }
    ]
  }, {
    path: '/teacher',
    component: Teacher,
    children: [
      {
        path: '',
        name: 'Teacher',
        component: TeacherAll
      }, {
        path: 'add',
        name: 'TeacherAdd',
        component: TeacherAdd
      }, {
        path: 'detail',
        component: TeacherDetail,
        children: [
          {
            path: '',
            name: 'TeacherDetail',
            component: TeacherRecord
          }, {
            path: 'basic',
            name: 'TeacherBasic',
            component: TeacherBasic
          }, {
            path: 'plan',
            name: 'TeacherPlan',
            component: TeacherPlan
          }
        ]
      }
    ]
  }, {
    path: '/setting',
    component: Setting,
    children: [
      {
        path: '',
        name: 'Setting',
        component: SettingInfo
      }, {
        path: 'system',
        component: SettingSystem
      }, {
        path: 'admin',
        component: SettingAdmin
      }
    ]
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
