/*
 * 
 * AUFGABEN
 * 
 */


// Formularfelder prüfen (sind alle gesetzt, die Pflichfelder sind?)

$('form button[type="submit"]').click(function() {;
    
    var salutation = $('input[name="urSalutation"]:checked');
    var salutation_err = $('#urSalutation_error');

    var formFilledOutComplete = true;

    if (salutation.length == 1) {
        salutation_err.addClass('d-none');
        console.log('salutation OK');
    } else {
        salutation_err.removeClass('d-none');
        formFilledOutComplete = false;
    }

    var firstname = $('#ur_firstname');
    var firstname_err = $('#ur_firstname_error');

    if (firstname.val().length > 3) {
        firstname_err.addClass('d-none');
        console.log('firstname OK');
    } else {
        firstname_err.removeClass('d-none');
        formFilledOutComplete = false;
    }


    var lastname = $('#ur_lastname');
    var lastname_err = $('#ur_lastname_error');

    if (lastname.val().length > 3) {
        lastname_err.addClass('d-none');
        console.log('lastname OK');
    } else {
        lastname_err.removeClass('d-none');
        formFilledOutComplete = false;
    }


    var birthday = $('#ur_birthday');
    var birthday_err = $('#ur_birthday_error');


    // Das Geburtsdatum muss mindestens 10 Zeichen lang sein: TT.MM.JJJJ
    if (birthday.val().length == 10) {

        var now = new Date();
        var nowInSeconds = now.valueOf();

        var selectedDate = birthday.datepicker('getDate');
        var selectedDateInSeconds = selectedDate.valueOf();
        console.log('Selected Date: ' + selectedDateInSeconds);

        var eighteenYears = now.setFullYear(now.getFullYear() - 18);
        var eighteenYearsAgoInSeconds = eighteenYears.valueOf();
        console.log('18 Years ago Date: ' + eighteenYearsAgoInSeconds);

        if (selectedDateInSeconds <= eighteenYearsAgoInSeconds) {
            birthday_err.addClass('d-none');
            console.log('birthday OK');
        } else {
            birthday_err.removeClass('d-none');
        }
    

    } else {
        birthday_err.removeClass('d-none');
        formFilledOutComplete = false;
    }



    var password = $('#ur_password');
    var password_confirm = $('#ur_password_confirm');
    var password_err = $('#ur_password_error');

    // Prüfen: Passwörter stimmen überein
    // Prüfen: Passwörter haben mindestens 8 Zeichen

    if(password.val().length >= 8 && password.val() == password_confirm.val()) {
        password_err.addClass('d-none');
    } else {
        password_err.removeClass('d-none');
        formFilledOutComplete = false;
    }

    var email = $('#ur_email');
    var email_err = $('#ur_email_error');

    if (email.val().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) != null) {
        console.log('Email Adresse entspricht dem Muster: OK');
        email_err.addClass('d-none');
    } else {
        email_err.removeClass('d-none');
        formFilledOutComplete = false;
    }

    var phone = $('#ur_phone');
    var phone_err = $('#ur_phone_error');

    if (phone.val() != '') {
        phone_err.addClass('d-none');
    } else {
        phone_err.removeClass('d-none');
        formFilledOutComplete = false;
    }


    var marketing = $('#select_marketing');
    var marketing_err = $('#select_marketing_error');
    var marketing_info = $('#select_marketing_info');

    if ( marketing.val() == 1 || marketing.val() == 2 ) {
        marketing_err.addClass('d-none');
    }
    else if( parseInt(marketing.val()) == 3 && marketing_info.val().length > 5) {
        marketing_err.addClass('d-none');
    } else {
        marketing_err.removeClass('d-none');
        formFilledOutComplete = false;
    }



    var file = $('#ur_file');
    var file_err = $('#ur_file_error');

    // Dateinamen auslesen mit...
    // file[0].files[0].name
    // in der Console der Dev-Tools lassen sich die Strukturen durchforsten

    if (file[0].files.length == 1) {
        file_err.addClass('d-none');
    } else {
        file_err.removeClass('d-none');
        formFilledOutComplete = false;
    }

    var gdpr = $('#ur_gdpr_ok');
    var gdpr_err = $('#ur_gdpr_ok_error');

    if (gdpr.prop('checked')) {
        gdpr_err.addClass('d-none');
    } else {
        gdpr_err.removeClass('d-none');
        formFilledOutComplete = false;
    }


    if(formFilledOutComplete == true) {


        var htmlForModal = '';

        // Variable für Modal zusammenbauen
        // htmlForModal += '<p><strong>Anrede:</strong> ' + salutation.val() + '</p>'; 
        // htmlForModal += '<p><strong>Vorname:</strong>' + firstname.val() + '</p>';

        var allElements = [
            salutation,
            firstname,
            lastname,
            birthday,
            password,
            email,
            phone,
            marketing
        ];

        $(allElements).each(function(index) {

            var currentElement = $(this);
            var placeHolder = currentElement.attr('placeholder');

            htmlForModal += '<p><strong>'+index+':</strong> ' + currentElement.val() + '</p>';
        });
        
        // HTML in Modal übertragen und in den .modal-body schreiben
        $('#submission_modal .modal-body').html(htmlForModal);

        // Modal einblenden
        $('#submission_modal').modal('show');



    } else {

    }


    return false;

});

$('form .input-group.date').datepicker({
    autoclose: true
});


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
