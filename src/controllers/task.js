const taskSchema = require('../models/task');

// creat task
const createTask = async (req, res) => {
	const task = taskSchema(req.body);

	try {
		const data = await task.save();

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
};

// get all tasks
const getAllTasks = async (req, res) => {
	try {
		const data = await taskSchema.find();

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
};

// get  task
const getTaskById = async (req, res) => {
	const { id } = req.params;

	try {
		const data = await taskSchema.findById(id);

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
};

// update  task
const updateTask = async (req, res) => {
	const { id } = req.params;

	try {
		const data = await taskSchema.updateOne({ _id: id }, { $set: { ...req.body } });

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
};

// delete  task
const deleteTask = async (req, res) => {
	const { id } = req.params;

	try {
		const data = await taskSchema.deleteOne({ _id: id });

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
};

module.exports = { createTask, getAllTasks, getTaskById, updateTask, deleteTask };
