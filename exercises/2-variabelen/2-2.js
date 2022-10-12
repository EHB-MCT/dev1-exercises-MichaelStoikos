"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawRandom(50,50,400);
drawRandom(75,75,350);
drawRandom(100,100,300);
drawRandom(125,125,250);
drawRandom(150,150,200);
drawRandom(175,175,150);
drawRandom(200,200,100);
drawRandom(225,225,50);

function drawRandom(x,y,size) {

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let color = "rgb(" + r + "," + g + "," + b + ")";

    context.fillStyle = color;
    context.beginPath();
    context.rect(x,y,size,size);
    context.fill();
}