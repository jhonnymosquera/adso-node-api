const express = require("express");
const daySchema = require("../models/day");
const router = express.Router();

// create day
router.post("/adso/day", async (req, res) => {
	try {
		const data = await daySchema(req.body).save();

		res.send("El dia se ha guardado de manera exitosa");
	} catch (error) {
		res.send({ message: error });
	}
});

// get all days
router.get("/adso/day", async (req, res) => {
	try {
		const data = await daySchema.find();

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
});

// get a day
router.get("/adso/day/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const data = await daySchema.findById(id);

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
});

// update a day
router.put("/adso/day/:id", async (req, res) => {
	const { id } = req.params;
	const { day, date, state, instructorId } = req.body;

	try {
		const data = await daySchema.updateOne({ _id: id }, { $set: { day, date, state, instructorId } });

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
});

// delete a day
// router.delete("/adso/day/:id", async (req, res) => {
// 	const { id } = req.params;

// 	try {
// 		const data = await daySchema.deleteOne({ _id: id });

// 		res.send(data);
// 	} catch (error) {
// 		res.send({ message: error });
// 	}
// });
module.exports = router;
