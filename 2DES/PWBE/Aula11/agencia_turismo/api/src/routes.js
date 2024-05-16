const express = require('express');
const { bcrypt } = require('bcrypt')
const { Prisma } = require('@prisma/client');

const router = express.Router();

const destino = require('./controllers/destino');
const pontoTuristico = require('./controllers/pontosTuristicos');
const login = require('./controllers/login');



router.get('/', (req, res) => {
    res.send('Hello World').end();
});

//destino
router.post('/destinos', destino.create);
router.get('/destinos', destino.read);
router.delete('/destinos/:id', destino.remove);
router.put('/destinos/:id', destino.update);

router.get('/cliente/:id', destino.readById);
router.post('/destinos/nome', destino.readByName);

//pontoTuristico
router.post('/pontoTuristico', pontoTuristico.create);
router.get('/pontoTuristico', pontoTuristico.read);
router.delete('/pontoTuristico/:id', pontoTuristico.remove);
router.put('/pontoTuristico/:id', pontoTuristico.update);

//Login
router.post('/create', login.create(Prisma, bcrypt));
router.post('/logins', login.login(Prisma, bcrypt));






module.exports = router;