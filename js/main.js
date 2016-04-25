jQuery(document).ready(function() {
  jQuery('.toggle-nav').click(function(e) {
    jQuery(this).toggleClass('active');
    jQuery('.menu ul').toggleClass('active');

    e.preventDefault();
  });

  jQuery( ".bl1" ).click(function() {
    jQuery( ".vis1" ).slideToggle( "slow" );
  });


  jQuery( ".bl2" ).click(function() {
    jQuery( ".vis2" ).slideToggle( "slow" );
  });


  jQuery( ".bl3" ).click(function() {
    jQuery( ".vis3" ).slideToggle( "slow" );
  });

});
