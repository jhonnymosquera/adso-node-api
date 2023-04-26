const express = require("express");
const instructorSchema = require("../models/instructor");

const router = express.Router();

// creat Instructor
router.post("/instructor", async (req, res) => {
	const { day, date, state, name, transversal, jobs } = req.body;

	const instructor = instructorSchema({
		day,
		date,
		state,
		class: req.body.class,
		transversal,
		name,
		jobs,
	});

	try {
		const data = await instructor.save();

		res.send(data);
	} catch (error) {
		res.json({ message: error });
	}
});

// get all Instructors
router.get("/instructor", async (req, res) => {
	try {
		const data = await instructorSchema.find();
		res.send(data);
	} catch (error) {
		res.json({ message: error });
	}
});

// get  Instructor
router.get("/instructor/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const data = await instructorSchema.findById(id);
		res.send(data);
	} catch (error) {
		res.json({ message: error });
	}
});

// update  Instructor
router.put("/instructor/:id", async (req, res) => {
	const { id } = req.params;
	const { name, email, avatar, transversal } = req.body;
	const dataUpdate = { name, email, avatar, transversal, class: req.body.class };

	try {
		const data = await instructorSchema.updateOne({ _id: id }, { $set: dataUpdate });

		res.send("Instructor Actualizado correctamente");
	} catch (error) {
		res.send({ message: error });
	}
});

// delete Instructor;
// router.delete("/instructor/:id", async (req, res) => {
// 	const { id } = req.params;

// 	try {
// 		const data = await instructorSchema.deleteOne({ _id: id });

// 		res.send(data);
// 	} catch (error) {
// 		res.send({ message: error });
// 	}
// });

module.exports = router;
