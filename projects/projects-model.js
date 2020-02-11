const db = require('../data/db-config.js');

function find() {
    return db('projects');
}

function findById(id){
    return db('projects').where({ id });
}

function add(projectData) {
    db('projects').insert(projectData)
    .then(ids => {
        return findById( ids[0]);
    });
}

module.exports = {
    find,
    findById,
    add
};