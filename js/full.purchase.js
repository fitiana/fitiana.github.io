$( document ).ready(function() {

    $(".custom-btn-other").click(function(){
        let refillid = $(this).attr('aria-label');
        $("#input-form-"+refillid).show();
        $("#for-"+refillid).attr("value","other");
        let a = $(".no-by-solde-"+refillid).val();
        if(a == 1){
            $("#button-purchase-1-"+refillid).hide();
            $("#button-purchase-2-"+refillid).show();
        }
    });

    $(".custom-btn-me").click(function(){
         let refillid = $(this).attr('aria-label');
         $("#input-form-"+refillid).hide()
         $("#for-"+refillid).attr("value","me");
         $("#button-purchase-2-"+refillid).hide();
         $("#button-purchase-1-"+refillid).show();
    });



    $('.show-recipient-msisdn').unbind('click').bind('click', function(){
        let inputID = $(this).attr('id');
        let id = inputID.split('other-')[1];
        inputID = "#form" + inputID.split('other-')[1];
        if($(this).is(':checked')){
            $(inputID).show();
            $("#for-"+id).attr("value","other");
        } else {
            $(inputID).hide();
            $("#for-"+id).attr("value","me");
        }
    });

    $('.via-om').unbind('click').bind('click', function(){
        let inputID = $(this).attr('id');
        inputID = inputID.split('om-')[1];
        if($(this).is(':checked')){
            $("#via-om-"+inputID).attr("value","1");
        } else {
            $("#via-om-"+inputID).attr("value","0");
        }
    });

});


(function($) {
    "use strict";
    $(document).on('click', '.cart-toggler', function() {
        $(this).siblings('.topcart_content').stop().slideToggle(400)
    });
    $(document).on('click', '.lock-icon', function() {
        $(this).closest('.header-login-form').children('.acc-form').stop().slideToggle(400)
    });
    $(document).on('click', '.view-mode > a', function() {
        $(this).addClass('active').siblings('.active').removeClass('active');
        if ($(this).hasClass('grid')) {
            $('#archive-product .shop-products').removeClass('list-view');
            $('#archive-product .shop-products').addClass('grid-view');
            $('#archive-product .list-col4').removeClass('col-xs-12 col-sm-4');
            $('#archive-product .list-col8').removeClass('col-xs-12 col-sm-8')
        } else {
            $('#archive-product .shop-products').addClass('list-view');
            $('#archive-product .shop-products').removeClass('grid-view');
            $('#archive-product .list-col4').addClass('col-xs-12 col-sm-4');
            $('#archive-product .list-col8').addClass('col-xs-12 col-sm-8')
        }
    });
    $(document).on('click', 'a.quickview', function(event) {
        event.preventDefault();
        var productID = $(this).attr('data-quick-id');
        showQuickView(productID)
    });
    $(document).on('click', '.closeqv', function() {
        hideQuickView()
    });
    $(document).on('click', '.quick-thumbnails a', function(event) {
        event.preventDefault();
        var quickImgSrc = $(this).attr('href');
        $(this).closest('.product-images').find('.main-image').find('img').attr('src', quickImgSrc);
        $(this).closest('.product-images').find('.main-image').find('img').attr('srcset', quickImgSrc)
    });
    $(document).on('click', '.widget_product_categories li.cat-parent > i.opener', function() {
        var el = $(this).parent();
        if (el.hasClass('opening')) {
            el.removeClass('opening').children('ul').stop().slideUp(300)
        } else {
            el.siblings('.opening').removeClass('opening').children('ul').stop().slideUp(300);
            el.addClass('opening').children('ul').slideDown(300)
        }
    });
    $(document).on('click', '.catmenu-opener', function() {
        $(this).parent().toggleClass('opening')
    });
    $(document).on('click', '#back-top', function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
    });
    $(document).on('click', '#secondary .product-categories .cat-parent .opener', function() {
        if ($(this).parent().hasClass('opening')) {
            $(this).parent().removeClass('opening').children('ul').stop().slideUp(300)
        } else {
            $(this).parent().siblings('.opening').removeClass('opening').children('ul').stop().slideUp(300);
            $(this).parent().addClass('opening').children('ul').stop().slideDown(300)
        }
    });
    $(document).on('click', '.vc_tta-tabs-list > li', function() {
        var currentP = $(window).scrollTop();
        $('body, html').animate({
            'scrollTop': currentP + 1
        }, 10)
    });
    $(document).on('click', '.filter-options .btn', function() {
        $(this).siblings('.btn').removeClass('active');
        $(this).addClass('active');
        var filter = $(this).data('group');
        if (filter) {
            if (filter == 'all') {
                $('#projects_list .project').removeClass('hide')
            } else {
                $('#projects_list .project').each(function() {
                    var my_group = $(this).data('groups');
                    console.log(my_group);
                    if (my_group.indexOf(filter) != -1) {
                        $(this).removeClass('hide')
                    } else {
                        $(this).addClass('hide')
                    }
                })
            }
        }
        $(window).resize()
    });
    $(document).on('change', 'select.vitual-style-el', function() {
        var my_val = $(this).children(':selected').text();
        $(this).parent().children('.vitual-style').text(my_val)
    });
    $(document).on('click', '.showmore-menu .showmore-opener', function() {
        $(this).parent().toggleClass('opening')
    });
    $(document).on('click', '.showmore-menu .showmore-cats', function() {
        $(this).toggleClass('expanded');
        $(this).closest('.showmore-menu').toggleClass('all');
        $(this).closest('.showmore-menu').find('li.out-li').stop().slideToggle(300)
    });
    $(document).on('click', 'a.clickbuy_like_post', function(e) {
        var like_title;
        if ($(this).hasClass('liked')) {
            $(this).removeClass('liked');
            like_title = $(this).data('unliked_title')
        } else {
            $(this).addClass('liked');
            like_title = $(this).data('liked_title')
        }
        var post_id = $(this).data("post_id");
        var me = $(this);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajaxurl,
            data: 'action=clickbuy_update_like&post_id=' + post_id,
            success: function(data) {
                me.children('.number').text(data);
                me.parent('.likes-counter').attr('title', '').attr('data-original-title', like_title)
            }
        });
        e.preventDefault();
        return !1
    });
    $(document).on('click', '.sidebar-toggle', function() {
        $(this).parent().toggleClass('opening');
        $(this).siblings().slideToggle(400)
    });
    $(document).on('click', '.categories-menu li.menu-item-has-children > .opener, .categories-menu li.page_item_has_children > .opener', function() {
        if ($(this).parent().hasClass('opening')) {
            $(this).parent().removeClass('opening').children('ul').stop().slideUp(300)
        } else {
            $(this).parent().siblings('.opening').removeClass('opening').children('ul').stop().slideUp(300);
            $(this).parent().addClass('opening').children('ul').stop().slideDown(300)
        }
    });
    $(document).on('click', 'body', function(e) {
        if (!$(e.target).closest('.widget').hasClass('widget_shopping_cart')) {
            $('.topcart .topcart_content').stop().slideUp(400)
        }
    });
    $(document).on('click', '.clickbuy-autocomplete-search-results .last-total-result', function() {
        $(this).closest('form').submit()
    });
    $(document).on('click', 'body', function(e) {
        if (!$(e.target).closest('form').hasClass('woocommerce-product-search')) {
            $('.clickbuy-autocomplete-search-results').hide()
        }
    })
})(jQuery);
jQuery(document).ready(function($) {
    $('body').append('<div id="loading"></div>');
    $(document).ajaxComplete(function(event, request, options) {
        if (options.url.indexOf('wc-ajax=add_to_cart') != -1) {
            var title = $('a.added_to_cart').attr('title');
            $('a.added_to_cart').removeAttr('title').closest('p.add_to_cart_inline').attr('data-original-title', title);
            if ($('.header-container').hasClass('sticky')) {
                $('.topcart .topcart_content').stop().slideDown(500)
            } else {
                $('html, body').animate({
                    scrollTop: 0
                }, 1000, function() {
                    $('.topcart .topcart_content').stop().slideDown(500)
                })
            }
        }
        $("#loading").fadeOut(400)
    });
    $(document).ajaxSend(function(event, xhr, options) {
        if (options.url.indexOf('wc-ajax=add_to_cart') != -1) {
            $("#loading").show()
        }
        if (options.url.indexOf('wc-ajax=get_refreshed_fragments') != -1) {
            if ($('body').hasClass('fragments_refreshed')) {
                xhr.abort()
            } else {
                $('body').addClass('fragments_refreshed')
            }
        }
    });
    $('.widget_product_categories li.cat-parent').append('<i class="opener fa fa-plus"></i>');
    $('.widget_categories li.cat-item').each(function() {
        if ($(this).children('.children').length) {
            $(this).children('.children').hide();
            $(this).append('<i class="opener fa fa-plus"></i>')
        }
    });
    $('.widget_product_categories li.current-cat').addClass('opening').children('.children').show();
    if ($('.widget_product_categories li.current-cat').closest('li.cat-parent').length) {
        $('.widget_product_categories li.current-cat').closest('li.cat-parent').addClass('opening').children('.children').show()
    }
    var owl = $('[data-owl="slide"]');
    owl.each(function(index, el) {
        var $item = $(this).data('item-slide');
        var $rtl = $(this).data('ow-rtl');
        var $dots = ($(this).data('dots') == !0) ? !0 : !1;
        var $nav = ($(this).data('nav') == !1) ? !1 : !0;
        var $margin = ($(this).data('margin')) ? $(this).data('margin') : 0;
        var $desksmall_items = ($(this).data('desksmall')) ? $(this).data('desksmall') : (($item) ? $item : 4);
        var $tablet_items = ($(this).data('tablet')) ? $(this).data('tablet') : (($item) ? $item : 2);
        var $tabletsmall_items = ($(this).data('tabletsmall')) ? $(this).data('tabletsmall') : (($item) ? $item : 2);
        var $mobile_items = ($(this).data('mobile')) ? $(this).data('mobile') : (($item) ? $item : 1);
        var $tablet_margin = Math.floor($margin / 1.5);
        var $mobile_margin = Math.floor($margin / 3);
        var $default_items = ($item) ? $item : 5;
        var $autoplay = ($(this).data('autoplay') == !0) ? !0 : !1;
        var $autoplayTimeout = ($(this).data('playtimeout')) ? $(this).data('playtimeout') : 5000;
        var $smartSpeed = ($(this).data('speed')) ? $(this).data('speed') : 250;
        var loop = !1;
        if ($autoplay) loop = !0;
        $(this).owlCarousel({
            loop: loop,
            nav: $nav,
            dots: $dots,
            margin: $margin,
            rtl: $rtl,
            items: $default_items,
            autoplay: $autoplay,
            autoplayTimeout: $autoplayTimeout,
            smartSpeed: $smartSpeed,
            responsive: {
                0: {
                    items: $mobile_items,
                    margin: $mobile_margin
                },
                480: {
                    items: $tabletsmall_items,
                    margin: $tablet_margin
                },
                640: {
                    items: $tablet_items,
                    margin: $tablet_margin
                },
                991: {
                    items: $desksmall_items,
                    margin: $margin
                },
                1199: {
                    items: $default_items,
                }
            }
        })
    });
    $('#secondary .product-categories .cat-parent').append('<span class="opener fa fa-plus"></span>');
    if ($('body').hasClass('clickbuy-animate-scroll') && !Modernizr.touch) {
        wow = new WOW({
            mobile: !1,
        });
        wow.init()
    }
    var currentP = 0;
    $(window).scroll(function() {
        var headerH = $('.header-container').height();
        var scrollP = $(window).scrollTop();
        if ($(window).width() > 1024) {
            if (scrollP != currentP) {
                if (scrollP >= headerH) {
                    $('#back-top').addClass('show')
                } else {
                    $('#back-top').removeClass('show')
                }
                currentP = $(window).scrollTop()
            }
        }
        if ($(window).width() > 992) {
            if (scrollP > headerH) {
                if ($(".header-container .categories-menu").hasClass('opening')) {
                    $(".header-container .categories-menu").removeClass('opening')
                }
            } else if ($('#main-content').hasClass('home2-content')) {
                $(".header-container .categories-menu").addClass('opening')
            }
        }
        if ($('.load-more-product.scroll-more').length) {
            var mytop = parseInt($('.load-more-product').offset().top - $(window).height());
            if (scrollP >= mytop) {
                loadmoreProducts()
            }
        }
    });
    $('a.quickview, a.add_to_wishlist, a.compare.button, .yith-wcwl-wishlistexistsbrowse a[rel="nofollow"], .yith-wcwl-share a, .social-icons a').each(function() {
        var text = $.trim($(this).text());
        var title = $.trim($(this).attr('title'));
        $(this).attr('data-toggle', 'tooltip');
        if (!title) {
            $(this).attr('title', text)
        }
    });
    $('.add_to_cart_inline a.button').each(function() {
        var text = $.trim($(this).text());
        var title = $.trim($(this).attr('title'));
        if (!title) {
            $(this).closest('.add_to_cart_inline').attr('title', text)
        } else {
            $(this).closest('.add_to_cart_inline').attr('title', title)
        }
    });
    $('[data-toggle="tooltip"], .add_to_cart_inline').tooltip({
        container: 'body'
    });
    if ($('#main-content').hasClass('home2-content')) {
        var winW = $(window).width();
        if (winW >= 1024) {
            $('.categories-menu').addClass('opening')
        }
    }
    $('.categories-menu ul.mega_main_menu_ul li.menu-item-has-children, .categories-menu li.page_item_has_children').append('<span class="opener fa fa-angle-right"></span>');
    $(document).on('click', '.nav-mobile .toggle-menu, .mobile-menu-overlay', function() {
        $('body').toggleClass('mobile-nav-on')
    });
    $('.mobile-menu li.dropdown').append('<span class="toggle-submenu"><i class="fa fa-angle-right"></i></span>');
    $(document).on('click', '.mobile-menu li.dropdown .toggle-submenu', function() {
        if ($(this).parent().siblings('.opening').length) {
            var old_open = $(this).parent().siblings('.opening');
            old_open.children('ul').stop().slideUp(200);
            old_open.children('.toggle-submenu').children('.fa').removeClass('fa-angle-down').addClass('fa-angle-right');
            old_open.removeClass('opening')
        }
        if ($(this).parent().hasClass('opening')) {
            $(this).parent().removeClass('opening').children('ul').stop().slideUp(200);
            $(this).parent().children('.toggle-submenu').children('.fa').removeClass('fa-angle-down').addClass('fa-angle-right')
        } else {
            $(this).parent().addClass('opening').children('ul').stop().slideDown(200);
            $(this).parent().children('.toggle-submenu').children('.fa').removeClass('fa-angle-right').addClass('fa-angle-down')
        }
    });
    $('.auto-grid').each(function() {
        var $col = ($(this).data('col')) ? $(this).data('col') : 4;
        var $pad_y = ($(this).data('pady')) ? $(this).data('pady') : 0;
        var $pad_x = ($(this).data('padx')) ? $(this).data('padx') : 0;
        var $margin_bot = ($(this).data('marbot')) ? $(this).data('marbot') : 0;
        $(this).autoGrid({
            no_columns: $col,
            padding_y: $pad_y,
            padding_x: $pad_x,
            margin_bottom: $margin_bot
        })
    });
    $(".prfancybox").fancybox({
        openEffect: 'fade',
        closeEffect: 'elastic',
        nextEffect: 'fade',
        prevEffect: 'fade',
        helpers: {
            title: {
                type: 'inside'
            },
            overlay: {
                showEarly: !1
            },
            buttons: {},
            thumbs: {
                width: 100,
                height: 100
            }
        }
    });
    jQuery('.project-gallery .sub-images').owlCarousel({
        items: 5,
        nav: !1,
        dots: !0,
        responsive: {
            0: {
                items: 3
            },
            480: {
                items: 3
            },
            640: {
                items: 4
            },
            991: {
                items: 5
            },
            1199: {
                items: 5
            }
        }
    });
    $('select.vitual-style-el').each(function() {
        var my_val = $(this).children(':selected').text();
        if (!$(this).parent().hasClass('vitual-style-wrap')) {
            $(this).wrap('<div class="vitual-style-wrap"></div>')
        }
        if (!$(this).parent().children('.vitual-style').length) {
            $(this).parent().append('<span class="vitual-style">' + my_val + '</span>')
        } else {
            $(this).parent().children('.vitual-style').text(my_val)
        }
    });
    window.setInterval(function() {
        $('.deals-countdown').each(function() {
            var me = $(this);
            var days = parseInt(me.find('.days_left').text());
            var hours = parseInt(me.find('.hours_left').text());
            var mins = parseInt(me.find('.mins_left').text());
            var secs = parseInt(me.find('.secs_left').text());
            if (days > 0 || hours > 0 || mins > 0 || secs > 0) {
                if (secs == 0) {
                    secs = 59;
                    if (mins == 0) {
                        mins = 59;
                        if (hours == 0) {
                            hours = 23;
                            if (days = 0) {
                                hours = 0;
                                mins = 0;
                                secs = 0
                            } else {
                                days = days - 1
                            }
                        } else {
                            hours = hours - 1
                        }
                    } else {
                        mins = mins - 1
                    }
                } else {
                    secs = secs - 1
                }
                me.find('.days_left').html(days);
                me.find('.hours_left').html(hours);
                me.find('.mins_left').html(mins);
                me.find('.secs_left').html(secs)
            }
        })
    }, 1000);
    $('#archive-product, #main-column').each(function() {
        if ($(this).next('#secondary').length) {
            $(this).next('#secondary').wrapInner('<div></div>');
            $(this).next('#secondary').addClass('right-sidebar').append('<span class="sidebar-toggle fa fa-list-alt"></span>')
        }
        if ($(this).prev('#secondary').length) {
            $(this).prev('#secondary').wrapInner('<div></div>');
            $(this).prev('#secondary').addClass('left-sidebar').append('<span class="sidebar-toggle fa fa-list-alt"></span>')
        }
    })
});
jQuery(window).bind('load', function() {
    var el = (jQuery('.categories-menu .mega_main_menu_ul').length) ? '.mega_main_menu_ul' : '.nav_menu';
    var items = parseInt(jQuery('.categories-menu .showmore-cats').data('items'));
    var first_lv_items = jQuery('.categories-menu').find(el + ' > li.menu-item').length;
    jQuery('.categories-menu').find(el + ' > li.menu-item').each(function(index) {
        if (index > items - 1) {
            jQuery(this).addClass('out-li').hide()
        }
    });
    if (first_lv_items > items - 1) {
        jQuery('.categories-menu .showmore-cats').removeClass('hide')
    }
    if (jQuery('.su-slider .su-slider-slides').length) {
        jQuery('.su-slider .su-slider-slides').each(function() {
            if (!jQuery(this).find('.su-slider-slide-active').length) {
                initialSuSliderByOwl(jQuery(this).parent())
            }
        })
    }
});

function initialSuSliderByOwl(el) {
    var _slide = el.children('.su-slider-slides');
    if (_slide.length && !_slide.hasClass('owl-loaded')) {
        var _speed = el.data('speed') ? parseInt(el.data('speed')) : 600;
        var _delay = el.data('autoplay') ? parseInt(el.data('autoplay')) : 3000;
        var _prodItem = el.parent().next('.item-col');
        if (_prodItem) {
            _slide.children('.su-slider-slide').css({
                height: _prodItem.height(),
                overflow: 'hidden'
            });
            _slide.css({
                height: _prodItem.height(),
                overflow: 'hidden'
            })
        }
        _slide.addClass('owl-carousel owl-theme');
        _slide.owlCarousel({
            loop: !0,
            nav: !1,
            dots: !0,
            margin: 0,
            rtl: !1,
            items: 1,
            autoplay: !0,
            autoplayTimeout: _delay,
            smartSpeed: _speed,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                640: {
                    items: 1
                },
                960: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            },
        })
    }
}

function showQuickView(productID) {
    jQuery('#quickview-content').html('');
    window.setTimeout(function() {
        jQuery('.quickview-wrapper').addClass('open');
        jQuery.post(ajaxurl, {
            'action': 'product_quickview',
            'data': productID
        }, function(response) {
            jQuery('.quickview-wrapper .quick-modal').addClass('show');
            jQuery('#quickview-content').html(response);
            jQuery('.quick-thumbnails').addClass('owl-carousel owl-theme');
            jQuery('.quick-thumbnails').owlCarousel({
                items: 4,
                nav: !1,
                dots: !0
            });
            if (jQuery('#quickview-content .variations_form').length) {
                jQuery('#quickview-content .variations_form').wc_variation_form();
                jQuery('#quickview-content .variations_form .variations select').change()
            }
        })
    }, 300)
}

function hideQuickView() {
    jQuery('.quickview-wrapper .quick-modal').removeClass('show');
    jQuery('.quickview-wrapper').removeClass('open')
}
var requesting = !1;

function loadmoreProducts() {
    var url = jQuery('.woocommerce-pagination ul li .current').parent().next().children('a').attr('href');
    if (url && url.indexOf('page') != -1 && !requesting) {
        requesting = !0;
        jQuery('.load-more-product img').removeClass('hide');
        requesting = !0;
        jQuery.get(url, function(data) {
            var $data = jQuery(data);
            var $products = $data.find('#archive-product .shop-products.products').html();
            jQuery('#archive-product .shop-products.products').append($products);
            jQuery('#archive-product .toolbar.tb-bottom').html($data.find('#archive-product .toolbar.tb-bottom').html());
            jQuery('#archive-product .woocommerce-result-count span').html($data.find('.woocommerce-result-count span').html());
            jQuery('#archive-product .toolbar .view-mode a.active').trigger('click');
            jQuery('a.quickview, a.add_to_wishlist, a.compare.button, .yith-wcwl-wishlistexistsbrowse a[rel="nofollow"], .yith-wcwl-share a').each(function() {
                var text = jQuery.trim(jQuery(this).text());
                var title = jQuery.trim(jQuery(this).attr('title'));
                jQuery(this).attr('data-toggle', 'tooltip');
                if (!title) {
                    jQuery(this).attr('title', text)
                }
            });
            jQuery('#archive-product').find('[data-toggle="tooltip"]').tooltip({
                container: 'body'
            });
            jQuery('.load-more-product img').addClass('hide');
            setTimeout(function() {
                requesting = !1
            }, 100)
        })
    }
}