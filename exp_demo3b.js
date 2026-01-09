var express = require("express");
var routerModule = require("./exp_demo3a.js");

var app = express();

//both 3a and 3b in same directory
app.use("/routedemo", routerModule);

app.listen(3000)