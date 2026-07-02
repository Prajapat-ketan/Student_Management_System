const joi = require("joi");

const joiStudentSchema = joi.object({
    student : joi.object({
        name : joi.string().min(3).required(),
        email : joi.string().email().required(),
        course : joi.string().required(),
        age : joi.number().min(16).max(35).required()
    }).required()
});

const joiUserSignupSchema = joi.object({
    user : joi.object({
        username : joi.string().min(3).required(),
        password : joi.string().min(3).max(30).required(),
        email : joi.string().email().required(),
        usercode : joi.string().optional().allow('')
    }).required()
});

const joiUserSigninSchema = joi.object({
    user : joi.object({
        email : joi.string().email().required(),
        password : joi.string().min(3).max(30).required()
    }).required()
});

module.exports = {joiStudentSchema,joiUserSignupSchema,joiUserSigninSchema};