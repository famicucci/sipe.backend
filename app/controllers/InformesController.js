const {
  Pago,
  Gasto,
  Factura,
  FacturaDetalle,
  Producto,
  GastoCategoria,
  GastoSubcategoria,
  Stock,
  Precio,
} = require("../models/index");
const { sequelize } = require("../models/index");
const { Op, literal } = require("sequelize");
const moment = require("moment");

exports.getIncomesByMonths = async (req, res) => {
  const startDate = moment(req.query.startDate);
  const endDate = moment(req.query.endDate).add({
    hours: 24,
  });

  // yo creo que debo hacer el análisis de ingresos en base a las facturas y no a los pagos
  // y agregar la empresa a la tabla factura
  // de esta manera, este informe abarca toda la empresa y la entidad factura se mantiene independiente del usuario al que pertenezca
  // factura y gasto son las dos entidades que deben pertenecer a la empresa y que no se deben ver afectadas por la eliminación de otra entidad que no sea la de empresa
  // de esta manera puedo eliminar todas las demás entidades pero así y todo mantener vigente las estadísticas de la empresa

  // las ordenes no finalizadas no se deben poder borrar nunca

  // OJO, CREO QUE LUEGO DE ESTO DEBO REPENSAR LA COLUMNA EMPRESAID DE

  try {
    // DEBE SER LO FACTURADO!!!
    const ingresosBrutos = await Factura.findAll({
      attributes: [
        [sequelize.fn("sum", sequelize.col("importeFinal")), "totalIncome"],
        [sequelize.literal("DATE_FORMAT(createdAt, '%m-%Y')"), "monthYear"],
      ],
      where: {
        createdAt: {
          [Op.between]: [startDate, endDate],
        },
        // EmpresaId: req.usuarioEmpresaId,
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
      EmpresaId: req.usuarioEmpresaId,
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

exports.getStockValuation = async (req, res) => {
  const { priceListId } = req.params;

  try {
    const productos = await Stock.findAll({
      attributes: [
        "ProductoCodigo",
        [sequelize.fn("sum", sequelize.col("cantidad")), "cantidad"],
      ],
      where: { cantidad: { [Op.gt]: 0 } },
      group: ["ProductoCodigo"],
      include: {
        model: Producto,
        attributes: ["codigo"],
        where: { EmpresaId: req.usuarioEmpresaId },
        include: {
          model: Precio,
          attributes: ["pu"],
          where: { ListaPrecioId: priceListId },
        },
      },
      raw: true,
    });

    const sumProductsAndQuantities = productos.reduce(
      (acc, producto) =>
        acc + producto.cantidad * producto["Producto.Precios.pu"],
      0
    );

    res.status(200).json({
      stockValue: sumProductsAndQuantities,
    });
  } catch (error) {
    res.statusMessage = "There was an error trying to get the stock valuation";
    return res.status(400).end();
  }
};
