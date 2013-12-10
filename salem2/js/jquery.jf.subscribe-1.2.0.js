// JavaScript Document
// ver-1.1.0 update 2013-01-28

(function($) {
    /*---------------------------------------------- */
    /* BEGIN add new method jfSubscribe to jQuery	 */
    /*---------------------------------------------- */
    $.fn.jfSubscribe = function(params) {
        return $(this).each(function(){
            var objSubscribe = new ObjJfSubscribe($(this), params);
        });
    };
    /* END add new method jfSubscribe to jQuery	 */

    /*---------------------------------------------- */
    /* BEGIN new object	ObjJfSubscribe               */
    /*---------------------------------------------- */
    function ObjJfSubscribe(subscribe$, params) {
        var options = {
            urlToSubscribePHP : '',
            paramsUrl : ''
        };

        options = $.extend(options, params);

        options = $.extend(options, {
            subscribe$ : subscribe$,
            email$ : subscribe$.find('input[name=email]'),
            message$ : subscribe$.find('.message')
        });

        options.subscribe$.find('form').bind('submit', function(event) {
            subscribe();
            event.preventDefault();
        });

        options.subscribe$.find('.button-submit').bind('click', function(event) {
            subscribe();
            event.preventDefault();
        });

        options.email$.keyup(function(event) {
            if(event.keyCode == '13') {
                subscribe();
                event.preventDefault();
            }
        });

        function subscribe() {
            var $request = 'jf_subscribe_email=';

            if(options.email$.attr('alt') != options.email$.val()) {
                $request = $request + options.email$.val();
            }

            $.getJSON(options.urlToSubscribePHP + '?' + options.paramsUrl + $request + '&callback=?', function(data) {

                //$('#preloader-subscribe').remove();

                if(data.status) {
                    options.message$.text(data.message);
                    options.message$.fadeIn();

                    switch(data.status) {
                        case 1: // error field value
                            options.message$.addClass('error');
                            break;
                        case 2: // OK
                            options.message$.removeClass('error');
                            break;
                    }
                }
                else {
                    window.alert('Error AJAX Subcribe!');
                }
            });

        }

    }

    /* END new object	ObjJfSubscribe               */
})(jQuery);