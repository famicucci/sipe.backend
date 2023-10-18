const { Precio, Producto, ListaPrecio } = require("../models/index");
const { Op } = require("sequelize");

exports.crearPrecio = async (req, res) => {
  // { ProductoCodigo: req.body.ProductoCodigo,
  // ListaPrecioId: req.body.ListaPrecioId,
  // pu: req.body.pu }
  try {
    const precio = await Precio.bulkCreate(req.body);
    res.json(precio);
  } catch (error) {
    res.json(error);
  }
};

exports.modificarPrecio = async (req, res) => {
  // [{
  // 	pu: req.body.pu,
  // 	ProductoCodigo: req.body.ProductoCodigo,
  // 	ListaPrecioId: req.body.ListaPrecioId
  // }]

  try {
    for (const element of req.body) {
      await Precio.update(
        {
          pu: element.pu,
        },
        {
          where: {
            ProductoCodigo: element.ProductoCodigo,
            ListaPrecioId: element.ListaPrecioId,
          },
        }
      );
    }

    res.json({ success: "Precios Modificados" });
  } catch (error) {
    res.json({ error: "Ocurrió un error" });
  }
};

exports.traerPrecios = async (req, res) => {
  const searchQuery = req.query.search;
  const page = req.query.page; // Número de página (2 para los segundos 10 resultados)
  const pageSize = 50; // Tamaño de la página
  const list = req.query.list;

  try {
    const precios = await Precio.findAll({
      where: {
        [Op.or]: [
          { pu: { [Op.like]: `%${searchQuery}%` } },
          { createdAt: { [Op.like]: `%${searchQuery}%` } },
          { ProductoCodigo: { [Op.like]: `%${searchQuery}%` } },
          { "$Producto.descripcion$": { [Op.like]: `%${searchQuery}%` } },
        ],
        ListaPrecioId: list,
      },
      include: [
        {
          model: Producto,
          attributes: ["descripcion"],
        },
      ],
      limit: pageSize,
      offset: (page - 1) * pageSize,
      raw: true,
    });

    res.json(precios);
  } catch (error) {
    res.status(400).send(error);
  }
};

// eliminar
exports.eliminarPrecio = async (req, res) => {
  try {
    const precio = await Precio.destroy({
      where: {
        ProductoCodigo: req.body.ProductoCodigo,
        ListaPrecioId: req.body.ListaPrecioId,
      },
    });

    if (precio) {
      res.json({ success: "Precio eliminado" });
    } else {
      res.json({ error: "No se produjo ningún cambio en la base de datos" });
    }
  } catch (error) {
    res.json({ error: "Ocurrió un error" });
  }
};

// traer listas de precio
exports.traerListasPrecio = async (req, res) => {
  console.log(req.body);
  try {
    const precios = await ListaPrecio.findAll({
      where: { EmpresaId: req.usuarioEmpresaId },
    });

    res.status(200).json(precios);
  } catch (error) {
    res.status(400).send(error);
  }
};
