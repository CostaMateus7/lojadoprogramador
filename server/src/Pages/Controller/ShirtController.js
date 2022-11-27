const ShirtRepository = require('../Repositories/ShirtRepository');

class ShirtController {
  async index(req, res) {
    const shirt = await ShirtRepository.findAll();
    res.json(shirt);
  }

  async show(req, res) {
    const { id } = req.params;
    const findProduct = await ShirtRepository.findById(id);
    if (!findProduct) {
      res.status(404).json('Produto não encontrado');
    }
    return (res.status(200).json(findProduct));
  }
}
module.exports = new ShirtController();
