var express = require('express');
var app = express();

app.get('/home', (req, res) => {
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About');
});

// Invalid Routes - Needed to use app.use for handling invalid routes instead of app.get to prevent crash
app.use((req, res) => {
    res.status(404).send("404! This is an invalid URL!");
});

app.listen(3000);