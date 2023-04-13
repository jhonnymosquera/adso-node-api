const express = require("express");
const jobSchema = require("../models/job");

const router = express.Router();

// creat job
router.post("/job", (req, res) => {
	const user = jobSchema(req.body);
	user
		.save()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

// get all jobs
router.get("/job", (req, res) => {
	jobSchema
		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

// get  job
router.get("/job/:id", (req, res) => {
	const { id } = req.params;

	jobSchema
		.findById(id)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

// delete  job
router.delete("/job/:id", (req, res) => {
	const { id } = req.params;

	jobSchema
		.deleteOne({ _id: id })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

// update  job
router.put("/job/:id", (req, res) => {
	const { id } = req.params;

	jobSchema
		.updateOne({ _id: id }, { $set: { ...req.body } })
		.then((data) => res.json("Datos Actualizados correctamente"))
		.catch((error) => res.json({ message: error }));
});

module.exports = router;
