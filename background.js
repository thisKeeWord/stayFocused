'use strict';

var url = window.location.href;
var socialSites = {
	'youtube': 'youtube',
	'facebook': 'facebook',
	'twitter': 'twitter',
	'hulu': 'hulu',
	'netflix': 'netflix',
	'instagram': 'instagram',
	'reddit': 'reddit'
};

for (var key in socialSites) {
	if (url.indexOf(key) !== -1) {
	alert('Stay focused.');
	window.location = "https://www.google.com";
	}
}
