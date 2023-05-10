const mongoose = require('mongoose');

const instructorSchema = mongoose.Schema({
	_id: {
		type: String,
		require: true,
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: false,
	},
	avatar: {
		type: Object,
		require: true,
	},
	class: {
		type: String,
		require: true,
	},
	transversal: {
		type: String,
		required: true,
	},
	jobs: {
		type: Array,
		required: false,
	},
});

module.exports = mongoose.model('Instructor', instructorSchema);
