$( function() {
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $('#datep').datepicker({
	    defaultDate: new Date(),
		  showOtherMonths: true,
      dateFormat: 'dd.mm.yy'
	});
  $('#datep').datepicker( "setDate", "+1w");
  } );
