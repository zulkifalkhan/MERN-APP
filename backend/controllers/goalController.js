const asyncHandler = require('express-async-handler')


//@ desc GET Goals
//@route Get /api/goals
//@access Private
const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: 'Get Goalss' })
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
        res.status(200).json({ message: 'Create Goalss' })
    }
})

//@ desc Update Goal
//@route PUT /api/goals/:id
//@access Private
const updateGoal = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Updated Goal ${req.params.id}` })
})

//@ desc delete Goal
//@route delete /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Deleted Goal ${req.params.id}` })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}