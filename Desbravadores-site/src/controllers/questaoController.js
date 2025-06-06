
var questaoModel = require("../models/questaoModel");

function inserirResultadosQuestionarioUsuario(req, res) {
    // variavel para recuperar os valores do arquivo quiz
    var idQuestionario = req.params.idQuestionario;
    var idusuario = req.body.idusuarioServer;
    var resultado = req.body.resultadoServer;


    questaoModel.inserirResultadosQuestionarioUsuario(idQuestionario, idusuario, resultado)
    .then(() => {
        if (resultado.length > 0) {
            res.status(200).json({
                resultado: resultado,
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
    inserirResultadosQuestionarioUsuario
}