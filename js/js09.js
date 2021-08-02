window.onload = function() {
	const original = document.querySelector('#original');
	const replaced = document.querySelector('#replaced');
	const replacement = document.querySelector('#replacement');

	document.querySelector('#go').addEventListener('click', () => {
		original.value = original.value.replaceAll(replaced.value, replacement.value);
	});
}