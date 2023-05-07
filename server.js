const express = require('express');
const path = require('path');
const app = express();
const logger = require('./middleware/logger');
const port = process.env.PORT || 8000;
app.use(logger);
app.get("/",(req,res) =>{
  res.sendFile(path.join(__filename,"Home.html"));
});

app.get("/contact",(req,res) =>{
  res.sendFile(path.join(__filename,"Contact us.html"));
});

app.get("/services",(req,res) =>{
  res.sendFile(path.join(__filename,"Our Services.html"));
});
 app.listen(port,function(){
  console.log("the server is runnig on port",port);
 });
