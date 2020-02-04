/*
 * 
 * AUFGABEN
 * 
 */


// Formularfelder prüfen (sind alle gesetzt, die Pflichfelder sind?)

$('form button[type="submit"]').click(function() {
    
    // alle Elemente die eine Klasse "required" besitzen
    var allFieldsToCheck = $('form .required');

    for(var i = 0; i <= allFieldsToCheck.length-1; i++) {
    
        // das aktuelle Element
        var currentFieldToCheck = allFieldsToCheck.eq(i);

        // Überprüfen ob das Attribut 'type' eine checkbox ist 
        if(currentFieldToCheck.attr('type') == 'checkbox') {

            // beim gesetzten Check ist die Value "on"
            if (currentFieldToCheck.val() == 'on') {
                console.log('checkbox checked');
                currentFieldToCheck.addClass('is-valid');
            }
        }

        // Überprüfen ob das Attribut "radio" und das Radio-Feld "checked" ist
        if(currentFieldToCheck.attr('type') == 'radio' && currentFieldToCheck.prop('checked')) {
            currentFieldToCheck.addClass('is-valid');
        } else {
            // mit dem else verhinden wir dass mehr als eines die Klasse "is-valid" bekommt
            currentFieldToCheck.removeClass('is-valid');
        }

    }

    return false;
});


$('form .input-group.date').datepicker({
    language: "lt"
});

// Jedes Feld welches erfolgreich ausgefüllt wurde bekommt eine Klasse: "is-valid"


// Jedes Feld welches nicht gesetzt oder unzureichend gesetzt ist bekommt die Klasse: "has-error"


// Prüfen: Passwörter stimmen überein

// Prüfen: Passwörter haben mindestens 8 Zeichen


/**
 * Wenn bei dem Feld "Wie haben Sie von uns gehört?" "Sonstige" ausgewählt wird, #
 * blendet sich ein weiteres Feld ein.
 */

 $('#select_marketing').change(function() {


     if(parseInt($(this).val()) == 3) {
         
        $('#select_marketing_info').parent().removeClass('d-none');

     } else {
         $('#select_marketing_info').parent().addClass('d-none');
     }
 });

// Datepicker für Geburtstag einbauen (ausprobieren!)
// https://bootstrap-datepicker.readthedocs.io/en/latest/
// https://uxsolutions.github.io/bootstrap-datepicker/

// Wenn das Feld Email-Adresse gesetzt wird, blendet sich die "Newsletter abbonnieren" Checkbox ein.