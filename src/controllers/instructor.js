const express = require('express');
const instructorSchema = require('../models/instructor');

const router = express.Router();

// creat Instructor
const createInstructor = async (req, res) => {
	const { day, date, state, name, transversal } = req.body;

	const instructor = instructorSchema({
		day,
		date,
		state,
		class: req.body.class,
		transversal,
		name,
	});

	try {
		const data = await instructor.save();

		res.send(data);
	} catch (error) {
		res.json({ message: error });
	}
};

// get all Instructors
const getAllInstructors = async (req, res) => {
	try {
		const data = await instructorSchema.find();
		res.send(data);
	} catch (error) {
		res.json({ message: error });
	}
};

// get  Instructor
const getInstructorById = async (req, res) => {
	const { id } = req.params;

	try {
		const data = await instructorSchema.findById(id);
		res.send(data);
	} catch (error) {
		res.json({ message: error });
	}
};

// update  Instructor
const updateInstructor = async (req, res) => {
	const { id } = req.params;
	const { name, email, avatar, transversal } = req.body;
	const dataUpdate = { name, email, avatar, transversal, class: req.body.class };

	try {
		const data = await instructorSchema.updateOne({ _id: id }, { $set: dataUpdate });

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
};

// delete Instructor;
const deleteInstructor = async (req, res) => {
	const { id } = req.params;

	try {
		const data = await instructorSchema.deleteOne({ _id: id });

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
};

module.exports = { createInstructor, getAllInstructors, getInstructorById, updateInstructor, deleteInstructor };
