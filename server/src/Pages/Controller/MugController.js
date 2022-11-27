const MugRepository = require('../Repositories/MugRepository');

class MugController {
  async index(req, res) {
    const mug = await MugRepository.findAll();
    res.json(mug);
  }

  async show(req, res) {
    const { id } = req.params;
    const findProduct = await MugRepository.findById(id);
    if (!findProduct) {
      res.status(404).json('Produto não encontrado');
    }
    return (res.status(200).json(findProduct));
  }
}
module.exports = new MugController();
