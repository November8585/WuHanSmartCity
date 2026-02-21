<template>
    <div>
        <div class="chartLeft">
            <Panel>
                <template v-slot:header>
                    武汉各区今日出行人口统计
                </template>
                <div class="H100">
                    <v-chart :option="peopleOutdoorOption" class="W100 H100" />
                </div>
            </Panel>
            <Panel>
                <template v-slot:header>
                    武汉各区实时公交在线表
                </template>
                <div class="H100">
                    <v-chart :option="busOnlineOption" class="W100 H100" />
                </div>
            </Panel>
        </div>

        <div class="chartRight">
            <Panel>
                <template v-slot:header>
                    武汉人口分布统计
                </template>
                <div class="H100">
                    <v-chart :option="populationDistributionOption" class="W100 H100" />
                </div>
            </Panel>
            <PanelSmall>
                <template v-slot:header>
                    武汉三甲医院
                </template>
                <div class="hospital H100">
                    <div class="data-item" v-for="(item, index) in (hospitalData && hospitalData.children) || []"
                        :key="index">
                        <p>
                            {{ item.title }}
                            <span>{{ item.amount }}{{ item.unit }}</span>
                        </p>
                        <img :src="getImageUrl(item.imgSrc)" :alt="item.title">
                    </div>
                </div>
            </PanelSmall>
            <PanelSmall>
                <template v-slot:header>
                    武汉高校学生统计
                </template>
                <div class="university H100">
                    <div class="data-item" v-for="(item, index) in (universityData && universityData.children) || []"
                        :key="index">
                        <p>
                            {{ item.title }}
                            <span>{{ item.amount }}{{ item.unit }}</span>
                        </p>
                        <img :src="getImageUrl(item.imgSrc)" :alt="item.title">
                    </div>
                </div>
            </PanelSmall>
        </div>
    </div>
</template>

<script>
import Panel from './components/Panel.vue';
import PanelSmall from './components/PanelSmall.vue';
import { useBusOnline } from '../../hooks/busOnline';
import { usePeopleOutdoor } from '../../hooks/peopleOutDoor';
import { usePopulationDistribution } from '../../hooks/populationDistribution';

export default {
    name: 'Chart',
    components: {
        Panel,
        PanelSmall,
    },

    data() {
        const { option: busOnlineOption } = useBusOnline();
        const { option: peopleOutdoorOption } = usePeopleOutdoor();
        const { option: populationDistributionOption } = usePopulationDistribution();
        return {
            busOnlineOption,
            peopleOutdoorOption,
            populationDistributionOption,
            hospitalData: null, // 用于存储医院数据
            universityData: null, // 用于存储高校数据
        };
    },

    async mounted() {
        const 
        [
            busOnlineResult,
            peopleOutdoorResult,
            populationDistributionResult
        ] = await Promise.allSettled([
            useBusOnline(),
            usePeopleOutdoor(),
            usePopulationDistribution(),
        ]);

        if (busOnlineResult.status === 'fulfilled') {
            this.busOnlineOption = busOnlineResult.value.option;
        };
        if (peopleOutdoorResult.status === 'fulfilled') {
            this.peopleOutdoorOption = peopleOutdoorResult.value.option;
        };
        if (populationDistributionResult.status === 'fulfilled') {
            this.populationDistributionOption = populationDistributionResult.value.option;
        }

        this.loadHospitalData();
        this.loadUniversityData();
    },

    methods: {
        async loadHospitalData() {
            try {
                // 使用this.$utils.getFileJson获取数据
                const hospitalData = await this.$utils.getFileJson(this.$baseUrl + 'json/virtualData/sanJiaHospitals.json');
                this.hospitalData = hospitalData; // 将数据存储在组件的data中，以便后续使用
            } catch (error) {
                console.error('加载医院数据失败:', error);
            };
        },

        async loadUniversityData() {
            try {
                // 使用this.$utils.getFileJson获取数据
                const universityData = await this.$utils.getFileJson(this.$baseUrl + 'json/virtualData/universityStudents.json');
                this.universityData = universityData; // 将数据存储在组件的data中，以便后续使用
            } catch (error) {
                console.error('加载高校数据失败:', error);
            };
        },

        getImageUrl(imgName) {
            // 直接调用工具类的方法
            if (this.$utils && this.$utils.getImageUrl) {
                return this.$utils.getImageUrl(imgName);
            }
            console.warn('工具类getImageUrl方法不可用');
            return '';
        }
    },
}
</script>

<style lang="less" scoped>
.chartLeft {
    width: 27vw;
    position: absolute;
    top: 5vh;
    left: 3vw;
}

.chartRight {
    width: 27vw;
    position: absolute;
    top: 5vh;
    left: 74vw;
}

// 通用数据展示面板样式
.data-panel {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
}

// 数据项通用样式
.data-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
}

// 文字样式
.data-item p {
    margin: 0;
    font-size: 14px;
    white-space: nowrap;
}

.data-item p span {
    margin-left: 5px;
    color: #34d63f;
}

// 图片样式
.data-item img {
    margin-top: 10px;
    max-width: 50px;
    max-height: 50px;
    object-fit: contain;
}

// 应用到具体的面板
.hospital,
.university {
    .data-panel; // 应用通用面板样式

    .hospitalItem,
    .universityItem {
        .data-item; // 应用通用数据项样式
    }
}

// 工具类
.W100 {
    width: 100% !important;
}

.H100 {
    height: 100% !important;
}

/* 确保v-chart容器正确显示 */
.v-charts {
    width: 100%;
    height: 100%;
}
</style>