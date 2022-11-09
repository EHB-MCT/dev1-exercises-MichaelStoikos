"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    while (i <= 7) {
        let x = 0;
        let step = 100;
        Utils.drawLine(100, step + 50 * i, 100, step + 50 * i);
        Utils.drawLine(step + 50 * i, 100, step + 50 * i, 100);
        i++;
    }
}