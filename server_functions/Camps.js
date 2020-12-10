
const config = require('./config.js');
const db = require('./read_write.js');

class Camp {
    constructor(id, name, location) {
        this.id = id;
        this.name = name;
        this.location = location;
    }
}

function updateCamp(data) {
    const JSON_path = config.JSON_PATH_CAMP;
    const dataArray = db.readJSON(JSON_path);

    // Check if camp alreaddy exists, and update info.
    let foundElement = false;
    let i;
    for(i=0; i<dataArray.length; i++) {
        if (dataArray[i].id == data.camp_id) {
            foundElement = true;
            dataArray[i].name = data.camp_name;
            dataArray[i].location = data.camp_location;
            print(`Updated CAMP -> Id: ${data.camp_id} - Navn:${data.camp_name} - Location: ${data.camp_location}`);
            break;
        }
    }

    // New camp!
    if (!foundElement) {
        const newCamp = new Camp(data.camp_id, data.camp_name, data.camp_location);
        dataArray.push(newCamp);
        print(`Added new CAMP -> Id: ${data.camp_id} - Navn:${data.camp_name} - Location: ${data.camp_location}`);
    }

    // Save
    db.writeJSON(JSON_path, dataArray);
    
}

module.exports = { updateCamp };