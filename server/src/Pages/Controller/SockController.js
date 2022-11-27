const SockRepository = require('../Repositories/SockRepository');

class SockController {
  async index(req, res) {
    const Sock = await SockRepository.findAll();
    res.json(Sock);
  }

  async show(req, res) {
    const { id } = req.params;
    const findProduct = await SockRepository.findById(id);
    if (!findProduct) {
      res.status(404).json('Produto não encontrado');
    }
    return (res.status(200).json(findProduct));
  }
}
module.exports = new SockController();
