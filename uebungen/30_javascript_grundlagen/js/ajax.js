function loadExternalFile() {
    $('#ergebnis').load(
        'ajax_quelle.html #form1',
        function() {
            $('#checkButton').click(function () {
                checkPassword();
                return false;
            });
            console.log('Formular geladen. Button bereit zum Klicken');
        }
    );
}

$('#loader').click(function() {
    loadExternalFile();
});


function checkPassword() {
    $.get(
        "php/result.php", 
        { text: $('#textVersuch').val() }, 
        function (data) {

            var message = '<div>' + data + '</div>';
            $('body').append(message);
            console.log('Versuch durchgeführt');
        }
    );
}

