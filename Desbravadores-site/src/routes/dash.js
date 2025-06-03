var express = require("express");
var router = express.Router();

var dashgeralController = require("../controllers/dashgeralController");

router.get("/buscar", function (req, res) {
    dashgeralController.dadosGraficoGeral(req, res);
});
router.get('/maior', function (req, res) {
    dashgeralController.clubeMaisQtd(req, res)
});

module.exports = router;