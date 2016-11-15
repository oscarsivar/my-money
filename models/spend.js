const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var SpendSchema = new Schema({
	concept				: String, 
	amount				: Number,
	date	 			: {type: Date, default: Date.now},
	description			: String
});

var Spend = mongoose.model('Spend', SpendSchema);