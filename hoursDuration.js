class hoursDuration {
   
    constructor(hour){
        this.hour = hour
    }

    isNegative(hour) {
        if (!hour) hour = this.hour
        return (hour.toString()[0] == '-' ? true : false)
    }

    toMinutes(hour) {
        if (!hour) hour = this.hour
        let hours = hour.replace('-', '').split(':')
        let minutes = ((parseInt(hours[0]) * 60) + parseInt(hours[1]))
        return (this.isNegative(hour) ? '-' : '') + minutes
    }

    ofMinutes(minutes) {
        let min = minutes.toString().replace('-', '')
        let hours = (parseInt(min) / 60).toFixed()
        min = (parseInt(min) - (hours * 60))
        if (min < 0) {
            min = parseInt(min) + 60
            hours = parseInt(hours) - 1
        }
        return (this.isNegative(minutes) ? '-' : '') +
            ((hours < 10 ? '0' : '') + hours + ':' + (min < 10 ? '0' : '') + min)
    }

    add(hour) {
        let result = parseInt(this.toMinutes()) +
            parseInt(this.toMinutes(hour))
        result = this.ofMinutes(result)
        return result
    }

    remove(hour) {
        let result = parseInt(this.toMinutes()) -
            parseInt(this.toMinutes(hour))
        result = this.ofMinutes(result)
        return result
    }
}
