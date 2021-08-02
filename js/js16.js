window.onload = function() {
	const canvas = document.querySelector('canvas');
	const context = canvas.getContext('2d');

	context.fillStyle = "#00ffff";
	context.fillRect(0, 0, 200, 200);
	context.beginPath();

    context.arc(100, 100, 100, 0, Math.PI * 2, true);

	let grad = context.createLinearGradient(100, 0, 100, 200);

	grad.addColorStop(0, "#ff0000");
	grad.addColorStop(0.5, "#ffffff");
	grad.addColorStop(1, "#ff0000");

	context.fillStyle = grad;
    context.fill();
    context.beginPath();
    context.fillStyle = "#ffff00";
    context.moveTo(100, 0);
    context.lineTo(200, 100);
    context.lineTo(100, 200);
    context.lineTo(0, 100);
    context.fill();
    context.lineTo(100, 0);
    context.lineWidth = 1.5;
    context.strokeStyle = "#ff0000";
    context.stroke();
    context.font = "40px Arial";
    context.strokeStyle = "#0000ff";
    context.textAlign = "center";
    context.lineWidth = 2.5;
	context.strokeText("HTML5", 100, 100 + 15);
	// const originalSize = [img.width, img.height];

	// document.querySelectorAll('input[type="radio"]').forEach(ele => ele.addEventListener('click', (event) => {
	// 	const ratio = parseInt(event.target.value);

	// 	img.width = originalSize[0] * ratio / 100;
	// 	img.height = originalSize[1] * ratio / 100;
	// }));
};