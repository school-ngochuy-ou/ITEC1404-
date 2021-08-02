window.onload = function() {
	const display = document.querySelector('#display');
	const content = document.querySelector('#content');
	const bgColor = document.querySelector('#bgColor');
	const color = document.querySelector('#color');

	document.querySelector('#go').addEventListener('click', () => {
		display.innerText = content.value;
		display.style.backgroundColor = bgColor.value;
		display.style.color = color.value;
	});
};