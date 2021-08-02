window.onload = function() {
	const container = document.querySelector('#container');

	document.querySelectorAll('input[type="radio"]').forEach(ele => ele.addEventListener('click', (event) => {
		switch (event.target.value) {
			case "DEFAULT": {
				container.classList = "";
				return;
			}
			case "STYLED": {
				container.classList = "styled";
				return;
			}
		}
	}));
};