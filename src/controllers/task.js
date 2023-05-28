const { matchedData } = require('express-validator');
const taskSchema = require('../models/task');
const { v4: uuidv4 } = require('uuid');
const { handleHttpError } = require('../utils/handleError');

// creat task
const createTask = async (req, res) => {
	try {
		const body = matchedData(req);
		const data = await taskSchema.create({ ...body, _id: uuidv4() });

		res.send('Tarea creada de manera exitosa');
	} catch (error) {
		handleHttpError(res, 'ERROR_CREATE_TASK');
	}
};

// get all tasks
const getAllTasks = async (req, res) => {
	try {
		const data = await taskSchema.find();

		res.send(data);
	} catch (error) {
		handleHttpError(res, 'ERROR_GET_ALL_TASK');
	}
};

// get  task
const getTaskById = async (req, res) => {
	try {
		const { id } = req.params;
		const data = await taskSchema.findById(id);

		res.send(data);
	} catch (error) {
		handleHttpError(res, 'ERROR_GET_TASK_BY_ID');
	}
};

// update  task
const updateTask = async (req, res) => {
	try {
		const { id } = req.params;
		const { text, jobId } = req.body;
		const dataUpdate = { text, jobId };

		const data = await taskSchema.updateOne({ _id: id }, { $set: dataUpdate });

		res.send(data);
	} catch (error) {
		handleHttpError(res, 'ERROR_UPDATE_TASK');
	}
};

// delete  task
const deleteTask = async (req, res) => {
	try {
		const { id } = req.params;
		const data = await taskSchema.deleteOne({ _id: id });

		res.send(data);
	} catch (error) {
		handleHttpError(res, 'ERROR_DELETE_TASK');
	}
};

module.exports = { createTask, getAllTasks, getTaskById, updateTask, deleteTask };
