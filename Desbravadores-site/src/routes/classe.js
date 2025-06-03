var express = require("express");
var router = express.Router();

var classeController = require("../controllers/dashgeralController");

router.post("/resultado/:idusuario", function (req, res) {
    classeController.dadosGraficoGeral(req, res);
});

module.exports = router;