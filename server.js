
const Workers = require('./server_functions/Workers.js');
const Camps = require('./server_functions/Camps.js');

const print = require('./server_functions/print.js').print;
const files = require('./server_functions/read_write.js');
const config = require('./server_functions/config.js');

const fs = require('fs');
const express = require('express');
const app = express();
const port = (process.env.PORT || 8080);


// Middleware for logging
app.use('/', function (req, res, next) {
    print('\t//\tReq: ' + req.url);
    next();
});

// Route for testing site 
app.get('/test', (req, res) => {
    fs.createReadStream('./public/input.html').pipe(res);
});


app.post('/api', (req, res) => {
    
    const data = JSON.parse(req.headers.data);

    if (data.type == 'Worker') {
        Workers.updateWorker(data);
    } else if (data.type == 'Camp') {
        Camps.updateCamp(data);
    } else if (data.type == 'Product') {
        Products.updateProduct(data);
    } else if (data.type == 'Part') {
        Parts.updatePart(data);
    } else if (data.type == 'Repair') {
        Repairs.update(data);
    }

    res.sendStatus(200);
});


// Route for css, js, html, img...
app.use('/public', express.static('public'));

// Start server on port
app.listen(port, () => {
    print(`Server has started on port ${port}`);
})

// Print current data in storrage
function printData(path) {
    const data = files.readJSON(path);
    
    print(`Content of ${path}:`)

    let i;
    for(i=0; i<data.length; i++) {
        print(`\t${JSON.stringify(data[i])}`);
    }
}

printData(config.JSON_PATH_CAMP);
printData(config.JSON_PATH_WORKER);