const express = require('express')
const router = express.Router()

const { getGoals, setGoal, deleteGoal, updateGoal } = require('../controllers/goalController')

// router.get('/', getGoals)    common route so below is the more cleaner code
// router.post('/', setGoal)  

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router