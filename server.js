
const Workers = require('./server_functions/Workers.js');
const Users = require('./server_functions/Users.js');
const Camps = require('./server_functions/Camps.js');
const Parts = require('./server_functions/Parts.js');
const Products = require('./server_functions/Products.js');

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

// Call for getting all camps
app.get('/camps', function (req, res) {

    if (true || req.headers.token == 'correct token..') {
        const data = Camps.getCamps()

        res.json(data);
    } else {
        res.sendStatus(403);
    }
});

app.get('/login', function (req, res) {
    console.log('Login..');
    res.json(Users.loginUser(JSON.parse(req.headers.data)));
})


app.post('/api', async function (req, res) {
    console.log("Hey");
    console.log(req.headers.data);
    const data = JSON.parse(req.headers.data);

    if (data.request_type == 'login') {
        console.log('login..');
        // Should return a token
        res.json(Users.loginUser(data));
    } else if(data.request_type == 'user-add') {
        Users.addUser(data);
    }




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

printData(config.JSON_PATH_CAMPS);
printData(config.JSON_PATH_USERS);