const Student = require('../models/student')

exports.createStudent = async function (req, res) {
    const single = await Student.insertMany(req.body);

    if (!single) {
        return res.status(404).send("Pokemon with this ID does not exist");
    }
    res.json(single);
};

exports.getAllStudents = async function (req, res) {
    const listOfStudents = await Student.find();

    if (!listOfStudents) {
        return res.status(404).send("Pokemon with this ID does not exist");
    }
    res.send(listOfStudents);
};

