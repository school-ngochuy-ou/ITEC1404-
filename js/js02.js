window.onload = function() {
	let name = prompt('Tên:');
	let year = prompt('Năm sinh:');

	document.getElementById('info-name').innerText = `Chào bạn: ${name}`;
	document.getElementById('info-age').innerText = `Tuổi của bạn là ${new Date().getFullYear() - parseInt(year)}`;
};