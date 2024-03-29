const jwt = require("jwt-simple");
const moment = require("moment");

const checkToken = (req, res, next) => {
  if (!req.headers["user-token"]) {
    return res.status(400).send({ msj: "Debe estar logueado para continuar" });
  }

  const userToken = req.headers["user-token"];
  let payload = {};

  try {
    payload = jwt.decode(userToken, "frase secreta");
  } catch (error) {
    return res.status(401).json({ error: "El token es incorrecto" });
  }

  if (payload.expiredAt < moment().unix()) {
    return res
      .status(401)
      .json({ msg: "El token ha expirado", categoria: "error" });
  }

  req.usuarioId = payload.usuarioId;
  req.usuarioRol = payload.usuarioRol;
  req.usuarioEmpresaId = payload.usuarioEmpresaId;

  payload = next();
};

const checkUserTypeAdmin = (req, res, next) => {
  if (!req.usuarioRol) {
    return res.status(401).json({ error: "No tiene permisos para continuar" });
  }

  next();
};

module.exports = {
  checkToken: checkToken,
  checkUserTypeAdmin: checkUserTypeAdmin,
};
