const express = require("express");
const taskSchema = require("../models/task");

const router = express.Router();

// creat task
router.post("/adso/task", async (req, res) => {
	const task = taskSchema(req.body);

	try {
		const data = await task.save();

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
});

// get all tasks
router.get("/adso/task", async (req, res) => {
	try {
		const data = await taskSchema.find();

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
});

// get  task
router.get("/adso/task/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const data = await taskSchema.findById(id);

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
});

// update  task
router.put("/adso/task/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const data = await taskSchema.updateOne({ _id: id }, { $set: { ...req.body } });

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
});

// delete  task
router.delete("/adso/task/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const data = await taskSchema.deleteOne({ _id: id });

		res.send(data);
	} catch (error) {
		res.send({ message: error });
	}
});

module.exports = router;
