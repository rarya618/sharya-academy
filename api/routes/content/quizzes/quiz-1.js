var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.sendFile(__dirname + "/quiz-1.json");
});

module.exports = router;