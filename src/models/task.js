const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
	jobId: {
		type: String,
		require: true,
	},
	text: {
		type: String,
		require: true,
	},
});

module.exports = mongoose.model("Taks", taskSchema);
