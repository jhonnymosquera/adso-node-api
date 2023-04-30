const { Router } = require('express');
const { createDay, getAllDays, getDayById, updateDay, deleteDay } = require('../controllers/day');
const router = Router();

// Create dat
router.post('/adso/day', createDay);

// Get all days
router.get('/adso/day', getAllDays);

// Get day by id
router.get('/adso/day/:id', getDayById);

// Update day
router.put('/adso/day/:id', updateDay);

// Delete day
router.delete('/adso/day/:id', deleteDay);

module.exports = router;
