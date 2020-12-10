

    // Functions for reading and writing data from datasource

const fs = require('fs');

function readJSON(path) {
    const data = fs.readFileSync(path, {encoding:'utf8'}) || '[]';
    return JSON.parse(data);
}

function writeJSON(path, data) {
    fs.writeFileSync(path, JSON.stringify(data));
}

module.exports = { readJSON, writeJSON };