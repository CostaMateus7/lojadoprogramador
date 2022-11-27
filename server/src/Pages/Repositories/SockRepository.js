const { v4 } = require('uuid');

const sock = [
  {
    id: v4(),
    name: 'Meia Azul',
    avatar: 'http://localhost:8080/files/meia/meia_azul.jpg',
    description: 'Meia programação azul',
    Price: 39.99,
  },
  {
    id: v4(),
    name: 'Meia Cinza',
    avatar: 'http://localhost:8080/files/meia/meia_cloud.jpg',
    description: 'Meia cinza cloud',
    Price: 29.99,
  },
  {
    id: v4(),
    name: 'Meia Colorida',
    avatar: 'http://localhost:8080/files/meia/meia_colorida.jpg',
    description: 'Meia Github/VsCode',
    Price: 39.99,
  },
  {
    id: v4(),
    name: 'Meia Cinza',
    avatar: 'http://localhost:8080/files/meia/meia_hello.jpg',
    description: 'Meia cinza hello',
    Price: 29.99,
  },
  {
    id: v4(),
    name: 'Meia PC',
    avatar: 'http://localhost:8080/files/meia/meia_pc.jpg',
    description: 'Meia preta Computador',
    Price: 49.99,
  },
  {
    id: v4(),
    name: 'Meia Code',
    avatar: 'http://localhost:8080/files/meia/meia_verde.jpg',
    description: 'Meia preta/verde Code',
    Price: 39.99,
  },
];

class SockRepository {
  findAll() {
    return (sock);
  }

  findById(id) {
    const row = sock.find((p) => p.id === id);
    return row;
  }
}

module.exports = new SockRepository();
