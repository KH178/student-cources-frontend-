const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const courcesSchema = Schema({
    courceName: {
        type: String,
        required: true,
        unique: true
    },
    professor: {
        type: String,
    },
    student: [{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }],
})

// courcesSchema.methods.generateStudents = async function () {
//     const students = this;
//     console.log(this);
// }
courcesSchema.pre('save', async function () {
     console.log('cource is saved or added');
})
const Cources = mongoose.model('Cource', courcesSchema);

module.exports = Cources;