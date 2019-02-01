let wertDesFeldes = $('input').val(); /*val() gitb mir den .value !Achtung wird in txt convertiert udn 'escaped' daher kein html code mehr*/

/*let wertDesFeldes = $('input').attr('value'); /*selektiert explizit dass, was im attr. value steht*/


/* let wertDesFeldesP =$('p').text();*/

/*let wertDesFeldesP =$('p').html();*/


// let zahl1 = parseInt( $('.zahl1').val() );
// let zahl2 = parseInt( $('.zahl2').val() ); /*paresInt - sonst wärs ja nur ne Stringkette*/

// $('.ergebnis').val( zahl1 + zahl2 );


/*von jedem input der classe .number-tbn setzen wir this-value in das inputfeld*/
$('.number-btn').click(function() {
  var current = $(this);
  $('.ergebnis').val( current.val() );
});


$('.button-btn-back').click(function(){
  var aktuelleErgebnis = $('.ergebnis').val();
  $('.ergebnis').val(
    aktuelleErgebnis.substr(0, aktuelleErgebnis.length-1) ); /*-1 von rechts - ansonsten von links*/
});


$('#move-left').click(function() {
 $('.box-sideways').animate( { "left": "-=5vw" }, "slow" );
});

$('#move-right').click(function() {
  $('.box-sideways').animate( { "left": "+=5vw" }, "fast" );
});

$('#change-color').click( function() {
  // 16777215 == ffffff in decimal
  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  $('.box-sideways').animate({"background-color": randomColor} );
});
