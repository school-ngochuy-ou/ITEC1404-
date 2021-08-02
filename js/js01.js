const getAge = ()  => {
	const nameInput = document.getElementById('name-input');
	const yearInput = document.getElementById('year-input');

	document.getElementById('info-name').innerText = `Chào bạn ${nameInput.value}`;
	document.getElementById('info-age').innerText = `Tuổi của bạn là ${new Date().getFullYear() - parseInt(yearInput.value)}`
};