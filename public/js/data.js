function postData(data) {

    console.log("Hello ...");

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            data: JSON.stringify(data)
        }
    };

    fetch('/api', options)
        .then((res) => {
            console.log(res);
        });
}
