(function ( $ ) {

    $.fn.highlightText = function( options ) {

        // Standard-Werte festlegen
        var settings = $.extend({
            // Standard-Werte
            color: "white",
            backgroundColor: "orange"
        }, options );

        // Rückgabe basierend on the settings variable.
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });

    };

}( jQuery ));
