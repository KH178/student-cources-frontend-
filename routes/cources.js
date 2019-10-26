const express = require('express');
const router = new express.Router();
const Cource = require('../models/cources');
const Students = require('../models/student');
const mongoose = require('mongoose');
const filterStudents = require('../middleware/filterStudents')


router.post('/', filterStudents, async (req, res) => {
   
    console.log(req.body.data);
    
    try {
        const name = req.body.data.courceName;
        const studentsId = req.student.filter(student => {
            if (student.cources.includes(name)) {
                return student._id
            }
        })
        console.log(studentsId);
         const cource = new Cource({
             ...req.body.data,
             student: studentsId
         });
        await cource.save();
        res.status(201).send(cource);
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get('/', filterStudents, async (req, res) => {
    try {
        console.log(req.student);
        const cources = await Cource.find().populate('student', '-_id -cources -address -__v')
        //     {
        //     path: 'student',
        //     select: 'name'
        // })
        res.send(cources);
    } catch (err) {
        res.send(err);
    }
})


router.get('/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        console.log(_id);
        const cources = await Cource.find({ _id }).populate({
            path: 'student',
            select: '_id'
        }).exec(function (err, users) { })
        res.send(cources);
    }
        catch (err) {
        res.send(err);
    }
})

router.delete('/:id', filterStudents, async (req, res) => {
    try {
        const _id = req.params.id;
        console.log(_id);
        const cources = await Cource.findOneAndDelete({ _id });
        res.send(cources);
    } catch (err) {
        res.send(err);
    }
})

module.exports = router