"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawBricks();

function drawBricks() {
    for (let i = 0; i < 6; i++){ 
        for (let j = 0; j < 3; j++){
            context.fillStyle = "brown";
            context.fillRect(50 + i*105, 50 + j*110, 100, 50);
        }
    }

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            context.fillStyle = "brown";
            context.fillRect(100 + i*105, 105 + j*110, 100, 50);
        }
    }
}