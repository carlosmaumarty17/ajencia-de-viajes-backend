const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Reserva = require('./reserva');

const ContactoEmergencia = sequelize.define('ContactoEmergencia', {
  nombre_completo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'contactos_emergencia'
});

// Establecer la relación entre ContactoEmergencia y Reserva
ContactoEmergencia.belongsTo(Reserva, { foreignKey: 'id_reserva' });
Reserva.hasOne(ContactoEmergencia, { foreignKey: 'id_reserva' });

module.exports = ContactoEmergencia;
