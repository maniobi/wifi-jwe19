
$(window).scroll(function() {

    var scrollPos = $(document).scrollTop();

    $('#monitor').html( scrollPos );

    if(scrollPos > 200) {
        $('#monitor').addClass('warning');
        $('#monitor').addClass('to-top');
    } else {
        $('#monitor').removeClass('warning');
        $('#monitor').removeClass('to-top');
    }

    var endOfPageScrollPosition = $(document).height() - $(window).height();

    if( scrollPos > (endOfPageScrollPosition-100) ) {
        $('#monitor').hide();
    } else {
        $('#monitor').show();
    }

});
