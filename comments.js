// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Read file
const comments = JSON.parse(fs.readFileSync('comments.json'));

// Create web server
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.send('Comment added');
});

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});