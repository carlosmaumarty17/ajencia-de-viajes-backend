const express = require('express');
const router = express.Router();
const habitacionController = require('../controllers/habitacionController');
const authMiddleware = require('../middleware/authMiddleware');

// Rutas para la gestión de habitaciones
router.post('/', authMiddleware, habitacionController.crearHabitacion);
router.get('/', authMiddleware, habitacionController.obtenerHabitaciones);
router.get('/:id', authMiddleware, habitacionController.obtenerHabitacionPorId);
router.put('/:id', authMiddleware, habitacionController.actualizarHabitacion);
router.delete('/:id', authMiddleware, habitacionController.eliminarHabitacion);
router.patch('/:id/estado', authMiddleware, habitacionController.cambiarEstadoHabitacion);

module.exports = router;
