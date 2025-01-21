var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var slider = document.getElementById('slider');
var color = document.getElementById('colorchanger');

var lastX = 0;
var lastY = 0;
var estaPint = false;

color.addEventListener('input', function(){
    ctx.strokeStyle = color.value;
})


slider.addEventListener('input', function(){
    ctx.lineWidth = slider.value;
})

canvas.addEventListener('mousedown', function(event){

        estaPint = true;

        ctx.beginPath(); 

        ctx.moveTo(event.offsetX, event.offsetY);
        ctx.lineTo(event.offsetX, event.offsetY);

        ctx.stroke();
        
})

canvas.addEventListener('mousemove', function(event){

    if(estaPint === true)
    {

        lastX = event.offsetX;
        lastY = event.offsetY;

        ctx.lineTo(lastX, lastY);
        ctx.stroke();
    }
    

})

canvas.addEventListener('mouseup', function(event){

    estaPint = false;
    ctx.closePath();

})




