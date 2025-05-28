var express = require("express");
var router = express.Router();

// var medidaController = require("../controllers/medidaController")
var QuestoesController = require("../controllers/medidaController");

// router.get("/ultimas/:idAquario", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })
//  router.get("/questoes/:idQuestoes", function (req, res) {
//     QuestoesController.inserirResultadosQuestoes(req, res);
// })
 router.get("/resultado"), function (req, res) {
    QuestoesController.pegarResultadosQuestionarioUsuario(req, res)
 }



module.exports = router;