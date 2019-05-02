$(document).ready(function(){

$(".price-range__slider").slider({
       animate: "slow",
       range: true,
           min: 0,
           max: 15000,
       values: [ 5000, 10000 ],
       slide : function(event, ui) {
           $(".price-range__slider-result").text(ui.values[ 0 ] + "Р - " + ui.values[ 1 ]+"Р" );
       }
   });
   $( ".price-range__slider-result" ).text($(".price-range__slider").slider("values", 0) + "P - " + $(".price-range__slider").slider("values", 1)+"Р");
});
