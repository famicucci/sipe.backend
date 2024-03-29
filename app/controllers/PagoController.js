const { Pago, Factura, MetodoPago } = require("../models/index");
const { sequelize } = require("../models/index");

exports.getPayments = async (req, res) => {
  try {
    const payments = await Pago.findAll({
      attributes: [
        "id",
        "importe",
        "estado",
        "tipo",
        "createdAt",
        "MetodoPagoId",
      ],
      where: { FacturaId: req.params.invoiceId },
      include: [
        {
          model: MetodoPago,
          attributes: ["descripcion"],
        },
      ],
      raw: true,
    });

    res.json(payments);
  } catch (error) {
    res.status(400).json({ msg: "There was an error", severity: "error" });
  }
};

exports.crearPago = async (req, res) => {
  try {
    const pagos = await Pago.create({
      importe: req.body.importe,
      FacturaId: req.body.FacturaId,
      MetodoPagoId: req.body.MetodoPagoId,
      createdAt: req.body.createdAt,
      UsuarioId: req.usuarioId,
      estado: "v",
      tipo: "i",
    });

    let invoiceTotalAmount;
    let paymentsTotalAmount = 0;

    // get total amount of current invoice
    const invoice = await Factura.findByPk(req.body.FacturaId);
    if (invoice) invoiceTotalAmount = parseFloat(invoice.importeFinal);

    // get all payments of current invoice
    const payments = await Pago.findAll({
      where: { FacturaId: req.body.FacturaId },
    });

    if (payments) {
      payments.forEach((x) => {
        paymentsTotalAmount += parseFloat(x.importe);
      });
    }

    //  result
    const result = invoiceTotalAmount - paymentsTotalAmount;

    if (result === 0)
      await Factura.update(
        {
          estadoPago: "Pago",
        },
        { where: { id: req.body.FacturaId } }
      );

    res.json(pagos);
  } catch (error) {
    res.statusMessage = error.message;
    return res.status(400).end();
  }
};

exports.cancelPayment = async (req, res) => {
  const t = await sequelize.transaction();

  try {
    // select payment to be canceled
    const payment = await Pago.findByPk(req.params.Id);

    if (payment.estado === "c") {
      res;
      res.statusMessage = "Payment was already canceled";
      return res.status(400).end();
    }

    if (payment) {
      const negativePayment = await Pago.create(
        {
          importe: -payment.importe,
          FacturaId: payment.FacturaId,
          MetodoPagoId: payment.MetodoPagoId,
          UsuarioId: req.usuarioId,
          estado: "v",
          tipo: "nc",
        },
        {
          transaction: t,
        }
      );

      // update estadoPago in invoice with: 'Pendiente'
      await Factura.update(
        {
          estadoPago: "Pendiente",
        },
        { transaction: t, where: { id: payment.FacturaId } }
      );

      await Pago.update(
        {
          estado: "c",
        },
        { transaction: t, where: { id: req.params.Id } }
      );

      await t.commit();
      res.status(200).json(negativePayment);
    } else {
      await t.rollback();
      res.status(400).json({ msg: "Payment doesn´t exist", severity: "error" });
    }
  } catch (error) {
    res.status(400).json({ msg: "There was an error", severity: "error" });
  }
};
