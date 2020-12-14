
const config = require('./config.js');
const db = require('./read_write.js');
const print = require('./print.js').print;

class User {
    constructor(id, type, username, password, camp) {
        this.id = id;
        this.type = type;
        this.username = username;
        this.password = password;
        this.camp_id = camp;
    }
}

function loginUser(data) {
    const JSON_path = config.JSON_PATH_USERS;
    const usersArray = db.readJSON(JSON_path);

    const response = {
        token: 'THIS SHOULD BE ACCESS TOKEN..',
        success: false,
        username: 'NO USER...'
    }

    let i;
    for (i=0; usersArray.length; i++) {
        console.log(usersArray[i]);
        if (usersArray[i].username == data.username && usersArray[i].password == data.password) {
            // TODO: Make function for generating and storing a session. (random textsring)
            // For now we dont care about token, so just send success: true;
            response.success = true;
            response.username = data.username;
            break;
        }
    }
    return response;

}

// Return true if username is valid
function checkUsername(data) {
    const JSON_path = config.JSON_PATH_USERS;
    const usersArray = db.readJSON(JSON_path);

    let response = true;
    let i;
    for (i = 0; i < usersArray.length; i++) {
        if (usersArray[i].username == data.username) {
            response.username_valid = false;
        }
    }
    return response;
}

function updateUser(data) {
    /*
        // Check if worker alreaddy exists, and update info.
    let foundElement = false;
    let i;
    for(i=0; i<dataArray.length; i++) {

        if (dataArray[i].id == data.worker_id) {
            foundElement = true;
            dataArray[i].name = data.worker_name;
            dataArray[i].camp = data.worker_camp;
            print(`Updated USER -> Id: ${data.worker_id} - Navn:${data.worker_name} - Camp: ${data.worker_camp}`);
            break;
        }
    }
    */
}

function addUser(data) {
    const JSON_path = config.JSON_PATH_USERS;
    const dataArray = db.readJSON(JSON_path);

    // TODO: Find better way of generating id..
    let currentHighestId = 0;
    let i;
    for (i = 0; i < dataArray.length; i++) {
        if (dataArray[i].id > currentHighestId) {
            currentHighestId = dataArray[i].id;
        }
    }
    const newId = currentHighestId + 1; // Bad solution...


    print(`Added new USER -> Id: ${newId} - Username:${data.username} - Password:${data.password} - Type:${data.type} - Camp: ${data.camp_id}`);
    const newUser = new User(newId, data.type, data.username, data.password, data.camp_id);
    dataArray.push(newUser);


    // Save
    db.writeJSON(JSON_path, dataArray);

}

module.exports = { addUser, updateUser, loginUser, checkUsername };