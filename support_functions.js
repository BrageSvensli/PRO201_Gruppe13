

const fs = require('fs');

function print(str) {
    let now = new Date();

    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    console.log(`${hour}:${min}:${sec}\t\t${str}`);
}

function readJSON(path) {

    console.log("Path:" + path);

    const data = fs.readFileSync(path, {encoding:'utf8'}) || '';

    return JSON.parse(data);
}

function writeJSON(path, data) {
    fs.writeFileSync(path, JSON.stringify(data));
    console.log("Written to " + path);
}

module.exports = { print, readJSON, writeJSON };