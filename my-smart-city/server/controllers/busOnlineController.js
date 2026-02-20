const BusOnline = require("../models/BusOnline.js");

exports.getAll = async (req, res) => {
    try {
        // 从数据库查询所有记录
        const records = await BusOnline.findAll({
            attributes: ['region', 'value'], // 只返回需要的字段，不包含 id 和时间戳
            raw: true,                        // 返回纯 JSON 对象，而不是模型实例
        });
        // 直接返回数组
        res.json(records);
    } catch (error) {
        console.error('获取数据失败', error);
    };
};
