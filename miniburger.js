// Miniburger extension, https://github.com/GiovanniSalmeri/yellow-miniburger

window.addEventListener("DOMContentLoaded", function() {
    const navigationTree = document.querySelector("div.topnav");
    const navigationMenu = document.getElementById("navigation-menu");
    navigationMenu.addEventListener("click", function(event) {
        event.preventDefault();
	if (navigationTree.className === "topnav") {
	    navigationTree.className += " responsive";
	} else {
	    navigationTree.className = "topnav";
	}
    });
  }
);
