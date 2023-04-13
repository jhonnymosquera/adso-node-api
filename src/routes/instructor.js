const express = require("express");
const instructorSchema = require("../models/instructor");

const router = express.Router();

// creat Instructor
router.post("/instructor", (req, res) => {
	const { day, date, state, instructorId } = req.body;

	const user = instructorSchema({ day, date, state, instructorId });
	user
		.save()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

// get all Instructors
router.get("/instructor", (req, res) => {
	instructorSchema
		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

// get  Instructor
router.get("/instructor/:id", (req, res) => {
	const { id } = req.params;

	instructorSchema
		.findById(id)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

// update  Instructor
router.put("/instructor/:id", (req, res) => {
	const { id } = req.params;
	const { name, email, avatar, transversal } = req.body;

	instructorSchema
		.updateOne({ _id: id }, { $set: { name, email, avatar, transversal, class: req.body.class } })
		.then((data) => res.json("Datos Actualizados correctamente"))
		.catch((error) => res.json({ message: error }));
});

// delete  Instructor
// router.delete("/instructor/:id", (req, res) => {
// 	const { id } = req.params;

// 	instructorSchema
// 		.deleteOne({ _id: id })
// 		.then((data) => res.json(data))
// 		.catch((error) => res.json({ message: error }));
// });

module.exports = router;
