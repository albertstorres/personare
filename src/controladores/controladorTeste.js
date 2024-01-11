const controladorTeste = async (req, res) => {
    return res.status(200).json({ mensagem: "Tudo OK!" });
}


module.exports = controladorTeste;