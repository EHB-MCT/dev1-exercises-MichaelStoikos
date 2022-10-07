"use strict"

drawrec()

function drawrec() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //red stroke rect no fill
    context.lineWidth = 1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(50,50,150,150);
    context.rect(200,200,150,150);
    context.rect(75,275,50,50);
    context.rect(275,75,50,50)
    context.stroke();

    //big red stroke rect fill
    context.beginPath();
    context.rect(125,125,150,150);
    context.fill();
    context.stroke();

    //little black rects
    context.strokeStyle = 'black';
    context.beginPath();
    context.rect(50,325,25,25);
    context.rect(325,50,25,25);
    context.fill();
    context.stroke();
}
