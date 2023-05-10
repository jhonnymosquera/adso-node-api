const daySchema = require('../models/day');
const { v4: uuidv4 } = require('uuid');

// create day
const createDay = async (req, res) => {
	const { day, date, state, instructorId } = req.body;

	const days = daySchema({
		_id: uuidv4(),
		day,
		date,
		state,
		instructorId,
	});

	try {
		const data = await days.save();

		res.send('El dia se ha guardado de manera exitosa');
	} catch (error) {
		res.send({ message: error });
	}
};

// get all days
const getAllDays = async (req, res) => {
	try {
		const data = await daySchema.find();

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
};

// get a day
const getDayById = async (req, res) => {
	const { id } = req.params;

	try {
		const data = await daySchema.findById(id);

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
};

// update a day
const updateDay = async (req, res) => {
	const { id } = req.params;
	const { day, date, state, instructorId } = req.body;

	try {
		const data = await daySchema.updateOne({ _id: id }, { $set: { day, date, state, instructorId } });

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
};

// delete a day
const deleteDay = async (req, res) => {
	const { id } = req.params;

	try {
		const data = await daySchema.deleteOne({ _id: id });

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
};

module.exports = { createDay, getAllDays, getDayById, updateDay, deleteDay };
