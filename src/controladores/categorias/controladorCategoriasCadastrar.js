const knex = require("../../conexoes/conexao");

const controladorCategoriasCadastrar = async (req, res) => {
    const { descricao } = req.body;

    try {
        const descricaoEncontrada = await knex("categorias").where("descricao", descricao).first();
        if (descricaoEncontrada) {
            return res.status(404).json({ mensagem: "Categoria já cadastrada." });
        }

        const categoriaCadastrara = await knex("categorias").insert({
            descricao
        });
        if (!categoriaCadastrara) {
            return res.status(500).json({ mensagem: "A categoria não pode ser cadastrada." });
        }

        return res.status(201).json({ mensagem: "Categoria cadastrada com sucesso." });

    } catch (error) {
        return res.status(500).json(error.message);
    }
}


module.exports = controladorCategoriasCadastrar;