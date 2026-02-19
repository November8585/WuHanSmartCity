export const usePopulationDistribution = () => {
    const data = [
        { type: "洪山区", value: 271.88 },
        { type: "江夏区", value: 146.85 },
        { type: "武昌区", value: 128.18 },
        { type: "黄陂区", value: 125.06 },
        { type: "蔡甸区", value: 112.10 },
        { type: "江岸区", value: 105.13 },
        { type: "新洲区", value: 93.61 },
        { type: "东西湖区", value: 92.58 },
        { type: "汉阳区", value: 90.08 },
        { type: "硚口区", value: 75.02 },
        { type: "江汉区", value: 69.07 },
        { type: "青山区", value: 51.30 },
        { type: "汉南区", value: 20.05 },
    ];

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
            data: data.map(item => ({ value: item.value, name: item.type })),
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
};