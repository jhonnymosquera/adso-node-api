const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
	instructorId: {
		type: String,
		require: true,
	},
	date: {
		type: String,
		required: true,
	},
	jobs: {
		type: Array,
		required: true,
	},
	state: {
		type: Boolean,
		required: true,
	},
});

module.exports = mongoose.model("Jobs", jobSchema);
