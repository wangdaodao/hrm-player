import hrmPlayer from './index.vue'

hrmPlayer.install = function (Vue) {
  Vue.component(hrmPlayer.name, hrmPlayer)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.hrmPlayer = hrmPlayer;
  window.Vue.use(hrmPlayer);
}

export default hrmPlayer
