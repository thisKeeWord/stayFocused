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
var store = chrome.storage.local.get("currentState", function(res) {
	console.log('got something', res);
	return res;
});

// if (!store) {
// 	// obj["currentState"] = "start";
// 	// chrome.storage.local.set(obj, function() {
// 		// window.console.log('success');
// 	// });
// 	chrome.storage.local.set({ "currentState": "start" }, function() {
// 		console.log('success');
// 		return store = { "currentState": "start" };
// 	});
// }

if (store) {
	if (store.currentState === "start") {
		// if (document.getElementById("flip-1")) {
		// 	document.getElementById("flip-1").value = "on";
		// }
		for (var key in socialSites) {
			if (url.indexOf(key) !== -1) {
				alert('Stay focused.');
				window.location = "https://www.google.com";
			}
		}
	}
	// else if (store.currentState === "stop") {
	// 	if (document.getElementById("flip-1")) {
	// 		document.getElementById("flip-1").value = "off";
	// 	}
	// }


	if (!store.currentState) {
		// obj["currentState"] = "start";
		// chrome.storage.local.set(obj, function() {
			// window.console.log('success');
		// });
		chrome.storage.local.set({ "currentState":"start" }, function() {
			console.log('success');
		});
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
// if (document.getElementById("extension-button")) {
// 	document.getElementById("extension-button").addEventListener("click", function() {
// 		window.console.log('yo');
// 		window.console.log('asdfadsfsdadfsadfsasdf');
// 		// window.alert('asdfasd')
// 	  // if (obj["currentState"] === "start") {
// 	  if (store.currentState === "start") {
// 	  	// obj["currentState"] = "stop";
// 	    // document.getElementById("flip-1").value = "on";
// 	    // chrome.storage.local.set(obj, function() {
// 	    	// window.console.log("successed");
// 	    // });
// 	    chrome.storage.local.set({ "currentState": "stop" }, function() {
// 	    	console.log('clicked and successful');
// 	    });
// 	  }
// 	  else if (store.currentState === "stop") {
// 	  	// obj["currentState"] = "start";
// 	    // document.getElementById("flip-1").value = "off";
// 	    // chrome.storage.local.set(obj, function() {
// 	    	// window.console.log("successed");
// 	    // });
// 	    chrome.storage.local.set({ "currentState": "start" }, function() {
// 	    	console.log('clicked and successful');
// 	    });
// 	    // window.alert(document.getElementById("#flip-1").val());
// 	  }
// 	});
// }



