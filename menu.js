$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger, .menu-nav').toggleClass('active');
    });


    $("a.scroll-to").on("click", function(e) {
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
    });
});