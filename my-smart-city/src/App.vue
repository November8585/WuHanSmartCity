<template>
  <div id="app">
    <!-- 新增头部组件 -->
    <Header />
    <div id="components">
      <RouterView />
    </div>
    <div id="map"></div>
  </div>
</template>

<script>
// 引入mapboxgl依赖
import mapboxgl from 'mapbox-gl'
// 引入L7依赖
import { Scene } from '@antv/l7'
import { Mapbox } from '@antv/l7-maps'
// 引入头部组件
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },

  data() {
    return {
      scene: null,
      map: null,
    };
  },

  mounted() {
    this.initMap();
  },

  methods: {
    initMap() {
      // 获取token
      const token = import.meta.env.VITE_TOKEN;
      mapboxgl.accessToken = token;

      // 创建mapbox地图
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [114.30, 30.50],
        zoom: 10,
        projection: 'globe',
        pitch: 30,
      });

      // 创建L7地图
      const scene = new Scene({
        id: 'map',
        map: new Mapbox({
          mapInstance: map
        }),
        // 消除L7自带logo
        logoVisible: false,
      });

      // 添加特效
      map.on('style.load', () => {
        // 开启雾化
        map.setFog({});
      });

      // 全局注入 将scene和map传给所有子组件
      this.$root.$scene_map = { scene, map };
      // 触发事件，传递地图实例
      this.$root.$emit('map-ready', { scene, map });
      
      // 将token注入全局，供其他组件使用
      this.$root.$token = token;
    },
  },
};
</script>

<style lang="less" scoped>
#components {
  position: absolute;
  z-index: 3;
}

#map {
  width: 100vw;
  height: 100vh;
}
</style>