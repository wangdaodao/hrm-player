<template>
  <div id="app">
    <button id="rtmp" @click="change(1)">RTMP</button>
    <button id="mp4" @click="change(2)">MP4</button>
    <button id="hls" @click="change(3)">HLS</button>
    <button @click="pause">pause</button>
    <button @click="play">play</button>
    <button id="full" @click="setFullScreen">setFullScreen</button>
    <hrm-player :width="900" :height="500" :muted="true" :autoplay="true" :controls="true" ref="myPlayer" @init="aaa" :source="src" :type="type" />
  </div>
</template>

<script>
import hrmPlayer from '../src/components/index.js';

export default {
  name: 'App',
  components: {
    hrmPlayer,
  },
  data() {
    return {
      type: '',
      src: '',
    };
  },
  methods: {
    aaa(obj){
      console.log('a',obj)
    },
    change(val) {
      switch (val) {
        case 1:
          this.src = 'rtmp://58.200.131.2:1935/livetv/cctv1';
          this.type = 'rtmp/flv'
          break;
        case 2:
          this.src = 'http://resource.wangdaodao.com/402670506.mp4';
          this.type = 'video/mp4';
          break;
        case 3:
          this.src = 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8';
          this.type = 'application/x-mpegURL';
          break;
      }
    },
    pause(){
      this.$refs.myPlayer.pause()
    },
    play(){
      this.$refs.myPlayer.play()
    },
    setFullScreen(){
      this.$refs.myPlayer.setFullScreen()
    },
  },
};
</script>
