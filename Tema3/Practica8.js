var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var slider = document.getElementById('slider');
var color = document.getElementById('colorchanger');

color.addEventListener('input', function(){
    ctx.strokeStyle = color.value;
})


slider.addEventListener('input', function(){
    ctx.lineWidth = slider.value;
})

canvas.addEventListener('click', function(event){

    ctx.beginPath();

    canvas.addEventListener('mousedown', function(){
        ctx.moveTo(event.clientX, event.clientY);
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    })

    ctx.closePath();

}) 
