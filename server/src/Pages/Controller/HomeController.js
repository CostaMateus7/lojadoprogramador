const HomeRepository = require('../Repositories/HomeRepository');

class HomeController {
  async index(req, res) {
    const products = await HomeRepository.findAll();
    res.json(products);
  }

  async show(req, res) {
    const { id } = req.params;
    const findProduct = await HomeRepository.findById(id);
    if (!findProduct) {
      res.status(404).json('Produto não encontrado');
    }
    return (res.status(200).json(findProduct));
  }
}
module.exports = new HomeController();
