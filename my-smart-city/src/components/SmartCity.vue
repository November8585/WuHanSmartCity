<template>
    <div>
        <!-- 构造城市场景组件 -->
    </div>
</template>

<script>
import { CityBuildingLayer, LineLayer, LayerSwitch } from '@antv/l7';
import axios from 'axios';

export default {
    name: 'SmartCity',
    data() {
        return {
            scene: null,
        };
    },

    mounted() {
        if (this.$root.$scene_map) {
            this.initCityScene(this.$root.$scene_map);
        } else {
            this.$root.$once('map-ready', this.initCityScene);
        };
    },

    methods: {
        // 初始化城市场景
        initCityScene({ scene }) {
            this.scene = scene;

            if (scene.loaded) {
                this.addLayers();
            } else {
                scene.on('load', this.addLayers);
            };
        },

        // 添加图层
        async addLayers() {
            try {
                // 并发请求建筑和道路数据
                const [buildingData, roadData] = await Promise.all([
                    this.fetchBuildingData(),
                    this.fetchRoadData(),
                ]);

                // 建筑图层
                const buildingLayer = this.createBuildingLayer(buildingData);
                this.scene.addLayer(buildingLayer);
                // 道路图层
                const roadLayer = this.createRoadLayer(roadData);
                this.scene.addLayer(roadLayer);

                const layerSwitch = new LayerSwitch({
                    title: '图层目录',
                    btnText: '切换图层',
                    position: 'topright',
                    showBaseLayer: false,
                    layers: [buildingLayer, roadLayer],
                });
                this.scene.addControl(layerSwitch);
            } catch (error) {
                console.error('加载图层失败:', error);
            };
        },

        // 获取建筑数据
        async fetchBuildingData() {
            const url = this.apiURL('wuhan_buildings');
            const response = await axios.get(url);
            return response.data;
        },
        // 获取道路数据
        async fetchRoadData() {
            const url = this.apiURL('wuhan_roads');
            const response = await axios.get(url);
            return response.data;
        },

        // 创建建筑图层
        createBuildingLayer(data) {
            const wuhanBuildingLayer = new CityBuildingLayer({ name: '武汉建筑' });
            wuhanBuildingLayer
                .source(data)
                .color('rgba(242,242,250,1.0)')
                .animate(true)
                .active({ color: '#0ff', mix: 0.5 })
                .style({
                    opacity: 0.7,
                    baseColor: 'rgb(16, 16, 16)',
                    windowColor: 'rgb(130, 160, 189)',
                    brightColor: 'rgb(255, 176, 38)',
                    sweep: {
                        enable: true,
                        sweepRadius: 2,
                        sweepColor: '#1990FF',
                        sweepSpeed: 0.5,
                        sweepCenter: [114.30, 30.50],
                    },
                });
            return wuhanBuildingLayer;
        },
        // 创建道路图层
        createRoadLayer(data) {
            const colors = [
                '#816CAD',
                '#A67FB5',
                '#C997C7',
                '#DEB8D4',
                '#F5D4E6',
                '#FAE4F1',
                '#FFF3FC',
            ];
            const wuhanRoadLayer = new LineLayer({ name: '武汉道路' });
            wuhanRoadLayer
                .source(data)
                .size(1)
                .shape('line')
                .color('type', colors)
                .animate({
                    interval: 1,
                    duration: 2,
                    trailLength: 2,
                });
            return wuhanRoadLayer;
        },

        apiURL(name) {
            return `/json/${name}.json`;
        },
    },
};
</script>

<style lang="less" scoped></style>