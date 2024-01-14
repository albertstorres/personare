const knex = require("../../conexoes/conexao");

const controladorMateriaisCadastrar = async (req, res) => {
    const { nome, custo } = req.body;

    try {
        const materialJaCadastrado = await knex("materiais").where("nome", nome).first();
        if (materialJaCadastrado) {
            return res.status(404).json({ mensagem: "O material já foi cadastrado." });
        }

        const materialCadastrado = await knex("materiais").insert({
            nome,
            custo
        });
        if (!materialCadastrado) {
            return res.status(500).json({ mensagem: "O material não pode ser cadastrado." });
        }

        return res.status(201).json({ mensagem: "Material cadastrado com sucesso." });

    } catch (error) {
        return res.status(500).json(error.message);
    }
}


module.exports = controladorMateriaisCadastrar;