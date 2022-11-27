const CoatRepository = require('../Repositories/CoatRepository');

class CoatController {
  async index(req, res) {
    const coat = await CoatRepository.findAll();
    res.json(coat);
  }

  async show(req, res) {
    const { id } = req.params;
    const findProduct = await CoatRepository.findById(id);
    if (!findProduct) {
      res.status(404).json('Produto não encontrado');
    }
    return (res.status(200).json(findProduct));
  }
}
module.exports = new CoatController();
