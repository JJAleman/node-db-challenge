const express = require('express');

const Task = require('./tasks-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Task.getTask()
    .then(task => {
        res.json(task);
    })
    .catch(err => {
        res.status(500).json({ message: 'An error happened trying to get task', error: err})
    });
});

module.exports = router;