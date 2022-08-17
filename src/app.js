const express = require('express');
const app = express();

app.get('/', (req, res) =>{
  res.json({saludo: 'Hello everyone'});
})

module.exports = app;