const con = require('../connect/mysql');

const readFuncionarios =  (_req, res) => {
    const sql = "SELECT * FROM funcionario";
    con.query(sql, (err, result) => {
        if (err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
};	

const readFuncionario = (req, res) => {
    const sql = "SELECT * FROM funcionario where matricula like ?";
    con.query(sql, [req.params.matricula], (err, result) => {
        if (err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
}

module.exports = {
    readFuncionarios,
    readFuncionario
};
