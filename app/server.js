const express = require("express");
const app = express();
require("dotenv").config();
const { sequelize } = require("./models/index");
const apiRouter = require("./routes/api");
const cors = require("cors");
var cookies = require("cookie-parser");

// habilitar cors
app.use(cookies());
app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));

// puerto de la app
const PORT = process.env.PORT || 4000;

// rutas
app.use("/api", apiRouter);

// arrancar el servidor

app.listen(PORT, "0.0.0.0", () => {
  console.log(`La aplicación ha arrancado en el puerto: ${PORT}`);
  console.log("Conectando a la base de datos...");
  console.log(`Host de la base de datos: ${process.env.DB_HOST}`);
  console.log(`Base de datos: ${process.env.DB_DATABASE}`);
  console.log(`Usuario de la base de datos: ${process.env.DB_USERNAME}`);
  console.log(`Contraseña de la base de datos: ${process.env.DB_PASSWORD}`);
  console.log(`Dialect de la base de datos: ${process.env.DB_DIALECT}`);

  // sequelize.sync({ force: false }).then(() => {
  // 	console.log('Se ha establecido la conexión');
  // });
});
