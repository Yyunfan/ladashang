import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import { Swipe, SwipeItem } from 'vue-swipe'
// import { routes } from './routes'

Vue.use(Router)
Vue.component('swipe', Swipe)
Vue.component('swipe-item', SwipeItem)

const router = new Router({
  history: false,
  saveScrollPosition: true,
  linkActiveClass: 'link-active'
})

// register routes
router.map({
  '/': {
    component: resolve => {
      require.ensure([], require => {
        resolve(require('./views/home'))
      }, '/')
    },
    name: 'home'
  },
  'about': {
    component: resolve => {
      require.ensure([], require => {
        resolve(require('./views/about'))
      }, 'about')
    },
    name: 'about'
  },
  'goodsList/:url': {
    component: resolve => {
      require.ensure([], require => {
        resolve(require('./views/goodsList'))
      }, 'goodsList')
    },
    name: 'goodsList'
  },
  'member': {
    component: resolve => {
      require.ensure([], require => {
        resolve(require('./views/member'))
      }, 'member')
    },
    name: 'member'
  }
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

router.afterEach(transition => {
  console.log('成功浏览到: ' + transition.to.path)
})

router.start(App, 'app')
