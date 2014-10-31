/* 
* canzalon.github.io
* Language: Javascript
* File: navResponse.js
*/

// var initialState = new XMLHttpRequest;
var page;
var current;
var name = "name";
var about = "about";
var portfolio = "portfolio";
var resume = "resume";

/*
************************************
* CURRENT PAGE RESPONSE
************************************
*/

function switchLabel(currentPage)
{
	current = currentPage;

	if (current == 'name')
	{
		document.getElementById('currentPage').innerHTML = "home";
	}
	else if (current == 'about')
	{
		document.getElementById('currentPage').innerHTML = "about me";
	}
	else if (current == 'portfolio')
	{
		document.getElementById('currentPage').innerHTML = "portfolio";
	}
	else if (current == 'resume')
	{
		document.getElementById('currentPage').innerHTML = "resume";
	}
	else
	{
		document.getElementById('currentPage').innerHTML = "error";
	}
}

/*
************************************
* MAIN CONTAINER RESPONSE
************************************
*/

var initialRequest = new XMLHttpRequest();

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


/*
************************************
* SECONDARY CONTAINER RESPONSE
************************************
*/

/*Initial loadup of secondary container*/
var initialRequestSec = new XMLHttpRequest();

initialRequestSec.onreadystatechange = function () 
{
	if (initialRequestSec.readyState == 4 && initialRequestSec.status == 200) 
	{
		document.getElementById('contentViewSec').innerHTML = initialRequestSec.responseText;
	}
};

initialRequestSec.open('GET', '../html/defaultS.html', true);
initialRequestSec.send(null);

/*Secondary container response*/
var asyncRequestSec = new XMLHttpRequest();

function switchContentSec(slink)
{
	spage = slink;

	asyncRequestSec.onreadystatechange = function () 
	{
		if (asyncRequestSec.readyState == 4 && asyncRequestSec.status == 200) 
		{
			document.getElementById('contentViewSec').innerHTML = asyncRequestSec.responseText;
		}
	};

	if (spage == 'name')
	{
		asyncRequestSec.open('GET', '../html/defaultS.html', true);
		asyncRequestSec.send(null);
	}
	else if (spage == 'about')
	{
		asyncRequestSec.open('GET', '../html/aboutS.html', true);
		asyncRequestSec.send(null);
	}
	else if (spage == 'portfolio')
	{
		asyncRequestSec.open('GET', '../html/portfolioS.html', true);
		asyncRequestSec.send(null);
	}
	else if (spage == 'resume')
	{
		asyncRequestSec.open('GET', '../html/resumeS.html', true);
		asyncRequestSec.send(null);
	}
	else
	{
		document.getElementById('contentViewSec').innerHTML = "Bad page request."
	}
}