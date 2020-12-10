

    // Function for making nice print to console

exports.print = function (str) {
    let now = new Date();

    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    console.log(`${hour}:${min}:${sec}\t\t${str}`);
}