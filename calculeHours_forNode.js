module.exports.hour = function(hour){
  return {
    isNegative: function(hours){
      if(!hours) hours = hour;
      return (hours.toString()[0] == '-' ? true : false);
    },
    toMinutes: function(hours){
      if(!hours) hours = hour;
      var hours    = hours.replace('-', '').split(':');
      var minutes  = ((parseInt(hours[0]) * 60) + parseInt(hours[1]));
      return (this.isNegative(hours) ? '-' : '') + minutes;
    },
    ofMinutes: function(minutes){
      var min   = minutes.toString().replace('-', '');
      var hours = (parseInt(min) / 60).toFixed();
        min   = (parseInt(min) - (hours*60));
      if(min < 0){
        min   = parseInt(min) + 60;
          hours = parseInt(hours) - 1;
      }
      return (this.isNegative(minutes) ? '-' : '')
              + ((hours < 10 ? '0' : '') + hours + ':' + (min < 10 ? '0' : '') + min);
    },
    add: function(hours){
      var result = parseInt(this.toMinutes())
                 + parseInt(this.toMinutes(hours));
          result = this.ofMinutes(result);
      return result;
    },
    remove: function(hours){
      var result = parseInt(this.toMinutes())
                 - parseInt(this.toMinutes(hours));
          result = this.ofMinutes(result);
      return result;
    }
  }
}
