
const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
            json: true
        }, (error, response, body) => {
            if(body.status === "OK"){
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
            else if(body.status === "ZERO_RESULTS"){
                reject("Invalid address provided!");
            }
            else if (error) {
                reject("Unable to connect to the google servers!");
            }
        });
    });
};

geocodeAddress("jessore").then((result) => {
    console.log(`Location: ${result.address}`);
    console.log(`Latitude: ${result.latitude}`);
    console.log(`Longitude: ${result.longitude}`);
}, (errorMessage) => {
    console.log(errorMessage);
})
