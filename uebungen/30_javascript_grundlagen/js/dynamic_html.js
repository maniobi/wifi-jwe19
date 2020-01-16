
var button = $('<button class="btn add-html-element">neues Element hinzufügen</button>');
button.click(function() {
    addDivContainer();
});

$('body').prepend(button);

// add news html element into DOM
function addDivContainer() {
    var elementHTML = $('<div class="alert alert-success generated">neues Element</div>');
    $('body').prepend(elementHTML);
}