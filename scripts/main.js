$(document).ready(function () {
    $('#jsShowNav').click(function () {
        $('#jsMainNav').removeClass('hidden');

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
    });
});