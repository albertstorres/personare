const joi = require("joi");

const schemaMateriaisCadastrar = joi.object({
    nome: joi.string().required().messages({
        "any.required": "O campo NOME é obrigatório.",
        "string.base": "O campo NOME deve ser do tipo STRING.",
        "string.empty": "O campo NOME é obrigatório."
    }),
    custo: joi.number().required().messages({
        "any.required": "O campo CUSTO é obrigatório.",
        "number.base": "O campo CUSTO deve ser numérico."
    })
});


module.exports = schemaMateriaisCadastrar;