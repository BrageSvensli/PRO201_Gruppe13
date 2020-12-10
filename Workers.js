
const config = require('./config.js');
const s = require('./support_functions.js');

class Worker {
    constructor(id, name, camp) {
        this.id = id;
        this.name = name;
        this.camp = camp;
    }
}

function updateWorker(data) {
    const JSON_path = config.config.JSON_PATH_WORKER;
    const dataArray = s.readJSON(JSON_path);

    // Check if user alreaddy exists, and update info.
    let foundElement = false;
    let i;
    for(i=0; i<dataArray.length; i++) {

        if (dataArray[i].id == data.worker_id) {
            foundElement = true;
            dataArray[i].name = data.worker_name;
            dataArray[i].camp = data.worker_camp;
        }
    }

    // New user!
    if (!foundElement) {
        console.log("New user! ");

        console.log("--->" + data.worker_name);

        const newUser = new Worker(data.worker_id, data.worker_name, data.worker_camp);
        dataArray.push(newUser);
        console.log(dataArray);
    }

    // Save
    s.writeJSON(JSON_path, dataArray);
    
}

module.exports = { updateWorker };