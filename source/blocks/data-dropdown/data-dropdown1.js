$( function() {
    $.datepicker.setDefaults($.datepicker.regional['ru']);
multiDatesPicker
    $('.dateTo, .dateFrom').datepicker({
      showOtherMonths: true,
      dateFormat: 'dd.mm.yy',
      showButtonPanel: true,
      currentText:"очистить",
      closeText:"применить",
      multipleDates: true
    });
      $('.dateFrom').datepicker( "setDate", "+1w");

    $('.dateFrom').change(function(){
        var minDate = $('.dateFrom').val();
        if ($('.dateTo').val()=='')
          $('.dateTo').datepicker( "setDate", minDate);

        $('.dateTo').datepicker( 'option', "minDate", minDate);
    });

    $('.dateTo').change(function(){
        var maxDate = $('.dateTo').val();
        $('.dateFrom').datepicker( 'option',"maxDate", maxDate);
    });


})
