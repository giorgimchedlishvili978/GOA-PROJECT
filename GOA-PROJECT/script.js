$(document).ready(function() {
    $('.show-description').click(function() {
        const description = $(this).data('description');
        $('#popup-description').text(description);
        $('.popup-overlay, .description-popup').fadeIn();
    });

    $('.popup-close, .popup-overlay').click(function() {
        $('.popup-overlay, .description-popup').fadeOut();
    });
});