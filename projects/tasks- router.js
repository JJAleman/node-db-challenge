const express = require('express');

const Task = require('./tasks-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Task.find()
    .then(task => {
        res.json(task);
    })
    .catch(err => {
        res.status(500).json({ message: 'An error happened trying to get task', error: err})
    });
});

router.get('/:id', (req,res) => {
    const {id} = req.params;

    Task.findTasks(id)
    .then(tasks => {
        const task = tasks[0];

        if (task) {
            res.json(task);
        } else {
            res.status(404).json({message: 'Could not find task with that id'})
        }
    })
    .catch(err => {
        res.status(201).json({message: 'Failed to get task'});
    });
});


router.post('/', (req, res) => {
    const tasksData = req.body;

    Task.add(tasksData)
    .then(task => {
        res.status(201).json({ created: task });
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to creat new task'});
    });
});

module.exports = router;