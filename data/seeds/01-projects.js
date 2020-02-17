
exports.seed = function(knex) {
      return knex('projects').insert([
        { 
          name: 'Project 1', 
          description: 'Hi this is the description for Project 1'
        },
        { 
          name: 'Project 2', 
          description: 'Hi this is the description for Project 2'
        },
        { 
          name: 'Project 3', 
          description: 'Hi this is the description for Project 3'
        },
      ]);
};
