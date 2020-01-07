// Funktionen

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

console.log(termo(24, 22, 27));
