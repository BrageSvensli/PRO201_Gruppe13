
const s = require('./support_functions.js');
const Workers = require('./Workers.js');

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = (process.env.PORT || 8080);


// Middleware for logging
app.use('/', function (req, res, next) {
    s.print('\t//\tReq: ' + req.url);
    next();
});

// Route for testing site 
app.get('/test', (req, res) => {
    fs.createReadStream('./public/input.html').pipe(res);
});


app.post('/api', (req, res) => {
    console.log(req.headers.data);

    Workers.updateWorker(JSON.parse(req.headers.data));

    res.sendStatus(200);
});


console.log(fs.readFileSync('./data/workers.json', 'utf-8'));


// Route for css js html
app.use('/public', express.static('public'));

// Start server on port
app.listen(port, () => {
    s.print(`Server has started on port ${port}`);
})