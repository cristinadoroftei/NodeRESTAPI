const express = require('express')
const { body } = require('express-validator/check')

const User = require('../models/')
const router = express.Router()

router.put('/signup', [
    body('email')
    .isEmail()
    .withMessage('Please enter a valid email!')
    .custom
])

module.exports = router