'use strict';
$(document).ready(function() {
  jQuery('.toggle-nav').click(function(e) {
    jQuery(this).toggleClass('active');
    jQuery('.menu ul').toggleClass('active');

    e.preventDefault();
  });

  setTimeout(function() {

    $( "#btn1" ).click(function(e) {
      slideUpAll();
      jQuery( ".vis1" ).slideToggle( "slow" );
    });


    $( "#btn2" ).click(function(e) {
      slideUpAll();
      jQuery( ".vis2" ).slideToggle( "slow" );
    });

    $( "#btn3" ).click(function(e) {
      slideUpAll();
      jQuery( ".vis3" ).slideToggle( "slow" );
    });

    function slideUpAll() {
      jQuery(".hidden").slideUp('slow');
    }
  }, 100);
});
