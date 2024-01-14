const intermediarioMateriaisCadastrar = (joiSchema) => async (req, res, next) => {
    const { nome, custo } = req.body;

    try {
        await joiSchema.validateAsync({
            nome,
            custo
        });

        next();

    } catch (error) {
        return res.status(401).json(error.message);
    }
}


module.exports = intermediarioMateriaisCadastrar;