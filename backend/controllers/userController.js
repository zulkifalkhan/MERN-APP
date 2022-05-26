const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')



//@desc login User
//@route POST
const loginUser = asyncHandler(async (req, res) => {

    const {email,password} = req.body
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)

    const user = await User.findOne({email})


    if(user && (await bcrypt.compare(password,user.password))){
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token:generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Please verify your email and password")
    }
})

//@desc register new user
//@route POST
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !name || !password) {
        res.status(400)
        throw new Error('Please add some Data')
    }

    const userExists = await User.findOne({ email })

    if (userExists) {     //user exists
        res.status(400)
        throw new Error('User Already Exists')
    }

    //hash the passowrd

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)

    const user = await User.create({    //create user
        name: name,
        email: email,
        password: hashPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token:generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('User not Created')
    }
})

// @desc get user data
// @route POST
const getMe = asyncHandler(async (req, res) => {
   const {_id,name,email} = await User.findById(req.user.id) //i coming from middleware decoded.id
    res.status(200).json({
        _id:_id,
        name:name,
        email:email
    })
})

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}


module.exports = {
    registerUser,
    loginUser,
    getMe
}