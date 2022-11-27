const { v4 } = require('uuid');

const mug = [
  {
    id: v4(),
    name: 'Caneca Front',
    avatar: 'http://localhost:8080/files/caneca/caneca_front.jpg',
    description: 'Caneca preta HTML/CSS/JS',
    Price: 49.99,
  },
  {
    id: v4(),
    name: 'Caneca GO',
    avatar: 'http://localhost:8080/files/caneca/caneca_go.jpg',
    description: 'Caneca Go preta',
    Price: 49.99,
  },
  {
    id: v4(),
    name: 'Caneca Java',
    avatar: 'http://localhost:8080/files/caneca/caneca_java.jpg',
    description: 'Caneca Java preta',
    Price: 59.99,
  },
  {
    id: v4(),
    name: 'Caneca linux',
    avatar: 'http://localhost:8080/files/caneca/caneca_linux.jpg',
    description: 'Caneca Linux preta',
    Price: 49.99,
  },
  {
    id: v4(),
    name: 'Caneca Preta',
    avatar: 'http://localhost:8080/files/caneca/caneca_preta.jpg',
    description: 'Caneca preta if/else',
    Price: 39.99,
  },
  {
    id: v4(),
    name: 'Caneca Programer',
    avatar: 'http://localhost:8080/files/caneca/caneca_programer.jpg',
    description: 'Caneca preta programador',
    Price: 59.99,
  },
];

class MugRepository {
  findAll() {
    return (mug);
  }

  findById(id) {
    const row = mug.find((p) => p.id === id);
    return row;
  }
}

module.exports = new MugRepository();
