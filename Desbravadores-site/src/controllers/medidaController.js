var medidaModel = require("../models/medidaModel");

function inserirResultadosQuestionarioUsuario(req, req, res) {

    var idQuestionario = req.params.idQuestionario;
    var idUsuario = req.params.idUsuario;

    console.log(` ${idQuestionario}`);

    medidaModel.inserirResultadosQuestionarioUsuario(idQuestionario, idUsuario).then(function (resultado) {
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


function inserirResultadosQuestoes(req, req, req, res) {

    var idQuestao = req.params.idQuestao;
    var fkQuestionario = req.params.fkQuestionario;
    var resultadoQUEST = req.params.resultadoQUEST;

    console.log(`Recuperando questões em tempo real`);

    medidaModel.inserirResultadosQuestoes(idQuestao, fkQuestionario,resultadoQUEST).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    inserirResultadosQuestionarioUsuario,
    inserirResultadosQuestoes

}






// function buscarUltimasMedidas(req, res) {

//     const limite_linhas = 7;

//     var idAquario = req.params.idAquario;

//     console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

//     medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }


// function buscarMedidasEmTempoReal(req, res) {

//     var idAquario = req.params.idAquario;

//     console.log(`Recuperando medidas em tempo real`);

//     medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }