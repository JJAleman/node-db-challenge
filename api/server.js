const express = require('express');

const helmet  = require('helmet');

const projectsRouter = require('../projects/projects-router.js');
const resourcesRouter = require('../projects/resources-router.js');
const tasksRouter = require('../projects/tasks- router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

// Testing the server
// server.get("/", (req, res) => {s
//     res.status(200).json({ message: "It's working!!"});
//   });

module.exports = server;