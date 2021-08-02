let model = {
	username: "",
	password: "",
	birthDate: "",
	gender: "",
	topic: ""
};

const onModelChange = (event) => {
	const { target: { name, value } } = event;

	model = {
		...model,
		[name]: value
	};

};

const dateRegex = new RegExp(/\d{1,2}\/\d{1,2}\/\d{1}/);

window.onload = function() {
	let inputs = document.querySelectorAll('input');

	inputs.forEach(element => element.addEventListener('change', onModelChange));
	document.querySelector('select').addEventListener('change', onModelChange);

	const error = document.querySelector('#error');
	const result = document.querySelector('#result');
	const submit = () => {
		if (model.username.length === 0) {
			error.innerText = "Bạn phải nhập tên đăng nhập";
			return;
		}

		if (!dateRegex.test(model.birthDate)) {
			error.innerText = "Ngày sinh không đúng định dạng";
			return;
		}

		let date = new Date(model.birthDate);
			
		if (date == 'Invalid Date') {
			error.innerText = "Ngày sinh không hợp lệ";
			return;
		}

		error.innerText = "";
		result.value = `Chào mừng ${model.username}\n` +
		`Bạn là ${model.gender}\n` +
		`Mật khẩu của bạn có ${model.password.length} kí tự\n` +
		`Bạn sinh ngày ${model.birthDate}\n` +
		`Vấn đề bạn quan tâm là ${model.topic}`;
	};

	document.querySelector('#submit-btn').addEventListener('click', submit);
};