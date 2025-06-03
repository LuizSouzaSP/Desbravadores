
var classeModel = require("../models/classeModel");

function inserirClasse(req, res) {
    // variavel para recuperar os valores do arquivo dashboard
    var idclasse = req.params.classe;
    var idusuario = req.body.idusuarioServer;

    classeModel.inserirResultadosQuestionarioUsuario(idclasse, idusuario)
    .then(() => {
        if (resultado.length > 0) {
            res.status(200).json({
                idclasse: idclasse,
                idQuestionario: idQuestionario
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