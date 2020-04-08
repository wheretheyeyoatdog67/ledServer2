const express = require('express');
const app = express();
require('dotenv').config();
app.listen(8080, () => console.log("listening at 8080"));
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
