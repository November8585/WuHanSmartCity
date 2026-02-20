import request from "../utils/request.js";

export const useBusOnline = async () => {
    try {
        const data = await request.get('bus_online');

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
                data: data.map(item => ({ value: item.value, name: item.region })),
                label: {
                    show: true,
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
    } catch (error) {
        console.error('获取数据失败', error);
        // 返回空数据或默认配置，避免页面崩溃
        return { data: [], option: { series: [] } };
    };
};