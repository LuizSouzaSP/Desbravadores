
var medidaModel = require("../models/medidaModel");

function pegarResultadosQuestionarioUsuario(req, res) {
    // variavel para recuperar os valores do arquivo quiz
    // var idQuestionario = req.body.idQuestionarioServer;
    var idusuario = req.body.idusuarioServer;
    // var idQuestao = req.body.idQuestaoServer;
    // var resultado = req.body.resultadoServer;

    medidaModel.pegarResultadosQuestionarioUsuario(idusuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos questionarios.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    pegarResultadosQuestionarioUsuario
}

