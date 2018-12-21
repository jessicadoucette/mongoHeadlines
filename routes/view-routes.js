var router = require("express").Router();

router.get("/home", function (req, res) {
	console.log("views")
	res.render("home")
});




module.exports = router;
