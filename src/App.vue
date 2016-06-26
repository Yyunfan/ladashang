<template>
  <router-view class="router-view"
    transition="router-view-transition"
    keep-alive>
  </router-view>
  <fm-footer></fm-footer>
</template>

<script>
import FmFooter from './views/fm-footer'
// import { routes } from './routes'
export default {
  name: 'App',
  components: {
    FmFooter
  }
}

// function walkRoutes (routes, filter) {
//   if (!routes) {
//     return []
//   }
//   return Object.keys(routes)
//   .filter(key => !routes[key].hidden)
//   .filter(key => filter(key, routes[key]))
//   .map(key => {
//     const route = routes[key]
//     return {
//       path: route.path || key,
//       name: route.name,
//       exact: route.exact,
//       icon: route.icon,
//       title: this.__(route.title)
//       // comment out for subRoutes
//       // ,subRoutes: walkRoutes.call(this, route.subRoutes, filter)
//     }
//   })
// }
</script>
<style src="./styles/reset.css"></style>
<style src="./styles/la_index.css"></style>
<style>
  .router-view {
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
  }
  .router-view-transition-enter,
  .router-view-transition-leave {
    opacity: 0;
    -webkit-transform: translate3d(0, 1rem, 0);
    transform: translate3d(0, 1rem, 0);
  }
</style>
