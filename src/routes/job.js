const { Router } = require('express');
const { createJob, getAllJobs, getJobById, updateJob, deleteJob } = require('../controllers/job');

const router = Router();

// creat job
router.post('/adso/job', createJob);

// get all jobs
router.get('/adso/job', getAllJobs);

// get  job
router.get('/adso/job/:id', getJobById);

// update  job
router.put('/adso/job/:id', updateJob);

// delete  job
router.delete('/adso/job/:id', deleteJob);

module.exports = router;
