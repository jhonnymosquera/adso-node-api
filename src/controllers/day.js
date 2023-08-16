const { matchedData } = require('express-validator');
const daySchema = require('../models/day');
const { v4: uuidv4 } = require('uuid');
const { handleHttpError } = require('../utils/handleError');

// create day
const createDay = async (req, res) => {
	try {
		const body = matchedData(req);

		const data = await daySchema.create({ _id: uuidv4(), ...body });

		res.send({ message: 'El dia se ha guardado de manera exitosa' });
	} catch (error) {
		handleHttpError(res, `ERROR_CREATE_DAY - ${error.message}`);
	}
};

// get all days
const getAllDays = async (req, res) => {
	try {
		const data = await daySchema.findAllData();

		res.send(data);
	} catch (error) {
		handleHttpError(res, `ERROR_GET_ALL_DAY - ${error.message}`);
	}
};

// get a day
const getDayById = async (req, res) => {
	try {
		const { id } = matchedData(req);
		const data = await daySchema.findOneData(id);

		res.send(data);
	} catch (error) {
		handleHttpError(res, `ERROR_GET_DAY_BY_ID - ${error.message}`);
	}
};

// update a day
const updateDay = async (req, res) => {
	try {
		const { id, ...body } = matchedData(req);

		const data = await daySchema.findByIdAndUpdate(id, body);

		res.send({ message: 'Dia actualizado correctamente' });
	} catch (error) {
		handleHttpError(res, `ERROR_UPDATE_DAY - ${error.message}`);
	}
};

// delete a day
const deleteDay = async (req, res) => {
	try {
		const { id } = matchedData(req);

		const data = await daySchema.findByIdAndDelete(id);

		res.send({ message: 'Dia eliminado correctamente' });
	} catch (error) {
		handleHttpError(res, `ERROR_DELETE_DAY - ${error.message}`);
	}
};

module.exports = { createDay, getAllDays, getDayById, updateDay, deleteDay };
