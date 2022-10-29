const express = require("express")
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId



//model 
const Event = require("../models/event")
// const trash = require("../models/trash")
const Trash = require('../models/trash')


router.post('/addevent', (req, res) => {
    console.log("vkj");

    const event = new Event();
    event.user = req.body.user
    event.eventname = req.body.eventname;
    event.eventdescription = req.body.eventdescription;
    event.startdate = req.body.startdate;
    event.enddate = req.body.enddate;
    event.eventtype = req.body.eventtype;

    event.save((error, doc) => {
        res.json(doc)
    })


})



router.get('/viewevent/:id', (req, res) => {
    console.log(req.params.id)
    if (ObjectId.isValid(req.params.id)) {
        Event.find({ user: req.params.id }, (error, doc) => {
            console.log("dfndfnbg", doc)

            res.json({
                success: true,
                doc: doc
            })
        })

    } else {
        console.log("not found")
    }



})




router.delete('/delete/:id', (req, res) => {
    console.log("dh")
    Event.findByIdAndRemove({ _id: req.params.id }, (error, doc) => {
        res.json({
            success: true,
            message: "deleted success",
            delData: doc
        })
    })
})




router.post('/trash', (req, res) => {
    console.log('deleeeeeeeeee')
    trash = new Trash();
    trash.deletedeventid = req.body._id;
    trash.user = req.body.user;
    trash.eventname = req.body.eventname;
    trash.eventdescription = req.body.eventdescription;
    trash.startdate = req.body.startdate;
    trash.enddate = req.body.enddate;
    trash.eventtype = req.body.eventtype;

    trash.save()
    res.json({
        success: true,
        message: "move to trash"
    })




})


router.get('/trash-view/:id', (req, res) => {
    console.log(req.params.id)
    Trash.find({ user: req.params.id }, (error, doc) => {
        if (error) {
            res.json({
                success: false
            })
        } else {
            res.json({
                success: true,
                doc: doc

            })

        }

    })
})


router.delete('/trashdelete/:id', (req, res) => {
    Trash.findByIdAndRemove({ _id: req.params.id }, (error, doc) => {
        if (error) {
            res.json({
                success: false
            })
        } else {
            res.json({
                success: true,
                doc: doc

            })

        }
    })

})

router.put('/edit/:id',(req,res)=>{
    Event.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true},(err,doc)=>{
        res.json({
            doc:doc
        })
    })
})





module.exports = router
