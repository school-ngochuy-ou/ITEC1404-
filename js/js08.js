window.onload = function() {
	const original = document.querySelector('#original');
	const asc = document.querySelector('#asc');
	const desc = document.querySelector('#desc');
	const amountInput = document.querySelector('#amount');

	let originalArr = [];

	document.querySelector('#generate').addEventListener('click', () => {
		const amount = parseInt(amountInput.value);

		originalArr = [...Array(amount)].map(ele => Math.floor(Math.random() * 50));
		original.innerText = originalArr.join("\t");
	});

	document.querySelector('#sortASC').addEventListener('click', () => {
		asc.innerText = originalArr.sort((a, b) => a > b ? 1 : -1).join("\t");
	});

	document.querySelector('#sortDESC').addEventListener('click', () => {
		desc.innerText = originalArr.sort((a, b) => a < b ? 1 : -1).join("\t");
	});
}