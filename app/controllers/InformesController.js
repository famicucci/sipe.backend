const {
  Pago,
  Gasto,
  Factura,
  FacturaDetalle,
  Producto,
  GastoCategoria,
  GastoSubcategoria,
} = require("../models/index");
const { sequelize } = require("../models/index");
const { Op, literal } = require("sequelize");
const moment = require("moment");

exports.getIncomesByMonths = async (req, res) => {
  const startDate = moment(req.query.startDate);
  const endDate = moment(req.query.endDate).add({
    hours: 24,
  });

  try {
    const ingresosBrutos = await Pago.findAll({
      attributes: [
        [sequelize.fn("sum", sequelize.col("importe")), "totalIncome"],
        [sequelize.literal("DATE_FORMAT(createdAt, '%m-%Y')"), "monthYear"],
      ],
      where: {
        createdAt: {
          [Op.between]: [startDate, endDate],
        },
      },
      group: [sequelize.literal("DATE_FORMAT(createdAt, '%m-%Y')")],
      order: [sequelize.literal("DATE_FORMAT(createdAt, '%m-%Y')")],
    });

    res.status(200).json(ingresosBrutos);
  } catch (error) {
    res.json(error);
  }
};

exports.getExpensesByMonths = async (req, res) => {
  const startDate = moment(req.query.startDate);
  const endDate = moment(req.query.endDate).add({
    hours: 24,
  });
  const byCategory = req.query.byCategory;

  const attributes =
    byCategory === "true"
      ? [
          [sequelize.fn("sum", sequelize.col("importe")), "totalExpenses"],
          [sequelize.literal("DATE_FORMAT(createdAt, '%m-%Y')"), "monthYear"],
          "GastoCategoriaId",
        ]
      : [
          [sequelize.fn("sum", sequelize.col("importe")), "totalExpenses"],
          [sequelize.literal("DATE_FORMAT(createdAt, '%m-%Y')"), "monthYear"],
        ];

  const group =
    byCategory === "true"
      ? [
          sequelize.literal("DATE_FORMAT(createdAt, '%m-%Y')"),
          "GastoCategoriaId",
        ]
      : [sequelize.literal("DATE_FORMAT(createdAt, '%m-%Y')")];

  try {
    const expenses = await Gasto.findAll({
      attributes: attributes,
      where: {
        createdAt: {
          [Op.between]: [startDate, endDate],
        },
      },
      group: group,
      include:
        byCategory === "true"
          ? [
              {
                model: GastoCategoria,
                as: "GastoCategoria",
                attributes: ["descripcion"],
              },
            ]
          : [],
      order: [sequelize.literal("DATE_FORMAT(createdAt, '%m-%Y')")],
      raw: true,
    });

    res.status(200).json(expenses);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getExpensesByCategory = async (req, res) => {
  const startDate = moment(req.query.startDate);
  const endDate = moment(req.query.endDate).add({
    hours: 24,
  });

  try {
    const gastos = await Gasto.findAll({
      attributes: [
        "GastoSubcategoriaId",
        [sequelize.fn("sum", sequelize.col("importe")), "importe"],
      ],
      include: [
        {
          model: GastoSubcategoria,
          as: "GastoSubcategoria",
          attributes: ["descripcion"],
        },
      ],
      group: ["GastoSubcategoriaId"],
      where: {
        createdAt: {
          [Op.between]: [startDate, endDate],
        },
        GastoCategoriaId: req.params.categoryId,
      },
      raw: true,
    });

    res.status(200).json(gastos);
  } catch (error) {
    res.json(error);
  }
};

exports.traerIngresosBrutos = async (req, res) => {
  // desde debe tomar el dia ingresado a las 00:00:00
  // hasta debe tomar el dia ingresado a las 24:00:00
  const startDate = moment(req.query.startDate).subtract({
    hours: 3,
  });
  const endDate = moment(req.query.endDate).add({
    hours: 21,
  });
  try {
    const ingresosBrutos = await Pago.findAll({
      attributes: [[sequelize.fn("sum", sequelize.col("importe")), "importe"]],
      where: {
        createdAt: {
          [Op.between]: [startDate, endDate],
        },
      },
    });

    if (ingresosBrutos[0].importe) {
      res.status(200).json(ingresosBrutos[0].importe);
    } else {
      res.status(200).json("0");
    }
  } catch (error) {
    res.json(error);
  }
};

// traer los productos con mayor facturación y la cantidad que se vendieron
exports.highRevenueProducts = async (req, res) => {
  const startDate = moment(req.query.startDate);
  const endDate = moment(req.query.endDate).add({
    hours: 24,
  });
  const page = req.query.page || 1;
  const pageSize = 20;

  try {
    const productos = await FacturaDetalle.findAll({
      attributes: [
        "ProductoCodigo",
        [sequelize.fn("sum", sequelize.col("cantidad")), "cantidad"],
        [sequelize.literal("SUM(cantidad * pu)"), "totalFacturado"],
      ],
      order: [[sequelize.literal("totalFacturado"), "DESC"]],
      include: [
        { model: Producto, attributes: ["descripcion"] },
        {
          model: Factura,
          attributes: [],
          where: {
            createdAt: {
              [Op.between]: [startDate, endDate],
            },
            estado: "v",
          },
        },
      ],
      group: ["ProductoCodigo"],
      limit: pageSize,
      offset: (page - 1) * pageSize,
      raw: true,
    });

    res.status(200).json(productos);
  } catch (error) {
    res.json(error);
  }
};
