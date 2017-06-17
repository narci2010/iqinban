// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-default/index.css'
import {
  Menu,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Badge,
  Tabs,
  TabPane,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Row,
  Col,
  Popover,
  TimeSelect,
  Button,
  Switch,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Table,
  TableColumn,
  DatePicker,
  Dialog,
  Radio,
  Rate,
  Tooltip,
  Tag,
  Progress
} from 'element-ui'

Vue.use(Progress)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Badge)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Row)
Vue.use(Col)
Vue.use(Popover)
Vue.use(TimeSelect)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Radio)
Vue.use(Rate)
Vue.use(Tooltip)
Vue.use(Tag)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
