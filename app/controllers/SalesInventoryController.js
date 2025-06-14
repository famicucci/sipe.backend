const SalesInventoryService = require("../services/SalesInventoryService");

exports.getSalesInventory = async (req, res) => {
  const { searchQuery, page, priceList } = req.query;
  const stockpoint = req.params.stockPointId;
  const userCompanyId = req.usuarioEmpresaId;
  const pageSize = 20;

  try {
    const result = await SalesInventoryService.getSalesInventoryService({
      page,
      userCompanyId,
      stockpoint,
      priceList,
      searchQuery,
      pageSize,
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
