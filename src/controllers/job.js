const jobSchema = require('../models/job');
const { v4: uuidv4 } = require('uuid');

// creat job
const createJob = async (req, res) => {
	const { date, title, state, instructorId } = req.body;

	const jobs = jobSchema({
		_id: uuidv4(),
		date,
		title,
		state,
		instructorId,
	});

	try {
		const data = await jobs.save();

		res.send(data);
	} catch (error) {
		res.send(error.message);
	}
};

// get all jobs
const getAllJobs = async (req, res) => {
	try {
		const data = await jobSchema.find();

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
};

// get  job
const getJobById = async (req, res) => {
	const { id } = req.params;

	try {
		const data = await jobSchema.findById(id);

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
};

// update  job
const updateJob = async (req, res) => {
	const { id } = req.params;

	try {
		const data = await jobSchema.updateOne({ _id: id }, { $set: { ...req.body } });

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
};

// delete  job
const deleteJob = async (req, res) => {
	const { id } = req.params;

	try {
		const data = await jobSchema.deleteOne({ _id: id });

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
};

module.exports = { createJob, getAllJobs, getJobById, updateJob, deleteJob };
