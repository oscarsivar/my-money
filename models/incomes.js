const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = function(mongoose){
	var IncomeSchema = new Schema({
		concept				: String, 
		amount				: Number,
		date	 			: Date
	});

	var Income = mongoose.model('Income', IncomeSchema);
	return Income;
}

