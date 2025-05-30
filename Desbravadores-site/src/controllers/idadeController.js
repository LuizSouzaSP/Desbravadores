var idadeModel = require("../models/idadeModel");

function idadeUsuario(req, res) {
    var idusuario = req.params.idusuario;

    idadeModel.idadeUsuario(idusuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a idade.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    idadeUsuario
}