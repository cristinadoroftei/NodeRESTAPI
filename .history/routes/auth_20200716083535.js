const express = require('express')
const { body } = require('express-validator/check')

const router = express.Router()

router.put('/signup', [
    body
])

module.exports = router