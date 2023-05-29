const daySchema = require('../models/day');
const instructorSchema = require('../models/instructor');
const jobSchema = require('../models/job');
const taskSchema = require('../models/task');
const { handleHttpError } = require('../utils/handleError');

const adso = async (req, res) => {
	try {
		const days = await daySchema.find();
		const instructors = await instructorSchema.find();
		const jobs = await jobSchema.find();
		const tasks = await taskSchema.find();

		// A falta de mejores conocimientos toco asi
		// Guardando las tareas(tasks) en los Trabajos(jobs)
		jobs.forEach((job) => {
			tasks.forEach((task) => {
				if (task.jobId == job._id) job.tasks.push(task);
			});

			return job;
		});

		// Guardando los trabajos(jobs) en los Instructores
		instructors.forEach((instructor) => {
			jobs.forEach((job) => {
				if (job.instructorId == instructor._id) instructor.jobs.push(job);
			});

			return instructor;
		});

		const data = { days, instructors };

		res.send(data);
	} catch (error) {
		handleHttpError(res, 'ERROR_GET_ADSO_DATA');
	}
};

module.exports = { adso };
