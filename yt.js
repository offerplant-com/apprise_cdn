/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/

(function ( $ ) {

	$.fn.grtyoutube = function( options ) {

		return this.each(function() {

			// Get video ID
			var getvideoid = $(this).attr("youtubeid");

			// Default options
			var settings = $.extend({
				videoID: getvideoid,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getvideoid) {
				$(document).on( "click",'.youtube-link', function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'">'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"><i class="fa fa-times-circle" aria-hidden="true"></i></span>'+
									'<iframe class="grtyoutube-iframe" src="https://www.youtube.com/embed/'+settings.videoID+'?rel=0&wmode=transparent&autoplay='+settings.autoPlay+'&iv_load_policy=3" allowfullscreen frameborder="0"></iframe>'+
								'</div>'+
							'</div>');
				});
			}

			// Close the box on click or escape
			$(document).on('click','.grtyoutube-popup-close', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close, .grtyoutube-popup").click(function(){
					$(".grtyoutube-popup").remove();
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".grtyoutube-popup").remove();
				}
			});
		});
	};

}( jQuery ));
