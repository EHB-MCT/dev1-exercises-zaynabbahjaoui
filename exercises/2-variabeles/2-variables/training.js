"use strict";

let canvas = document.querySelector("Canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

draw();

function draw() {
	let i = 0;
	while (i <= 5) {
		context.beginPath();
		//context.ellipse(margin + (i step),300, 100, 100, 100, 0, 0, Math.PI * 2); cirkel naast elkaar
		context.fill();

		console.log("loop, i");
		i++; //i=1 of i++; of i= i+1
	}

	console.log("after loop");
}
