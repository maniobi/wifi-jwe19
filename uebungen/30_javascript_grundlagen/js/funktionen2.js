function licht() {
    return '*** leuchten ***';   
}

function radio() {
    return '((( music )))';
}

function starteDenTag() {
    var tags = document.getElementsByTagName('body');
    var bodyTag = tags[0]
    bodyTag.innerHTML = 'hallo';
}

var licht2 = function() {
    return '*** rotes Licht ***';
};

var multischublade = [
    'fach1',
    'fach2',
    'fach3'
];

var schrank = [multischublade, 'Schublade2','Schublade3'];

var geheimSchrank = [];

geheimSchrank['Rückseite'] = 'versteckter Schlüssel';
geheimSchrank['TürInnenseite'] = 'versteckter Knopf';


var tresor = {
    drehknopf: 'Geben Sie eine Zahlenkombination ein...',
    inhalt: 'Gold, Geld und Akten',
    oeffnen: function() {
        console.log('Knirsch, die Tür geht auf...');
    },
    alarm: function() {
        $('body').addClass('alarm');
    }
};

