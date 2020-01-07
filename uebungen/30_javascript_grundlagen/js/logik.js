var minValue = 10,
    maxValue = 80,
    currentValue = 60;


if(currentValue > minValue && maxValue > currentValue) {
    // alert('Stimmt!');
} else {
    // alert('ich kenn mich ned aus...');
}

// AltGr + <>-Taste
if(currentValue > minValue || currentValue < 0) {
    // alert('korrekt');
}

var animationRunning = 1;
if(animationRunning == true) { // Prüfen auf Wert
    console.log('animation läuft');
}
var animationRunningB = true;
if(animationRunningB === true) { // Prüfen auf Wert und Datentyp
    console.log('animationB läuft');
}

if(minValue != maxValue) {
    // richtig
}

if(!wahrheit == false) {
    // richtig
}

if(!animationRunningB) {
    console.log('animation läuft nicht');
}

// Varianten der Schreibweise von IF-Anweisungen
if (x > a) {
    console.log('ausgabetext');
}

if(x > a) console.log('ausgabetext');



switch (aktuelleFarbe) {
    case 'rot':
        console.log('meine Farbe ist eine warme Farbe');
        break;
    case 'blau':
        console.log('meine Farbe ist eine kalte Farbe');
        break;
    default:
        console.log('ich kenne die aktuelle Farbe nicht');
}
