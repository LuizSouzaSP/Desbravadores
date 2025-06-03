var database = require("../database/config");

function inserirClasse(idClassse, idUsuario) {

    var instrucaoSql = `INSERT INTO classe_usuario(fkClasse, fkUsuario)
    VALUES(${idClassse}, ${idUsuario})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirClasse
}