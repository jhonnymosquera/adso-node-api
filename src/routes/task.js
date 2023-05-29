const { Router } = require('express');
const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('../controllers/task');
const { validatorCreateItem, validatorUpdateItem, validatorIdItem } = require('../validators/taskValidator');

const router = Router();

// creat task
router.post('/', validatorCreateItem, createTask);

// get all tasks
router.get('/', getAllTasks);

// get  task
router.get('/:id', validatorIdItem, getTaskById);

// update  task
router.put('/:id', validatorUpdateItem, updateTask);

// delete  task
router.delete('/:id', validatorIdItem, deleteTask);

module.exports = router;
