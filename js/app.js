"use strict";
console.log("Hola mundo");
console.log("otro hola mundo");
var color;
(function (color) {
    color[color["blanco"] = 0] = "blanco";
    color[color["rojo"] = 1] = "rojo";
    color[color["azul"] = 2] = "azul";
})(color || (color = {}));
console.log("algo");
console.log("muchas mas cosas");
let lista = ["corsa", 1998,];
console.log(lista);
let Cualquiera = [2, "algo", false, 23];
console.log(Cualquiera[2]);
