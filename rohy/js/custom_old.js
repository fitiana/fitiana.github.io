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


    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    var isKeyup = false;

    submitIcon.click(function () {
        if (isOpen == false) {
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
            isKeyup = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
            isKeyup = false;
        }
    });


    submitIcon.mouseup(function () {
        return false;
    });
    submitIcon.keyup(function () {
        return false;
    });
    searchBox.mouseup(function () {
        return false;
    });
    searchBox.keyup(function () {
        return false;
    });

    $(document).mouseup(function () {
        if (isOpen == true) {
            $('.searchbox-icon').css('display', 'block');
            submitIcon.click();
        }
    });

    function buttonUp() {
        var inputVal = $('.searchbox-input').val();
        inputVal = $.trim(inputVal).length;
        if (inputVal !== 0) {
            $('.searchbox-icon').css('display', 'none');
        } else {
            $('.searchbox-input').val('');
            $('.searchbox-icon').css('display', 'block');
        }
    }

    // var searchWrapper = $('.search-form-wrapper');
    // var Open = false;
    // $('#searchformcss').click(function () {

    //     if (Open == false) {
    //         $(this).addClass('searchformcss-open');
    //         searchWrapper.focus();
    //         Open = true;
    //     } 

    // else {
    //     $(this).removeClass('searchformcss-open');
    //     searchWrapper.focusout();
    //     Open = false;
    // }

    // });

    $(document).ready(function () {
        
    });
    
    
    $('.search-form-wrapper').click(function () {
            $(this).toggleClass("searchformcss-open");
        });
    
    $('.mobilemenu-toggle').on('click', function () {
      $(this)
        .toggleClass('cs-toggle_active');
        $('.nav-menus-wrapper').toggleClass('nav_active');
        $('.nav-menus-wrapper').fadeToggle( "slow", "linear" );;
        
    });

   /** jQuery(searchformcss).mouseup(function () {
        return false;
    }); */

    // $(document).ready(function () {
    //     $('.carousel').slick({
    //         slidesToShow: 1,
    //         dots: true,
    //     });
    // });


   


})(jQuery);
