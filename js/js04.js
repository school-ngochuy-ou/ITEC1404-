const ADD = "ADD";
const SUB = "SUB";
const MUL = "MUL";
const DIV = "DIV";

let operator = ADD;

const changeOp = (op) => operator = op;

const solve = () => {
	const a = parseFloat(document.getElementById('a').value);
	const b = parseFloat(document.getElementById('b').value);

	let result;

	switch (operator) {
		case ADD: {
			result = a + b;
			break;
		}
		case SUB: {
			result = a - b;
			break;
		}
		case MUL: {
			result = a * b;
			break;
		}
		case DIV: {
			result = a / b;
			break;
		}
	}

	document.getElementById('result').value = result;
};