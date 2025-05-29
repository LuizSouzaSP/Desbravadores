var express = require("express");
var router = express.Router();

var QuestoesController = require("../controllers/medidaController");

 router.get("/resultado/:idusuario", function (req, res) {
     QuestoesController.pegarResultadosQuestionarioUsuario(req, res);
 });


module.exports = router;