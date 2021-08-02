window.onload = function() {
	const img = document.querySelector('img');

	img.addEventListener('mouseenter', () => {
		img.src = "../images/pigeon.jpg";
	});
	img.addEventListener('mouseleave', () => {
		img.src = "../images/chicken.jpg";
	});
};