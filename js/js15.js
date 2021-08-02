window.onload = function() {
	const img = document.querySelector('img');
	const originalSize = [img.width, img.height];

	document.querySelectorAll('input[type="radio"]').forEach(ele => ele.addEventListener('click', (event) => {
		const ratio = parseInt(event.target.value);

		img.width = originalSize[0] * ratio / 100;
		img.height = originalSize[1] * ratio / 100;
	}));
};