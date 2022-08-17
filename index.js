const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

app.get('/hello', (req, res) =>{
  res.json({saludo: 'Hello everyone'});
})

app.listen(port, ()=> {
  console.log(`listening on port${port}`)
})

