const CapRepository = require('../Repositories/CapRepository');

class CapController {
  async index(req, res) {
    const cap = await CapRepository.findAll();
    res.json(cap);
  }

  async show(req, res) {
    const { id } = req.params;
    const findProduct = await CapRepository.findById(id);
    if (!findProduct) {
      res.status(404).json('Produto não encontrado');
    }
    return (res.status(200).json(findProduct));
  }
}
module.exports = new CapController();
