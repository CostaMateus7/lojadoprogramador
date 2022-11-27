const { v4 } = require('uuid');

const cap = [
  {
    id: v4(),
    name: 'Boné Binário',
    avatar: 'http://localhost:8080/files/bone/bone_binario.jpg',
    description: 'Boné branco binário',
    Price: 59.99,
  },
  {
    id: v4(),
    name: 'Boné Code',
    avatar: 'http://localhost:8080/files/bone/bone_code.jpg',
    description: 'Boné preto e branco de telinha',
    Price: 49.99,
  },
  {
    id: v4(),
    name: 'Boné JS',
    avatar: 'http://localhost:8080/files/bone/bone_js.jpg',
    description: 'Boné JS branco',
    Price: 69.99,
  },
  {
    id: v4(),
    name: 'Boné Node',
    avatar: 'http://localhost:8080/files/bone/bone_node.jpg',
    description: 'Boné Node preto',
    Price: 59.99,
  },
  {
    id: v4(),
    name: 'Boné Print',
    avatar: 'http://localhost:8080/files/bone/bone_print.jpg',
    description: 'Boné Print azul',
    Price: 79.99,
  },
  {
    id: v4(),
    name: 'Boné Programador',
    avatar: 'http://localhost:8080/files/bone/bone_programador.jpg',
    description: 'Boné preto programador',
    Price: 59.99,
  },
];

class CapRepository {
  findAll() {
    return cap;
  }

  findById(id) {
    const row = cap.find((p) => p.id === id);
    return row;
  }
}

module.exports = new CapRepository();
