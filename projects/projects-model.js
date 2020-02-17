const db = require('../data/db-config.js');

function find() {
    return db('projects');
}

function findById(id){
    return db('projects').where({ id });
}

function add(projectData) {
   return db('projects').insert(projectData);
}

module.exports = {
    find,
    findById,
    add
};