var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var routes = require("./routes");



var PORT = process.env.PORT || 3000;

var app = express();

// var routes = express.Router();

app.use(express.static('public'));
// Handlebars
app.engine(
	'handlebars',
	expressHandlebars({
		defaultLayout: 'main'
	})
);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
	extended: false
}))

//api and views in routes
app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);


// mongoose.connect("mongodb://localhost/mongolab-defined-4411", { useNewUrlParser: true });




app.listen(PORT, function() {
	console.log("Listening on port: " + PORT); 
});
