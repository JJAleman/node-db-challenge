const db = require("../data/db-config.js");

module.exports = {
  find,
  findTasks,
  add
};

// --------------------GET Request---------------
// function find() {
//   return db('tasks');
// }

function find() {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select(
      "t.id as taskId",
      "t.description as TaskDescription",
      "t.notes",
      "t.completed",
      "t.project_id",
      "p.name as ProjectName",
      "p.description as ProjectDescription"
    );
}
// ---------------------GET by ID --------------------------

function findTasks(id) {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select(
      "t.id as taskId",
      "t.description",
      "t.notes",
      "t.completed",
      "t.project_id",
      "p.name",
      "p.description"
    )
  .where({project_id: id});
}

// ---------------------------POST Request-------------------
function add(tasks) {
  return db("tasks").insert(tasks);
}

// function add(tasks, projectId) {
//   return db('tasks').insert({...tasks, project_id: projectId})
//     .then(ids => {
//       const id = ids[0];

//       return db('tasks').where({id}).first()
//       .then(task =>{
//         return task;
//       })
//     })
// }
