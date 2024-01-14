const intermediarioCategoriasCadastrar = (joiSchema) => async (req, res, next) => {
    const { descricao } = req.body;

    try {
        await joiSchema.validateAsync({
            descricao
        });

        next();

    } catch (error) {
        return res.status(401).json(error.message);
    }
}


module.exports = intermediarioCategoriasCadastrar;