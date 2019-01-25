// let wertDesFeldes = $('input').val();
//
// let wertDesFeldes = $('input').attr('value');

// let wertDesFeldes = $('p').text();

// let wertDesFeldes = $('p').html();

// let zahl1 = parseInt($('.zahl1').val());
// let zahl2 = parseInt($('.zahl2').val());

// $('.ergebnis').val( zahl1 + zahl2 );

//exp.substr(0, exp.length-1)

$('.number-btn').click(function() {
  var current = $(this);
  $('.ergebnis').val( current.val() );

});

$('.back-btn').click(function() {
  var aktuelleErgebnis = $('.ergebnis').val();
  aktuelleErgebnis = aktuelleErgebnis.substr(0, aktuelleErgebnis.length-1);
  $('.ergebnis').val(aktuelleErgebnis);

});
