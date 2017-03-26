'use strict';

// var beProductive = function() {
var socialSites = {
	'youtube': 'youtube',
	'facebook': 'facebook',
	'twitter': 'twitter',
	'hulu': 'hulu',
	'netflix': 'netflix',
	'instagram': 'instagram',
	'reddit': 'reddit'
}
chrome.tabs.getSelected(null,function(tab) {

	var tablink = tab.url;
	chrome.extension.getBackgroundPage().console.log(tablink, 'aisyfuapsod');
	if (tablink[socialSites[tablink]]) {
		consle.log('wassup');
		window.stop();
		alert('Stay focused.');
	}
});
// }

	chrome.extension.getBackgroundPage().console.log(tablink, 'aisyfuapsod');
