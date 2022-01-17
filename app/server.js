const express = require('express');
const app = express();
require('dotenv').config();
const { sequelize } = require('./models/index');
const apiRouter = require('./routes/api');
const cors = require('cors');

// habilitar cors
app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));

// puerto de la app
const PORT = process.env.PORT || 4000;

// rutas
app.use('/api', apiRouter);

// arrancar el servidor
app.listen(PORT, () => {
	console.log(`La aplicación ha arrancado en el puerto: ${PORT}`);

	// sequelize.sync({ force: false }).then(() => {
	// 	console.log('Se ha establecido la conexión');
	// });
});
