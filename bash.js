const pwd = require("./pwd");

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    let cmd = data.toString().trim();
    let arr = cmd.split(' ');

    if (arr.length>1){    //for inputs greater than one word
        if (arr[0]==='cat'){
            require('./cat')(arr[1]);
        }
    } else {    //for one word inputs
        if (cmd === "pwd"){
            require('./pwd')();
        } else if(cmd === 'ls'){
            require('./ls')();
        }
    }
});