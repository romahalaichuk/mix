document.addEventListener("DOMContentLoaded", function () {
	const overlay = document.getElementById("overlay");
	const mainContent = document.getElementById("mainContent");
	const enterButton = document.getElementById("enterButton");

	// Sprawdź, czy cookie zostało już zaakceptowane
	if (document.cookie.indexOf("cookie_accepted=true") !== -1) {
		// Jeśli cookie jest zaakceptowane, ukryj overlay i pokaż treść strony
		overlay.style.display = "none";
		mainContent.style.display = "block";
	} else {
		// Jeśli cookie nie jest zaakceptowane, pokaż overlay
		overlay.style.display = "flex";
	}

	enterButton.addEventListener("click", function () {
		// Schowaj overlay
		overlay.style.opacity = 0;
		setTimeout(() => {
			overlay.style.display = "none";
			// Ustaw cookie i pokaż główną treść strony
			document.cookie =
				"cookie_accepted=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
			mainContent.style.display = "block";
		}, 500);
	});
});
