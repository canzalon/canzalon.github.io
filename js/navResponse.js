
// var initialState = new XMLHttpRequest;
var page;
var name = "name";
var about = "about";
var portfolio = "portfolio";
var resume = "resume";

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

	switchLabel(page);
}

var labelChange = new XMLHttpRequest();

function switchLabel(currentPage)
{
	labelChange.onreadystatechange = function () 
	{
		if (labelChange.readyState == 4 && labelChange.status == 200) 
		{
			if (page == 'name')
			{
				document.getElementById('current_page').innerHTML = "home";
			}
			else if (page == 'about')
			{
				document.getElementById('current_page').innerHTML = "about me";
			}
			else if (page == 'portfolio')
			{
				document.getElementById('current_page').innerHTML = "portfolio";
			}
			else if (page == 'resume')
			{
				document.getElementById('current_page').innerHTML = "resume";
			}
			else
			{
				document.getElementById('current_page').innerHTML = "error";
			}
		}
	};
}