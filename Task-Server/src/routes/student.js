const express = require('express');
const router = express.Router();
const getStudentController  = require('../controllers/studentController')

router.get('/', getStudentController.getAllStudents);
router.get('/:id', getStudentController.getStudent);
router.delete('/:id', getStudentController.deleteStudent);
router.post('/', getStudentController.addStudent);
router.put('/:id', getStudentController.updateStudent);

module.exports = router