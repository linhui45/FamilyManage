import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import NewComponent from '../components/NewComponent'//新添加，之后在下方的component: NewComponent才会生效
import Layouts from '../components/layouts' // 导入layouts.vue 组件
import Home from '../views/Home' // 导入layouts.vue 组件
import Login from '../views/Login' // 导入layouts.vue 组件

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',  //访问路径
      name: 'Home', // 路径名
      component: Home //访问的组件,即访问‘/’,它会加载 Layouts 组件所有的内容。
    },
    {
      path: '/newcomponent',//和router-link to相呼应，导航到/newcomponent
      name: 'NewComponent',
      component: NewComponent
    },
    {
      path: '/login',//和router-link to相呼应，导航到/newcomponent
      name: 'Login',
      component: Login
    }
  ]
})
