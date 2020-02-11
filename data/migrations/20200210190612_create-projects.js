
exports.up = function(knex) {
    return knex.schema
             .createTable('projects', tbl => {
                 tbl.increments();
                 tbl.string('name').notNullable();
                 tbl.string('description');
                 tbl.boolean('completed').notNullable().defaultTo(false);
             })
             .createTable('tasks', tbl => {
                 tbl.increments();
                 tbl.string('description').notNullable();
                 tbl.string('notes');
                 tbl.boolean('completed').notNullable().defaultTo(false);
             })
             .createTable('resources', tbl => {
                tbl.increments();
                tbl.string('name').notNullable();
                tbl.string('description');
            })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources') 
    .dropTableIfExists('resources') 
    .dropTableIfExists('tasks') 
    .dropTableIfExists('projects'); 
};
