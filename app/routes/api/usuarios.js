const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const middlewares = require("../middlewares");
const UsuarioController = require("../../controllers/UsuarioController");

// registro
router.post(
  "/registro",
  [
    check("nombre", "El nombre y apellido son obligatorios").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("usuario", "El usuario es obligatorio").not().isEmpty(),
    check("rol", "El rol de usuario es obligatorio").not().isEmpty(),
    check("EmpresaId", "El nombre de la empresa es obligatorio")
      .not()
      .isEmpty(),
  ],
  UsuarioController.registroUsuario
);

// login
router.post("/login", UsuarioController.loginUsuario);
router.put("/:Id", middlewares.checkToken, UsuarioController.modificarUsuario);
router.delete(
  "/:Id",
  middlewares.checkToken,
  UsuarioController.eliminarUsuario
);

router.get("/", middlewares.checkToken, UsuarioController.traerUsuarios);
router.get("/me", middlewares.checkToken, UsuarioController.getUser);
router.post(
  "/",
  middlewares.checkToken,
  [
    check(
      "nombre",
      "El nombre completo debe tener máximo 50 caracteres"
    ).isLength({
      max: 50,
    }),
    check(
      "usuario",
      "El nombre de usuario debe tener entre 8 y 15 caracteres"
    ).isLength({
      min: 8,
      max: 15,
    }),
    check(
      "password",
      "La contraseña debe tener entre 8 y 12 caracteres"
    ).isLength({
      min: 8,
      max: 12,
    }),
  ],
  UsuarioController.createUser
);
router.get(
  "/usuario-autenticado",
  middlewares.checkToken,
  UsuarioController.usuarioAutenticado
);

module.exports = router;
