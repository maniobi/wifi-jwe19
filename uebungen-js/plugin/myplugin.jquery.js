(function ( $ ) {

    $.fn.myplugin = function( options ) {

        // Standard-Werte festlegen
        var settings = $.extend({
            // Standard-Werte
            color: "#556b2f",
            backgroundColor: "white"
        }, options );

        // Rückgabe basierend on the settings variable.
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });

    };

}( jQuery ));
