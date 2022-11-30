(function($) {

    $('.course__question').on('click', function () {
        var $courseItem = $(this).parents('.course__item');
        if( $courseItem.hasClass('course__item--expanded') ) {
            $courseItem.removeClass('course__item--expanded');
        } else {
            $('.course__item--expanded').removeClass('course__item--expanded');
            $(this).parents('.course__item').addClass('course__item--expanded');
        }
    });

    $(document).on('keyup', function (event) {
        if (event.keyCode === 27) {
            $('.course__item').removeClass('course__item--expanded');
        }
    });

})(jQuery);
