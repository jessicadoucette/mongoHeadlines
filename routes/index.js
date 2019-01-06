var router = require("express").Router();
var apiRoutes = require("./api-routes.js");
var viewRoutes = require("./view-routes.js");
var articles = require("../models/Article");



router.use("/api", apiRoutes);
router.use("/", viewRoutes);
router.use("/saved", viewRoutes);
router.use("/articles", articles);



module.exports = router;