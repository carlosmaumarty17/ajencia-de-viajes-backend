const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Hotel = sequelize.define('Hotel', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  ciudad: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,  // TRUE para habilitado, FALSE para deshabilitado
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true,
  tableName: 'hoteles'
});

module.exports = Hotel;
