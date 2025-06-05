
var classeModel = require("../models/classeModel");

function inserirClasse(req, res) {
    // variavel para recuperar os valores do arquivo dashboard
    var idClasse = req.body.idClasseServer;
    var idusuario = req.params.idusuarioServer;

    classeModel.inserirResultadosQuestionarioUsuario(idClasse, idusuario)
    .then(() => {
        if (resultado.length > 0) {
            res.status(200).json({
                idClasse: idClasse,
                idusuario: idusuario
            })
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
    })
    .catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos questionarios.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    inserirClasse
}