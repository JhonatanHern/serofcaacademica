"use strict";

(function () {
	var links = document.getElementsByClassName("appSwitcher");
	var hash = window.location.hash.substr(1, window.location.hash.length);
	for (var i = links.length - 1; i >= 0; i--) {
		var attribute = links[i].getAttribute("appTarget");
		var element = document.getElementById(attribute);
		if (!attribute) {
			throw "missing attribute appTarget";
		}
		if (!element) {
			throw "missing element where appTarget = " + attribute;
		}
		if (element.getAttribute("appState") !== 'visible' && !hash) {
			element.style.display = "none";
		}
		links[i].addEventListener("click", function (e) {
			e.preventDefault();
			for (var _i = links.length - 1; _i >= 0; _i--) {
				document.getElementById(links[_i].getAttribute("appTarget")).style.display = "none";
			}
			document.getElementById(this.getAttribute("appTarget")).style.display = "block";
		});
		if (hash === attribute) {
			for (var _i2 = links.length - 1; _i2 >= 0; _i2--) {
				document.getElementById(links[_i2].getAttribute("appTarget")).style.display = "none";
			}
			element.style.display = "block";
		}
	}
})();