
// var initialState = new XMLHttpRequest;
var page;
var name = "name";
var about = "about";
var portfolio = "portfolio";
var resume = "resume";

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
// initialState.onreadystatechange = function() 
// {
//     if (initialState.readyState == 4 && initialState.status == 200) 
//     {
//     	document.getElementById("contentView").innerHTML = "<p>Welcome !!</p>"; 
// 	}   
// };

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

	// if ((page == 'name') || (page == 'about') || (page == 'portfolio') || (page == 'resume'))
	// {
	// 	// asyncRequest.open('GET', './php/contentServer.php?page=' + page, true);
	// 	asyncRequest.open('GET', './' + page, true);
	// 	asyncRequest.send(null);
	// }
	// else
	// {
	// 	document.getElementById('contentView').innerHTML = "Bad page request."
	// }

	if (page == 'name')
	{
		asyncRequest.open('GET', './index.html', true);
	}
	else if (page == 'about')
	{
		asyncRequest.open('GET', './about.html', true);
	}
	else if (page == 'portfolio')
	{
		asyncRequest.open('GET', './portfolio.html', true);
	}
	else if (page == 'resume')
	{
		asyncRequest.open('GET', './resume.html', true);
	}
	else
	{
		document.getElementById('contentView').innerHTML = "Bad page request."
	}

	// 	if ( (page == "name") || 
	// 	 (page == "about") || 
	// 	 (page == "portfolio") || 
	// 	 (page == "resume") 
	// 	)
	// {
	// 	asyncRequest.open("GET", "../php/contentServer.php?name=contentView&page=" + page, true);
	// 	asyncRequest.send();
	// }
	// else 
	// {
	// 	document.getElementById("contentView").innerHTML = "Bad page request."
	// }
}