const { matchedData } = require('express-validator');
const jobSchema = require('../models/job');
const { v4: uuidv4 } = require('uuid');
const { handleHttpError } = require('../utils/handleError');

// creat job
const createJob = async (req, res) => {
	try {
		const body = matchedData(req);
		const data = await jobSchema.create({ ...body, _id: uuidv4() });

		res.send('Trabajo registrado de manera exitosa');
	} catch (error) {
		handleHttpError(res, 'ERROR_CREATE_JOB');
	}
};

// get all jobs
const getAllJobs = async (req, res) => {
	try {
		const data = await jobSchema.find();

		res.send(data);
	} catch (error) {
		handleHttpError(res, 'ERROR_GET_ALL_JOB');
	}
};

// get  job
const getJobById = async (req, res) => {
	try {
		const { id } = req.params;

		const data = await jobSchema.findById(id);

		res.send(data);
	} catch (error) {
		handleHttpError(res, 'ERROR_GET_JOB_BY_ID');
	}
};

// update  job
const updateJob = async (req, res) => {
	try {
		const { id } = req.params;
		const { instructorId, date, title, state } = req.body;
		const dataUpdate = { instructorId, date, title, state };

		const data = await jobSchema.updateOne({ _id: id }, { $set: dataUpdate });

		res.send(data);
	} catch (error) {
		handleHttpError(res, 'ERROR_UPDATE_JOB');
	}
};

// delete  job
const deleteJob = async (req, res) => {
	try {
		const { id } = req.params;
		const data = await jobSchema.deleteOne({ _id: id });

		res.send(data);
	} catch (error) {
		handleHttpError(res, 'ERROR_DELETE_JOB');
	}
};

module.exports = { createJob, getAllJobs, getJobById, updateJob, deleteJob };
