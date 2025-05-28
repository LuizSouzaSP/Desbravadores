var express = require("express");
var router = express.Router();

var QuestoesController = require("../controllers/questaoController");

router.post("/questionario/:idQuestionario", function (req, res) {
    QuestoesController.inserirResultadosQuestionarioUsuario(req, res);
});


module.exports = router;