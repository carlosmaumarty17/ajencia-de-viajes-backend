const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Habitacion = require('./habitacion');
const Usuario = require('./usuario');

const Reserva = sequelize.define('Reserva', {
  fecha_entrada: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fecha_salida: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  cantidad_personas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,  // Ejemplo: confirmada, cancelada, etc.
  },
}, {
  timestamps: true,
  tableName: 'reservas'
});

// Establecer las relaciones entre Reserva, Habitacion y Usuario
Reserva.belongsTo(Habitacion, { foreignKey: 'id_habitacion' });
Habitacion.hasMany(Reserva, { foreignKey: 'id_habitacion' });

Reserva.belongsTo(Usuario, { foreignKey: 'id_usuario' });
Usuario.hasMany(Reserva, { foreignKey: 'id_usuario' });

module.exports = Reserva;
