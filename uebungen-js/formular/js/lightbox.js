var $lightboxWrapper = $('.lightbox-wrapper');

for (var i = 1; i < 23; i++) {
  // console.log(i);

  var src = '.jpg';

    if( i.toString().length ==1 ){
      src = '00' + i + src;
    }
    else if ( i.toString().length == 2 )
    {
      src = '0' + i + src;
    }
    else {
      {
        src = i + src;
      }
    }

    // Erstellen des HTML tags
    var htmlTag = '<img src="img/thumbnails/' + src + '" class="lightbox-image" data-fullscreen="img/fullscreen/' + src +'">'
    console.log(htmlTag);

    $lightboxWrapper.append(htmlTag);
}

$('.lightbox-image').click(function(){

  // Das richtige Bild ermitteln
  var $currentClickedImage= $(this);

  // Bild wird hier in einem im HTML Markup befindlichen DIV-Container geladen
  // Anschließend wird der DIV-Container (Modal) eingeblendet
  var $imageTag = '<img src="' + $currentClickedImage.attr('data-fullscreen') + '" alt="">';
  $('.modal-body').html($imageTag);
  $('.modal').modal('show');

});
