"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const AppConfig_1 = require("../AppConfig");
exports.db = new sequelize_1.Sequelize({
    dialect: AppConfig_1.AppConfig.DB_DIALECT,
    host: AppConfig_1.AppConfig.DB_HOST,
    port: AppConfig_1.AppConfig.DB_PORT,
    database: AppConfig_1.AppConfig.DB_NAME,
    username: AppConfig_1.AppConfig.DB_USERNAME,
    password: AppConfig_1.AppConfig.DB_PASSWORD,
});
//# sourceMappingURL=db.js.map