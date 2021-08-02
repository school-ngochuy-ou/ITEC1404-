window.onload = function() {
	const original = document.querySelector('#original');

	document.querySelector('#reverse').addEventListener('click', () => {
		original.value = original.value.split('').reverse().join('');
	});

	document.querySelector('#normalize').addEventListener('click', () => {
		original.value = original.value.trim().replaceAll(/\s+/g, ' ');
	});
}