const PeopleOutdoor = require("../models/PeopleOutdoor.js");

exports.getAll = async (req, res) => {
    try {
        const records = await PeopleOutdoor.findAll({
            attributes: ['region', 'value'],
            raw: true,
        });
        res.json(records);
    } catch (error) {
        console.error('获取数据失败', error);
    };
};