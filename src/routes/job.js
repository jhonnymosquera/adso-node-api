const { Router } = require('express');
const { createJob, getAllJobs, getJobById, updateJob, deleteJob } = require('../controllers/job');
const { validatorCreateItems, validatorIdItem, validatorUpdateItems } = require('../validators/jobValidator');

const router = Router();

// creat job
router.post('/', validatorCreateItems, createJob);

// get all jobs
router.get('/', getAllJobs);

// get  job
router.get('/:id', validatorIdItem, getJobById);

// update  job
router.put('/:id', validatorUpdateItems, updateJob);

// delete  job
router.delete('/:id', validatorIdItem, deleteJob);

module.exports = router;
