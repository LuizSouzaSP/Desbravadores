var database = require("../database/config");

function pegarResultadosQuestionarioUsuario(idusuario) {

    var instrucaoSql = `SELECT u.nome AS Usuario,
q.idquestionario AS Questionario,
qu.resultado AS Certas,
(((SELECT resultado FROM questionario_usuario WHERE fkUsuario = ${idusuario}) - (SELECT count(*) FROM questoes)) * -1) Erradas
FROM questionario_usuario qu
INNER JOIN usuario u
ON u.idusuario = qu.fkUsuario
INNER JOIN questionario q
ON q.idquestionario = qu.fkQuestionario
WHERE u.idusuario = ${idusuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
// function inserirResultadosQuestoes(idQuestao, fkQuestionario, resultadoQUEST) {

//     var instrucaoSql = `INSERT INTO questoes (idquestoes, fkquestionario, resultado)
//     VALUES(${idQuestao}, ${fkQuestionario},${resultadoQUEST})`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    pegarResultadosQuestionarioUsuario
    // inserirResultadosQuestoesx 
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
