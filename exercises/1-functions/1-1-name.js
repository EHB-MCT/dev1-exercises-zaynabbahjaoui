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
    context.moveTo(100, 50);
    context.lineTo(300, 50);
    context.lineTo(120,240);
    context.lineTo(300,240);
    context.stroke()
    
    
//A
    context.beginPath();
    context.moveTo(400, 240);
    context.lineTo(460, 50);
    context.lineTo(500, 240);
    context.lineTo(485, 170);
    context.lineTo(420, 170);
    context.stroke()
    

//y
context.beginPath();
context.moveTo(585, 50);
context.lineTo(640, 140);
context.lineTo(640, 240);
context.lineTo(640, 140);
context.lineTo(640, 140);
context.lineTo(680, 50);
context.stroke();

//N
context.strokeStyle = "red";
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
context.moveTo(965,55);
context.lineTo(985,50);

context.stroke();








}