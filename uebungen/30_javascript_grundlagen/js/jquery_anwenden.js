// Ist das Dokument geladen, werden die nächsten Schritte ausgeführt
$(document).ready(function() {
    console.log('Der Seitenquelltext ist komplett geladen.');
    var ergebnisElement = $('#result');
    $('#add').click(function() {
        ergebnisElement.val(
            getNumber(1) + getNumber(2)
        );
    });
    $('#subtract').click(function() {
        ergebnisElement.val(
            getNumber(1) - getNumber(2)
        );
    });
    $('#multiply').click(function() {
        ergebnisElement.val(
            getNumber(1) * getNumber(2)
        );
    });
    $('#divide').click(function() {
        ergebnisElement.val(
            getNumber(1) / getNumber(2)
        );
    });

    console.log(
        'Es gibt auf dieser Seite ' + $('.btn').length + ' .btn Klassen.'
    );

    console.log(
        'Es gibt auf dieser Seite nur ' + $('h1').length + ' Überschrift.'
    );



    // hole den Wert des angegebenen Feldes mit der ID und gib diesen Wert zurück
    function getNumber(id) {
        var inputValue = $('#number-' + id).val();
        return parseInt(inputValue);
    }

});

$(window).on( "load", function() {
    console.log('Der Seitenquelltext und die Inhalte wurden geladen.');
})
