# Agencia de Viajes Backend

Este es el backend de la aplicación de gestión de hoteles para la Agencia de Viajes. Desarrollado con Node.js y Express, este servicio proporciona una API RESTful para gestionar usuarios, hoteles, habitaciones, reservas y contactos de emergencia.

## Tecnologías Utilizadas

- **Node.js** con **Express.js**
- **MySQL** como base de datos
- **Sequelize** como ORM
- **JWT (JSON Web Tokens)** para autenticación
- **Jest** para pruebas (opcional)

## Estructura del Proyecto

- `models/` - Definición de los modelos de la base de datos (Usuario, Hotel, Habitación, Reserva, ContactoEmergencia).
- `controllers/` - Controladores que manejan la lógica de negocio para cada recurso.
- `routes/` - Definición de rutas para manejar las solicitudes HTTP.
- `middleware/` - Middleware para autenticación y manejo de errores.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/agencia-viajes-backend.git
