document.addEventListener("DOMContentLoaded", function () {
	const themeSwitch = document.getElementById("themeSwitch");
	const body = document.body;

	themeSwitch.addEventListener("click", function () {
		body.classList.toggle("dark-theme");

		const isDarkTheme = body.classList.contains("dark-theme");

		localStorage.setItem("darkTheme", isDarkTheme);
	});

	const savedTheme = localStorage.getItem("darkTheme");

	if (savedTheme === "true") {
		body.classList.add("dark-theme");
	}
});
