
var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === "number" && typeof b === "number"){
                resolve(a+b);
            }
            else {
                reject("Both value must be numbers!");
            }
        }, 1700);
    });
};

asyncAdd(8, 9).then((result) => {
    console.log("Success: ", result);
}, (errorMessage) => {
    console.log("Error: ", errorMessage);
});
