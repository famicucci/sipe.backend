const { TipoEnvio } = require("../models/index");

exports.crearTipoEnvio = async (req, res) => {
  try {
    const tipoEnvio = await TipoEnvio.create({
      descripcion: req.body.descripcion,
      EmpresaId: req.usuarioEmpresaId,
    });
    res.status(200).json(tipoEnvio);
  } catch (error) {
    res.statusMessage = error.message;
    return res.status(400).end();
  }
};

exports.modificarTipoEnvio = async (req, res) => {
  try {
    const tipoEnvio = await TipoEnvio.update(
      {
        descripcion: req.body.descripcion,
      },
      {
        where: { id: req.params.Id },
      }
    );

    if (tipoEnvio) {
      res.status(200).send({
        msg: "El tipo de envio ha sido modificado!",
        severity: "success",
      });
    } else {
      res.status(400).send({
        msg: "No se produjo ningún cambio en la base de datos",
        severity: "error",
      });
    }
  } catch (error) {
    res.json(error);
  }
};

exports.traerTiposEnvio = async (req, res) => {
  try {
    const tiposEnvio = await TipoEnvio.findAll({
      attributes: ["id", "descripcion"],
      where: { EmpresaId: req.usuarioEmpresaId },
    });
    res.status(200).json(tiposEnvio);
  } catch (error) {
    res.json(error);
  }
};

exports.eliminarTipoEnvio = async (req, res) => {
  // controllar que el envío no este en ninguna de las órdenes no finalizadas
  try {
    const tipoEnvio = await TipoEnvio.destroy({
      where: { id: req.params.Id },
    });

    if (tipoEnvio) {
      res.status(200).send({
        msg: "El tipo de envio ha sido eliminado!",
        severity: "success",
      });
    } else {
      res.status(400).send({
        msg: "No se produjo ningún cambio en la base de datos",
        severity: "error",
      });
    }
  } catch (error) {
    res.statusMessage = "Hubo un error al eliminar el metodo de envío";
    return res.status(400).end();
  }
};
