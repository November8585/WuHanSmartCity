export const usePeopleOutDoor = () => {
    const data = [
        { type: "汉阳区", value: 10000 },
        { type: "武昌区", value: 20000 },
        { type: "洪山区", value: 50000 },
        { type: "江夏区", value: 30000 },
        { type: "江岸区", value: 40000 },
    ];

    // ECharts柱状图配置 武汉各区今日出行人口统计
    const option = {
        xAxis: {
            type: "category",
            data: data.map(item => item.type),
            axisLabel: {
                color: "#fff",
            },
        },
        yAxis: {
            type: "value",
            axisLabel: {
                color: "#fff",
            },
        },
        series: [{
            data: data.map(item => item.value),
            type: "bar",
            itemStyle: {
                color: function (params) {
                    const colors = params.value
                    if (params.value > 40000) {
                        return "#ff4d4f"; // 红色
                    } else if (params.value > 20000) {
                        return "#faad14"; // 黄色
                    } else {
                        return "#52c41a"; // 绿色
                    };
                },
            },
        }],
        grid: {
            containLabel: true,
            top: '5%',      // 上边距
            bottom: '5%',   // 下边距
            left: '5%',      // 左边距
            right: '5%',     // 右边距
        },
    };

    return {
        data,
        option,
    };
};