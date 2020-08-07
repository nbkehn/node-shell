const fs = require('fs');
const ls = function(func){
    fs.readdir('./', 'utf8', (err, files)=>{
        if(err){
            throw err;
        } else{
            func(files.join('\n'));
        }
    })
}
module.exports = ls;

