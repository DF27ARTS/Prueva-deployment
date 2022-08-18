const express = require('express');
const app = express();

app.get('/', (req, res) =>{
  res.json({saludo: 'Hello everyone'});
})

app.get('/hello', (req, res) =>{
  res.json({saludo: 'Hello everybody once again'});
})

app.get('/world', (req, res) =>{
  res.json({saludo: 'Hello world', state: 'Active'});
})

module.exports = app;