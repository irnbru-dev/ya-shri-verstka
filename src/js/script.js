$(document).ready(function () {
    $(window).on('load resize' ,function() {
        if ($(window).width() < 960) {
            $('.main-nav').addClass('collapsed');
            $('.nav').removeClass('open')
        } else {
            $('.main-nav').removeClass('collapsed');
        };
    });

    $('.burger-btn').on('click', function () {
        $('.nav').toggleClass('open');
    });
});

