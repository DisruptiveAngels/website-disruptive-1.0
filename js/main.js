
$(document).ready(function () {
    var $header = $('.header');

    $(window).on('scroll', function () {
        if(!$('html').hasClass('sb-active')) {
            $header.toggleClass('header_scrolled', $(window).scrollTop() > 600);
            }
    });
});
