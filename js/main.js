$("document").ready(function () {
    "use strict";
    
    // auto write
    
    
    var typed = new Typed('.writter', {
        strings: [ "<p>Front End <span>Developer</span> </p>", "<p>UI/UX <span>designer</span> </p>"],
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
    
    
    //header
    
    
        $(".header").height($(window).height());
    
    $(window).resize(function () {
        $(".header").height($(window).height());
    });
        $(".header .header-info").each(function () {
        $(this).css('paddingTop', ($(window).height() - $(".navbar").height()) / 2 - 60);
    });
    
    
    //scroll to about
    
    
        $(".header .header-info button , .navbar .nav-about").click(function () {
        
        $("html, body").animate({
            
            scrollTop: $(".about").offset().top - 70
            
        }, 2000);
    });
    
    
    //scroll to home
    
    
            $(".header .header-info button , .navbar .nav-home").click(function () {
        
        $("html, body").animate({
            
            scrollTop: $(".header").offset().top
            
        }, 2000);
    });
    
    // scroll to services
            $(".navbar .nav-services").click(function () {
        
        $("html, body").animate({
            
            scrollTop: $(".services").offset().top -20
            
        }, 2000);
    });
    
    
    // navigation
    
    
        $(".navbar li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    
    //  scroll to !!!!!!!!!!!
    
       $(window).on("scroll",function () {
           
           // scroll to about

        if($(window).scrollTop() >= 350 && $(window).scrollTop() <= 1479){

                $(".navbar .nav-about").addClass("active").siblings().removeClass("active");

        }
           
                      // scroll to home
           
        if($(window).scrollTop() <= 349){

                $(".navbar .nav-home").addClass("active").siblings().removeClass("active");
        }
           
                      // nav bar big
        if($(window).scrollTop() >= 100){

              $(".navbar").addClass("nav-scroll");
        }
        else{
             $(".navbar").removeClass("nav-scroll");
        }
           
                      // scroll to services
           
           if($(window).scrollTop() >= 1480 && $(window).scrollTop() <= 2040){

               $(".navbar .nav-services").addClass("active").siblings().removeClass("active");
        }
    });

    
    /* loading */
    
    
         $(".loading").ready(
    function(){
               setTimeout (function () {
         "use strict";
         $(".loading").fadeOut()
         
     },3000);
     })

}); 
