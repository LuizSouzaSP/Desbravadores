var express = require("express");
var router = express.Router();

var idadeController = require("../controllers/idadeController");

 router.get("/idadeResultado/:idusuario", function (req, res) {
     idadeController.idadeUsuario(req, res);
 });


module.exports = router;