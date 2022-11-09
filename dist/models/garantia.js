"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Garantia = connection_1.default.define('Garantia', {
    fecha: {
        type: sequelize_1.DataTypes.STRING
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    marca: {
        type: sequelize_1.DataTypes.STRING
    },
    modelo: {
        type: sequelize_1.DataTypes.STRING
    },
    color: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    distribuidor: {
        type: sequelize_1.DataTypes.STRING
    },
    tramitada: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    fechaTramitada: {
        type: sequelize_1.DataTypes.STRING
    },
    aceptada: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    fechaAceptada: {
        type: sequelize_1.DataTypes.STRING
    },
    entregada: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    fechaEntregada: {
        type: sequelize_1.DataTypes.STRING
    },
    files: {
        type: sequelize_1.DataTypes.BLOB
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'garantias',
});
exports.default = Garantia;
