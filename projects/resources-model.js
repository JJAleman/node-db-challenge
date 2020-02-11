const db = require('../data/db-config.js');

function find() {
    return db('resources');
}

function findById(id){
    return db('resources').where({ id });
}

function add(resources) {
    db('resources').insert(resources)
    .then(ids => {
        return findById( ids[0]);
    });
}

module.exports = {
    find,
    findById,
    add
};