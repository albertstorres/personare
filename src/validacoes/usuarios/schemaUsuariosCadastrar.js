const joi = require("joi");

const schemaUsuariosCadastrar = joi.object({
    username: joi.string().required().messages({
        "any.required": "O campo USERNAME é obrigatório.",
        "string.base": "O campo USERNAME deve ser do tipo STRING.",
        "string.empty": "O campo USERNAME é obrigatório."
    }),
    senha: joi.string().required().min(8).messages({
        "any.required": "O campo SENHA é obrigatório.",
        "string.min": "O campo senha deve conter no MÍNIMO 8 caracteres.",
        "string.base": "O campo SENHA deve ser do tipo STRING.",
        "string.empty": "O campo SSENHA é obrigatório."
    })
});


module.exports = schemaUsuariosCadastrar;