(function($) {

    $('.begin__handler').on('click', function () {
        $(this).parents('.begin__column').addClass('begin__column--expanded');
    });

})(jQuery);
