window.onload = function() {
	const rotateLeft = document.getElementById('rotate-left');
	const rotateRight = document.getElementById('rotate-right');
	const rotateLeftLength = rotateLeft.innerText.length;
	const rotateRightLength = rotateRight.innerText.length;
	
	setInterval(() => {
		const rotateRightText = rotateRight.innerText;
		rotateRight.innerText = rotateRightText.substring(1) + rotateRightText.substring(0, 1);

		const rotateLeftText = rotateLeft.innerText;
		rotateLeft.innerText = rotateLeftText.substring(rotateLeftLength - 1) + rotateLeftText.substring(0, rotateLeftLength - 1);
	}, 100);
};