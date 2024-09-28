const { Router } = require('express');
const { getAlltask, getTask, putTask, postTask, deleteTask } = require('../controllers/task.controller');


const router = Router();

router.get('/tasks', getAlltask);

router.get('/tasks/:id', getTask);

router.post('/tasks', postTask);

router.delete('/tasks/:sometask', deleteTask);

router.put('/tasks/:id', putTask);

module.exports = router;