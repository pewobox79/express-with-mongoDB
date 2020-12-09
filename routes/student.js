const express = require('express')
const router = express.Router()
const {createStudent, getAllStudents} = require('../controllers/student')

console.log(createStudent)
router.post("/students", createStudent);
router.get("/:id", getAllStudents);

module.exports = router