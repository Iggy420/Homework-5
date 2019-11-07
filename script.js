window.onload = function(){
    var d = new Date();
    var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = d.getMonth(); //0-11
    var year = d.getFullYear(); //2019
    var first_date = month_name[month] + " " + 1 " " + year;
    // November 7 2019
    var tmp = new this.Date(first_date).toDateString();
    // Thur November 07 2019 
    var first_day = tmp.substring(0, 3);  // 
} 