const { Producto, PtoStock, Stock, Precio } = require("../models/index");
const { Op } = require("sequelize");

exports.getSalesInventoryService = async ({
  page,
  userCompanyId,
  stockPointId,
  priceListId,
  searchQuery = "",
  pageSize,
  mandatoryProductCodes = [],
}) => {
  try {
    const productos = await Producto.findAll({
      attributes: ["codigo", "descripcion"],
      include: [
        {
          model: Stock,
          as: "stockProducto",
          attributes: ["cantidad", "PtoStockId"],
          include: [
            {
              model: PtoStock,
              attributes: ["descripcion"],
            },
          ],
          where: {
            PtoStockId: stockPointId,
            [Op.or]: [
              { cantidad: { [Op.gt]: 0 } },
              { ProductoCodigo: { [Op.in]: mandatoryProductCodes } },
            ],
          },
        },
        {
          model: Precio,
          attributes: ["pu", "ListaPrecioId"],
          where: { ListaPrecioId: priceListId },
        },
      ],
      where: {
        [Op.or]: [
          { codigo: { [Op.like]: `%${searchQuery}%` } },
          { descripcion: { [Op.like]: `%${searchQuery}%` } },
        ],
        EmpresaId: userCompanyId,
      },
      limit: pageSize,
      offset: (page - 1) * pageSize,
      raw: true,
    });
    return productos;
  } catch (error) {
    throw new Error(error.message);
  }
};
