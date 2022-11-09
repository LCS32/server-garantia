"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('garantias', 'root', 'chorvi', {
    host: 'chorvi.duckdns.org',
    dialect: "mysql",
    port: 2305,
    // logging: false, hace de desaparezca SELECT 1+1 AS result
});
exports.default = sequelize;
