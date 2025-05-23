var database = require("../database/config");

function inserirResultadosQuestionarioUsuario(idQuestionario, idUsuario) {

    var instrucaoSql = `INSERT INTO questionario_usuario (fkquestionario, fkusuario)
    VALUES(${idQuestionario}, ${idUsuario})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function inserirResultadosQuestoes(idQuestao, fkQuestionario, resultadoQUEST) {

    var instrucaoSql = `INSERT INTO questoes (idquestoes, fkquestionario, resultado)
    VALUES(${idQuestao}, ${fkQuestionario},${resultadoQUEST})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    inserirResultadosQuestionarioUsuario,
    inserirResultadosQuestoes
}



// function buscarUltimasMedidas(idAquario, limite_linhas) {

//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         momento,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
//                     FROM medida
//                     WHERE fk_aquario = ${idAquario}
//                     ORDER BY id DESC LIMIT ${limite_linhas}`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// function buscarMedidasEmTempoReal(idAquario) {

//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fk_aquario 
//                         FROM medida WHERE fk_aquario = ${idAquario} 
//                     ORDER BY id DESC LIMIT 1`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }
