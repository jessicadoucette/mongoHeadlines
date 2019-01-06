var router = require("express").Router();

router.get("/home", function (req, res) {
	console.log("views")
	res.render("home")
});

router.get("/saved", function (req, res) {
	console.log("saved view")
	res.render("saved")
});




module.exports = router;
