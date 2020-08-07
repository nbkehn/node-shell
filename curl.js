const request = require('request');
const curl = function(url, func){
    request(url, function(error, response, body){
        func(body);
    });
}

module.exports = curl;