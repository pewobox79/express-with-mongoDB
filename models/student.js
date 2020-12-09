const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({ name: String, first_name: String, email: String });
const Student = mongoose.model('Student', studentSchema);


module.exports = Student