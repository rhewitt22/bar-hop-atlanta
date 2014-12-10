/*====================================
=            ON DOM READY            =
====================================*/
$(function() {
    $('.toggle-wheel').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleWheel();
    });
    $('.toggle-filter').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleFilter();
    });
    $('.toggle-map').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleMap();
    });
    $('.toggle-about').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleAbout();
    });
});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleWheel() {
    $('#site-wrapper').removeClass('show-filter show-about');
    if ($('#site-wrapper').hasClass('show-wheel')) {
        // Do things on Nav Close
        $('#site-wrapper').removeClass('show-wheel');
    } else {
        // Do things on Nav Open
        $('#site-wrapper').addClass('show-wheel');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}
function toggleFilter() {
    $('#site-wrapper').removeClass('show-wheel show-about');
    if ($('#site-wrapper').hasClass('show-filter')) {
        // Do things on Nav Close
        $('#site-wrapper').removeClass('show-filter');
    } else {
        // Do things on Nav Open
        $('#site-wrapper').addClass('show-filter');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}
function toggleAbout() {
    $('#site-wrapper').removeClass('show-filter show-wheel');
    if ($('#site-wrapper').hasClass('show-about')) {
        // Do things on Nav Close
        $('#site-wrapper').removeClass('show-about');
    } else {
        // Do things on Nav Open
        $('#site-wrapper').addClass('show-about');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}
function toggleMap() {
    $('#site-wrapper').removeClass('show-wheel show-filter show-about');
}