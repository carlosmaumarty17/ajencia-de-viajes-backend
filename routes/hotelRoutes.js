const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');
const authMiddleware = require('../middleware/authMiddleware');

// Rutas para la gestión de hoteles
router.post('/', authMiddleware, hotelController.crearHotel);
router.get('/', authMiddleware, hotelController.obtenerHoteles);
router.get('/:id', authMiddleware, hotelController.obtenerHotelPorId);
router.put('/:id', authMiddleware, hotelController.actualizarHotel);
router.delete('/:id', authMiddleware, hotelController.eliminarHotel);
router.patch('/:id/estado', authMiddleware, hotelController.cambiarEstadoHotel);

module.exports = router;
