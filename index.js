'use strict';
console.log('hello world');

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res)=> {

console.log('Here we come= This console. log from index.js');
res.send('Hello leevi.');
});

app.listen(3000);
