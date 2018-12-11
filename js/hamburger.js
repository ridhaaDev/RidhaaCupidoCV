$(document).ready(function(){

	if (screen.width >= 780) {
		console.log("Worked");
		document.getElementById("icon").setAttribute("class", "fas fa-times");
	} else {
		document.getElementById("icon").setAttribute("class", "fas fa-bars");

		$(".navLinks li a").click(function(){
			$(".navLinks").toggle(1000);
			document.getElementById("icon").setAttribute("class", "fas fa-bars");
		});
	}

	$(".visibleNav button").click(function(){
		$(".navLinks").slideToggle(1000);
		$("i", this).toggleClass("fa-times fa-bars");
	});
	
});
