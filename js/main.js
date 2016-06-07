jQuery(document).ready(function() {
  jQuery('.toggle-nav').click(function(e) {
    jQuery(this).toggleClass('active');
    jQuery('.menu ul').toggleClass('active');

    e.preventDefault();
  });

  jQuery( ".bl1" ).click(function() {
    slideUpAll();
    jQuery( ".vis1" ).slideToggle( "slow" );
  });


  jQuery( ".bl2" ).click(function() {
    slideUpAll();
    jQuery( ".vis2" ).slideToggle( "slow" );
  });


  jQuery( ".bl3" ).click(function() {
    slideUpAll();
    jQuery( ".vis3" ).slideToggle( "slow" );
  });

  function slideUpAll() {
    jQuery(".hidden").slideUp('slow');
  }


});
