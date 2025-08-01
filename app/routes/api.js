const express = require("express");
const router = express.Router();

const middlewares = require("./middlewares");
const apiUsuariosRouter = require("./api/usuarios");
const apiEmpresasRouter = require("./api/empresas");
const apiProductosRouter = require("./api/productos");
const apiSalesInventoryRouter = require("./api/sales-inventory");
const apiStockproductosRouter = require("./api/stock");
const apiPointsOfStockRouter = require("./api/ptos-stock");
const apiPointsOfSaleRouter = require("./api/ptos-venta");
const apiPreciosRouter = require("./api/precios");
const apiListasPrecioRouter = require("./api/listas-precio");
const apiVentasRouter = require("./api/ventas");
const apiPagosRouter = require("./api/pagos");
const apiGastosRouter = require("./api/gastos");
const apiCategoriasGastoRouter = require("./api/categorias-gasto");
const apiSubcategoriasGastoRouter = require("./api/subcategorias-gasto");
const apiTiposenvioRouter = require("./api/tiposenvio");
const apiMetodosPagoRouter = require("./api/metodospago");
const apiEstadosOrdenRouter = require("./api/estadosorden");
const apiClientesRouter = require("./api/clientes");
const apiDireccionesRouter = require("./api/direcciones");
const apiFacturasRouter = require("./api/facturas");
const apiOrdenesRouter = require("./api/ordenes");
const apiDetallesOrdenRouter = require("./api/detallesorden");
const apiInformesRouter = require("./api/informes");
const apiTiendaNube = require("./api/tiendanube");

router.get("/", (req, res) => {
  res.json("Bienvenido a la API de Sip-e");
});
router.use("/usuarios", apiUsuariosRouter);
router.use("/empresas", middlewares.checkToken, apiEmpresasRouter);
router.use("/productos", middlewares.checkToken, apiProductosRouter);
router.use("/sales-inventory", middlewares.checkToken, apiSalesInventoryRouter);
router.use("/stock", middlewares.checkToken, apiStockproductosRouter);
router.use("/ptos-stock", middlewares.checkToken, apiPointsOfStockRouter);
router.use("/ptos-venta", middlewares.checkToken, apiPointsOfSaleRouter);
router.use("/precios", middlewares.checkToken, apiPreciosRouter);
router.use("/listas-precio", middlewares.checkToken, apiListasPrecioRouter);
router.use("/ventas", middlewares.checkToken, apiVentasRouter);
router.use("/pagos", middlewares.checkToken, apiPagosRouter);
router.use("/gastos", middlewares.checkToken, apiGastosRouter);
router.use(
  "/categorias-gasto",
  middlewares.checkToken,
  apiCategoriasGastoRouter
);
router.use(
  "/subcategorias-gasto",
  middlewares.checkToken,
  apiSubcategoriasGastoRouter
);
router.use("/tipos-envio", middlewares.checkToken, apiTiposenvioRouter);
router.use("/metodos-pago", middlewares.checkToken, apiMetodosPagoRouter);
router.use("/estados-orden", middlewares.checkToken, apiEstadosOrdenRouter);
router.use("/clientes", middlewares.checkToken, apiClientesRouter);
router.use("/direcciones", middlewares.checkToken, apiDireccionesRouter);
router.use("/facturas", middlewares.checkToken, apiFacturasRouter);
router.use("/ordenes", middlewares.checkToken, apiOrdenesRouter);
router.use("/detalles-orden", middlewares.checkToken, apiDetallesOrdenRouter);
router.use(
  "/informes",
  middlewares.checkToken,
  middlewares.checkUserTypeAdmin,
  apiInformesRouter
);
router.use("/tiendanube", middlewares.checkToken, apiTiendaNube);

module.exports = router;
