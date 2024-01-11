const express = require("express");

const rotas = express();

const controladorTeste = require("../controladores/controladorTeste");

rotas.get(
    '/teste',
    controladorTeste
);


module.exports = rotas;