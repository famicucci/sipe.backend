const express = require("express");
const router = express.Router();
const EmpresaController = require("../../controllers/EmpresaController");

router.post("/", EmpresaController.crearEmpresa);

module.exports = router;
