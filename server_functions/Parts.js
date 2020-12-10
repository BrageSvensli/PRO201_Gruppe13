const config = require('./config.js');
const db = require('./read_write.js');
const print = require('./print.js').print;


class Part {
    constructor(id, type, camp) {
        this.id = id;
        this.type = type;
        this.camp = camp;
    }
}

function updatePart(data) {
    const JSON_path = config.JSON_PATH_PART;
    const dataArray = db.readJSON(JSON_path);

    // Check if part alreaddy exists, and update info.
    let foundElement = false;
    let i;
    for(i=0; i<dataArray.length; i++) {
        if (dataArray[i].id == data.part_id) {
            foundElement = true;
            dataArray[i].name = data.part_type;
            dataArray[i].location = data.part_camp;
            print(`Updated PART -> Id: ${data.part_id} - Type:${data.part_type} - Camp: ${data.part_camp}`);
            break;
        }
    }

    // New part!
    if (!foundElement) {
        const newPart = new Part(data.part_id, data.part_type, data.part_camp);
        dataArray.push(newPart);
        print(`Added new PART -> Id: ${data.camp_id} - Type:${data.camp_name} - Camp: ${data.camp_location}`);
    }

    // Save
    db.writeJSON(JSON_path, dataArray);
    
}

module.exports = { updatePart };