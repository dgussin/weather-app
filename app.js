const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      descibe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});



// e60bc52c1ccebc6992b0ca490559ccbb
// https://api.darksky.net/forecast/e60bc52c1ccebc6992b0ca490559ccbb/37.8267,-122.4233

// https://api.darksky.net/forecast/e60bc52c1ccebc6992b0ca490559ccbb/42.508645,-83.41098339999999

//
// const request = require('request');
//
// request({
//   url: `https://api.darksky.net/forecast/e60bc52c1ccebc6992b0ca490559ccbb/42.508645,-83.41098339999999`,
//   json: true
// }, (error, response, body) => {
//   if (!error && response.statusCode === 200) {
//     console.log(`temperature ${body.currently.temperature}`);
//   } else {
//     console.log('Unable to fetch weather.');
//   }
//
// });
