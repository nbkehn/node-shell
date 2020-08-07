const date = function(func){
    let date = new Date();
    let days = ['Sun', 'Mon','Tue','Wed','Thur','Fri','Sat'];
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    func(`${days[date.getDay()]} ${months[date.getMonth()]}  ${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getFullYear()}`);
};

module.exports = date;