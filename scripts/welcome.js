document.addEventListener("DOMContentLoaded", function () {
	const overlay = document.getElementById("overlay");
	const mainContent = document.getElementById("mainContent");
	const enterButton = document.getElementById("enterButton");

	// Sprawdź, czy sesja zawiera informację o akceptacji ciasteczka
	const isCookieAccepted = sessionStorage.getItem("cookie_accepted") === "true";

	if (isCookieAccepted) {
		// Jeśli ciasteczko jest zaakceptowane, ukryj overlay i pokaż treść strony
		overlay.style.display = "none";
		mainContent.style.display = "block";
	} else {
		// Jeśli ciasteczko nie jest zaakceptowane, pokaż overlay
		overlay.style.display = "flex";
	}

	enterButton.addEventListener("click", function () {
		// Schowaj overlay
		overlay.style.opacity = 0;
		setTimeout(() => {
			overlay.style.display = "none";
			// Ustaw informację o akceptacji ciasteczka w sesji i pokaż główną treść strony
			sessionStorage.setItem("cookie_accepted", "true");
			mainContent.style.display = "block";
		}, 500);
	});
});
