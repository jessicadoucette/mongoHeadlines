var express = require("express");
var expressHandlebars = require("express-handlebars");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var bodyParser = require("body-parser");
var logger = require("morgan");

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

var router = express.Router();

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHandlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars");

app.use(router);

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });


app.listen(PORT, function() {
	console.log("Listening on Port: " + PORT); 
})