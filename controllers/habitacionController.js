const Habitacion = require('../models/habitacion');

exports.crearHabitacion = async (req, res) => {
  try {
    const { nombre, costo_base, impuestos, tipo, ubicacion, id_hotel } = req.body;
    const habitacion = await Habitacion.create({ nombre, costo_base, impuestos, tipo, ubicacion, id_hotel });
    res.status(201).json(habitacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la habitación.' });
  }
};

exports.obtenerHabitaciones = async (req, res) => {
  try {
    const habitaciones = await Habitacion.findAll();
    res.json(habitaciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las habitaciones.' });
  }
};

exports.obtenerHabitacionPorId = async (req, res) => {
  try {
    const habitacion = await Habitacion.findByPk(req.params.id);
    if (!habitacion) {
      return res.status(404).json({ message: 'Habitación no encontrada.' });
    }
    res.json(habitacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la habitación.' });
  }
};

exports.actualizarHabitacion = async (req, res) => {
  try {
    const { nombre, costo_base, impuestos, tipo, ubicacion } = req.body;
    const habitacion = await Habitacion.findByPk(req.params.id);
    if (!habitacion) {
      return res.status(404).json({ message: 'Habitación no encontrada.' });
    }
    habitacion.nombre = nombre;
    habitacion.costo_base = costo_base;
    habitacion.impuestos = impuestos;
    habitacion.tipo = tipo;
    habitacion.ubicacion = ubicacion;
    await habitacion.save();
    res.json(habitacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la habitación.' });
  }
};

exports.eliminarHabitacion = async (req, res) => {
  try {
    const habitacion = await Habitacion.findByPk(req.params.id);
    if (!habitacion) {
      return res.status(404).json({ message: 'Habitación no encontrada.' });
    }
    await habitacion.destroy();
    res.json({ message: 'Habitación eliminada.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la habitación.' });
  }
};

exports.cambiarEstadoHabitacion = async (req, res) => {
  try {
    const habitacion = await Habitacion.findByPk(req.params.id);
    if (!habitacion) {
      return res.status(404).json({ message: 'Habitación no encontrada.' });
    }
    habitacion.estado = !habitacion.estado;
    await habitacion.save();
    res.json(habitacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al cambiar el estado de la habitación.' });
  }
};
