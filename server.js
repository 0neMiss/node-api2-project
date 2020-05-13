const express = require('express');

const posts = require('./data/db.js');

const shortid = require('shortid');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2>Lets gooo</h>`);
});

server.get('/api/posts', (req, res) => {
  posts.find(req.query)
  .then(posts => {
    res.status(200).json(posts);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the posts',
    });
  });
});

server.get('/api/posts/:id', (req, res) => {
  posts.findById(req.params.id)
  .then(post => {

  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the post',
    });
  });
});

server.post('/api/posts', (req, res) => {
  posts.insert(req.body)
  .then(post => {

  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Error adding the post',
    });
  });
});

server.delete('/api/posts/:id', (req, res) => {
  posts.remove(req.params.id)
  .then(count => {

  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Error removing the post',
    });
  });
});

server.put('/api/posts/:id', (req, res) => {
  const changes = req.body;
  posts.update(req.params.id, changes)
  .then(post => {
    
  })
  .catch(error => {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error updating the post',
    });
  });
});

module.exports = server;
