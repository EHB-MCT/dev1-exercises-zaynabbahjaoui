"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontalLines = 60;
let verticalLines = 30;

let width = 600;
let height = 300;

DrawLines();

function drawLine() {
	for (let i = 0; i < 100; i++) {
		Utils.drawLine(0 + 10 * i, 0, width - 10 * i, height);
	}
}
