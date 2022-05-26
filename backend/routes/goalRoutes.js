const express = require('express')
const router = express.Router()
const {protect} = require("../middleware/authMiddleware")

const { getGoals, setGoal, deleteGoal, updateGoal } = require('../controllers/goalController')

// router.get('/', getGoals)    common route so below is the more cleaner code
// router.post('/', setGoal)  

router.route('/').get(protect,getGoals).post(protect,setGoal)
router.route('/:id').delete(protect,deleteGoal).put(protect,updateGoal)

module.exports = router