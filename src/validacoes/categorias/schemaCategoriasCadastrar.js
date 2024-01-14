const joi = require("joi");

const schemaCategoriasCadastrar = joi.object({
    descricao: joi.string().required().messages({
        "any.required": "O campo DESCRIÇAO é obrigatório.",
        "string.base": "O campo DESCRICAO deve ser do tipo STRING.",
        "string.base": "O campo DESCRICAO é obrigatório."
    })
});


module.exports = schemaCategoriasCadastrar;