window.onload = function() {
	const original = document.querySelector('#original');
	const stats = document.querySelector('#stats');

	document.querySelector('#go').addEventListener('click', () => {
		let string = original.value.trim().replaceAll(/\s+/g, ' ');

		original.value = string;

		const length = string.length;
		const wordsAmount = string.split(' ').length;
		const appearance = {};

		string.replaceAll(/\s/g, '').split('').forEach(char => {
			if (appearance[char] == null) {
				appearance[char] = 1;
				return;
			}

			appearance[char]++;
		});
		stats.innerText = `Characters: ${length}\n` +
			`Words: ${wordsAmount}\n` + Object.entries(appearance)
				.sort((a, b) => a[0] < b[0] ? -1 : 1)
				.map(ele => `Character'${ele[0]}': ${ele[1]}`)
				.join('\n');
	});
}