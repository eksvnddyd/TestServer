var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var boardSchema = new Schema({
	    menu: String,
	    time: String,
	    person: String,
	    date: Number,
	    month: Number,
	    enterPerson: Number,
});

module.exports = mongoose.model('board', boardSchema);
