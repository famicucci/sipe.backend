const { Empresa, Usuario, OrdenEstado } = require("../models/index");
const bcryptjs = require("bcryptjs");
const { sequelize } = require("../models/index");

exports.crearEmpresa = async (req, res) => {
  if (!req.usuarioRol) return res.status(400).send("no priviledges user");

  const adminCompany = await Empresa.findByPk(req.usuarioEmpresaId);
  if (adminCompany) {
    if (adminCompany.nombre !== "EmpresaAdmin")
      return res.status(400).send("no priviledges company");
  } else {
    return res.status(400).send("no priviledges company");
  }

  const adminUser = await Usuario.findByPk(req.usuarioId);
  if (adminUser) {
    if (adminUser.usuario !== "sipe.admin")
      return res.status(400).send("no priviledges user");
  } else {
    return res.status(400).send("no priviledges user");
  }

  const t = await sequelize.transaction();

  try {
    const company = await Empresa.create(
      { nombre: req.body.companyName },
      { transaction: t }
    );

    const encryptedPassword = bcryptjs.hashSync(req.body.userPassword, 10);
    await Usuario.create(
      {
        nombre: req.body.userName,
        password: encryptedPassword,
        usuario: req.body.user,
        rol: true,
        EmpresaId: company.id,
      },
      { transaction: t }
    );

    // create status order
    await OrdenEstado.bulkCreate(
      [
        {
          descripcion: "Preparar pedido",
          color: "#59FF00",
          EmpresaId: company.id,
        },
        {
          descripcion: "Finalizado",
          color: "#61BA3F",
          EmpresaId: company.id,
        },
      ],
      { transaction: t }
    );

    await t.commit();
    res.status(200).json("company created");
  } catch (error) {
    await t.rollback();
    res.statusMessage = error.message;
    return res.status(400).end();
  }
};
