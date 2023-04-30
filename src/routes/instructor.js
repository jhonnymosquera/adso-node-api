const { Router } = require('express');
const { createInstructor, getAllInstructors, getInstructorById, updateInstructor } = require('../controllers/instructor');

const router = Router();

// creat Instructor
router.post('/adso/instructor', createInstructor);

// get all Instructors
router.get('/adso/instructor', getAllInstructors);

// get  Instructor
router.get('/adso/instructor/:id', getInstructorById);

// update  Instructor
router.put('/adso/instructor/:id', updateInstructor);

// delete Instructor;
router.delete('/adso/instructor/:id', updateInstructor);

module.exports = router;
