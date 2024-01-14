const intermediarioProdutoCadastrar = (joiSchema) => async (req, res, next) => {
    const { nome, descricao, categorias_id, tamanho } = req.body;

    try {
        await joiSchema.validateAsync({
            nome,
            descricao,
            categorias_id,
            tamanho
        });

        next();

    } catch (error) {
        return res.status(401).json(error.message);
    }
}


module.exports = intermediarioProdutoCadastrar;