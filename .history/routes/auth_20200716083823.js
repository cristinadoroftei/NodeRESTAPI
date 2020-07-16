const express = require('express')
const { body } = require('express-validator/check')

const User = require('../models/user.js')
const router = express.Router()

router.put('/signup', [
    body('email')
    .isEmail()
    .withMessage('Please enter a valid email!')
    .custom((value, {req}) => {
        return User.findOne({email : value}).then(userDoc)
    })
])

module.exports = router