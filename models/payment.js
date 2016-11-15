const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var PaymentSchema = new Schema({
	concept				: String, 
	amount				: Number,
	date	 			: Date,
	description			: String
});

var Payment = mongoose.model('Payment', PaymentSchema);