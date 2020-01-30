$('#submit').click(function() {
   var k = $('#knr').val();
   
   // https://jwe.obinet.at/kundenliste.php

   // https://api.jquery.com/jquery.get/

   $.get(
       'https://jwe.obinet.at/kundenliste.php',
       {
           kundennummer: k
       },
       function(data) {
            console.log(data);

            $('#kundendaten').text(
                'Ihr Kunde heißt ' + data.vorname + 
                ' ' + data.nachname
            );
       },
       'json'
   );

   return false;
});