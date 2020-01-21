var numbers = [4, 8, 15, 16, 23, 42];

numbers.forEach(function (number) {
    //console.log(number);  
});

numbers.forEach(function (number, index) {
    //console.log(index + ': ' + number);
});

numbers.forEach(function (number, index, hugo) {
    // "hugo" ist in dieser Funktion die "numbers" Variable die das forEach ausführt

    hugo[index] = number * 2;
    //console.log(hugo[index]);
});



// Bilder-Ausgabe generieren
for (var i = 1; i <= 23; i++) {
    i = i.toString();

    if (i.length < 3) {

        // hat die Zahl nur 1 Stelle (Länge 1), dann brauchen wir 2x eine Extra 0
        if (i.length < 2) {
            i = '00' + i;
            // ansonsten hat die Zahl 2 Stellen (Länge 2), dann brauchen wir 1x eine Extra 0
        } else {
            i = '0' + i;
        }
    }

    var imageTag = `<img src="img/thumbnails/${i}.jpg" alt="">`;
    var imageLink = $('<a data-fancybox="gallery" href="img/fullscreen/' + i + '.jpg" class="zoom-image">' + imageTag + '</a>');

    $('body').append(imageLink);
}

var lightboxContainer = $('<div class="lightbox-container"></div>');

$('body').append(lightboxContainer);

// alle Bilder sind ausgegeben

// $('a.zoom-image').click(function () {
//     // bild wird vergrößert dargestellt
//     var element = $(this);
//     var image = element.attr('href');
//     var imageTagFullSize = `<img src="${image}" alt="">`;
//     lightboxContainer.html(imageTagFullSize);
//     $('body').addClass('lightbox-is-active');
    
//     return false;

// });

// lightboxContainer.click(function() {
//     $('body').removeClass('lightbox-is-active');
// });


