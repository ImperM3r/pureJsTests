var clockInConsole = {
    showClock: function(intervalName) {
        var date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            currentTime = "Время: " + this.declOfNum(hours, ['часа', 'часов', 'часов']) + " " + this.declOfNum(minutes, ['минута', 'минуты', 'минут']) + " " + this.declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
        this.clearConsole();
        console.log(currentTime);
        if (seconds == 59)
            clearInterval(intervalName);
    },

    clearConsole: function() {
        console.clear();
    },

    declOfNum: function(number, titles) {
        cases = [2, 0, 1, 1, 1, 2];
        return number + " " + titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }
}

var showClock = setInterval(function() {
    clockInConsole.showClock(showClock)
}, 1000);