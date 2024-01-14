const express = require("express");

const rotas = express();


const controladorUsuariosCadastrar = require("../controladores/usuarios/controladorUsuariosCadastrar");
const controladorUsuariosLogar = require("../controladores/usuarios/controladorUsuariosLogar");

const controladorMateriaisCadastrar = require("../controladores/materiais/controladorMateriaisCadastrar");

const controladorCategoriasCadastrar = require("../controladores/categorias/controladorCategoriasCadastrar");

const controladorProdutoCadastrar = require("../controladores/produtos/controladorProdutoCadastrar");



const intermediarioUsuariosVerificarLogin = require("../intermediarios/usuarios/intermediarioUsuariosVerificarLogin");

const intermediarioUsuariosCadastrar = require("../intermediarios/usuarios/intermediarioUsuariosCadastrar");
const intermediarioUsuariosLogar = require("../intermediarios/usuarios/intermediarioUsuariosLogar");

const intermediarioMateriaisCadastrar = require("../intermediarios/materiais/intermediarioMateriaisCadastrar");

const intermediarioCategoriasCadastrar = require("../intermediarios/categorias/intermediarioCategoriasCadastrar");

const intermediarioProdutoCadastrar = require("../intermediarios/produtos/intermediarioProdutoCadastrar");



const schemaUsuariosCadastrar = require("../validacoes/usuarios/schemaUsuariosCadastrar");
const schemaUsuariosLogar = require("../validacoes/usuarios/schemaUsuariosLogar");

const schemaMateriaisCadastrar = require("../validacoes/materiais/schemaMateriaisCadastrar");

const schemaCategoriasCadastrar = require("../validacoes/categorias/schemaCategoriasCadastrar");

const schemaProdutoCadastrar = require("../validacoes/produtos/schemaProdutosCadastrar");


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

rotas.post(
    '/materiais',
    intermediarioMateriaisCadastrar(schemaMateriaisCadastrar),
    controladorMateriaisCadastrar
);

rotas.post(
    '/categorias',
    intermediarioCategoriasCadastrar(schemaCategoriasCadastrar),
    controladorCategoriasCadastrar
);

rotas.post(
    '/produtos',
    intermediarioProdutoCadastrar(schemaProdutoCadastrar),
    controladorProdutoCadastrar
);

module.exports = rotas;