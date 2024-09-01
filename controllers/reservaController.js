const Reserva = require('../models/reserva');

exports.crearReserva = async (req, res) => {
  try {
    const { fecha_entrada, fecha_salida, cantidad_personas, id_habitacion, id_usuario } = req.body;
    const reserva = await Reserva.create({ fecha_entrada, fecha_salida, cantidad_personas, id_habitacion, id_usuario });
    res.status(201).json(reserva);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la reserva.' });
  }
};

exports.obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll();
    res.json(reservas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las reservas.' });
  }
};

exports.obtenerReservaPorId = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) {
      return res.status(404).json({ message: 'Reserva no encontrada.' });
    }
    res.json(reserva);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la reserva.' });
  }
};

exports.actualizarReserva = async (req, res) => {
  try {
    const { fecha_entrada, fecha_salida, cantidad_personas } = req.body;
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) {
      return res.status(404).json({ message: 'Reserva no encontrada.' });
    }
    reserva.fecha_entrada = fecha_entrada;
    reserva.fecha_salida = fecha_salida;
    reserva.cantidad_personas = cantidad_personas;
    await reserva.save();
    res.json(reserva);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la reserva.' });
  }
};

exports.eliminarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) {
      return res.status(404).json({ message: 'Reserva no encontrada.' });
    }
    await reserva.destroy();
    res.json({ message: 'Reserva eliminada.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la reserva.' });
  }
};
