const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const studentSchema = new Schema({  
    name: {
        type: String,
        required: true,
        trim: true,
    },
    rollNo: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Roll-Number must be positive!')
            }
        }
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    college: {
        type: String,
        required: true,
        trim: true
    },
    cources: [{
        type: String,
        trim: true
    }]
})

    // studentSchema.methods.toJSON = function () {
    //     const student = this;
    //     const studentObject = student.toObject();
    //     delete studentObject._id;
    //     console.log(student);
    //     return studentObject;
    // }


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;