const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usuarioRoutes = require('./routes/usuarioRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const habitacionRoutes = require('./routes/habitacionRoutes');
const reservaRoutes = require('./routes/reservaRoutes');
const contactoEmergenciaRoutes = require('./routes/contactoEmergenciaRoutes');
const sequelize = require('./config/database');

app.use(bodyParser.json());
app.use('/usuarios', usuarioRoutes);
app.use('/hoteles', hotelRoutes);
app.use('/habitaciones', habitacionRoutes);
app.use('/reservas', reservaRoutes);
app.use('/contactos-emergencia', contactoEmergenciaRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
