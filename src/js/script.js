$(document).ready(function () {

    $(window).on('load resize', function () {
        if ($(window).innerWidth() < 992) {
            $('.main-nav').addClass('collapsed');
            $('.nav').removeClass('open')
        } else {
            $('.main-nav').removeClass('collapsed');
        };
    })

    $('.burger-btn').on('click', function () {
        $('.nav').toggleClass('open');
    });

    $('.card').on('click', function () {
        var href = this.getAttribute("href");
        var popupId = $('.popup').attr('id');
        var popupIdWithAnchor = '#' + popupId;

        console.log(href);
        console.log(popupIdWithAnchor);

        if (popupIdWithAnchor == href) {
            $('.popup').addClass('open');
        }
    });

    $('.popup__close-btn').on('click', function () {
        $('.popup').removeClass('open');
    });
});