<template>
  <div>
    <Chart />
    <MapControl />
    <SmartCity />
  </div>
</template>

<script>
import Chart from './Chart/Chart.vue';
import MapControl from '../components/MapControl.vue';
import SmartCity from '../components/SmartCity.vue';

export default {
  name: 'HomeView',
  components: {
    Chart,        
    MapControl,
    SmartCity,
  }
}
</script>

<style lang="less" scoped>

</style>
