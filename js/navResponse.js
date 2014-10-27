
// var initialState = new XMLHttpRequest;
var page;
var name = "name";
var about = "about";
var portfolio = "portfolio";
var resume = "resume";

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