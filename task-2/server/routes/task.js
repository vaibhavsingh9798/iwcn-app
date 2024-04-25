const express = require('express')
const {getTask,postTask,deleteTask} = require('../controllers/task')

const router = express.Router();

router.delete('/:id',deleteTask)

router.get('/',getTask)

router.post('/',postTask)



module.exports = router