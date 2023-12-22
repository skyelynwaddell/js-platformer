import { PlayerGetInput } from "./PlayerGetInput.js";

//init canvas [referenced with "c"]
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

//player class
export class Player
{
    constructor(stats)
    {
        this.stats = stats;
    }

    draw()
    {
        //player color
        c.fillStyle = 'red';

        //player sprite
        c.fillRect(this.stats.x,this.stats.y,this.stats.xscale,this.stats.yscale);
    }

    update()
    {
        // draw player object
        this.draw(); 

        //gravity system
        this.stats.xspd += this.stats.spd * this.stats.dir
        this.stats.yspd += this.stats.grvty;

        //horizontal + vertical calcs
        this.stats.x += this.stats.xspd;
        this.stats.y += this.stats.yspd;
    }
}
