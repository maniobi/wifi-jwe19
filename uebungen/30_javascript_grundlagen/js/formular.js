var formFilledOutComplete = false;

var $firstname              = $('input#firstname');
var $lastname               = $('input#lastname');
var $email_address          = $('input#email_address');
var $email_address_confirm  = $('input#email_address_confirm');
var $password_phrase        = $('input#password_phrase');
var $birthday               = $('input#birthday');

$('form#registration_form button[name="submit"]').on('click', function(){

    console.log('formular button Submit gedrückt');

    // Prüfen auf ausgewählte Anrede
    // ein-/ausblenden der Fehlermeldung
    var $salutation = $('input[name="salutation"]:checked');
    if($salutation.length === 1) {
        // console.log('Salutation OK');
        $('#salutation_error').addClass('d-none');
    } else {
        $('#salutation_error').removeClass('d-none');
    }

    // Prüfen ob der Vorname gesetzt wurde / das Feld befüllt ist
    // ein-/ausblenden der Fehlermeldung
    if($firstname.val() !== '' && $firstname.val().length >= 2) {
        // console.log('Firstname OK (length: '+$firstname.val().length+')');
        $('#firstname_error').addClass('d-none');
    } else {
        $('#firstname_error').removeClass('d-none');
    }


    // Prüfen ob der Vorname gesetzt wurde / das Feld befüllt ist
    // ein-/ausblenden der Fehlermeldung
    if($lastname.val() !== '' && $lastname.val().length >= 2) {
        // console.log('Lastname OK (length: '+$lastname.val().length+')');
        $('#lastname_error').addClass('d-none');
    } else {
        $('#lastname_error').removeClass('d-none');
    }

    // Prüfe ob die Email-Adresse angegeben wurde
    // ein-/ausblenden der Fehlermeldung
    if($email_address.val() !== '') {
        $('#email_address_error').addClass('d-none');
    } else {
        $('#email_address_error').removeClass('d-none');
    }

    // Prüfe ob die Email-Adressen übereinstimmen
    // ein-/ausblenden der Fehlermeldung
    if($email_address.val() !== '' && $email_address_confirm.val() === $email_address.val()) {
        $('#email_address_confirm_error').addClass('d-none');
    } else {
        $('#email_address_confirm_error').removeClass('d-none');
    }


    // Passwort-Feld wurde grundsätzlich ausgefüllt
    if($password_phrase.val() !== '') {

        // Vergleiche die Anzahl der vorhandenen Regeln mit der Anzahl der erfüllten Regeln
        // 5 Regeln === 5 erfüllte Regel => true
        if($('[id^="passphrase_rule_"]').length === $('[id^="passphrase_rule_"].valid').length) {
            $('#password_phrase_error').addClass('d-none');
        } else {
            $('#password_phrase_error').removeClass('d-none');
        }
    } else {
        $('#password_phrase_error').removeClass('d-none');
    }



    if($birthday.val() !== '' && $birthday.hasClass('field-ok')) {
        $('#birthday_error').addClass('d-none');
    } else {
        $('#birthday_error').removeClass('d-none');
    }


    var $privacy = $('input#privacy:checked');
    if( $privacy.length === 1) {
        $('#privacy_error').addClass('d-none');
    } else {
        $('#privacy_error').removeClass('d-none');
    }

    return false;
});

$password_phrase.keyup(function() {
    var input = $(this).val();

    // passphrase_rule_1: Mindestens 8 Zeichen
    if( input.length >= 8 ) {
        $('#passphrase_rule_1').addClass('valid');
    } else {
        $('#passphrase_rule_1').removeClass('valid');
    }

    // passphrase_rule_2: Enthält mind. einen Buchstaben
    if( input.match(/[A-z]/) ) {
        $('#passphrase_rule_2').addClass('valid');
    } else {
        $('#passphrase_rule_2').removeClass('valid');
    }

    // passphrase_rule_3: Enthält einen Großbuchstaben
    if( input.match(/[A-Z]/) ) {
        $('#passphrase_rule_3').addClass('valid');
    } else {
        $('#passphrase_rule_3').removeClass('valid');
    }

    // passphrase_rule_4: Enthält eine Zahl
    if( input.match(/\d/) ) {
        $('#passphrase_rule_4').addClass('valid');
    } else {
        $('#passphrase_rule_4').removeClass('valid');
    }
    // passphrase_rule_5: Enthält ein Sonderzeichen
    if( input.match(/[!@#$%\^&*(){}[\]<>?/|\-+]/) ) {
        $('#passphrase_rule_5').addClass('valid');
    } else {
        $('#passphrase_rule_5').removeClass('valid');
    }
});


$birthday.on('keyup change', function(){

    console.log('event');

    var input = $(this).val();
    if( input.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/) ) {
        $birthday.addClass('field-ok');
    } else {
        $birthday.removeClass('field-ok');
    }
});
