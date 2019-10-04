$('.btn_with-arrow').parent().click(function(){

  var dateFrom = $('.dateFrom').val();
  var dateTo = $('.dateTo').val();

})

var masOfDates = [];
if (!localStorage.getItem("masOfDates")) {
    masOfDates = [dateFrom, dateTo];
    localStorage.setItem("masOfDates", JSON.stringify(masOfDates))
} else masOfDates = JSON.parse(localStorage.getItem("masOfDates"));
