var database = require("../database/config");

function dadosGraficoGeral() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function dadosGraficoGeral()");
    var instrucaoSql = `
        SELECT clube, count(clube) qtd FROM usuario GROUP BY clube;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function clubeMaisQtd() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function clubeMaisQtd()");
    var instrucaoSql = `
        SELECT clube, 
count(clube) qtd 
FROM usuario 
GROUP BY clube
ORDER BY qtd DESC
LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    dadosGraficoGeral,
    clubeMaisQtd
}
