$('.btn-dropdown').addClass('btn-dropdown_border-bottom');

$('svg').click(function(){
  $('.dropdown').slideToggle();

  if($('.btn-dropdown').hasClass('btn-dropdown_border-bottom')){
    $('.btn-dropdown').removeClass('btn-dropdown_border-bottom').addClass('btn-dropdown_border-bottom-off');
  }
  else{
    $('.btn-dropdown').removeClass('btn-dropdown_border-bottom-off').addClass('btn-dropdown_border-bottom');
  }
});

var sumOfAdults=0;
var sumOfKids=0;
var sumOfBabies=0;

$('.adults-minus').click(function(){
  if(sumOfAdults>0){
    sumOfAdults--;
    if(sumOfAdults==0){
      $('.adults-minus').css("border-color","rgba(31, 32, 65, 0.25)");
      $('.adults-minus').css("color","rgba(31, 32, 65, 0.25)");
    }
  }
  $('.adults-count').text(sumOfAdults);
});

$('.adults-plus').click(function(){
  sumOfAdults++;
  $('.adults-count').text(sumOfAdults);
  $('.adults-minus').css("border-color","rgba(31, 32, 65, 0.5)");
  $('.adults-minus').css("color","rgba(31, 32, 65, 0.5)");
});

$('.kids-minus').click(function(){
  if(sumOfKids>0){
    sumOfKids--;
    if(sumOfKids==0){
      $('.kids-minus').css("border-color","rgba(31, 32, 65, 0.25)");
      $('.kids-minus').css("color","rgba(31, 32, 65, 0.25)");
    }
  }
  $('.kids-count').text(sumOfKids);
});

$('.kids-plus').click(function(){
  sumOfKids++;
  $('.kids-count').text(sumOfKids);
  $('.kids-minus').css("border-color","rgba(31, 32, 65, 0.5)");
  $('.kids-minus').css("color","rgba(31, 32, 65, 0.5)");
});

$('.babies-minus').click(function(){
  if(sumOfBabies>0){
    sumOfBabies--;
    if(sumOfBabies==0){
      $('.babies-minus').css("border-color","rgba(31, 32, 65, 0.25)");
      $('.babies-minus').css("color","rgba(31, 32, 65, 0.25)");
    }
  }
  $('.babies-count').text(sumOfBabies);
});

$('.babies-plus').click(function(){
  sumOfBabies++;
  $('.babies-count').text(sumOfBabies);
  $('.babies-minus').css("border-color","rgba(31, 32, 65, 0.5)");
  $('.babies-minus').css("color","rgba(31, 32, 65, 0.5)");
});

$('.bottom-btns__btn-clear-all').click(function(){
  sumOfAdults=0;
  sumOfKids=0;
  sumOfBabies=0;
  $('.dropdown__minus-circle').css("border-color","rgba(31, 32, 65, 0.25)");
  $('.dropdown__minus-circle').css("color","rgba(31, 32, 65, 0.25)");
  $('.adults-count').text(sumOfAdults);
  $('.kids-count').text(sumOfKids);
  $('.babies-count').text(sumOfBabies);
});
