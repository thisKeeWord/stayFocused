'use strict';

// var beProductive = function() {
// var socialSites = {
// 	'youtube': 'youtube',
// 	'facebook': 'facebook',
// 	'twitter': 'twitter',
// 	'hulu': 'hulu',
// 	'netflix': 'netflix',
// 	'instagram': 'instagram',
// 	'reddit': 'reddit'
// }
// chrome.tabs.getSelected(null,function(tab) {

// 	var tablink = tab.url;
// 	chrome.extension.getBackgroundPage().console.log(tablink, 'aisyfuapsod');
// 	if (tablink[socialSites[tablink]]) {
// 		consle.log('wassup');
// 		window.stop();
// 		alert('Stay focused.');
// 	}
// });
// // }

// 	chrome.extension.getBackgroundPage().console.log(tablink, 'aisyfuapsod');





var form = document.getElementById('form');
if (form) {
	form.addEventListener('submit', function(event) {
		event.preventDefault();
		var store = chrome.storage.local.get("currentState", function(res) {
			return res;
		});
		var input = document.getElementById('input-box');
		var userDecision = input.value;
		window.console.log('asdfadsfsdadfsadfsasdf');
	  if (userDecision === "no" && (!store || store.currentState === "start")) {
	  	var obj = { currentState: "stop" };
	    chrome.storage.local.set(obj, function() {
	    	chrome.storage.local.get("currentState", function (res) {
	    		console.log(res);
		    	console.log('clicked and successful');
		    });
	    });
	  }
	  else if (userDecision === "yes" && (!store || store.currentState === "stop")) {
	  	var obj = { currentState: "start" };
	    chrome.storage.local.set(obj, function() {
	    	chrome.storage.local.get("currentState", function (res) {
	    		console.log(res);
		    	console.log('clicked and successful');
		    });
	    });
	  }
	});
}