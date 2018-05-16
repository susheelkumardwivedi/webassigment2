const { Batch } = require('./db')

const route = require('express').Router()

route.get('/', (req, res) => {
    Batch.findAll().
    then((batches)=>{
        res.status(200).send(batches)
        //console.log(batches)
    }).
    catch((err)=>{
        res.status(500).send('Cant find any batches')
    })
   
   
})

route.post('/', (req, res) => {
    console.log("in post request"+req.body.name)
    console.log(req.body.courseId);
    Batch.create({
        name: req.body.name,
        courseId: parseInt(req.body.courseId)
    }).then(() => {
       res.status(200).send('Batches added succesfully')
    }).catch((err) => res.send('cant add the course'))
   
   
})



module.exports=route