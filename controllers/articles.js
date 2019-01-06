var scrape = require("../routes/api-routes");

var Article = require("../models/Article");

module.exports = {
	fetch: function(cb) {
		scrape(function(data) {
			var articles = data;
			for (var i=0; i < articles.length; i++) {
			articles[i].saved = false; 
		}
		Article.collection.insertMany(articles, {ordered:false}, function(err, docs){
			cb(err, docs); 
		}); 
	}); 
	},
	delete: function(query, cb) {
		Article.remove(query.cb); 
	}
}