<template>
  <video ref="player" :width="width" :height="height" class="video-js" data-setup="{}" v-bind="$attrs">
    <p class="vjs-no-js">
      您的浏览器不支持 video 标签。
    </p>
  </video>
</template>

<script>
import _videojs from 'video.js'
const videojs = window.videojs || _videojs

import 'videojs-flash';
import 'video.js/dist/video-js.min.css';
import video_zhCN from 'video.js/dist/lang/zh-CN.json';
// import SWF_URL from 'videojs-swf/dist/video-js.swf';
// videojs.options.flash.swf = SWF_URL;
videojs.addLanguage('zh-CN', video_zhCN);
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 组件名称 from '组件路径';
export default {
  name: 'hrm-player',
  inheritAttrs: false,
  //引入组件
  props: {
    source: String,
    type: {
      type: String,
      default: 'application/x-mpegURL',
    },
    width: {
      type: Number,
      default: 800,
    },
    height: {
      type: Number,
      default: 600,
    },
    options: {
      type: Object,
      default: () => {},
    },
  },
  //引入混淆
  mixins: [],
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      myPlayer: null,
      defaultOptions: {
        language: 'zh-CN',
        notSupportedMessage: '视频暂时无法播放',
        ...this.options,
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    source(val) {
      if (val) {
        this.changeSource(val, this.type);
      }
    },
  },
  //方法集合
  methods: {
    // 事件绑定
    bindEvent() {
      if (this.myPlayer) {
        for (let listener in this.$listeners) {
          this.myPlayer.on(listener, this.$listeners[listener]);
        }
      }
    },
    // 初始化播放器方法
    initPlayer() {
      let _this = this;
      this.myPlayer = videojs(
        this.$refs.player,
        this.defaultOptions,
        function () {
          videojs.log('初始化成功!');
          _this.bindEvent();
          if (_this.source) {
            _this.changeSource(_this.source, _this.type);
          }
          _this.$emit('init', this)
        }
      );
    },
    // 播放器赋值地址
    changeSource(source, type) {
      if (this.myPlayer) {
        this.myPlayer.reset();
        this.myPlayer.src({
          src: source,
          type: type, // 这个type值必写
        });
        this.myPlayer.play();
      }
    },
    // 播放
    play(){
      if (this.myPlayer) {
        this.myPlayer.play();
      }
    },
    // 暂停
    pause(){
      if (this.myPlayer) {
        this.myPlayer.pause();
      }
    },
    // 获取播放时间
    currentTime(){
      if (this.myPlayer) {
        return this.myPlayer.currentTime();
      }
    },
    // 全屏
    setFullScreen(){
      if (this.myPlayer) {
        this.myPlayer.requestFullscreen();
      }
    },
    // 重置
    reset() {
      if (this.myPlayer) {
        this.myPlayer.reset();
      }
    },
    // 销毁播放器
    dispose() {
      if (this.myPlayer) {
        this.myPlayer.dispose();
        this.myPlayer = null;
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initPlayer();
  },
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 挂载之前
  beforeMount() {},
  //生命周期 - 更新之前
  beforeUpdate() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeDestroy() {},
  //生命周期 - 销毁完成
  destroyed() {
    this.dispose();
  },
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>

<style lang='scss'>
.video-js .vjs-big-play-button {
  display: none;
}
</style>