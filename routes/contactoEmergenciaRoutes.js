const express = require('express');
const router = express.Router();
const contactoEmergenciaController = require('../controllers/contactoEmergenciaController');
const authMiddleware = require('../middleware/authMiddleware');

// Rutas para la gestión de contactos de emergencia
router.post('/', authMiddleware, contactoEmergenciaController.crearContactoEmergencia);
router.get('/', authMiddleware, contactoEmergenciaController.obtenerContactosEmergencia);
router.get('/:id', authMiddleware, contactoEmergenciaController.obtenerContactoEmergenciaPorId);
router.put('/:id', authMiddleware, contactoEmergenciaController.actualizarContactoEmergencia);
router.delete('/:id', authMiddleware, contactoEmergenciaController.eliminarContactoEmergencia);

module.exports = router;
