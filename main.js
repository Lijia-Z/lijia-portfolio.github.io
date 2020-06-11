let date = new Date();
console.log(date);

let seattle_hour = date.getHours();
let boston_hour = seattle_hour < 21 ? seattle_hour + 3 : ((seattle_hour + 3) % 24);
let minute = date.getMinutes();
let second = date.getSeconds();

refresh_am_pm();
display_time;

// each second, increment the second and display time
setInterval(function () {
    second++;
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        seattle_hour++;
        boston_hour++;
    }
    if (seattle_hour == 24) {
        seattle_hour = 0;
    }
    if (boston_hour == 24) {
        boston_hour = 0
    }
    refresh_am_pm();
    display_time(); 
}, 1000);


// set AM/PM display
function refresh_am_pm() {
    if (seattle_hour >= 12) {
        document.getElementById("seattle-am-pm").innerHTML = "PM"
    } else {
        document.getElementById("seattle-am-pm").innerHTML = "AM"
    }

    if (boston_hour >= 12) {
        document.getElementById("boston-am-pm").innerHTML = "PM"
    } else {
        document.getElementById("boston-am-pm").innerHTML = "AM"
    }
}

// display current time
function display_time () {
    seattle_hour_rotate = 360 / 12 * (seattle_hour % 24);
    boston_hour_rotate = 360 / 12 * (boston_hour % 24);
    document.getElementById("seattle").getElementsByClassName("hour")[0].style.transform 
        = "translate(100px) rotate(" + seattle_hour_rotate + "deg)";
    document.getElementById("boston").getElementsByClassName("hour")[0].style.transform 
        = "translate(100px) rotate(" + boston_hour_rotate + "deg)";

    minute_rotate = 360 / 60 * (minute % 60);
    document.getElementById("seattle").getElementsByClassName("minute")[0].style.transform 
        = "translate(100px) rotate(" + minute_rotate + "deg)";
    document.getElementById("boston").getElementsByClassName("minute")[0].style.transform 
        = "translate(100px) rotate(" + minute_rotate + "deg)";


    second_rotate = 360 / 60 * second;
    document.getElementById("seattle").getElementsByClassName("second")[0].style.transform 
        = "translate(100px) rotate(" + second_rotate + "deg)";
    document.getElementById("boston").getElementsByClassName("second")[0].style.transform 
        = "translate(100px) rotate(" + second_rotate + "deg)";    
}
