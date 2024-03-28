const {
  Gasto,
  GastoCategoria,
  GastoSubcategoria,
  Usuario,
} = require("../models/index");
const { Op } = require("sequelize");
const moment = require("moment");

exports.crearGasto = async (req, res) => {
  try {
    const gasto = await Gasto.create({
      descripcion: req.body.descripcion,
      estado: req.body.estado,
      importe: req.body.importe,
      UsuarioId: req.usuarioId,
      EmpresaId: req.usuarioEmpresaId,
      GastoCategoriaId: req.body.GastoCategoriaId,
      GastoSubcategoriaId: req.body.GastoSubcategoriaId,
      createdAt: req.body.createdAt,
    });
    res.json(gasto);
  } catch (error) {
    res.json(error);
  }
};

exports.modificarGasto = async (req, res) => {
  try {
    const gasto = await Gasto.update(
      {
        descripcion: req.body.descripcion,
        estado: req.body.estado,
        importe: req.body.importe,
        UsuarioId: req.usuarioId,
        EmpresaId: req.usuarioEmpresaId,
        GastoCategoriaId: req.body.GastoCategoriaId,
        GastoSubcategoriaId: req.body.GastoSubcategoriaId,
        createdAt: req.body.createdAt,
      },
      {
        where: { id: req.params.Id },
      }
    );

    // verifica si el update fue exitoso
    if (gasto[0])
      res
        .status(200)
        .send({ msg: "El gasto ha sido modificado!", severity: "success" });
    else
      res
        .status(400)
        .send({ error: "No se produjo ningún cambio en la base de datos" });
  } catch (error) {
    res.json(error);
  }
};

exports.getBills = async (req, res) => {
  const getDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDay = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${formattedDay}`;
  };

  const today = new Date();
  const previousMonth = new Date(today);
  previousMonth.setMonth(today.getMonth() - 1);

  const from = req.query.from || getDate(previousMonth);
  const to = req.query.to || getDate(today);

  const startDate = moment(from).subtract({
    hours: 3,
  });
  const endDate = moment(to).add({
    hours: 21,
  });

  const searchQuery = req.query.search;
  const page = req.query.page;
  const pageSize = 20;

  try {
    const gastos = await Gasto.findAll({
      attributes: {
        exclude: [
          "UsuarioId",
          "EmpresaId",
          "GastoCategoriaId",
          "GastoSubcategoriaId",
          "updatedAt",
        ],
      },
      where: {
        createdAt: {
          [Op.between]: [startDate, endDate],
        },
        [Op.or]: [
          { descripcion: { [Op.like]: `%${searchQuery}%` } },
          { estado: { [Op.like]: `%${searchQuery}%` } },
          { importe: { [Op.like]: `%${searchQuery}%` } },
          {
            "$GastoSubcategoria.descripcion$": {
              [Op.like]: `%${searchQuery}%`,
            },
          },
          {
            "$GastoCategoria.descripcion$": {
              [Op.like]: `%${searchQuery}%`,
            },
          },
        ],
        UsuarioId: req.usuarioRol
          ? { [Op.or]: { [Op.ne]: null, [Op.is]: null } }
          : req.usuarioId,
        EmpresaId: req.usuarioEmpresaId,
      },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: GastoSubcategoria,
          as: "GastoSubcategoria",
          attributes: ["id", "descripcion"],
        },
        {
          model: GastoCategoria,
          as: "GastoCategoria",
          attributes: ["id", "descripcion"],
        },
        {
          model: Usuario,
          attributes: ["id", "usuario"],
        },
      ],
      limit: pageSize,
      offset: (page - 1) * pageSize,
      raw: true,
    });
    res.json(gastos);
  } catch (error) {
    res.json(error);
  }
};

exports.getBill = async (req, res) => {
  try {
    const bill = await Gasto.findOne({
      attributes: {
        exclude: [
          "UsuarioId",
          "EmpresaId",
          "GastoCategoriaId",
          "GastoSubcategoriaId",
          "updatedAt",
        ],
      },
      where: { id: req.params.id },
      include: [
        {
          model: GastoSubcategoria,
          as: "GastoSubcategoria",
          attributes: ["id", "descripcion"],
        },
        {
          model: GastoCategoria,
          as: "GastoCategoria",
          attributes: ["id", "descripcion"],
        },
      ],
      raw: true,
    });
    res.json(bill);
  } catch (error) {
    res.json(error);
  }
};

exports.traerGastos = async (req, res) => {
  const dates = JSON.parse(req.params.Dates);

  const startDate = moment(dates.startDate).subtract({
    hours: 3,
  });
  const endDate = moment(dates.endDate).add({
    hours: 21,
  });

  try {
    const gastos = await Gasto.findAll({
      attributes: { exclude: ["UsuarioId", "EmpresaId"] },
      where: {
        createdAt: {
          [Op.between]: [startDate, endDate],
        },
      },
      order: [["createdAt", "DESC"]],
      include: {
        model: Usuario,
        attributes: ["id", "usuario"],
        where: { EmpresaId: req.usuarioEmpresaId },
      },
    });
    res.json(gastos);
  } catch (error) {
    res.json(error);
  }
};

exports.traerCategorias = async (req, res) => {
  try {
    const categorias = await GastoCategoria.findAll({
      where: { EmpresaId: req.usuarioEmpresaId },
      attributes: { exclude: ["EmpresaId"] },
    });
    res.json(categorias);
  } catch (error) {
    res.json(error);
  }
};

exports.traerSubcategorias = async (req, res) => {
  try {
    const categorias = await GastoSubcategoria.findAll({
      include: [
        {
          attributes: [],
          model: GastoCategoria,
          where: { EmpresaId: req.usuarioEmpresaId },
        },
      ],
    });
    res.json(categorias);
  } catch (error) {
    res.json(error);
  }
};

exports.eliminarGasto = async (req, res) => {
  try {
    const gasto = await Gasto.destroy({
      where: { id: req.params.Id },
    });

    if (gasto) {
      res
        .status(200)
        .send({ msg: "El gasto ha sido eliminado!", severity: "success" });
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
