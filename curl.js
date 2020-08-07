const request = require('request');
const curl = function(url){
    request(url, function(error, response, body){
        process.stdout.write(body);
        process.stdout.write('\nprompt > ');
    });
}

module.exports = curl;