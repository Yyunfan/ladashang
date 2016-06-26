export default {
  name: 'about',
  exact: true,
  title: 'about',
  component: resolve => {
    require.ensure([], require => {
      resolve(require('../views/about'))
    }, 'about')
  }
}
