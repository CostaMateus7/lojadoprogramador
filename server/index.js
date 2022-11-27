const express = require('express');
const cors = require('cors');
const path = require('path');

const routes = require('./src/Routes/Routes');

const app = express();
app.use(express.json());
app.use('/files', express.static('images'));
const options = {
  origin: 'http://localhost:3000',
};
app.use(cors(options));
app.use(routes);

app.listen(8080, console.log('http://localhost:8080'));
