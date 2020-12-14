async function postData(data) {

    console.log("Posted data to '/api'");

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            data: JSON.stringify(data)
        }
    };

    return await fetch('/api', options).then((res) => {return res;});
}
