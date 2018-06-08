(function(){
	let elementInViewport = function(el) {
		var top = el.offsetTop;
		var left = el.offsetLeft;
		var width = el.offsetWidth;
		var height = el.offsetHeight;

		while(el.offsetParent) {
			el = el.offsetParent;
			top += el.offsetTop;
			left += el.offsetLeft;
		}

		return (
			top < (window.pageYOffset + window.innerHeight) &&
			left < (window.pageXOffset + window.innerWidth) &&
			(top + height) > window.pageYOffset &&
			(left + width) > window.pageXOffset
		);
	}
	document.addEventListener("DOMContentLoaded", function(event) {
		let targets = document.getElementsByClassName('j-animate')
		document.addEventListener("scroll",function(){
			for (let i = targets.length - 1; i >= 0; i--) {
				if(elementInViewport(targets[i]))
					targets[i].classList.add('j-animated')
				else
					targets[i].classList.remove('j-animated')
			}
		})
	})
})()