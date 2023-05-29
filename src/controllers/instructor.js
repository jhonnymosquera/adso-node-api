const instructorSchema = require('../models/instructor');
const { v4: uuidv4 } = require('uuid');
const { matchedData, body } = require('express-validator');
const { handleHttpError } = require('../utils/handleError');

// creat Instructor
const createInstructor = async (req, res) => {
	try {
		const body = matchedData(req);
		const data = await instructorSchema.create({ ...body, _id: uuidv4() });

		res.send({ message: 'Instructor creado de manera exitosa' });
	} catch (error) {
		handleHttpError(res, 'ERROR_CREATE_INSTRUCTOR');
	}
};

// get all Instructors
const getAllInstructors = async (req, res) => {
	try {
		const data = await instructorSchema.find();

		res.send(data);
	} catch (error) {
		handleHttpError(res, 'ERROR_GET_ALL_INSTRUCTOR');
	}
};

// get  Instructor
const getInstructorById = async (req, res) => {
	try {
		const { id } = matchedData(req);

		const data = await instructorSchema.findById(id);

		res.send(data);
	} catch (error) {
		handleHttpError(res, 'ERROR_GET_INSTRUCTOR_BY_ID');
	}
};

// update  Instructor
const updateInstructor = async (req, res) => {
	try {
		const { id, ...body } = matchedData(req);

		const data = await instructorSchema.findOneAndUpdate(id, body);

		res.send({ message: 'Instructor editado de manera correcta' });
	} catch (error) {
		handleHttpError(res, 'ERROR_UPDATE_INSTRUCTOR');
	}
};

// delete Instructor;
const deleteInstructor = async (req, res) => {
	try {
		const { id } = matchedData(req);

		const data = await instructorSchema.findByIdAndDelete(id);

		res.send({ message: 'Instructor Eliminado de manera correcta' });
	} catch (error) {
		handleHttpError(res, 'ERROR_UPDATE_INSTRUCTOR');
	}
};

module.exports = {
	createInstructor,
	getAllInstructors,
	getInstructorById,
	updateInstructor,
	deleteInstructor,
};
