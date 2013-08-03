var clockInConsole = {
    showClock : function(intervalName) {
        var date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            currentTime = "Время: " + hours + ":" + minutes + ":" + seconds;
        this.clearConsole();
        console.log(currentTime);
        if (seconds == 59)
            clearInterval(intervalName);
    },
    
    clearConsole : function() {
        console.clear();
    }
}

var showClock = setInterval (function() {
    clockInConsole.showClock(showClock)
    }, 1000);