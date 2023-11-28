document.addEventListener("DOMContentLoaded", function () {
	const overlay = document.getElementById("overlay");
	const mainContent = document.getElementById("mainContent");
	const enterButton = document.getElementById("enterButton");

	// Sprawdź, czy cookie zostało już zaakceptowane
	const isCookieAccepted =
		document.cookie.indexOf("cookie_accepted=true") !== -1;

	if (isCookieAccepted) {
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
			setCookie("cookie_accepted", "true");
			mainContent.style.display = "block";
		}, 500);
	});

	function setCookie(name, value) {
		document.cookie = `${name}=${value};path=/`;
	}
});
