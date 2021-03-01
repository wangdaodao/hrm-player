import hrmPlayer from './index.vue'

hrmPlayer.install = function (Vue) {
  Vue.component(hrmPlayer.name, hrmPlayer)
}

export default hrmPlayer