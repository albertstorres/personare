const joi = require("joi");

const schemaUsuariosLogar = joi.object({
    username: joi.string().required().messages({
        "any.required": "O campo USERNAME é obrigatório.",
        "string.base": "O campo USERNAME deve ser do tipo STRING.",
        "string.empty": "O campo USERNAME é obrigatório."
    }),
    senha: joi.string().required().min(8).messages({
        "any.required": "O campo SENHA é obrigatório.",
        "string.base": "O campo SENHA deve ser do tipo STRING.",
        "string.empty": "O campo SENHA é obrigatório."
    })
});


module.exports = schemaUsuariosLogar;