// Pruebas JavaScript
var numero = 5;

var array = [];

// array es el nombre del array, no el tipo de dato
var array2 = [1,2,3,4,5];

// varios tipos de datos en un mismo array
var array3 = ["hola", 5, true, 6.4];

// array de arrays
var superarray = [array2, array3];
var supersuperarray = [superarray];

console.log(array3[2]);

console.log(array2[array2.length-1]);

function MiFuncion(n1,n2)
{
    console.log(n1 + n2);
}

MiFuncion(10,50);
