const { matchedData } = require('express-validator');
const jobSchema = require('../models/job');
const { v4: uuidv4 } = require('uuid');
const { handleHttpError } = require('../utils/handleError');

// creat job
const createJob = async (req, res) => {
	try {
		const body = matchedData(req);
		const data = await jobSchema.create({ _id: uuidv4(), ...body });

		res.send({ message: "'Trabajo registrado de manera exitosa'" });
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
		const { id } = matchedData(req);

		const data = await jobSchema.findById(id);

		res.send(data);
	} catch (error) {
		handleHttpError(res, 'ERROR_GET_JOB_BY_ID');
	}
};

// update  job
const updateJob = async (req, res) => {
	try {
		const { id, ...body } = matchedData(req);

		const data = await jobSchema.findByIdAndUpdate(id, body);

		res.send({ message: 'Trabajo editado de manera exitosa' });
	} catch (error) {
		handleHttpError(res, 'ERROR_UPDATE_JOB');
	}
};

// delete  job
const deleteJob = async (req, res) => {
	try {
		const { id } = matchedData(req);
		const data = await jobSchema.findByIdAndDelete(id);

		res.send({ message: 'Trabajo eliminado de manera exitosa' });
	} catch (error) {
		handleHttpError(res, 'ERROR_DELETE_JOB');
	}
};

module.exports = { createJob, getAllJobs, getJobById, updateJob, deleteJob };
