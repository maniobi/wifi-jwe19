
var names = [
    'Franz',
    'Tamara',
    'Mantas',
    'Hanna',
    'Rebeka',
    'Maria'
];

var colors = [
    'green',
    'orange',
    'silver',
    'black'
];



function randomColorName () {
    $('.inner').html(
        names[Math.floor(Math.random() * 6)]
    );

    $('.outer').css(
        'background-color', colors[Math.floor(Math.random() * 4)]
    );
}

$('.inner').click(function() {
    randomColorName();
});

// Seite neu laden
$('.outer').click(function() {
    window.location.reload();
});


randomColorName();
