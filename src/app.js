const express = require('express');
const app = express();

app.get('/hello', (req, res) =>{
  res.json({saludo: 'Hello everyone'});
})

module.exports = app;