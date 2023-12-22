import { player1 } from "./Player1Create.js";

export function PlayerGetInput(_player=player1)
{
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
            _player.dir = -1
            _player.xspd = _player.spd * _player.dir
            console.log("LEFT");
        break;

        //RIGHT
        case 'ArrowRight':
        case 'd':
            _player.dir = 1
            _player.xspd = _player.spd * _player.dir
            console.log("RIGHT");
        break;

    }
    return (event.key)
    })
}