const { validationResult } = require('express-validator/check')

const User = require('../models/user')

exports.signup = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const erro
    }
    const errors
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
}