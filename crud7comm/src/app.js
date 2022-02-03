const express = require('express');
const app = express();
const router = express.Router();//Rotas
const indexRoute = require('./routes/indexRoute');
const personRoute = require('./routes/PessoaRoute');
var cors = require('cors')


app.use(cors())


app.use('/', indexRoute);
app.use('/pessoa', personRoute);

module.exports = app;