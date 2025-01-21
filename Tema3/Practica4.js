var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);

let colorAleatorio = "rgb(" + r + ", " + g + ", " + b + ")";

let texto = document.getElementById("texto");
texto.style.color = colorAleatorio;
