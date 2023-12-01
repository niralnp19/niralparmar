(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    // Initiate the wowjs
    new WOW().init();
        
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            // Get the current page URL
            var currentUrl = window.location.href;

            // Check if the current page URL contains "index.html"
            if (currentUrl.indexOf("index.html") !== -1) {
                $('html, body').animate({
                    scrollTop: $('#' + this.hash.substring(1)).offset().top - 45
                }, 1500, 'easeInOutExpo');    
            } else {
                $('html, body').animate({
                    scrollTop: $('#' + this.hash.substring(1)).offset().top - 0
                }, 1500, 'easeInOutExpo');
            }
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    var currentSection =    1;
    var nextSection = 0

    $(document).on('scroll', '.cd-go', function(event){  
        var sec = 1;
        event.preventDefault();
        $("section").each(function(){
            if($(this).inView()){
            currentSection = sec;
            console.log('currentSection =',currentSection);
        } else{
            sec++
        }
    });
    
    nextSection = currentSection+1;
    var os = $('#section'+nextSection).offset();

    $('html, body').animate({
        scrollTop: os.top,
        scrollLeft: os.left
    });
});

$.fn.inView = function(){
   var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};
    
})(jQuery);

