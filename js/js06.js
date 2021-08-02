window.onload = function() {
	let body = document.querySelector('table tbody');
	let html = "<tr>";

	for (let i = 2; i <= 9; i++) {
		if (i === 6) {
			html += "</tr><tr>";
		}

		html += "<td>";

		for (let j = 2; j <= 9; j++) {
			html += `${i} x ${j} = ${i * j}<br/>`;
		}
		
		html += "</td>";
	}

	html += "</tr>";

	body.innerHTML = html;
};