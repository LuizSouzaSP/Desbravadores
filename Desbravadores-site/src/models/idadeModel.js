var database = require("../database/config");

function idadeUsuario(idusuario) {

    var instrucaoSql = `select (year(current_date()) - year(dtNascimento))
from usuario where idusuario = "${idusuario}";`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    idadeUsuario
}