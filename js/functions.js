// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function($){

	/* trigger when page is ready */
	$(document).ready(function (){
	
		// your functions go here

		var asyncRequest = new XMLHttpRequest;

		function switchContent(link) {
			asyncRequest.onreadystatechange = function () {
				if (asyncRequest.readyState == 4 && asyncRequest.status == 200) {
					document.getElementById('content').innerHTML = asyncRequest.responseText;
				}
			};

			if (link == "name")
			{
				asyncRequest.open('GET', "index.html", true);
			}
			else if (link == "about")
			{
				asyncRequest.open('GET', "about.html", true);
			}
			else if (link == "portfolio")
			{
				asyncRequest.open('GET', "portfolio.html", true);
			}
			else if (link == "resume")
			{
				asyncRequest.open('GET', "resume.html", true);
			}
			else
			{
				asyncRequest.open('GET', "index.html", true);	
			}
		}
	
	});
	
	
	/* optional triggers
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		
	});
	
	*/

})(window.jQuery);