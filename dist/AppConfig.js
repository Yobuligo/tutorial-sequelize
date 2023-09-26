"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
const dotenv_1 = require("dotenv");
let needsInitialize;
if (needsInitialize !== false) {
    needsInitialize = false;
    (0, dotenv_1.configDotenv)();
}
exports.AppConfig = {
    DB_DIALECT: process.env.DB_DIALECT,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: parseInt(process.env.DB_PORT),
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    SERVER_PORT: parseInt(process.env.SERVER_PORT),
};
//# sourceMappingURL=AppConfig.js.map