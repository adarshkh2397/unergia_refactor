$.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({ count: settings.start }).animate({ count: settings.end }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({ end: 312, duration: 8000 });
$('#number2').jQuerySimpleCounter({ end: 155, duration: 8000 });
$('#number3').jQuerySimpleCounter({ end: 512, duration: 8000 });
$('#number4').jQuerySimpleCounter({ end: 246, duration: 8000 });



/* AUTHOR LINK */
$('.about-me-img').hover(function () {
    $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
}, function () {
    $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
});
$(window).bind("load", function () {
    $('.bgcontain').delay(1600).fadeOut("slow");
});