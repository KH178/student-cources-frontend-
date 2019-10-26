const express = require('express');
const router = new express.Router();
const Student = require('../models/student');
const mongoose = require('mongoose');
const Cource = require('../models/cources');
var errorhandler = require('errorhandler') 
const addCource = require('../middleware/addCource')  


router.post('/', async (req, res) => {
     // addCource(req.body.cources)
     
     try {
          const student = new Student({ ...req.body.data });
          await student.save(function (err,savedStudent) {
               console.log(savedStudent.cources);
               addCource(savedStudent._id, savedStudent.cources)
          });
          res.status(201).send({student});
     }
     catch (err) {
          res.status(400).send(err);
     }
})

router.get('/', async (req, res) => { 
     try {
          const students = await Student.find({})
          console.log(students);
          if (!students) {
               throw new Error('NO Students found!');
          }
          res.send(students);
     }
     catch (err) {
          res.send(err);
     }
})

router.delete('/:id', async (req, res) => {
     try {
          const _id = req.params.id;
          console.log(_id);
          
          const students = await Student.findByIdAndDelete(_id);
          if (!students) {
               throw new Error('NO Students found!');
          }
          res.send(students);
     } catch (err) {
          res.status(404).send(err);
     }
})

// router.get('/:id', async (req, res) => {
//      try {
//           const _id = req.params.id;
//           const students = await Student.find({_id})
//           console.log(students);
//           if (!students) {
//                throw new Error('NO Students found!');
//           }
//           res.send(students);
//      } catch (err) {
//           res.send(err);
//      }
// })

// router.delete('/:id', async (req, res) => {
//      try {
//           const name = req.params.id;
//           console.log(name);
          
//           const students = await Student.find({
//                name: name
//           })
//           console.log(students);
//           if (!students) {
//                throw new Error('NO Students found!');
//           }
//           res.send(students);
//      } catch (err) {
//           res.send("err");
//      }
// })
module.exports = router