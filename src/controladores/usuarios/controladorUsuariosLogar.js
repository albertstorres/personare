const knex = require("../../conexoes/conexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const senhaJwt = process.env.SENHA_JWT;

const controladorUsuariosLogar = async (req, res) => {
    const { username, senha } = req.body;

    try {
        const usernameEncontrado = await knex("usuarios").where("username", username).first();
        if (!usernameEncontrado) {
            return res.status(401).json({ mensagem: "Usuário ou senha inválidos." });
        }

        const senhaCorreta = await bcrypt.compare(senha, usernameEncontrado.senha);
        if (!senhaCorreta) {
            return res.status(401).json({ mensagem: "Usuário ou senha inválidos." });
        }

        const token = jwt.sign({
            id: usernameEncontrado.id
        },
            senhaJwt,
            {
                expiresIn: "2h"
            }
        );

        const { senha: _, ...dadosUsuario } = usernameEncontrado;

        return res.status(200).json({ token: token });

    } catch (error) {
        return res.status(500).json(error.message);
    }
}


module.exports = controladorUsuariosLogar;