

// Add event listner
document.getElementById('submit-worker-btn').addEventListener(
    'click', function () {

        // Get DOM-elements
        const id = document.getElementById('worker-id');
        const name = document.getElementById('worker-name');
        const camp = document.getElementById('worker-camp');

        const data = {
            type: 'Worker',
            worker_id: id.value,
            worker_name: name.value,
            worker_camp: camp.value
        };

        postData(data);

        id.value = '';
        name.value = '';
        camp.value = '';
    }
);

// Add event listner
document.getElementById('submit-camp-btn').addEventListener(
    'click', function () {

        // Get DOM-elements
        const id = document.getElementById('camp-id');
        const name = document.getElementById('camp-name');
        const location = document.getElementById('camp-location');

        const data = {
            type: 'Camp',
            camp_id: id.value,
            camp_name: name.value,
            camp_location: location.value
        };

        postData(data);

        id.value = '';
        name.value = '';
        location.value = '';
    }
);

// Add event listner
document.getElementById('submit-product-btn').addEventListener(
    'click', function () {

        // Get DOM-elements
        const id = document.getElementById('product-id');
        const camp = document.getElementById('product-camp');

        const data = {
            type: 'Product',
            product_id: id.value,
            product_camp: camp.value,
        };

        postData(data);

        id.value = '';
        camp.value = '';
    }
);

// Add event listner
document.getElementById('submit-part-btn').addEventListener(
    'click', function () {

        // Get DOM-elements
        const id = document.getElementById('part-id');
        const type = document.getElementById('part-type');
        const camp = document.getElementById('part-camp');

        const data = {
            type: 'Part',
            part_id: id.value,
            part_type: type.value,
            part_camp: camp.value
        };

        postData(data);

        id.value = '';
        type.value = '';
        camp.value = '';
    }
);