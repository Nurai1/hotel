$( function() {
  // $.datepicker.setDefaults($.datepicker.regional['ru']);
 $('.datep, .range-datepicker').datepicker({
     showOtherMonths: true,
      dateFormat: 'dd.mm.yy',
      miltipleDates:true,
      range: true
    });
    //  $('.dateFrom').datepicker( "setDate", "+1w");

    $('.dateFrom').change(function(){
        var minDate = $('.dateFrom').val();
        if ($('.dateTo').val()=='')
        //  $('.dateTo').datepicker( "setDate", minDate);

        $('.dateTo').datepicker({minDate: minDate});
    });

    $('.dateTo').change(function(){
        var maxDate = $('.dateTo').val();
        $('.dateFrom').datepicker({maxDate: maxDate});
    });
})
