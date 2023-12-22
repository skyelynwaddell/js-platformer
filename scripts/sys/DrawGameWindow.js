//init canvas [referenced with "c"]
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

import { CanvasSetSize } from "./CanvasSetSize.js";

//draw game window
export function DrawGameWindow()
{
    CanvasSetSize(1024,576);

    c.fillStyle = 'grey';
    c.fillRect(0,0,canvas.width,canvas.height);
}