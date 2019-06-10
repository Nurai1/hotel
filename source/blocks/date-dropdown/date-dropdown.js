$( function() {
 $('.date-dropdown__calendar').datepicker({
     showOtherMonths: true,
      dateFormat: 'dd.mm.yy',
      miltipleDates:true,
      range: true,
      multipleDatesSeparator: '-',
      minDate: new Date(),
      clearButton: true

    });

  //**скрыть блок календаря
  $('.date-dropdown__calendar').hide();
  //**показать календарь при нажатии на текстовые поля или стрелку
  $('.dateFrom, .dateTo').focus(function(){
    $('.date-dropdown__calendar').show();
  });
  $('.date-dropdown__part > .date-dropdown__part__arrow').click(function(){
    $('.date-dropdown__calendar').show();
  });
  //**блок фунционала кнопок
  $('.datepicker--button').first().text('очистить').addClass('datepicker--button-clear');
  $('.datepicker--buttons').append('<span class="datepicker--button-ready">применить</span>');

  $('.datepicker--button-clear').click(function(){
    $('.dateFrom, .dateTo').val('');
  });

  $('.datepicker--button-ready').click(function(){
    $('.date-dropdown__calendar').hide();
  });
      //**функция, добавляющая даты в поля
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