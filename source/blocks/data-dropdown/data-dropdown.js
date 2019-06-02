$( function() {
//***datepicker styles
    $('.datepicker--nav-action > svg').hide();

  //***datepicker options
 $('.date-dropdown__calendar').datepicker({
     showOtherMonths: true,
      dateFormat: 'dd.mm.yy',
      miltipleDates:true,
      range: true,
      multipleDatesSeparator: '-',
      minDate: new Date()
    });
    //$('.date-dropdown__calendar').hide();

  $('.dateFrom').focus(function(){
    $('.date-dropdown__calendar').show();
  });


     $('.date-dropdown__calendar').datepicker({
       onSelect: function(formattedDate){
                if((formattedDate.length>13) && (~formattedDate.indexOf('-'))){
                var endFirstDate = formattedDate.indexOf('-');
                var firstDate = formattedDate.slice(0, endFirstDate);
                var secondDate = formattedDate.slice(++endFirstDate);
                  $('.dateFrom').val(firstDate);
                  $('.dateTo').val(secondDate);
              }
          }
     })


})
