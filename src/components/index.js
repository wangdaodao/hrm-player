import vueVideojsPlayer from './index.vue'

vueVideojsPlayer.install = function (Vue) {
  Vue.component(vueVideojsPlayer.name, vueVideojsPlayer)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.vueVideojsPlayer = vueVideojsPlayer;
  window.Vue.use(vueVideojsPlayer);
}

export default vueVideojsPlayer
