var hui = $('#hui');

var xRange = $(window).width() - hui.outerWidth();
var yRange = $(window).height() - hui.outerHeight();

hui.mouseenter(function() {
    newPosition();
});

function newPosition() {
    hui.css({
        'top': Math.floor(Math.random() * yRange),
        'left': Math.floor(Math.random() * xRange)
    });
}