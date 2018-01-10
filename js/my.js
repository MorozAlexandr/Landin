(function( $ ) {
$(window).on('load');
$('.icon-angle-down').on('click', function(){
  if($('.hide').hasClass("invisible")){
    $('.hide').removeClass("invisible");
  }else{
    $('.hide').addClass("invisible");
  }
});


$('.dd').on('click',function(){
  if($('.landbar').hasClass('jslandbar') && $('.dd').hasClass('jsdd') && $('.forma').hasClass('jsform') ){
    $('.landbar').removeClass('jslandbar');
    $('.dd').removeClass('jsdd');
    $('.forma').removeClass('jsform');
  }else{
    $('.landbar').addClass('jslandbar');
    $('.dd').addClass('jsdd');
    $('.forma').addClass('jsform');
  }
});




})(jQuery);
