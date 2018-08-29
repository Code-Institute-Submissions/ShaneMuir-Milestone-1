// Code take from JSFiddle. 
//Link advised from mentor after me using the <marquee> HTML element.
//He advise this was old and there was new better ways to have a moving alert. 
//Hence the JS Ticker being used.

//PLEASE NOTE THIS IS NOT MY CODE.

//I have adapted this code to suit there purpose of my site. There no no need for start stop function.

var Site = Site || {};

Site.$Body = $('BODY');
Site.$Window = $(window);

Site.TickerTape = function($) {

    //    var view            = $(this);
    var view = $('.alert');
    var speed = 15000;
    var padding = 90;

    var text;
    var width;

    var stop = function() {
        view.stop();
    };

    var loop = function() {
        view.fadeIn({ queue: false, duration: 2000 });
        view.css({ left: 0 }).animate({ left: -(width) }, 15000, 'linear', loop);
    };


    // ---

    var create = function() {

        var texts;
        var count = 2;

        // If it's running, we need to stop it.
        stop();
        // And clear out the container.
        view.html('');

        // Figure out how many instances of the text we need. Always one extra in order for loop to be seamless.
        if (width < Site.$Window.width()) {
            count = Math.ceil(Site.$Window.width() / width) + 1;
        }

        // Generate the text elements with offsets and add to the view.
        for (var i = 0; i < count; ++i) {

            view.append(
                $('<div/>').css({ width: width, left: (width * i) }).html(text)
            );

        }

        // Ok get movin'
        loop();

    };

    // ---

    var init = (function() {

        // Store the distance we need to move for each animation loop, we'll need it if resize triggers a new re-draw.
        width = Math.floor(view.width()) + padding;

        // Store the ticker text
        text = view.text();


        // GO!
        // Create the ticker, then on resize recalculate the contents.
        create();
        // Window.resize( $.debounce( 250, create ));

    })();

};



Site.TickerTape(jQuery);
