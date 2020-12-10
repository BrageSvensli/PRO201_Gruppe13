

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