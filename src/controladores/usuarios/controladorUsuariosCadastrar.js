const knex = require("../../conexoes/conexao");
const bcrypt = require("bcrypt");

const controladorUsuariosCadastrar = async (req, res) => {
    const { username, senha } = req.body;

    try {
        const usernameExiste = await knex("usuarios").where("username", username).first();
        if (usernameExiste) {
            return res.status(404).json({ mensagem: "Usuario já cadastrado." });
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);
        if (!senhaCriptografada) {
            return res.status(500).json({ mensagem: "A senha não pode ser criptografada." });
        }

        const usuarioCadastrado = await knex("usuarios").insert({
            username,
            senha: senhaCriptografada
        });
        if (!usuarioCadastrado) {
            return res.status(500).json({ mensagem: "Usuário não pode ser cadastrado." });
        }

        return res.status(201).json({ mensagem: "Usuário cadastrado com sucesso." });

    } catch (error) {
        return res.status(500).json(error.message);
    }
}


module.exports = controladorUsuariosCadastrar;