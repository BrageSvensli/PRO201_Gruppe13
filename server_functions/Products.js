
const config = require('./config.js');
const db = require('./read_write.js');
const print = require('./print.js').print;

class Product {
    constructor(id, camp) {
        this.id = id;
        this.camp = camp;
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
            print(`Updated PRODUCT -> Id: ${data.product_id} - Camp: ${data.product_camp}`);
            break;
        }
    }

    // New user!
    if (!foundElement) {
        print(`Added new PRODUCT -> Id: ${data.product_id} - Camp: ${data.product_camp}`);
        const newProduct = new Product(data.product_id, data.product_camp);
        dataArray.push(newProduct);
    }

    // Save
    db.writeJSON(JSON_path, dataArray);
    
}

module.exports = { updateProduct };