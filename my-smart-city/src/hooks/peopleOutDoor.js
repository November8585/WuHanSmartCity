import request from "../utils/request";

export const usePeopleOutdoor = async () => {
    try {
        const data = await request.get("people_outdoor");

        // ECharts柱状图配置 武汉各区今日出行人口统计
        const option = {
            xAxis: {
                type: "category",
                data: data.map(item => item.region),
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
                        if (params.value > 500000) {
                            return "#ff4d4f"; // 红色
                        } else if (params.value > 200000) {
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
    } catch (error) {
        console.error('获取数据失败', error);
        // 返回空数据或默认配置，避免页面崩溃
        return { data: [], option: { series: [] } };
    };
};