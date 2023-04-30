const { Router } = require('express');
const { createTask, getAllTasks, getTaskById, updateTask } = require('../controllers/task');
const { deleteJob } = require('../controllers/job');

const router = Router();

// creat task
router.post('/adso/task', createTask);

// get all tasks
router.get('/adso/task', getAllTasks);

// get  task
router.get('/adso/task/:id', getTaskById);

// update  task
router.put('/adso/task/:id', updateTask);

// delete  task
router.delete('/adso/task/:id', deleteJob);

module.exports = router;
