const express = require('express');

const helmet  = require('helmet');

const projectsRouter = require('../projects/projects-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);

// Testing the server
// server.get("/", (req, res) => {
//     res.status(200).json({ message: "It's working!!"});
//   });

module.exports = server;