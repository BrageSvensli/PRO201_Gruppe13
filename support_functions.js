

function print(str) {

    let now = new Date();
    
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    console.log(`${hour}:${min}:${sec}\t\t${str}`);
}


module.exports = { print }; 