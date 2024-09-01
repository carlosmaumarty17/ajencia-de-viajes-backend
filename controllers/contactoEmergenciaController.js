const ContactoEmergencia = require('../models/contactoEmergencia');

exports.crearContactoEmergencia = async (req, res) => {
  try {
    const { nombres_completos, telefono_contacto, id_reserva } = req.body;
    const contacto = await ContactoEmergencia.create({ nombres_completos, telefono_contacto, id_reserva });
    res.status(201).json(contacto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el contacto de emergencia.' });
  }
};

exports.obtenerContactosEmergencia = async (req, res) => {
  try {
    const contactos = await ContactoEmergencia.findAll();
    res.json(contactos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los contactos de emergencia.' });
  }
};

exports.obtenerContactoEmergenciaPorId = async (req, res) => {
  try {
    const contacto = await ContactoEmergencia.findByPk(req.params.id);
    if (!contacto) {
      return res.status(404).json({ message: 'Contacto de emergencia no encontrado.' });
    }
    res.json(contacto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el contacto de emergencia.' });
  }
};

exports.actualizarContactoEmergencia = async (req, res) => {
  try {
    const { nombres_completos, telefono_contacto } = req.body;
    const contacto = await ContactoEmergencia.findByPk(req.params.id);
    if (!contacto) {
      return res.status(404).json({ message: 'Contacto de emergencia no encontrado.' });
    }
    contacto.nombres_completos = nombres_completos;
    contacto.telefono_contacto = telefono_contacto;
    await contacto.save();
    res.json(contacto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el contacto de emergencia.' });
  }
};

exports.eliminarContactoEmergencia = async (req, res) => {
  try {
    const contacto = await ContactoEmergencia.findByPk(req.params.id);
    if (!contacto) {
      return res.status(404).json({ message: 'Contacto de emergencia no encontrado.' });
    }
    await contacto.destroy();
    res.json({ message: 'Contacto de emergencia eliminado.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el contacto de emergencia.' });
  }
};
