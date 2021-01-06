<template>
  <div id="app">
    <button @click="change(1)">RTMP</button>
    <button @click="change(2)">MP4</button>
    <button @click="change(3)">HLS</button>
    <hrm-player :width="900" :height="500" :muted="true" :autoplay="true" :controls="true" ref="myPlayer" :source="src" :type="type" />
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
      type: null,
      src: '',
    };
  },
  methods: {
    change(val) {
      switch (val) {
        case 1:
          this.src = 'rtmp://58.200.131.2:1935/livetv/btv1';
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
  },
};
</script>
