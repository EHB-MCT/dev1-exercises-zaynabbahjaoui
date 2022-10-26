"use strict";

let canvas = document.querySelector("Canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawName();

function drawName() {

//Z
context.lineWidth = 5;
context.strokeStyle = 'red';
context.beginPath();
context.lineTo(390,62);
context.lineTo(510,63);
context.lineTo(386,231);
context.lineTo(509,230);
context.stroke()
    
//A
context.beginPath();
context.lineTo(565,240);
context.lineTo(600,66);
context.lineTo(645,241);
context.lineTo(630,187);
context.lineTo(576,187);
context.stroke();
    
//y
context.beginPath();
context.moveTo(665,61);
context.lineTo(725,134);
context.lineTo(727,240);
context.lineTo(725,134);
context.lineTo(774,61);
context.stroke();

//N
context.beginPath();
context.moveTo(815,50);
context.lineTo(815,140);
context.lineTo(815,240);
context.lineTo(815,50);
context.lineTo(830,50);
context.lineTo(895,240);
context.lineTo(910,240);
context.lineTo(915,50);
context.stroke();

//A
context.beginPath();
context.moveTo(960,245);
context.lineTo(990,55);
context.lineTo(1050,240);
context.lineTo(1034,190);
context.lineTo(965,190);
context.stroke();

//B
context.beginPath()
context.lineTo(1080,57);
context.lineTo(1084,242);
context.lineTo(1150,170);
context.lineTo(1105,150);
context.lineTo(1145,100);
context.lineTo(1078,57);
context.stroke();
}
