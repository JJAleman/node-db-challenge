
exports.seed = function(knex) {
  return knex('tasks').insert([
    { 
      description: 'Hi this is the description for Project 1 tasks',
      notes: 'Project 1 notes', 
      completed: false,
      project_id: 1
    },
    { 
      description: 'Hi this is the description for Project 2 tasks',
      notes: 'Project 2 notes', 
      completed: false,
      project_id: 2
    },
    { 
      description: 'Hi this is the description for Project 3 tasks',
      notes: 'Project 3 notes', 
      completed: true,
      project_id: 1
    },
  ]);
};
