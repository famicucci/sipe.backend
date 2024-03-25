const { Precio, Producto, ListaPrecio } = require("../models/index");
const { Op } = require("sequelize");

exports.crearPrecio = async (req, res) => {
  // [{ ProductoCodigo: req.body.ProductoCodigo,
  // ListaPrecioId: req.body.ListaPrecioId,
  // pu: req.body.pu }]

  if (req.body.length > 100) {
    res.statusMessage = "a lot of rows, maximun 100 allowed";
    return res.status(400).end();
  }

  // check if there is a reapeated ProductoCodigo
  const repeated = req.body.some(
    (element, index, self) =>
      index !==
      self.findIndex((t) => t.ProductoCodigo === element.ProductoCodigo)
  );

  if (repeated) {
    res.statusMessage =
      "there is reated codes in the request, check and try again";
    return res.status(400).end();
  }

  try {
    await Precio.bulkCreate(
      req.body.map((precio) => ({
        ...precio,
        ListaPrecioId: req.params.listPriceId,
      }))
    );

    res.status(200).json("Prices created");
  } catch (error) {
    res.statusMessage = "there was an error, check the data and try again";
    return res.status(400).end();
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
  const pageSize = 20; // Tamaño de la página
  let list = req.query.list;

  if (!list) {
    try {
      const priceLists = await ListaPrecio.findAll({
        attributes: ["id", "descripcion"],
        where: { EmpresaId: req.usuarioEmpresaId, estado: "Vigente" },
      });

      if (priceLists.length > 0) {
        const orderedLists = priceLists.sort((a, b) => {
          if (a.descripcion > b.descripcion) return 1;
          if (a.descripcion < b.descripcion) return -1;
          return 0;
        });
        list = orderedLists[0].id;
      } else {
        return res.status(200).json(priceLists);
      }
    } catch (error) {
      res.statusMessage = "Hubo un error";
      return res.status(400).end();
    }
  }

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
