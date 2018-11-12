'use strict';
console.log('hello world');

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res)=> {
console.log('Here index.js');
  const test = req.query.test;
res.send('Hello leevi.');
});

app.post('/', req, res)=> {
  console.log(req.body);
  res.send('Hello this is post');
});

app.get('/test/identifier', (req, res)=> {
console.log(req.params);
res.send('Hello identifier');
});

app.listen(3000);
