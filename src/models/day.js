const mongoose = require('mongoose');

const daySchema = mongoose.Schema({
	_id: {
		type: String,
		require: true,
	},
	day: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	state: {
		type: Boolean,
		require: true,
	},
	instructorId: {
		type: String,
		require: true,
	},
});

module.exports = mongoose.model('Days', daySchema);
