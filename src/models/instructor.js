const mongoose = require('mongoose');

const instructorSchema = mongoose.Schema({
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
		required: true,
	},
});

module.exports = mongoose.model('Instructor', instructorSchema);
