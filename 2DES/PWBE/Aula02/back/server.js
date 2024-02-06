//Dependências - Frameworks
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

//Conexão com o SGBD MySQL
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'Guri'
});

//Rota de teste
const teste = (req, res) => {
    res.send("Back-end respondendo ");
}

//CRUD - create
const create = (req, res) => {
    let nome = req.body.nome;
    let quantidade = req.body.quantidade;
    let produto = req.body.produto;
    let valor = req.body.valor;
    let query = `INSERT INTO Clientes( nome, quantidade, produto, valor) VALUE`;
    query += `('${nome}', '${quantidade}', '${produto}', '${valor}');`;
    con.query(query,(err, result)=>{
        if(err)
            res.redirect("http://127.0.0.1:5500/front/erro.html?erro=Provalmente o Cliente já está cadastrado&err="+err.code);
        else
            res.redirect("http://127.0.0.1:5501/front/index.html");
    });
}

//CRUD - Read
const read = (req, res) => {
    con.query("SELECT * FROM Clientes ORDER BY id DESC",(err, result)=>{
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}

//Configurações de saída - FrontEnd
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//Rotas de Saída - FrontEnd
app.get("/", teste); 
app.post("/Clientes", create);
app.get("/Clientes", read);

//Teste e porta no console
app.listen(3000, () => {
    console.log("Back-end respondendo na porta 3000");
});