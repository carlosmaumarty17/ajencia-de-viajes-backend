const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Hotel = require('./hotel');

const Habitacion = sequelize.define('Habitacion', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  costo_base: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  impuestos: {
    type: DataTypes.DECIMAL(10, 2),
  },
  tipo: {
    type: DataTypes.STRING,
  },
  ubicacion: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,  // TRUE para habilitada, FALSE para deshabilitada
  },
}, {
  timestamps: true,
  tableName: 'habitaciones'
});

// Establecer la relación entre Hotel y Habitacion
Habitacion.belongsTo(Hotel, { foreignKey: 'id_hotel' });
Hotel.hasMany(Habitacion, { foreignKey: 'id_hotel' });

module.exports = Habitacion;
