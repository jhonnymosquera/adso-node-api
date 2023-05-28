const { Router } = require('express');
const { createDay, getAllDays, getDayById, updateDay, deleteDay } = require('../controllers/day');
const router = Router();

// Create dat
router.post('/', createDay);

// Get all days
router.get('/', getAllDays);

// Get day by id
router.get('/:id', getDayById);

// Update day
router.put('/:id', updateDay);

// Delete day
router.delete('/:id', deleteDay);

module.exports = router;
