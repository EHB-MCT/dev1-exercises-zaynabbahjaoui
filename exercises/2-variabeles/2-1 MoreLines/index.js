"use strict"

let canvas = document.querySelector("Canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let.width = context.canvas.width;
let.height = context.canvas.height;

let margin = 50;
let spacing = 150; //niet verplicht

drawLines();

function drawLines(){
    context.beginPath();

    context.linewidth= 2;


    context.move.to(margin,50);
    context.lineTo(width - margin, spacing);
    context.lineTo(margin, spacing * 2);
    context.lineTo(width - margin,spacing, * 2);
    context.lineTo(margin, spacing * 3;
    context.lineTo(width - margin, spacing *3 );
    context.lineTo(margin, spacing * 4;
    context.lineTo(width - margin , spacing * 4)
    context.closePath();

    context.stroke();
}