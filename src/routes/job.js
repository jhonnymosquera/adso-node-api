const express = require("express");
const jobSchema = require("../models/job");

const router = express.Router();

// creat job
router.post("/adso/job", async (req, res) => {
	const { date, title, state, instructorId } = req.body;
	const jobs = jobSchema({ date, title, state, instructorId });

	try {
		const data = await jobs.save();

		res.send(data);
	} catch (error) {
		res.send(error.message);
	}
});

// get all jobs
router.get("/adso/job", async (req, res) => {
	try {
		const data = await jobSchema.find();

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
});

// get  job
router.get("/adso/job/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const data = await jobSchema.findById(id);

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
});

// update  job
router.put("/adso/job/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const data = await jobSchema.updateOne({ _id: id }, { $set: { ...req.body } });

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
});

// delete  job
router.delete("/adso/job/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const data = await jobSchema.deleteOne({ _id: id });

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
});

module.exports = router;
