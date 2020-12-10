
const config = require('./config.js');
const db = require('./read_write.js');
const print = require('./print.js').print;

class Product {
    constructor(id, camp, date_recieved) {
        this.id = id;
        this.camp = camp;
        this.date_recieved = date_recieved;
    }
}

function updateProduct(data) {
    const JSON_path = config.JSON_PATH_PRODUCT;
    const dataArray = db.readJSON(JSON_path);

    // Check if product alreaddy exists, and update info.
    let foundElement = false;
    let i;
    for(i=0; i<dataArray.length; i++) {

        if (dataArray[i].id == data.product_id) {
            foundElement = true;
            dataArray[i].camp = data.product_camp;
            dataArray[i].date_recieved = data.product_recieved;
            print(`Updated PRODUCT -> Id: ${data.product_id} - Camp: ${data.product_camp} - Navn:${data.date_recieved}`);
            break;
        }
    }

    // New user!
    if (!foundElement) {
        print(`Added new PRODUCT -> Id: ${data.product_id} - Camp: ${data.product_camp} - Navn:${data.date_recieved}`);
        const newProduct = new Product(data.product_id, data.product_camp, data.product_recieved);
        dataArray.push(newProduct);
    }

    // Save
    db.writeJSON(JSON_path, dataArray);
    
}

module.exports = { updateProduct };