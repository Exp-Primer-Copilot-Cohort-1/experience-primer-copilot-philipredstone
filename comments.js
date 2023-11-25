// Create web server
// Usage: node comments.js
// Note: Use nodemon to run the server and automatically restart when changes occur

// Require modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comment = require('./models/comment');

// Create web server
const app = express();

// Set port
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });

// Set view engine to ejs
app.set('view engine', 'ejs');

// Use body parser
app.use(bodyParser.urlencoded({ extended: true }));

// Set up root route
app.get('/', (req, res) => {
  res.render('index');
});

// Set up comment route
app.get('/comments', (req, res) => {
  Comment.find({}, (err, comments) => {
    if (err) {
      console.log(err);
    } else {
      res.render('comments', { comments: comments });
    }
  });
});

// Set up post route
app.post('/comments', (req, res) => {
  const name = req.body.name;
  const comment = req.body.comment;
  const newComment = { name: name, comment: comment };
  Comment.create(newComment, (err, newComment) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/comments');
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});