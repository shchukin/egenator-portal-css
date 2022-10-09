(function($) {

    $('.faq__question').on('click', function () {
        var $faqItem = $(this).parents('.faq__item');
        if( $faqItem.hasClass('faq__item--expanded') ) {
            $faqItem.removeClass('faq__item--expanded');
        } else {
            $('.faq__item--expanded').removeClass('faq__item--expanded');
            $(this).parents('.faq__item').addClass('faq__item--expanded');
        }
    });

    $(document).on('keyup', function (event) {
        if (event.keyCode === 27) {
            $('.faq__item').removeClass('faq__item--expanded');
        }
    });

})(jQuery);
