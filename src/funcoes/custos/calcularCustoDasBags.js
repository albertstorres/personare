const knex = require("../../conexoes/conexao");

const calcularCustoDasBags = async (categoria, tamanho) => {
    if (categoria === "Bags") {
        if (categoria === "Bags" && tamanho === "M") {
            const precoVinilCristal = await knex("materiais").where("nome", "vinil cristal").first();
            const precoSintetico = await knex("materiais").where("nome", "sintetico").first();
            const precoBagum = await knex("materiais").where("nome", "bagum").first();
            const precoVivo = await knex("materiais").where("nome", "vivo").first();
            const precoVies = await knex("materiais").where("nome", "vies").first();
            const precoZiper = await knex("materiais").where("nome", "ziper").first();
            const precoCursor = await knex("materiais").where("nome", "cursor").first();

            const resultado = (precoVinilCristal.custo * 1176) + (precoSintetico.custo * 840) + (precoSintetico.custo * 240) + (precoSintetico.custo * 300) + (precoBagum.custo * 1080) + (precoVivo.custo * 180) + (precoZiper.custo * 74) + (precoCursor.custo * 2) + (precoVies.custo * 150);

            return resultado;
        }
    }
}


module.exports = calcularCustoDasBags;