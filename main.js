AOS.init();

$(document).ready(function(){
  $("#caption_id").addClass("animated fadeIn");

  $('ul.nav li.dropdown').hover(function() {

    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);

  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
  });

})
