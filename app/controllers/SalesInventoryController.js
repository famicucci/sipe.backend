const SalesInventoryService = require("../services/SalesInventoryService");

exports.getSalesInventory = async (req, res) => {
  const { search, page, priceListId } = req.query;
  const { stockPointId } = req.params;
  const { mandatoryProductCodes = [] } = req.body;
  const userCompanyId = req.usuarioEmpresaId;
  const pageSize = 20;
  console.log("req.query", req.query);

  if (!priceListId || !stockPointId) {
    return res
      .status(400)
      .json({ message: "priceListId and stockPointId are required." });
  }

  try {
    const result = await SalesInventoryService.getSalesInventoryService({
      page,
      userCompanyId,
      stockPointId,
      priceListId,
      search,
      pageSize,
      mandatoryProductCodes,
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
