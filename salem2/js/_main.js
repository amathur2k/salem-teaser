// JavaScript Document
// ver-1.1.0 update 2013-09-11

var urlToSite = window.location.toString();

if (urlToSite[urlToSite.length - 1] === '/') {
    urlToSite = urlToSite.substr(0, urlToSite.length - 1);
}

(function ($) {
    $(document).ready(function () {
        /* ------------------------------------ */
        /* BEGIN FullScreenSlider               */
        /* ------------------------------------ */
        if (slides.length > 0) {
            var buttonPlay$ = $('#player a.play-and-pause'),
                buttonPrev$ = $('#player a.prev'),
                buttonNext$ = $('#player a.next');

            $('body').jfFullScreeSlider({
                additionalButtonPrev$ : buttonPrev$,
                additionalButtonNext$ : buttonNext$,
                additionalButtonPlay$ : buttonPlay$,

                additionalTimeLine$ : $('#preloader'),

                onPlay : function () {
                    buttonPlay$.addClass('pause').removeClass('play');
                },

                onPause : function () {
                    buttonPlay$.removeClass('pause').addClass('play');
                },

                onLoad : function () {
                    buttonPlay$.addClass('pause').removeClass('play');
                },

                slideDuration : slideDuration,
                slides : slides
            });
        }
        /* END FullScreenSlider                 */

        /*------------------------------ */
        /* BEGIN Countdown          	 */
        /*------------------------------ */
        $.jfCountdown(dateOpen, function () {
            /*code for callback function, call when is open date, for example, redirect*/
        });
        /* END Countdown          	 */

        /*------------------------------ */
        /* BEGIN Subscribe Form        	 */
        /*------------------------------ */
        $('#subscribe, #subscribe-bottom').jfSubscribe({
            urlToSubscribePHP : urlToSite + '/php/subscribe.php'
        });
        /* END Subscribe Form        	 */

        /*------------------------------ */
        /* BEGIN Contact Form        	 */
        /*------------------------------ */
        var contactForm = new jfContactForm(urlToSite);
        /* END Contact Form        	 */

        /*--------------------------------------------- */
        /* START copy social icons to mobile version    */
        /*--------------------------------------------- */
        $("#footer .social-icons").clone().prependTo("#menu-style-b li.wrap-social-icons");
        /* END copy social icons to mobile version    */
    });
})(jQuery);