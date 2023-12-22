//init canvas [referenced with "c"]
const canvas = document.querySelector('canvas');

export function CanvasSetSize(_width,_height)
{
    canvas.width = _width;
    canvas.height = _height;
}