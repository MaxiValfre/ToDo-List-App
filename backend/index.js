const express = require('express');
const cors = require('cors');
const categoryRoutes = require('./routes/categoryRoutes.js');
const { Sequelize } = require('sequelize');
const config = require('./config/config.json');
const models = require('./models')
const app = express();

app.use(cors());
app.use(express.json());

const sequelize = new Sequelize(config.development);

sequelize.sync().then(() => {
    console.log('Modelos sincronizados con la base de datos');
  }).catch(err => {
    console.error('Error al sincronizar modelos:', err);
  });

sequelize.authenticate()
  .then(() => {
    console.log("Conexión Exitosa");
  })
  .catch(error => {
    console.error(`El error de conexión es: ${error}`);
  });

app.use('/task', categoryRoutes);

const PORT = config.development.port || 8000;
app.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});



