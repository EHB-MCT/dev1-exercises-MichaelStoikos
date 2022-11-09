"use strict"
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontal = 60;
let vertical = 30

let width = 600;
let height = 300;

drawLines();

function drawLines() {
    let step = width/horizontal
    for (let i = 0; i <= horizontal; i++) {
        Utils.drawLine(step * i, 0, width - (step * i), height);
    }
     
    for (let i = 0; i <= vertical; i++) {
        
        Utils.drawLine(0, (step * i), width, height - (step * i));
    }
}