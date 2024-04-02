const { OrdenEstado } = require("../models/index");

exports.traerEstadosOrden = async (req, res) => {
  try {
    const estadosOrden = await OrdenEstado.findAll({
      attributes: { exclude: ["EmpresaId"] },
      where: { EmpresaId: req.usuarioEmpresaId },
    });
    res.status(200).json(estadosOrden);
  } catch (error) {
    res.json(error);
  }
};

exports.createStatusOrder = async (req, res) => {
  try {
    const status = await OrdenEstado.create({
      descripcion: req.body.descripcion,
      color: req.body.color,
      EmpresaId: req.usuarioEmpresaId,
    });
    res.status(200).json(status);
  } catch (error) {
    res.statusMessage = `Hubo un error`;
    return res.status(400).end();
  }
};

exports.deleteStatusOrder = async (req, res) => {
  // avoid deleting essentials status order
  const currentStatus = await OrdenEstado.findByPk(req.params.id);

  if (!currentStatus) return res.json("status order don´t exists");

  if (
    currentStatus.descripcion === "Preparar pedido" ||
    currentStatus.descripcion === "Finalizado"
  ) {
    res.statusMessage = "can´t be deleted";
    return res.status(400).end();
  }

  try {
    await OrdenEstado.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json("status order deleted");
  } catch (error) {
    res.statusMessage = `Hubo un error`;
    return res.status(400).end();
  }
};
