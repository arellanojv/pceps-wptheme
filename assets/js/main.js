jQuery(function () {

    "use strict";

    //===== Prealoder

    jQuery(window).on('load', function (event) {
        jQuery('.preloader').delay(500).fadeOut(500);
    });


    //===== Sticky

    jQuery(window).on('scroll', function (event) {
        var scroll = jQuery(window).scrollTop();
        if (scroll < 110) {
            jQuery(".header_navbar").removeClass("sticky");
            jQuery(".navbar_transparent img").attr("src", "assets/images/logo-white.png");
        } else {
            jQuery(".header_navbar").addClass("sticky");
            jQuery(".navbar_transparent img").attr("src", "assets/images/logo.png");
        }
    });



    //===== Mobile Menu

    jQuery(".navbar-toggler").on('click', function () {
        jQuery(this).toggleClass("active");
    });

    var subMenu = jQuery('.sub-menu-bar .navbar-nav .sub-menu');

    if (subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <span></span> </button>';
        });

        var subMenuToggler = jQuery('.sub-menu-bar .navbar-nav .sub-nav-toggler');

        subMenuToggler.on('click', function () {
            jQuery(this).parent().parent().children('.sub-menu').slideToggle();
            return false
        });

    }


    //===== Nice Select

    jQuery('select').niceSelect();


    //===== Counter Up

    jQuery('.counter').counterUp({
        delay: 10,
        time: 1600,
    });


    //====== Magnific Popup

    jQuery('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });


    //===== Magnific Popup

    jQuery('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    //===== Slick Testimonial

    jQuery('.testimonial_active').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }
          ]
    });


    //===== Range Slider Price Range

    var $range = jQuery(".js-range-slider"),
        $inputFrom = jQuery(".js-input-from"),
        $inputTo = jQuery(".js-input-to"),
        instance,
        min = 500,
        max = 8000,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 500,
        to: 5500,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function () {
        var val = jQuery(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = jQuery(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });



    //===== Back to top

    // Show or hide the sticky footer button
    jQuery(window).on('scroll', function (event) {
        if (jQuery(this).scrollTop() > 600) {
            jQuery('.back-to-top').fadeIn(200)
        } else {
            jQuery('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    jQuery('.back-to-top').on('click', function (event) {
        event.preventDefault();

        jQuery('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //=====









});
