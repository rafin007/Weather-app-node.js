
const request = require('request');

var fetchWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/d164a20f8fa5139db31fd1b9ac1ba6af/${lat},${lng}`,
        json: true
    }, (error, body, response) => {
        if(!error){
            callback(undefined, {
                temperature: body.body.currently.temperature,
                apparentTemperature: body.body.currently.apparentTemperature

            });
        }
        else{
            callback("Unable to fetch weather!");
        }
    });
}

module.exports = {
    fetchWeather
};
