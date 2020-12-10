
const t = require('./support_functions.js');

const express = require('express');
const app = express();



const port = (process.env.PORT || 8080);

app.use('/', express.static('public'));



app.listen(port, () => {
    t.print(`Server has started on port ${port}`);
})