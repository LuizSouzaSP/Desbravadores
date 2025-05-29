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
WHERE u.idusuario = '${idusuario}';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    pegarResultadosQuestionarioUsuario
}

