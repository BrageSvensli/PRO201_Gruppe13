

// LOGIN 

// Add event listner
document.getElementById('login-btn').addEventListener(
    'click', async function () {

        // Get DOM-elements
        const username_DOM = document.getElementById('login-username');
        const password_DOM = document.getElementById('login-password');
        const output_DOM = document.getElementById('login-output');
        const container_DOM = document.getElementById('login-container');

        const data = {
            request_type: 'login',
            username: username_DOM.value,
            password: password_DOM.value
        };

        const options = {
            metod: 'GET',
            headers: {data: JSON.stringify(data)}
        }

        const login = await fetch('/login', options)
            .then(function (res) { return res.json(); })
            .catch(function (err) { console.log(err); });

        if (login.success) {
            output_DOM.innerHTML = login.username;
            container_DOM.style.backgroundColor = ' rgb(0, 255, 101)';
        } else {
            output_DOM.innerHTML = 'Failed!';
            container_DOM.style.backgroundColor = ' rgb(255, 100, 101)';
        }

        username_DOM.value = '';
        password_DOM.value = '';
    }
);

// ##### ADD USERS

// Populate camps dropdown

// Get DOM element
async function updateOptions() {
    const camps = document.getElementById('user-camp');

    const options = {
        metod: 'GET',
        headers: {
            token: 'ASD534T#¤F#¤53h¤W##G24rt3¤T5'
        }
    };

    const campsArray = await fetch('/camps', options)
        .then(function (res) { return res.json(); })
        .catch(function (err) { console.log(err); });

    let i;
    for (i = 0; i < campsArray.length; i++) {
        const camp_option = document.createElement('option');
        camp_option.setAttribute('value', campsArray[i].id);
        camp_option.innerHTML = `${campsArray[i].name} - ${campsArray[i].location}`;
        camps.appendChild(camp_option);
    }
}

updateOptions();

// Add event listner to post data
document.getElementById('user-btn').addEventListener(
    'click', async function () {

        // Get DOM-elements
        const username_DOM = document.getElementById('user-username');
        const password_DOM = document.getElementById('user-password');
        const type_DOM = document.getElementById('user-type');
        const camp_DOM = document.getElementById('user-camp');

        const data = {
            request_type: 'user-add',
            token: 'THIS WILL BE A RANDOM TEXTSTRING',
            username: username_DOM.value,
            password: password_DOM.value,
            type: type_DOM.value,
            camp_id: camp_DOM.value
        };

        const res = await postData(data);

        console.log(res);

        username_DOM.value = '';
        password_DOM.value = '';
        type_DOM.value = '';
        camp_DOM.value = '';
    }
);


// ADD CAMPS

// Add event listner
document.getElementById('camp-btn').addEventListener(
    'click', async function () {

        // Get DOM-elements
        const name_DOM = document.getElementById('camp-name');
        const location_DOM = document.getElementById('camp-location');


        const data = {
            request_type: 'camp',
            token: 'THIS WILL BE A RANDOM TEXTSTRING',
            name: username_DOM.value,
            location: location_DOM.value
        };

        const res = await postData(data);

        console.log(res);

        name_DOM.value = '';
        location_DOM.value = '';

    }
);











/*
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
*/