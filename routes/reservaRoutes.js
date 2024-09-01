const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');
const authMiddleware = require('../middleware/authMiddleware');

// Rutas para la gestión de reservas
router.post('/', authMiddleware, reservaController.crearReserva);
router.get('/', authMiddleware, reservaController.obtenerReservas);
router.get('/:id', authMiddleware, reservaController.obtenerReservaPorId);
router.put('/:id', authMiddleware, reservaController.actualizarReserva);
router.delete('/:id', authMiddleware, reservaController.eliminarReserva);

module.exports = router;
