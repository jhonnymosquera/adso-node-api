const { Router } = require('express');
const { createTask, getAllTasks, getTaskById, updateTask } = require('../controllers/task');
const { deleteJob } = require('../controllers/job');
const { validatorCreateItems } = require('../validators/taskValidator');

const router = Router();

// creat task
router.post('/', validatorCreateItems, createTask);

// get all tasks
router.get('/', getAllTasks);

// get  task
router.get('/:id', getTaskById);

// update  task
router.put('/:id', updateTask);

// delete  task
router.delete('/:id', deleteJob);

module.exports = router;
