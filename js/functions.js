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

		
var initialState = new XMLHttpRequest;

// initialState.onreadystatechange = function() 
// {
//     if (initialState.readyState == 4 && initialState.status == 200) 
//     {
//     	document.getElementById('contentView').innerHTML = initialState.responseText; 
// 	}   
// };
// initialState.open("GET", "../php/contentServer.php?name=contentView&page=", true);
// initialState.send();

/*initial load of contentView*/
initialState.onreadystatechange = function() 
{
    if (initialState.readyState == 4 && initialState.status == 200) 
    {
    	document.getElementById("contentView").innerHTML = "<p>Welcome !!</p>"; 
	}   
};

var asyncRequest = new XMLHttpRequest;


function switchContent(link) {

	var pageRequest = link;

	if ( (pageRequest == "name") || 
		 (pageRequest == "about") || 
		 (pageRequest == "portfolio") || 
		 (pageRequest == "resume") 
		)
	{
		asyncRequest.open("GET", "../php/contentServer.php?name=contentView&page=" + pageRequest, true);
		asyncRequest.send();
	}
	else 
	{
		document.getElementById("contentView").innerHTML = "Bad page request."
	}

	asyncRequest.onreadystatechange = function () 
	{
		if (asyncRequest.readyState == 4 && asyncRequest.status == 200) 
		{
			document.getElementById("contentView").innerHTML = asyncRequest.responseText;
		}
	};
}
	
	
	/* optional triggers
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		
	});
	
	*/

})(window.jQuery);