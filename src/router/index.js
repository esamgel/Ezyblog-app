import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home.vue'
import Blog from '@/components/Blog.vue'
import Signin from '@/components/Signin.vue'
import Signup from '@/components/Signup.vue'
import Articles from '@/components/articles/Articles.vue'
import Admin from '@/components/articles/Admin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/members',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
/* eslint-disable */ 