import db from '../db/connection';
import { DataTypes } from 'sequelize'

const Garantia = db.define('Garantia', {
    fecha: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    marca: {
        type: DataTypes.STRING
    },
    modelo: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    distribuidor: {
        type: DataTypes.STRING
    },
    tramitada: {
        type: DataTypes.BOOLEAN
    },
    fechaTramitada: {
        type: DataTypes.STRING
    },
    aceptada: {
        type: DataTypes.BOOLEAN
    },
    fechaAceptada: {
        type: DataTypes.STRING
    },
    entregada: {
        type: DataTypes.BOOLEAN
    },
    fechaEntregada: {
        type: DataTypes.STRING
    },
    files: {
        type: DataTypes.BLOB
    }
}, {
        createdAt: false,
        updatedAt: false,
        tableName: 'garantias',
    });

export default Garantia;