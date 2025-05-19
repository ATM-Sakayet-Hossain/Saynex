const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let initial_size = 0;

function setup_canvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx.strokeStyle = "#4ff";
	ctx.translate(canvas.width / 2, canvas.height / 2);
	initial_size = Math.max(canvas.width, canvas.height);
}

setup_canvas();
window.addEventListener("resize", setup_canvas);

function draw_square(diameter) {
	ctx.lineWidth = diameter / 50;
	ctx.strokeRect(
		Math.round(-diameter / 2),
		Math.round(-diameter / 2),
		diameter,
		diameter
	);
}

let zoom = 1;
const ZOOM_SPEED = 1.008;
const STEP = 1.5;
const NUMBER_SQUARES = 20;
const ROTATION_SPEED = 0.001;

function loop() {
	clear_canvas();
	for (let i = 0; i < 20; i++) {
		draw_square(zoom * (initial_size / STEP ** i));
	}
	zoom *= ZOOM_SPEED;
	if (zoom >= STEP) zoom = 1;
	requestAnimationFrame(loop);
}

loop();

function clear_canvas() {
	ctx.clearRect(
		-canvas.width / 2,
		-canvas.height / 2,
		canvas.width,
		canvas.height
	);
}