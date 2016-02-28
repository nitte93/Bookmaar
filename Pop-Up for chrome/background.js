$(document).ready(function() { 

chrome.tabs.getSelected(null, function(tab) {
        var tabId = tab.id;
        var tabUrl = tab.url;
		var tabTitle=tab.title;

       document.getElementById("url").value=tabUrl;
	   document.getElementById("title").value=tabTitle;
	   
    chrome.browserAction.setBadgeText({text: "10+"});
	});

 

});   

