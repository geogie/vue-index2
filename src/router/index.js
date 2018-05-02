/**
 * Created by georgeRen on 2018/4/26.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/index'
import IndexMain from '@/components/indexMain'
import Article from '@/components/Article'
import About from'@/components/About'

Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/list',
      name:'RootPath',
      component:IndexMain
    },
    {
      path:'/topic/:id',
      name:'ArticleRouter',
      component:Article
    },
    {
      path:'/about',
      name:'AboutRouter',
      component:About
    }
  ]
})
