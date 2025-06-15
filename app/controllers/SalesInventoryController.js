const SalesInventoryService = require("../services/SalesInventoryService");

exports.getSalesInventory = async (req, res) => {
  const { searchQuery, page, priceListId } = req.query;
  const { stockPointId } = req.params;
  const { mandatoryProductCodes = [] } = req.body;
  const userCompanyId = req.usuarioEmpresaId;
  const pageSize = 20;

  try {
    const result = await SalesInventoryService.getSalesInventoryService({
      page,
      userCompanyId,
      stockPointId,
      priceListId,
      searchQuery,
      pageSize,
      mandatoryProductCodes,
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
