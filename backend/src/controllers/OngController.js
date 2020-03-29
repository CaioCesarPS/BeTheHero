const crypto = require('crypto')
connection = require('../database/connection')

module.exports = {

async index (req, res) {
    const ongs = await connection('ongs').select('*');
    
    return res.json(ongs)
},

async create(req, res) {
    const {name, email, whatsapp, city, uf} = req.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });
    console.log(id)
    return res.json({ id });
    }
}

//GET: buscar/Listar alguma informação do backend
//POST: cria uma informação no backend
//PUT: alterar uma informação
//DELETE: deleta informação no backend

//Tipos de parametros
//
//Query Params: nomeados enviados na rota apos o simbolo de "?" (filtros e paginações)
//Routes params: parametros utilizados para identificar recursos (um unico elemento)
//Request Body: o corpo da requisição utilizado para criar ou alterar recursos

//Driver : SELECT * FROM users