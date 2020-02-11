const express = require('express');

const Resources = require('./resources-model.js');

const router = express.Router();

router.get('/', (req, res) =>{
    Resources.find()
    .then(resources => {
        res.json(resources);
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to get resources'});
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Resources.findById(id)
    .then(resources => {
        const resource = resources[0];

        if(resource){
            res.json(resource);
        } else {
            res.status(404).json({ message: 'Could not find resource with given id.'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get resource'});
    });
});

router.post('/', (req, res) => {
    const resourceData = req.body;

    Resources.add(resourceData)
    .then( resource => {
        res.status(201).json({ created: resource });
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to creat new resource'});
    });
});



module.exports = router;