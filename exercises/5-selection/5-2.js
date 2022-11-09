"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMaze();

function drawMaze() {
    context.linewidth = 5;
    
    for (let i = 0; i < 10; i++) {
        let r = Math.round(Math.random());
        let step = 20
        
        if (r == 1) {
            Utils.drawLine(0 + (step * i),0,20 + (step *i),20);
        }
        else {
            Utils.drawLine(0 + (step * 1,0 + step,20,20);
        }
          
    } 
}