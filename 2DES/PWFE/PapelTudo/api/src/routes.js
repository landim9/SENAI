//Dependências - Frameworks
const express = require("express");
const router = express.Router();

const Cliente = require("./controllers/cliente");

//Rota de teste
const teste = (req, res) => {
    res.json("Back-end, API AAAAA respondendo!");
}

//Rotas de Saída - Clientes
router.get("/", teste);
router.post("/items", Cliente.create);
router.get("/items", Cliente.read);
router.put("/items/:id", Cliente.update);
router.delete("/items/:id", Cliente.del);

module.exports = router;