const request = require('request');

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=31145%20N%20Park%20Dr%20Farmington%20Hills',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
