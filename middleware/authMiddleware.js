const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Obtener el token de autorización de los encabezados de la solicitud
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado. Token no proporcionado.' });
  }

  // Verificar el token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token no válido.' });
    }

    // Si el token es válido, almacenar los datos del usuario en la solicitud
    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;
