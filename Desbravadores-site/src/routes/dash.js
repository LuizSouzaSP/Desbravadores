var express = require("express");
var router = express.Router();

var dashgeralController = require("../controllers/dashgeralController");

router.get("/buscar", function (req, res) {
    dashgeralController.dadosGraficoGeral(req, res);
});

module.exports = router;