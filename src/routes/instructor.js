const { Router } = require('express');
const { createInstructor, getAllInstructors, getInstructorById, updateInstructor } = require('../controllers/instructor');

const router = Router();

// creat Instructor
router.post('/', createInstructor);

// get all Instructors
router.get('/', getAllInstructors);

// get  Instructor
router.get('/:id', getInstructorById);

// update  Instructor
router.put('/:id', updateInstructor);

// delete Instructor;
router.delete('/:id', updateInstructor);

module.exports = router;
