var database = require("../database/config");

function inserirClasse(idClasse, idusuario) {
    
    var instrucaoSql = `INSERT INTO classe_usuario(fkClasse, fkUsuario)
    VALUES('${idClasse}', '${idusuario}');`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirClasse
}