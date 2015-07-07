$(document).ready(function () {
    var elm = $('.nav__close_cta, .nav__items');

    $('#jsShowNav').click(function () {

        elm.velocity("fadeIn", {duration: 300, display: "block"});

        $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        });
    });

    $('#jsCloseNav').click(function () {
        $('html, body').css({
            'overflow': 'auto',
            'height': 'auto'
        });

        $('#jsMainNav').addClass('hidden');
        elm.velocity("fadeOut", {duration: 300});
    });

    $('.promo-banner__cta').click(function () {
        var url = $(this).attr('data-url');
        window.open(url, '_blank');
    });
});