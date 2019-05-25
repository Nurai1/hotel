$(document).ready(function(){
  var sumOfHearts = $('.like-btn__sum').text();
  $('.like-btn').click(function(){
    sumOfHearts++;
    $('.like-btn__sum').text(sumOfHearts);
    $(this).addClass('like-btn_active');
  });
});
