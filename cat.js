const fs = require('fs');
const cat = function(filename, func){
    fs.readFile(`./${filename}`, function read(err, data) {
        if (err) {
            throw err;
        } else {
            func(data)
        }
    });
}
module.exports = cat;


