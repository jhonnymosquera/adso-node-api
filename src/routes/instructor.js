const { Router } = require('express');
const { createInstructor, getAllInstructors, getInstructorById, updateInstructor, deleteInstructor } = require('../controllers/instructor');
const { validatorCreateItems, validatorIdItem, validatorUpdateItems } = require('../validators/instructorValidator');

const router = Router();

// creat Instructor
router.post('/', validatorCreateItems, createInstructor);

// get all Instructors
router.get('/', getAllInstructors);

// get  Instructor
router.get('/:id', validatorIdItem, getInstructorById);

// update  Instructor
router.put('/:id', validatorUpdateItems, updateInstructor);

// delete Instructor;
router.delete('/:id', validatorIdItem, deleteInstructor);

module.exports = router;
