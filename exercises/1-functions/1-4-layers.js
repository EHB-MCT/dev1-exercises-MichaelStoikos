"use strict";

drawLayers();

function drawLayers() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.fillStyle = '#add9e6';
    context.rect(50,50,350,350);
    context.rect(50,50,290,290);
    context.rect(110,50,230,230);
    context.rect(165,105,175,175);
    context.rect(165,155,125,125);
    context.fill();
    context.stroke();

}