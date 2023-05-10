const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
	_id: {
		type: String,
		require: true,
	},
	instructorId: {
		type: String,
		require: true,
	},
	date: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		require: true,
	},
	tasks: {
		type: Array,
		require: false,
	},
	state: {
		type: Boolean,
		required: true,
	},
});

module.exports = mongoose.model('Jobs', jobSchema);
