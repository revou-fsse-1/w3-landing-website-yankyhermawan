function magicFunction() {
	const first_name = document.getElementById("first_name").value;
	const last_name = document.getElementById("last_name").value;
	document.getElementById("magic").innerHTML = first_name + " " + last_name;
}

function myFunction(x) {
	{
		if (x.matches) {
			document.getElementById("top_menu").className = "navbar horizontal hide";
			document.getElementById("side_menu").className = "menu show";
			document.getElementById("menu").className = "open_menu show";
			document.getElementById("side_navbar").className = "navbar vertical show";
		} else {
			document.getElementById("top_menu").className = "navbar horizontal show";
			document.getElementById("side_menu").className = "menu hide";
			document.getElementById("menu").className = "open_menu hide";
			document.getElementById("side_navbar").className = "navbar vertical hide";
		}
	}
}

function menu_button() {
	document.getElementById("menu").style.width = "200px";
	document.getElementById("close").className = "close_button show";
	document.getElementById("side_navbar").className = "navbar vertical show";
}

function close_button() {
	document.getElementById("menu").style.width = "0px";
	document.getElementById("close").className = "close_button hide";
	document.getElementById("side_navbar").className = "navbar vertical hide";
}

var x = window.matchMedia("(max-width: 1024px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
