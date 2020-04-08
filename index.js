const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000
app.listen(port, () => console.log('listening at ${port}'));
app.use(express.static('public'));
app.use(express.json());
let r = 250;
let g = 250;
let b = 250;
app.get('/api',(request,response)=>{
  response.json({
    red:r,
    blue:g,
    green:b
  });
});

app.post('/api',(request,response)=>{
  console.log(request.body);
  r = request.body.red
  g = request.body.green
  b = request.body.blue

  response.json({
    statusEd: 'success'
  });

});
