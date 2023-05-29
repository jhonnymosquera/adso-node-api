const { Router } = require('express');
const { createDay, getAllDays, getDayById, updateDay, deleteDay } = require('../controllers/day');
const { validatorCreateItem, validatorIdItem, validatorUpdateItem } = require('../validators/dayValidator');
const router = Router();

// Create dat
router.post('/', validatorCreateItem, createDay);

// Get all days
router.get('/', getAllDays);

// Get day by id
router.get('/:id', validatorIdItem, getDayById);

// Update day
router.put('/:id', validatorUpdateItem, updateDay);

// Delete day
router.delete('/:id', validatorIdItem, deleteDay);

module.exports = router;
