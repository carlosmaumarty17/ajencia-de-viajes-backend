const Hotel = require('../models/hotel');

exports.crearHotel = async (req, res) => {
  try {
    const { nombre, direccion, ciudad, descripcion } = req.body;
    const hotel = await Hotel.create({ nombre, direccion, ciudad, descripcion });
    res.status(201).json(hotel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el hotel.' });
  }
};

exports.obtenerHoteles = async (req, res) => {
  try {
    const hoteles = await Hotel.findAll();
    res.json(hoteles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los hoteles.' });
  }
};

exports.obtenerHotelPorId = async (req, res) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel no encontrado.' });
    }
    res.json(hotel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el hotel.' });
  }
};

exports.actualizarHotel = async (req, res) => {
  try {
    const { nombre, direccion, ciudad, descripcion } = req.body;
    const hotel = await Hotel.findByPk(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel no encontrado.' });
    }
    hotel.nombre = nombre;
    hotel.direccion = direccion;
    hotel.ciudad = ciudad;
    hotel.descripcion = descripcion;
    await hotel.save();
    res.json(hotel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el hotel.' });
  }
};

exports.eliminarHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel no encontrado.' });
    }
    await hotel.destroy();
    res.json({ message: 'Hotel eliminado.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el hotel.' });
  }
};

exports.cambiarEstadoHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel no encontrado.' });
    }
    hotel.estado = !hotel.estado;
    await hotel.save();
    res.json(hotel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al cambiar el estado del hotel.' });
  }
};
