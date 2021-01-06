import videojsPlayer from './index.vue'

videojsPlayer.install = function (Vue) {
  Vue.component(videojsPlayer.name, videojsPlayer)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.videojsPlayer = videojsPlayer;
  window.Vue.use(videojsPlayer);
}

export default videojsPlayer
