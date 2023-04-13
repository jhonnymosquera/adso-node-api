const express = require("express");
const daySchema = require("../models/day");

const router = express.Router();

// create day
router.post("/day", (req, res) => {
	const day = daySchema(req.body);
	day
		.save()
		.then((data) => res.json("El dia ha guardado de manera exitosa"))
		.catch((error) => res.json(error));
});

// get all days
router.get("/day", (req, res) => {
	daySchema
		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

// get a day
router.get("/day/:id", (req, res) => {
	const { id } = req.params;
	daySchema
		.findById(id)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

// update a day
router.put("/day/:id", (req, res) => {
	const { id } = req.params;
	const { day, date, state, instructorId } = req.body;

	daySchema
		.updateOne({ _id: id }, { $set: { day, date, state, instructorId } })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

// delete a day
// router.delete("/day/:id", (req, res) => {
// 	const { id } = req.params;

// 	daySchema
// 		.deleteOne({ _id: id })
// 		.then((data) => res.json("El dia se ha eliminado de manera exitosa"))
// 		.catch((error) => res.json({ message: error }));
// });
module.exports = router;
