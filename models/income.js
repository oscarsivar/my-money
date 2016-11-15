const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var IncomeSchema = new Schema({
	concept				: String, 
	amount				: Number,
	date	 			: Date
});

var Income = mongoose.model('Income', IncomeSchema);