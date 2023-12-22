//#region Imports
import { DrawGameWindow } from './DrawGameWindow.js';
import { player1 } from '../player/Player1Create.js';
import { PlayerGetInput } from '../player/PlayerGetInput.js';

//#endregion

export function GameLoop()
{
    window.requestAnimationFrame(GameLoop);
    DrawGameWindow();
    //player1.
    //update();

    window.addEventListener('keydown', (event) => {
    
        switch(event.key)
        {
            //UP
            case 'ArrowUp':
            case 'w':
                console.log("UP");
            break;
            
            //DOWN
            case 'ArrowDown':
            case 's':
                console.log("DOWN");
            break;
    
            //LEFT
            case 'ArrowLeft':
            case 'a':
                player1.stats.dir = -1
                console.log(" DIR: " + player1.stats.dir)
                console.log(" XSPD: " + player1.stats.xspd)
            break;
    
            //RIGHT
            case 'ArrowRight':
            case 'd':
                player1.stats.dir = 1
                console.log(" DIR: " + player1.stats.dir)
                console.log(" XSPD: " + player1.stats.xspd)
            break;
    
        }

        player1.update();
        
    })


    
    
    //PlayerGetInput();

}