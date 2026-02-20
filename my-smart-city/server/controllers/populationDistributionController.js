const PopulationDistribution = require("../models/PopulationDistribution.js");

exports.getAll = async (req, res) => {
    try {
        const records = await PopulationDistribution.findAll({
            attributes: ['region', 'value'],
            raw: true,
        });
        res.json(records);
    } catch (error) {
        console.error('获取数据失败', error);
    };
};