export const useBusOnline = () => {
    const data = [
        { type: "汉阳区", value: 27 },
        { type: "武昌区", value: 25 },
        { type: "硚口区", value: 18 },
        { type: "江夏区", value: 15 },
        { type: "洪山区", value: 10 },
        { type: "其他", value: 5 },
    ];

    // ECharts玫瑰图配置  武汉各区在线公交数量统计
    const option = {
        legend: {
            textStyle: {
                color: "#fff",
            },
        },
        series: [{
            type: "pie",
            radius: ["10%", "60%"],
            roseType: "radius",
            data: data.map(item => ({ value: item.value, name: item.type })),
            label: {
                color: "#fff",
            },
            // 水平居中，垂直偏下
            center: ['50%', '60%']
        }],
    };

    return {
        data,
        option,
    };
};