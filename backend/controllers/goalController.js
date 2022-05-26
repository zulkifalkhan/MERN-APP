const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require("../models/userModel")

//@ desc GET Goals
//@route Get /api/goals
//@access Private
const getGoals = asyncHandler(async(req, res) => {
    const goals = await Goal.find({user:req.user.id})
    res.status(200).json(goals)
})

//@ desc SET Goal
//@route Post /api/goals
//@access Private
const setGoal = asyncHandler(async(req, res) => {
    //console.log(req.body.text)
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add some text field')
    }else {
        const goal = await Goal.create({
            text:req.body.text,
            user:req.user.id
        })
        res.status(200).json(goal)
    }
})

//@ desc Update Goal
//@route PUT /api/goals/:id
//@access Private
const updateGoal = asyncHandler(async(req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not Found')
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('Not Authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,
        req.body,{
            new:true,   //new true means if not found then create a new one
        })

    res.status(200).json(updatedGoal)
})

//@ desc delete Goal
//@route delete /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async(req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not Found')
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('Not Authorized')
    }

    await goal.remove()

    res.status(200).json({message:"Goal Deleted"})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}