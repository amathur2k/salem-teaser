// JavaScript Document


// YTPlayer
    $(function(){
      $(".player").mb_YTPlayer();
    });


// curtains || welcome
	$(document).ready(function(){

	$("#curtains").delay(4000).slideToggle(3000);
	$("#footer").delay(4000).slideToggle(3000);
	$("#welcome").delay(1600).animate({top: "0", opacity: "show"}, "slow");
		
	$("#welcome").hover(function(){
	$("#welcome .intro").stop().animate({left: "-15"}, "slow");
	$("#welcome span").stop().animate({left: "15"}, "slow");
	}, function() {
	$("#welcome .intro").stop().animate({left: "0"}, "slow");
	$("#welcome span").stop().animate({left: "0"}, "slow");
		
		});
	});


// panel
$(document).ready(function() {
	// expander
	$("#open").click(function(){
		$("div#the-panel").slideDown({
		duration: 600, 
		easing: "easeInOutQuart"});
		$("div#overlay").fadeIn({

		duration: 600, 
		easing: "easeInOutQuart"});
	});	
	
	// collapse
	$("#close").click(function(){
		$("div#the-panel").slideUp({
		duration: 600, 
		easing: "easeInOutQuart"});
		
		$("div#overlay").fadeOut(600, "easeInOutQuart", function(){
		});
	});
	
	// switcher
	$("#overlay").click(function () {
		$("div#the-panel").slideUp({
		duration: 600, 
		easing: "easeInOutQuart"});
		
		$("div#overlay").fadeOut(600, "easeInOutQuart", function(){
		});
	});	
});


// panel 2
$(document).ready(function() {
	// expander
	$("#open-2").click(function(){
		$("div#the-panel-2").slideDown({
		duration: 600, 
		easing: "easeInOutQuart"});
		$("div#overlay").fadeIn({

		duration: 600, 
		easing: "easeInOutQuart"});
	});	
	
	// collapse
	$("#close-2").click(function(){
		$("div#the-panel-2").slideUp({
		duration: 600, 
		easing: "easeInOutQuart"});
		
		$("div#overlay").fadeOut(600, "easeInOutQuart", function(){
		});
	});
	
	// switcher
	$("#overlay").click(function () {
		$("div#the-panel-2").slideUp({
		duration: 600, 
		easing: "easeInOutQuart"});
		
		$("div#overlay").fadeOut(600, "easeInOutQuart", function(){
		});
	});
});


// panel 3
$(document).ready(function() {
	// expander
	$("#open-3").click(function(){
		$("div#the-panel-3").slideDown({
		duration: 600, 
		easing: "easeInOutQuart"});
		$("div#overlay").fadeIn({

		duration: 600, 
		easing: "easeInOutQuart"});
	});	
	
	// collapse
	$("#close-3").click(function(){
		$("div#the-panel-3").slideUp({
		duration: 600, 
		easing: "easeInOutQuart"});
		
		$("div#overlay").fadeOut(600, "easeInOutQuart", function(){
		});
	});
	
	// switcher
	$("#overlay").click(function () {
		$("div#the-panel-3").slideUp({
		duration: 600, 
		easing: "easeInOutQuart"});
		
		$("div#overlay").fadeOut(600, "easeInOutQuart", function(){
		});
	});
});


// twitter ticker
      jQuery(function($){
        $("#ticker").tweet({
          username: "enihilo",
          page: 1,
          avatar_size: 0,
          count: 20,
          loading_text: "loading"
        }).bind("loaded", function() {
          var ul = $(this).find(".tweet_list");
          var ticker = function() {
            setTimeout(function() {
              ul.find('li:first').animate( {marginTop: '-70px'}, 500, function() {
                $(this).detach().appendTo(ul).removeAttr('style');
              });
              ticker();
            }, 8000);
          };
          ticker();
        });
      });
	  
	  
// twitter ticker settings
$(document).ready(function(){
        $(this).find(".tweet_list").list_ticker({
                speed: 8000,
                effect: 'fade' // fade, slide
        })             
})


// social media
// Author: Marco Kuiper || http://www.marcofolio.net/
$(document).ready(function()
{
	// hide the tooltips
	$("#social-media li").each(function() {
		$("a strong", this).css("opacity", "0");
	});
	
	$("#social-media li").hover(function() { // mouse over
		$(this)
			.stop().fadeTo(500, 1)
			.siblings().stop().fadeTo(500, 0.2);
			
		$("a strong", this)
			.stop()
			.animate({
				opacity: 1,
				top: "-10px"
			}, 300);
		
	}, function() { // mouse out
		$(this)
			.stop().fadeTo(500, 1)
			.siblings().stop().fadeTo(500, 1);
			
		$("a strong", this)
			.stop()
			.animate({
				opacity: 0,
				top: "-1px"
			}, 300);
	});
});


// mobile-detect
	var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };