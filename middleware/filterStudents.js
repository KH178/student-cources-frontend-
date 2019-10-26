const Student = require('../models/student');

const filterStudents = async (req, res, next) => {
    try {
        const student = await Student.find();
        if (!Student) {
            throw new Error()
        }

        req.student = student;

        return next();
    } catch (e) {
        res.status(401).send({
            error: 'No Student Found!!'
        })
    }
}

module.exports = filterStudents;