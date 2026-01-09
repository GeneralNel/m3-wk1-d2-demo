var router = require("express").Router();

router.get("/home", function (req, res) {
    res.send("Hello world!");
});

router.post("/home", function (req, res) {
    res.send("You called POST method at /hello!");
});

// export router
module.exports = router;