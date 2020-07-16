const express = require('express')
const { body } = require('express-validator/check')

const router = express.Router()

router.put('/signup', [
    req.body
])

module.exports = router