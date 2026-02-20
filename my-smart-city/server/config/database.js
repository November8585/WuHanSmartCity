const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("my_smart_city", "root", "qwerasdf1234", {
    host: "localhost",
    dialect: "mysql",
    logging: null, // 关闭日志打印
});

(async function () {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();
module.exports = sequelize;
