<template>
    <div class="navigationControl" @click="toggleNavigation">
        {{ navigationIcon }}
    </div>
</template>

<script>
import { Fullscreen, Logo, MouseLocation, Zoom, MapTheme, } from '@antv/l7';
import logoImage from '@/assets/images/ViewLogo.png'

export default {
    name: 'MapControl',
    data() {
        return {
            map: null,
            scene: null,
            navigationVisible: true,
            navigationIcon: '<',
            navigation: null,
        };
    },

    mounted() {
        // 如果地图实例已存在，立即初始化
        if (this.$root.$scene_map) {
            this.initControls(this.$root.$scene_map);
        } else {
            // 否则监听一次 map-ready 事件
            this.$root.$once('map-ready', this.initControls);
        };
    },

    methods: {
        // 初始化地图控件
        initControls({ scene, map }) {
            this.scene = scene;
            this.map = map;

            if (scene.loaded) {
                this.addControls();
            } else {
                scene.on('load', this.addControls);
            };
        },

        // 添加地图控件
        addControls() {
            // 第一个地图控件 Logo (增加地图自身Logo)
            const logo = new Logo({
                img: logoImage,
                href: 'https://www.yuque.com/magazinestar/openlayers?# 《OpenLayers》',
                position: 'bottomleft',
            });
            this.scene.addControl(logo);

            // 第二个地图控件 Zoom (控制地图放大缩小)
            const zoom = new Zoom({
                zoomInTitle: '放大',
                zoomOutTitle: '缩小',
                position: 'bottomright',
            });
            this.scene.addControl(zoom);

            // 第三个地图控件 fullScreen (控制地图全屏显示)
            const fullScreen = new Fullscreen({
                btnText: '全屏',
                exitBtnText: '退出全屏',
            });
            this.scene.addControl(fullScreen);

            // 第四个地图控件 mouseLocation (显示当前鼠标位置)
            const mouseLocation = new MouseLocation({
                transform: (position) => {
                    return position.map(item => item.toFixed(5))
                },
                position: 'bottomleft',
            });
            this.scene.addControl(mouseLocation);

            // 第五个 MapTheme (控件切换多种地图样式)
            const mapTheme = new MapTheme({
                options: [
                    {
                        text: 'streets',
                        value: 'mapbox://styles/mapbox/streets-v12',
                        img: new URL('@/assets/images/Layer/streets-v12.png', import.meta.url).href
                    }, {
                        text: 'outdoors',
                        value: 'mapbox://styles/mapbox/outdoors-v12',
                        img: new URL('@/assets/images/Layer/outdoors-v12.png', import.meta.url).href
                    }, {
                        text: 'light',
                        value: 'mapbox://styles/mapbox/light-v11',
                        img: new URL('@/assets/images/Layer/light-v11.png', import.meta.url).href
                    }, {
                        text: 'dark',
                        value: 'mapbox://styles/mapbox/dark-v11',
                        img: new URL('@/assets/images/Layer/dark-v11.png', import.meta.url).href
                    }, {
                        text: 'satellite',
                        value: 'mapbox://styles/mapbox/satellite-v9',
                        img: new URL('@/assets/images/Layer/satellite-v9.png', import.meta.url).href
                    }, {
                        text: 'satellite-streets',
                        value: 'mapbox://styles/mapbox/satellite-streets-v12',
                        img: new URL('@/assets/images/Layer/satellite-streets-v12.png', import.meta.url).href
                    },
                ],
            });
            this.scene.addControl(mapTheme);

            // 导航插件
            const token = this.$root.$token;
            if (token) {
                this.navigation = new MapboxDirections({
                    accessToken: token,
                });
                this.map.addControl(this.navigation, 'top-left');
            } else {
                console.warn('token错误');
            };
        },

        toggleNavigation() {
            if (!this.navigation) {
                return;
            };
            if (this.navigationVisible) {
                this.map.removeControl(this.navigation);
                this.navigationIcon = '>';
            } else {
                this.map.addControl(this.navigation, "top-left");
                this.navigationIcon = '<';
            };
            this.navigationVisible = !this.navigationVisible;
        },
    },
};
</script>

<style lang="less" scoped>
.navigationControl {
    position: absolute;
    left: 0;
    top: 140px;
    width: 18px;
    height: 27px;
    background-color: #fff;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    user-select: none;
    padding-left: 9px;
    z-index: 10;
};
</style>