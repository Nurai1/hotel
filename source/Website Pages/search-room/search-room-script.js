var numFrom = masOfDates[0].slice(0,1);
var numTo = masOfDates[1].slice(0,1);
var monthFrom = masOfDates[0].slice(3,4);
var monthTo = masOfDates[1].slice(3,4);

$('.text-field__input--filter').val(numFrom+"."+monthFrom+" - "+numTo+"."+monthTo);
