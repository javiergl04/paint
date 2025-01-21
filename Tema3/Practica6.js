var boton = document.getElementById('boton');
var mover = 200;

boton.addEventListener('keydown', function(evento)
{

    if(evento.key === 'ArrowDown') 
    {
        mover += 10;
    }
    else if(evento.key === 'ArrowUp') 
    {
        mover -= 10;
    }

    boton.style.top = mover + "px";

})
