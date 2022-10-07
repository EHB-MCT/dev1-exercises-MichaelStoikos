"use strict";

drawname();

function drawname() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    
    context.lineWidth = 1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50, 175);
    context.lineTo(100,50);
    context.lineTo(150,100);
    context.lineTo(200,50);
    context.lineTo(250,175);
    context.stroke();

    context.lineWidth = 10;
    context.strokeStyle = 'yellow';
    context.beginPath();
    context.moveTo(300,175);
    context.lineTo(300,50);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(475,50);
    context.lineTo(350,50);
    context.lineTo(350,175);
    context.lineTo(475,175);
    context.stroke();

    context.lineWidth = 20;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(550,50);
    context.lineTo(550,175);
    context.moveTo(550,110);
    context.lineTo(650,110);
    context.moveTo(650,50);
    context.lineTo(650,175);
    context.stroke();

    context.lineWidth = 3;
    context.strokeStyle = 'brown';
    context.beginPath();
    context.moveTo(825,50);
    context.lineTo(725,175);
    context.moveTo(825,50);
    context.lineTo(925,175);
    context.moveTo(775,110);
    context.lineTo(875,110);
    context.stroke();

    context.lineWidth = 10;
    context.strokeStyle = 'purple';
    context.beginPath();
    context.moveTo(1025,50);
    context.lineTo(1175,50);
    context.moveTo(1025,50);
    context.lineTo(1025,175);
    context.moveTo(1025,175);
    context.lineTo(1175,175);
    context.moveTo(1175,110);
    context.lineTo(1025,110);
    context.stroke();

    context.lineWidth = 7;
    context.strokeStyle = 'orange';
    context.beginPath();
    context.moveTo(1300,50);
    context.lineTo(1300,175);
    context.lineTo(1400,175);
    context.stroke();

 }

 

 

 