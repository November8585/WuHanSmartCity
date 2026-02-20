import request from "../utils/request";

export const usePopulationDistribution = async () => {
    try {
        const data = await request.get("population_distribution");

        // ECharts饼图配置 武汉各区人口分布统计
        const option = {
            legend: {
                textStyle: {
                    color: "#fff",
                },
            },
            series: [{
                type: "pie",
                radius: "60%",
                data: data.map(item => ({ value: item.value, name: item.region })),
                label: {
                    color: "#fff",
                },
                // 水平偏右，垂直偏下
                center: ['55%', '70%']
            }],
        };

        return {
            data,
            option,
        };
    } catch (error) {
        console.error('获取数据失败', error);
        // 返回空数据或默认配置，避免页面崩溃
        return { data: [], option: { series: [] } };
    };
};