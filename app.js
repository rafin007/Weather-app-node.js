
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
    .options({
        address: {
            alias: 'a',
            demand: true,
            describe: 'address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
    if(errorMessage){
        console.log(errorMessage);
    }
    else {
        weather.fetchWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if(errorMessage){
                console.log(errorMessage);
            }
            else {
                console.log(`It's ${weatherResults.temperature} in ${results.address} but it feels like ${weatherResults.apparentTemperature}`);
            }
        });
    }
});
