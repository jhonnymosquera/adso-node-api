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
	title: {
		type: String,
		require: true,
	},
	state: {
		type: Boolean,
		required: true,
	},
});

module.exports = mongoose.model("Jobs", jobSchema);
