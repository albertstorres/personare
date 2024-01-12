const express = require("express");

const rotas = express();


const controladorUsuariosCadastrar = require("../controladores/usuarios/controladorUsuariosCadastrar");
const controladorUsuariosLogar = require("../controladores/usuarios/controladorUsuariosLogar");



const intermediarioUsuariosVerificarLogin = require("../intermediarios/usuarios/intermediarioUsuariosVerificarLogin");

const intermediarioUsuariosCadastrar = require("../intermediarios/usuarios/intermediarioUsuariosCadastrar");
const intermediarioUsuariosLogar = require("../intermediarios/usuarios/intermediarioUsuariosLogar");


const schemaUsuariosCadastrar = require("../validacoes/usuarios/schemaUsuariosCadastrar");
const schemaUsuariosLogar = require("../validacoes/usuarios/schemaUsuariosLogar");


rotas.post(
    '/login',
    intermediarioUsuariosLogar(schemaUsuariosLogar),
    controladorUsuariosLogar
);

rotas.use(intermediarioUsuariosVerificarLogin);

rotas.post(
    '/usuarios',
    intermediarioUsuariosCadastrar(schemaUsuariosCadastrar),
    controladorUsuariosCadastrar
);


module.exports = rotas;