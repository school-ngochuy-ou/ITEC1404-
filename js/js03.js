const solve = () => {
	let a = parseFloat(document.getElementById('a').value);
	let b = parseFloat(document.getElementById('b').value);
	let c = parseFloat(document.getElementById('c').value);

	let result = document.getElementById('result');

	if (a == 0) {
        if (b == 0) {
            result.innerText = "Phương trình vô nghiệm";
            return;
        }

        if (c == 0) {
        	result.innerText = "Phương trình vô số nghiệm";	
        	return;
        }

		result.innerText = `x1 = x2 = ${-c / b}`;
		return;
    }

    let delta = Math.pow(b, 2) - 4 * a * c;
    
    if (delta < 0) {
        result.innerText = "Phương trình vô nghiệm";
        return;
    }

    if (delta == 0) {
    	result.innerText = `x1 = x2 = ${-b / 2 * a}`;
        return;
    }

    result.innerText = `x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}\nx2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`;
    return;
};