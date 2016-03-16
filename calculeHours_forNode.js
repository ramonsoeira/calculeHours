'use strict';
module.exports.calc = function (info) {
    if (!info) {
        info = '00:00';
    }
    return {
        isNegative: function (hours) {
            if (!hours) {
                hours = info;
            }
            return hours.toString()[0] === '-';
        },
        toMinutes: function (hours) {
            if (!hours) {
                hours = info;
            }
            var tmpHour = hours.replace('-', '').split(':');
            var minutes = ((parseInt(tmpHour[0]) * 60) + parseInt(tmpHour[1]));
            return (minutes !== 0 && this.isNegative(hours) ? '-' : '') + minutes;
        },
        ofMinutes: function (minutes) {
            if (minutes === undefined) {
                minutes = info;
            }
            var min = minutes.toString().replace('-', '');
            var hours = (parseInt(min) / 60).toFixed();
            min = (parseInt(min) - (hours * 60));
            if (min < 0) {
                min = parseInt(min) + 60;
                hours = parseInt(hours) - 1;
            }
            return ((hours > 0 || min > 0) && this.isNegative(minutes) ? '-' : '') + ((hours < 10 ? '0' : '') + hours + ':' + (min < 10 ? '0' : '') + min);
        },
        add: function (hours) {
            var result = parseInt(this.toMinutes()) + parseInt(this.toMinutes(hours));
            return this.ofMinutes(result);
        },
        remove: function (hours) {
            var result = parseInt(this.toMinutes()) - parseInt(this.toMinutes(hours));
            return this.ofMinutes(result);
        }
    };
};
