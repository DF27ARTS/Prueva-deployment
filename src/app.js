const express = require('express');
const app = express();

app.get('/', (req, res) =>{
  res.json({saludo: 'Hello everyone'});
})

app.get('/hello', (req, res) =>{
  res.json({saludo: 'Hello everybody once again'});
})

module.exports = app;