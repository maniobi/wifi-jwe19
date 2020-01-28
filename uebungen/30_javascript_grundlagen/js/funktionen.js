// Funktionen

function miniOutput() {

    if(uhrzeit >= 12 ) {
        return "guten Tag!";

    } else if (uhrzeit >= 17) {
        return "guten Abend!";
    }

    return 'hui!';
}

console.log(miniOutput());

var beispiel = 'hui!';

console.log(beispiel);





// Schreibweise als Variable

var miniOutputTwo = function() {

    if (uhrzeit >= 12) {
        return "guten Tag!";

    } else if (uhrzeit >= 17) {
        return "guten Abend!";
    }

    return 'hui!';
};

miniOutputTwo();


// Objekt-Schreibweise

var atmen = function() {
    return 'hhhhhhh';
}


var person = {
    atmen: function () {
        return 'hhhhhhh';
    },
    gehen: function () {
        return 'run!';
    }
};

person.atmen();
person.gehen();


$('body').addClass('test');

var $ = function(cssSelector) {

}


function xQuery() {
    return {
        person : {
            atmen: function() {
                return 'hhhhh...';
            }
        }
    }
}

function starteDenTag() {
    xQuery();
    person.atmen();
}

document.write(xQuery());

var xQuery = function(cssSelector) {
    return {
        person: {
            atmen: function () {
                return 'hhhhh...';
            }
        }
    }
};

xQuery.person.atmen();

xQuery.atmen();









// Temperatur

/*  Diese Funktion ermittelt mit den Eingabewerten,
    ob die Temperatur innerhalb der Vorgaben liegt

    currTemp:   aktuelle Temperatur
    minTemp:    die Mindesttemperatur
    maxTemp:    die Miximaltemperatur

    Rückgabewert (string): Text mit der Meldung innerhalb der Vorgaben
*/
function termo(currTemp, minTemp, maxTemp) {

    if(currTemp >= minTemp && currTemp <= maxTemp ) {
        // Temperatur OK
        // schalteDieHeizungAus();
        return 'OK';
    } else if(currTemp > maxTemp) {
        // Temperatur überschritten! (zu warm)
        // schalteDieHeizungAus();
        return 'HOT (!)'
    } else if(currTemp < minTemp) {
        // schalteDieHeizungEin();
        // Temperatur unterschritten! (zu kalt)
        return 'COLD (!)'
    }
}

//console.log(termo(24, 22, 27));
