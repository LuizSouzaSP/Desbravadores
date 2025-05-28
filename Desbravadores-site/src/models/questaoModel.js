var database = require("../database/config");

function inserirResultadosQuestionarioUsuario(idQuestionario, idUsuario, resultado) {

    var instrucaoSql = `INSERT INTO questionario_usuario (fkquestionario, fkusuario, resultado)
    VALUES(${idQuestionario}, ${idUsuario}, ${resultado})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirResultadosQuestionarioUsuario
}