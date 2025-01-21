function Sumar(n1,n2)
{
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var res = document.getElementById('res');
    
    res.value = parseInt(n1) + parseInt(n2);
}

function Restar(n1,n2)
{
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var res = document.getElementById('res');
    
    res.value = parseInt(n1) - parseInt(n2);
}

function Multiplicar(n1,n2)
{
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var res = document.getElementById('res');
    
    res.value = parseInt(n1) * parseInt(n2);
}

function Division(n2,n2)
{
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var res = document.getElementById('res');
    
    res.value = parseInt(n1) / parseInt(n2);
}