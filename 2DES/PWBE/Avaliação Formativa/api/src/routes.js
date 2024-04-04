const express = require('express');
const routes = express.Router();

const Veiculo = require('./controllers/veiculo');
const Funcionario = require('./controllers/funcionario');

routes.get('/', (req, res) => {
    res.json("API Manutenções 1.0")
});

routes.get('/veiculos', Veiculo.readVeiculos);
routes.get('/veiculos/:placa', Veiculo.readVeiculo);

routes.get('/funcionarios', Funcionario.readFuncionarios);
routes.get('/funcionarios/:matricula', Funcionario.readFuncionario);

module.exports = routes;