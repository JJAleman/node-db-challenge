
exports.up = function(knex) {
    return knex.schema
             .createTable('projects', tbl => {
                 tbl.increments();
                 tbl.string('name', 255).notNullable();
                 tbl.string('description', 255);
                 tbl.boolean('completed').notNullable().defaultTo(false);
             })
             .createTable('resources', tbl => {
                tbl.increments();
                tbl.string('name', 255).notNullable();
                tbl.string('description', 255);
            })
             .createTable('tasks', tbl => {
                 tbl.increments();
                 tbl.string('description', 255).notNullable();
                 tbl.string('notes', 255);
                 tbl.boolean('completed').notNullable().defaultTo(false);
                 tbl.integer('project_id')
                 .unsigned()
                 .notNullable()
                 .references('id')
                 .inTable('projects')
             })
             .createTable('project_resources', tbl =>{
                tbl.primary(["project_id", "resource_id"]);
                tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects');
                tbl.integer('resource_id')
                 .unsigned()
                 .notNullable()
                 .references('id')
                 .inTable('resources')
             })
            
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('resources') 
    .dropTableIfExists('tasks') 
    .dropTableIfExists('projects'); 
};
