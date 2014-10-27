
// var initialState = new XMLHttpRequest;
var page;
var name = "name";
var about = "about";
var portfolio = "portfolio";
var resume = "resume";

var initialRequest = new XMLHttpRequest();

/* Make default code load up with site. */
asyncRequest.onreadystatechange = function () 
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

function switchContent(link) {

	page = link;

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