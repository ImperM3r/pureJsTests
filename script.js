var clockInConsole = (function() {

    function clearConsole() {
        console.clear();
    }

    function declOfNum(number, titles) {
        cases = [2, 0, 1, 1, 1, 2];
        return number + " " + titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    return {
        showClock: function(intervalName) {
            var date = new Date(),
                hours = date.getHours(),
                minutes = date.getMinutes(),
                seconds = date.getSeconds(),
                currentTime = "Время: " + declOfNum(hours, ['часа', 'часов', 'часов']) + " " + declOfNum(minutes, ['минута', 'минуты', 'минут']) + " " + declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
            clearConsole();
            console.log(currentTime);
            if (seconds == 59)
                clearInterval(intervalName);
        }
    }

})();

var showClock = setInterval(function() {
    clockInConsole.showClock(showClock)
}, 1000);