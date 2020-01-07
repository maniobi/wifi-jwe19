// definieren einer Variable mit dem Typ: Ganzzahl (Integer)
var ganzzahl = 4;
console.log(ganzzahl);
ganzzahl = 5;
console.log(ganzzahl);
ganzzahl = 5 + 4;
console.log(ganzzahl);
ganzzahl++;
console.log(ganzzahl);
ganzzahl--;
console.log(ganzzahl);

ganzzahl = ganzzahl + 5.5;
console.log(ganzzahl);

// Definieren einer Variable mit dem Typ: Textkette (String)
var textkette = "Hallo ";
console.log(textkette);

textkette = textkette + "Welt";
console.log(textkette);

textkette = "-=[" + textkette + "]=-"
console.log(textkette);

textkette = textkette + ganzzahl;
console.log(textkette);

console.log("3" + "4");


var nummer1 = "4";
var nummer2 = "8";
console.log(nummer1 + nummer2);

nummer1 = parseInt(nummer1);
nummer2 = parseInt(nummer2);
console.log(nummer1 + nummer2);


var anfuehrungszeichen = "<input type=\"text\">";
console.log(anfuehrungszeichen);

anfuehrungszeichen =    "<input type=\"text\" " +
                        "style=\"background-image:url('https://sdfasdfsBILDPFAD.jpg')\"" +
                        ">";

console.log(anfuehrungszeichen);



// Definition eines Objektes
var me = {
    alter: 33,
    vorname: "Manuel",
    nachname: "Obermoser",

    kopf: {
        augen: "braun-grün",
        haare: "dunkelbraun",
    },
};

console.log(me); // Ausgabe des Objektes
console.log(me.alter); // 33

me.alter = 32;
console.log(me.alter); // 32
console.log(me.kopf.haare); // dunkelbraun


var farben = [
        "rot",
        "grün",
        "blau",
];

console.log(farben);
console.log(farben[2]);


var sudoku = [
    [
        "segment1",
        "segment2",
        "segment3",
        "segment4",
        "segment5",
        "segment6",
        "segment7",
        "segment8",
        "segment9",
    ],
    "segment2",
    "segment3"
]

console.log(sudoku);


// Definition einer Konstante
const version = 1.0;
console.log(version);

// Konstanten können nicht verändert werden
// version = 2.0;
// console.log(version);
