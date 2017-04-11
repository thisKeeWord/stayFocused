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


// var submission = document.getElementById("submit");
// var submission = document.getElementById("button");
// window.alert(submission);
// var obj = {};

// var currentState = chrome.storage.local.get(obj, function(items) {
	// window.console.log(items);
// });
// if (!obj["currentState"]) {
if (!window.localStorage.currentState) {
	// obj["currentState"] = "start";
	// chrome.storage.local.set(obj, function() {
		// window.console.log('success');
	// });
	window.localStorage["currentState"] = "start";
}
if (window.localStorage["currentState"] === "start") {
	if (document.getElementById("flip-1")) {
		document.getElementById("flip-1").value = "on";
	}
	// while (localStorage["currentState"] === "start") {
		for (var key in socialSites) {
			if (url.indexOf(key) !== -1) {
				alert('Stay focused.');
				window.location = "https://www.google.com";
			}
		}
	// }
}
if (window.localStorage["currentState"] === "stop") {
	if (document.getElementById("flip-1")) {
		document.getElementById("flip-1").value = "off";
	}
}

// window.alert(chrome.storage.local.currentState)
// window.alert(localStorage);
//cache button DOM element reference



// if (document.getElementById("flip-1")) window.alert(document.getElementById("flip-1").value);
// if (currentState === "stop") {
//   document.getElementById("flip-1").value = "on";
// }

//register button click handler
if (document.getElementById("extension-button")) {
	document.getElementById("extension-button").addEventListener("click", function() {
		window.console.log('asdfadsfsdadfsadfsasdf');
		// window.alert('asdfasd')
	  // if (obj["currentState"] === "start") {
	  if (window.localStorage["currentState"] === "start" && document.getElementById("flip-1").value === "off") {
	  	// obj["currentState"] = "stop";
	    // document.getElementById("flip-1").value = "on";
	    // chrome.storage.local.set(obj, function() {
	    	// window.console.log("successed");
	    // });
	    window.localStorage["currentState"] = "stop";
	  }
	  else {
	  	// obj["currentState"] = "start";
	    // document.getElementById("flip-1").value = "off";
	    // chrome.storage.local.set(obj, function() {
	    	// window.console.log("successed");
	    // });
	    window.localStorage["currentState"] = "start";
	    // window.alert(document.getElementById("#flip-1").val());
	  }
	});
}



