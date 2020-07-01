$("document").ready(function () {
    "use strict";

    // auto write


    var typed = new Typed('.writter', {
        strings: ["<p>Front End <span>Developer</span> </p>", "<p>UI/UX <span>designer</span> </p>"],
        typeSpeed: 100,
        backSpeed: 40,
        backDelay: 1000,
        loop: true
    });


    //nice scroll


    $("body").niceScroll({
        cursorcolor: "#c49b66",
        cursorwidth: "8px",
        cursorborder: "1px solid #c49b66"
    });


        // scroll to top
    
        $(".scroll").click(function() {
  window.scrollTo({ top: 0, behavior: 'smooth'});
});
$(window).scroll(function() {
    if ($(this).scrollTop() >= 600) {
        $('.scroll').fadeIn(200);
    } else {
        $('.scroll').fadeOut(200);
    }
});
    
    //header


    $(".header").height($(window).height());

    $(window).resize(function () {
        $(".header").height($(window).height());
    });
    $(".header .header-info").each(function () {
        $(this).css('paddingTop', ($(window).height() - $(".navbar").height()) / 2 - 60);
    });


    //scroll to about


    $(".navbar .nav-about").click(function () {

        $("html, body").animate({

            scrollTop: $(".about").offset().top - 70

        }, 2000);
    });
    $(".header button").click(function () {

        $("html, body").animate({

            scrollTop: $(".about").offset().top - 50

        }, 2000);
    });


    //scroll to home


    $(".navbar .nav-home").click(function () {

        $("html, body").animate({

            scrollTop: $(".header").offset().top

        }, 2000);
    });

    // scroll to services
    $(".navbar .nav-services").click(function () {

        $("html, body").animate({

            scrollTop: $(".services").offset().top - 20

        }, 2000);
    });

    // scroll to protofolio
    $(".navbar .nav-portfolio").click(function () {

        $("html, body").animate({

            scrollTop: $(".protofolio").offset().top - 20

        }, 2000);
    });

    // scroll to testimonail
    $(".navbar .nav-testimonials").click(function () {

        $("html, body").animate({

            scrollTop: $(".testi").offset().top -150

        }, 2000);
    });

    // scroll to contact
    $(".navbar .nav-contact").click(function () {

        $("html, body").animate({

            scrollTop: $(".contact").offset().top + 15

        }, 2000);
    });

    $(".about button").click(function () {

        $("html, body").animate({

            scrollTop: $(".contact").offset().top + 15

        }, 2000);
    });


    //  scroll to !!!!!!!!!!!

    $(window).on("scroll", function () {

        // scroll to about

        if ($(window).scrollTop() >= 350 && $(window).scrollTop() <= 1479) {

            $(".navbar .nav-about").addClass("active").siblings().removeClass("active");

        }

        // scroll to home

        if ($(window).scrollTop() <= 349) {

            $(".navbar .nav-home").addClass("active").siblings().removeClass("active");
        }

        // scroll to protofolio

        if ($(window).scrollTop() >= 2240 && $(window).scrollTop() <=2918) {

            $(".navbar .nav-portfolio").addClass("active").siblings().removeClass("active");
        }

        // scroll to contact

        if ($(window).scrollTop() >= 3275) {

            $(".navbar .nav-contact").addClass("active").siblings().removeClass("active");
        }

        // scroll to testimonial
                if ($(window).scrollTop() >= 2917 && $(window).scrollTop() <= 3274) {

            $(".navbar .nav-testimonials").addClass("active").siblings().removeClass("active");
        }
        // nav bar big
        if ($(window).scrollTop() >= 100) {

            $(".navbar").addClass("nav-scroll");
        } else {
            $(".navbar").removeClass("nav-scroll");
        }

        // scroll to services

        if ($(window).scrollTop() >= 1480 && $(window).scrollTop() <= 2040) {

            $(".navbar .nav-services").addClass("active").siblings().removeClass("active");
        }
        if ($(window).scrollTop() >= 1417 && $(window).scrollTop() <= 2011) {

            $(".navbar .nav-services").addClass("active").siblings().removeClass("active");
        }
    });

    // protofolio

    $(".protofolio .list li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    /* loading */


    $(".loading").ready(
        function () {
            setTimeout(function () {
                $(".loading").fadeOut();

            }, 3000);
        });


    /* count statistic          */
    $('.count').countUp({
        delay: 10,
        time: 2000
    });

    // mix it up
    var mixer = mixitup(".protofolio");


});
wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();
