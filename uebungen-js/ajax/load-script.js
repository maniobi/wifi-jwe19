


$.getJSON( "test.json", function( data ) {
  var items = [];

  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "wer-produziert-was123",
    html: items.join( "" )
  }).appendTo( "body" );
});
  
