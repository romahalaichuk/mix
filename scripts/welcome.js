document.addEventListener("DOMContentLoaded", function () {
	const overlay = document.getElementById("overlay");
	const mainContent = document.getElementById("mainContent");
	const enterButton = document.getElementById("enterButton");

	const isCookieAccepted = sessionStorage.getItem("cookie_accepted") === "true";

	const clickSound = new Audio("./music/btn.mp3");
	clickSound.volume = 0.9;

	const backgroundMusic = new Audio("./music/web.mp3");
	backgroundMusic.loop = true;
	backgroundMusic.volume = 0.2;
	setTimeout(() => {
		backgroundMusic.play();
	}, 1000);

	if (isCookieAccepted) {
		overlay.style.display = "none";
		mainContent.style.display = "block";
	} else {
		overlay.style.display = "flex";
	}

	enterButton.addEventListener("click", function () {
		overlay.style.opacity = 0;
		setTimeout(() => {
			overlay.style.display = "none";
			sessionStorage.setItem("cookie_accepted", "true");
			mainContent.style.display = "block";

			clickSound.play();
		}, 500);

		backgroundMusic.play();
	});

	document.addEventListener("mousemove", handleMove);
	document.addEventListener("touchmove", handleMove);

	function handleMove(event) {
		const eyeSpeed = 10;

		const leftEye = document.getElementById("left-eye");
		const rightEye = document.getElementById("right-eye");

		const { clientX: mouseX, clientY: mouseY } = event.touches
			? event.touches[0]
			: event;

		moveEye(leftEye, mouseX, mouseY);
		moveEye(rightEye, mouseX, mouseY);
	}

	function moveEye(eye, mouseX, mouseY) {
		const eyeRect = eye.getBoundingClientRect();
		const eyeX = eyeRect.left + eyeRect.width / 2;
		const eyeY = eyeRect.top + eyeRect.height / 2;

		const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);
		const distance = Math.min(eyeRect.width, eyeRect.height) / 4;

		const offsetX = Math.cos(angle) * distance;
		const offsetY = Math.sin(angle) * distance;

		eye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
	}
});
