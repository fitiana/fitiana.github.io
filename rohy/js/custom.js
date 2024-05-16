/**
 * File custom.js
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

(function ($) {


    /**=========================
    LOADER
    =========================**/
    $(window).on('load', function () {
        $('#loader').fadeOut('slow', function () { $(this).remove(); });
    });

    $('.mobilemenu-toggle').on('click', function () {
        $(this)
          .toggleClass('cs-toggle_active');
          $('.nav-menus-wrapper').toggleClass('nav_active');
          $('.nav-menus-wrapper').fadeToggle( "slow", "linear" );;
          
      });
  

   //>> Sticky Header Js Start <<//

   $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $("#header-sticky").addClass("sticky");
        } else {
            $("#header-sticky").removeClass("sticky");
        }
    });
    
    // window scroll event
  $(window).on("scroll", function () {
    if ($(".stricked-menu").length) {
      var headerScrollPos = 130;
      var stricky = $(".stricked-menu");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("stricky-fixed");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("stricky-fixed");
      }
    }
  //  OnePageMenuScroll(); ogencyhtml-10
  });

 // education-theme

 // Bottom right navigation, including scroll to top


 /*-- One Page Menu --*/
 function SmoothMenuScroll() {
  var anchor = $(".scrollToLink");
  if (anchor.length) {
    anchor.children("a").bind("click", function (event) {
      if ($(window).scrollTop() > 10) {
        var headerH = "90";
      } else {
        var headerH = "90";
      }
      var target = $(this);
      $("html, body")
        .stop()
        .animate({
            scrollTop: $(target.attr("href")).offset().top - headerH + "px"
          },
          1200,
          "easeInOutExpo"
        );
      anchor.removeClass("current");
      anchor.removeClass("current-menu-ancestor");
      anchor.removeClass("current_page_item");
      anchor.removeClass("current-menu-parent");
      target.parent().addClass("current");
      event.preventDefault();
    });
  }
}
SmoothMenuScroll();



})(jQuery);
