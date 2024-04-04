const con = require('../connect/mysql');

const readVeiculos =  (_req, res) => {
    const sql = "SELECT * FROM veiculo";
    con.query(sql, (err, result) => {
        if (err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
};	

const readVeiculo = (req, res) => {
    const sql = "SELECT * FROM veiculo where id like ?";
    con.query(sql, [req.params.placa], (err, result) => {
        if (err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
}

module.exports = {
    readVeiculos,
    readVeiculo
};
