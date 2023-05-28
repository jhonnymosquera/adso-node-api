const { Router } = require('express');
const { createJob, getAllJobs, getJobById, updateJob, deleteJob } = require('../controllers/job');

const router = Router();

// creat job
router.post('/', createJob);

// get all jobs
router.get('/', getAllJobs);

// get  job
router.get('/:id', getJobById);

// update  job
router.put('/:id', updateJob);

// delete  job
router.delete('/:id', deleteJob);

module.exports = router;
