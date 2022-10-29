const express = require("express")
const router = express.Router();
const jwt = require("jsonwebtoken")
const checkJwt = require('../middleware/check-jwt')

//import models
const User = require('../models/user')


router.post('/signup', (req, res) => {
    console.log("dbfd")
    const user = new User()
    //value added to model
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.phonenumber = req.body.phonenumber;
    user.address = req.body.address;

    User.findOne({ email: req.body.email }, (error, extuser) => {
        if (extuser) {
            console.log("extistingusersignup", extuser);
            res.json({
                success: false,
                message: "existing user"
            });

        } else {
            user.save()
            var token = jwt.sign({ user: user }, "secretkey123")
            res.json({
                success: true,
                message: "token success",
                token: token
            })

        }
    })

})

//login
router.post('/signin', (req, res) => {
    User.findOne({ email: req.body.email, password: req.body.password }, (error, user) => {
        if (!user) {
            res.json({
                success: false,
                message: "user not found"
            })
        } else if (user) {
            var token = jwt.sign({ user: user }, "secretkey123")
            res.json({
                success: true,
                message: "logintoken created",
                token: token,
            })
        }
    })
})

//profile

router.
    route('/profile').get(checkJwt, (req, res, next) => {
        console.log("server prof")
        User.findOne({ _id: req.dec.user._id }, (error, user) => {
            res.json({
                success: true,
                message: "successfull",
                user: user
            })
        })

    })



















module.exports = { router }