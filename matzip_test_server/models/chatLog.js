var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatLogSchema = new Schema({
	    userId: String,
	    time: String,
	    msg: String, 
	    type: String, 
});

module.exports = mongoose.model('chatLog', ChatLogSchema);
