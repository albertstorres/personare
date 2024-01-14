const knex = require("../../conexoes/conexao");
const calcularCustoDasBags = require("../../funcoes/custos/calcularCustoDasBags");
const calcularPrecoSugerido = require("../../funcoes/precos/calcularPrecoSugerido");

const controladorProdutosCadastrar = async (req, res) => {
    const { nome, descricao, categorias_id, tamanho } = req.body;

    try {
        const categoriaEncontrada = await knex("categorias").where("id", categorias_id).first();
        if (!categoriaEncontrada) {
            return res.status(404).json({ mensagem: "Categoria não cadastrada." });
        }

        const produtoEncontrado = await knex("produtos").where("nome", nome).where("tamanho", tamanho).first();
        if (produtoEncontrado) {
            return res.status(404).json({ mensagem: "Produto já cadastrado." });
        }

        const custoDoProduto = await calcularCustoDasBags(categoriaEncontrada.descricao, tamanho);
        if (!custoDoProduto) {
            console.log("ERRO NO CALCULO DO CUSTO");
            return res.status(500).json({ mensagem: "Erro interno do servidor." });
        }

        const precoSugeridoProduto = await calcularPrecoSugerido(custoDoProduto);
        if (!precoSugeridoProduto) {
            console.log("ERRO NO CALCULO DO PRECO SUGERIDO");
            return res.status(500).json({ mensagem: "Erro interno do servidor." });
        }

        const produtoCadastrado = await knex("produtos").insert({
            nome,
            descricao,
            custo: custoDoProduto,
            preco_sugerido: precoSugeridoProduto,
            categorias_id,
            tamanho
        });
        if (!produtoCadastrado) {
            return res.status(500).json({ mensagem: "Produto não pode ser cadastrado." });
        }

        return res.status(201).json({ mensagem: "Produto cadastrado com sucesso." });

    } catch (error) {
        return res.status(500).json(error.message);
    }
}


module.exports = controladorProdutosCadastrar;