jQuery(function($) {
    'use strict';

  

    // Sticky Nav
    $(window).on('scroll', function() {
        $(window).scrollTop() >= 100 ?
        $('.navbar-area').addClass('stickyadd') :
        $('.navbar-area').removeClass('stickyadd');
    });

    // Smooth Scrolling
    $('.nav_link').on('click', function(e) {
        var $this = $(this);
        $('html, body')
        .stop()
        .animate({
            scrollTop: $($this.attr('href')).offset().top - 60,
        }, 1000 );
        e.preventDefault();
    });

    // Search Popup
    $('.search-btn').on('click', function() {
        $('.search-popup').toggle(300);
    });

  
    //$('#banner-hero').parallax("center", 0.3);
    
     $('.mobilemenu-toggle').on('click', function () {
      $(this)
        .toggleClass('cs-toggle_active');
        $('.nav-menus-wrapper').toggleClass('nav_active');
        $('.nav-menus-wrapper').fadeToggle( "slow", "linear" );;
        
    });

    
    // Preloader
    $(window).on('load', function(e) {
        $('.preloader-main')
        .delay(2000)
        .queue(function() {
            $(this).remove();
        });
    });

}(jQuery));