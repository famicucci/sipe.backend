const express = require('express');
const router = express.Router();

const middlewares = require('./middlewares');
const apiUsuariosRouter = require('./api/usuarios');
const apiEmpresasRouter = require('./api/empresas');
const apiProductosRouter = require('./api/productos');
const apiStockproductosRouter = require('./api/stock');
const apiPreciosRouter = require('./api/precios');
const apiVentasRouter = require('./api/ventas');
const apiPagosRouter = require('./api/pagos');
const apiGastosRouter = require('./api/gastos');
const apiTiposenvioRouter = require('./api/tiposenvio');
const apiMetodosPagoRouter = require('./api/metodospago');
const apiEstadosOrdenRouter = require('./api/estadosorden');
const apiClientesRouter = require('./api/clientes');
const apiDireccionesRouter = require('./api/direcciones');
const apiFacturasRouter = require('./api/facturas');
const apiOrdenesRouter = require('./api/ordenes');
const apiDetallesOrdenRouter = require('./api/detallesorden');
const apiInformesRouter = require('./api/informes');
const apiTiendaNube = require('./api/tiendanube');

router.get('/', (req, res) => {
	res.json('Bienvenido a la API de Sip-e');
});
router.use('/usuarios', apiUsuariosRouter);
router.use('/empresas', middlewares.checkToken, apiEmpresasRouter);
router.use('/productos', middlewares.checkToken, apiProductosRouter);
router.use('/stock', middlewares.checkToken, apiStockproductosRouter);
router.use('/precios', middlewares.checkToken, apiPreciosRouter);
router.use('/ventas', middlewares.checkToken, apiVentasRouter);
router.use('/pagos', middlewares.checkToken, apiPagosRouter);
router.use('/gastos', middlewares.checkToken, apiGastosRouter);
router.use('/tipos-envio', middlewares.checkToken, apiTiposenvioRouter);
router.use('/metodos-pago', middlewares.checkToken, apiMetodosPagoRouter);
router.use('/estados-orden', middlewares.checkToken, apiEstadosOrdenRouter);
router.use('/clientes', middlewares.checkToken, apiClientesRouter);
router.use('/direcciones', middlewares.checkToken, apiDireccionesRouter);
router.use('/facturas', middlewares.checkToken, apiFacturasRouter);
router.use('/ordenes', middlewares.checkToken, apiOrdenesRouter);
router.use('/detalles-orden', middlewares.checkToken, apiDetallesOrdenRouter);
router.use('/informes', middlewares.checkToken, apiInformesRouter);
router.use('/tiendanube', middlewares.checkToken, apiTiendaNube);

module.exports = router;
