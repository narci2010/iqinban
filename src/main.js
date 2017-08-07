// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('es6-promise').polyfill()

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filter/filters'
import 'element-ui/lib/theme-default/index.css'
import {
  Menu,
  MenuItem,
  Badge,
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
  Radio,
  Rate,
  Tag,
  Tooltip
} from 'element-ui'

Vue.use(Tooltip)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Badge)
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
Vue.use(Radio)
Vue.use(Rate)
Vue.use(Tag)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
