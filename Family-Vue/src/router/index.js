import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import NewComponent from '../components/NewComponent'//新添加，之后在下方的component: NewComponent才会生效

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/newcomponent',//和router-link to相呼应，导航到/newcomponent
      name: 'NewComponent',
      component: NewComponent
    }
    ]
})
