const fs = require('fs');
const cat = function(filename){
    fs.readFile(`./${filename}`, function read(err, data) {
        if (err) {
            throw err;
        } else {
            process.stdout.write(data)
            process.stdout.write('\nprompt > ');
        }
    });
}
module.exports = cat;


