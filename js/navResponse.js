
// var initialState = new XMLHttpRequest;
var page;
var name = "name";
var about = "about";
var portfolio = "portfolio";
var resume = "resume";

var initialRequest = new XMLHttpRequest();
var initial_page_Request = new XMLHttpRequest();

initial_page_Request.onreadystatechange = function ()
{
	if (initial_page_Request.readyState == 4 && initial_page_Request.status == 200)
	{
		document.getElementById('current_page').innerHTML = "<p>home</p>";
	}
};

/* Make default code load up with site. */
initialRequest.onreadystatechange = function () 
{
	if (initialRequest.readyState == 4 && initialRequest.status == 200) 
	{
		document.getElementById('contentView').innerHTML = initialRequest.responseText;
	}
};

initialRequest.open('GET', './default.html', true);
initialRequest.send(null);


/*Navigation response*/
var asyncRequest = new XMLHttpRequest();
var current_page_Request = new XMLHttpRequest();

function switchContent(link) {

	page = link;

	current_page_Request.onreadystatechange = function () 
	{
		if (current_page_Request.readyState == 4 && current_page_Request.status == 200) 
		{
			document.getElementById('current_page').innerHTML = page;
		}
	};

	asyncRequest.onreadystatechange = function () 
	{
		if (asyncRequest.readyState == 4 && asyncRequest.status == 200) 
		{
			document.getElementById('contentView').innerHTML = asyncRequest.responseText;
		}
	};

	if (page == 'name')
	{
		asyncRequest.open('GET', './default.html', true);
		asyncRequest.send(null);
	}
	else if (page == 'about')
	{
		asyncRequest.open('GET', './about.html', true);
		asyncRequest.send(null);
	}
	else if (page == 'portfolio')
	{
		asyncRequest.open('GET', './portfolio.html', true);
		asyncRequest.send(null);
	}
	else if (page == 'resume')
	{
		asyncRequest.open('GET', './resume.html', true);
		asyncRequest.send(null);
	}
	else
	{
		document.getElementById('contentView').innerHTML = "Bad page request."
	}
}