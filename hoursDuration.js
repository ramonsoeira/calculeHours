var hoursDuration = function(hour){
  this.hour = hour;
}

hoursDuration.prototype.isNegative = function(hour){
  if(!hour) hour = this.hour;
  return (hour.toString()[0] == '-' ? true : false);
}

hoursDuration.prototype.toMinutes = function(hour){
  if(!hour) hour = this.hour;
  var hours    = hour.replace('-', '').split(':');
  var minutes  = ((parseInt(hours[0]) * 60) + parseInt(hours[1]));
  return (this.isNegative(hour) ? '-' : '') + minutes;
}

hoursDuration.prototype.ofMinutes = function(minutes){
  var min   = minutes.toString().replace('-', '');
  var hours = (parseInt(min) / 60).toFixed();
    min   = (parseInt(min) - (hours*60));
  if(min < 0){
    min   = parseInt(min) + 60;
      hours = parseInt(hours) - 1;
  }
  return (this.isNegative(minutes) ? '-' : '')
          + ((hours < 10 ? '0' : '') + hours + ':' + (min < 10 ? '0' : '') + min);
}

hoursDuration.prototype.add = function(hour){
  var result = parseInt(this.toMinutes())
             + parseInt(this.toMinutes(hour));
      result = this.ofMinutes(result);
  return result;
}

hoursDuration.prototype.remove = function (hour){
  var result = parseInt(this.toMinutes())
             - parseInt(this.toMinutes(hour));
      result = this.ofMinutes(result);
  return result;
}
