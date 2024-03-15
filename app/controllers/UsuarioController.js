const { Usuario, Empresa } = require("../models/index");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const moment = require("moment");
const jwt = require("jwt-simple");
const { serialize } = require("cookie");

exports.registroUsuario = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errores: errors.array() });
  }

  try {
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
    const usuarios = await Usuario.create({
      nombre: req.body.nombre,
      password: req.body.password,
      usuario: req.body.usuario,
      rol: req.body.rol,
      EmpresaId: req.body.EmpresaId,
    });
    res.json({ success: "Usuario creado" });
  } catch (error) {
    res.json(error);
  }
};

exports.loginUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      where: { usuario: req.body.usuario },
    });
    if (usuario) {
      const iguales = bcryptjs.compareSync(req.body.password, usuario.password);

      if (iguales) {
        const token = createToken(usuario);
        const serialized = serialize("myTokenName", token, {
          // httpOnly: true,
          maxAge: 60 * 60 * 24 * 7, // 1 week
          path: "/",
          sameSite: "strict",
          secure: false,
        });

        res.json({ success: token, userType: usuario.rol ? "admin" : "user" });
      } else {
        res.statusMessage = "Error en usuario y/o contraseña";
        return res.status(400).end();
      }
    } else {
      res.statusMessage = "Error en usuario y/o contraseña";
      return res.status(400).end();
    }
  } catch (error) {
    res.statusMessage = "Hubo un error";
    return res.status(400).end();
  }
};

// modificar
exports.modificarUsuario = async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    if (!req.usuarioRol) {
      res.statusMessage =
        "Este usuario no tiene los permisos necesarios para realizar esta acción";
      return res.status(400).end();
    }

    const usuario = await Usuario.update(
      {
        password: req.body.password,
        rol: req.body.rol,
      },
      {
        where: { id: req.params.Id },
      }
    );

    // verifica si el update fue exitoso
    if (usuario[0]) {
      res.status(200).json("El usuario ha sido modificado");
    } else {
      res.statusMessage = "No se produjo ningún cambio";
      return res.status(400).end();
    }
  } catch (error) {
    res.statusMessage = "Hubo un error";
    return res.status(400).end();
  }
};

// eliminar
exports.eliminarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.destroy({
      where: { id: req.params.Id },
    });

    if (usuario) {
      res.status(200).json("user deleted");
    } else {
      res.statusMessage = "No hubo cambios en la base de datos";
      return res.status(400).end();
    }
  } catch (error) {
    res.statusMessage = "Hubo un error";
    return res.status(400).end();
  }
};

// traer todos los Usuarios
exports.traerUsuarios = async (req, res) => {
  try {
    const usuario = await Usuario.findAll({
      attributes: ["id", "nombre", "usuario", "rol", "createdAt", "updatedAt"],
    });
    res.json(usuario);
  } catch (error) {
    res.json(error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      attributes: ["id", "nombre"],
      where: { id: req.usuarioId },
      include: { model: Empresa },
      raw: true,
    });
    res.status(200).json(usuario);
  } catch (error) {
    res.statusMessage = error;
    return res.status(400).end();
  }
};

exports.createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errores: errors.array() });
  }

  try {
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
    await Usuario.create({
      nombre: req.body.nombre,
      password: req.body.password,
      usuario: req.body.usuario,
      rol: req.body.rol,
      EmpresaId: req.usuarioEmpresaId,
    });
    res.status(200).json("user created");
  } catch (error) {
    res.statusMessage = "Hubo un error";
    return res.status(400).end();
  }
};

// trae usuario autenticado
exports.usuarioAutenticado = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.usuarioId, {
      attributes: ["id", "nombre", "rol", "usuario", "EmpresaId"],
    });
    res.json({ usuario });
  } catch (error) {
    res.status(500).json({ msj: "Hubo un error" });
  }
};

// funcion para crear el token de login
const createToken = (usuario) => {
  const payload = {
    usuarioId: usuario.id,
    usuarioRol: usuario.rol,
    usuarioEmpresaId: usuario.EmpresaId,
    createAt: moment().unix(),
    expiredAt: moment().add(24, "hours").unix(),
  };
  return jwt.encode(payload, "frase secreta");
};
