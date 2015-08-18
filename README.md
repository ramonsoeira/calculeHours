# Calcule of Hours
Calculation of duration hours and othes in javascript.

# Examples

Start
* var hours = new hoursDuration('-01:00');

Is negative? (true/false)
* Action: hours.isNegative();
* Result: true

Convert to minutes
* Action: hours.toMinutes();
* Result: 60

Convert of minutes
* Action: hours.ofMinutes('130');
* Result: 02:10

Add hour
* Action: hours.add('01:30');
* Result: 00:30

Remove hour
* Action: hours.remove('01:30');
* Result: -02:30
