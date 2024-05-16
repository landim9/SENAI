const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const dataString = "09-07-2019 11:42:00";
const dataFormatada = new Date(dataString).toISOString();

const create = async (req, res) => {
    const data = req.body;


    const destino = await prisma.destino.create({
        data
    });

    res.status(201).json(destino).end();
}

const read = async (req, res) => {
    const destino = await prisma.destino.findMany({
       
    });

    res.status(200).json(destino).end();
}

const readById = async (req, res) => {
    const destino = await prisma.destino.findUnique({
        where : {
            id : Number(req.params.id)
        },
        include : {
            telefones: {
                select : {
                    telefone: true
                }
            }
        }
    });

    res.status(200).json(destino).end();
}

const readByName = async (req, res) => {
    const { nome } = req.body;

    const destinos = await prisma.destino.findMany({
        where : {
            nome : {
                contains : nome
            }
        }
    });

    res.status(200).json(destino).end();
}

//localhost:3000/destinos/1
const remove = async (req, res) => {
    const destino = await prisma.destino.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(destino).end();
}

//param id
//body info
const update = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    const destino = await prisma.destino.update({
        where: {
            id
        },
        data
    });

    res.status(200).json(destino).end();
}

module.exports = {
    create,
    read,
    remove,
    update,
    readById,
    readByName,
}