
const config = require('./config.js');
const db = require('./read_write.js');
const print = require('./print.js').print;

class Worker {
    constructor(id, name, camp) {
        this.id = id;
        this.name = name;
        this.camp = camp;
    }
}

function updateWorker(data) {
    const JSON_path = config.JSON_PATH_WORKER;
    const dataArray = db.readJSON(JSON_path);

    // Check if worker alreaddy exists, and update info.
    let foundElement = false;
    let i;
    for(i=0; i<dataArray.length; i++) {

        if (dataArray[i].id == data.worker_id) {
            foundElement = true;
            dataArray[i].name = data.worker_name;
            dataArray[i].camp = data.worker_camp;
            print(`Updated WORKER -> Id: ${data.worker_id} - Navn:${data.worker_name} - Camp: ${data.worker_camp}`);
            break;
        }
    }

    // New user!
    if (!foundElement) {
        print(`Added new WORKER -> Id: ${data.worker_id} - Navn:${data.worker_name} - Camp: ${data.worker_camp}`);
        const newUser = new Worker(data.worker_id, data.worker_name, data.worker_camp);
        dataArray.push(newUser);
    }

    // Save
    db.writeJSON(JSON_path, dataArray);
    
}

module.exports = { updateWorker };