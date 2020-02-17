const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) =>{
    Projects.find()
    .then(projects => {
        console.log(projects)
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to get projects'});
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Projects.findById(id)
    .then(projects => {
        const project = projects[0];

        if(project){
            res.json(project);
        } else {
            res.status(404).json({ message: 'Could not find user with given id.'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get user'});
    });
});

router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.add(projectData)
    .then( project => {
        res.status(201).json({ created: project });
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to creat new project'});
    });
});



module.exports = router;