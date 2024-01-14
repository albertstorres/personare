const joi = require("joi");

const schemaProdutosCadastrar = joi.object({
    nome: joi.string().required().messages({
        "any.required": "O campo NOME é obrigatório.",
        "string.empty": "O campo NOME é obrigatório.",
        "string.base": "O campo NOME deve ser do tipo STRING."
    }),
    descricao: joi.string().required().messages({
        "any.required": "O campo DESCRICAO é obrigatório.",
        "string.empty": "O campo NOME é obrigatório.",
        "string.base": "O campo DESCRICAO deve ser do tipo STRING."
    }),
    categorias_id: joi.number().required().messages({
        "any.required": "O campo CATEGORIAS_ID é obrigatório.",
        "number.base": "O campo CATEGORIAS_ID deve ser numérico."
    }),
    tamanho: joi.string().required().messages({
        "any.required": "O campo TAMANHO é obrigatório.",
        "string.empty": "O campo TAMANHO é obrigatório.",
        "string.base": "O campo TAMANHO deve ser do tipo STRING."
    })
});


module.exports = schemaProdutosCadastrar;