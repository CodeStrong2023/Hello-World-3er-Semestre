miFuncion(8, 9); 

function miFuncion(a, b){
    //console.log('Sumamos: '+ (a + b));
    return a + b;
}
miFuncion(5, 4);
let resultado = miFuncion(6, 7);
console.log(resultado);
let x = function(a, b){ return a + b}; // Necesita cierre con punto y coma
resultado = x(5, 6); // Al llamarla se pone la variable y paréntesis
console.log(resultado);

(function(a, b){
    console.log("Ejecutando la función: "+ (a + b));
})(9, 6);
console.log(typeof miFuncion);
function miFuncionDos(a, b){
    console.log(arguments.length);
}

miFuncionDos(5, 7, 3, 6);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);


const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 7); 
console.log(resultado);

let sumar = function(a = 4, b = 8){
    console.log(arguments[0]); // Muestra el parametro de A
    console.log(arguments[1]); // Muestra el parametro de B
    return a + b + arguments[2];
}
resultado = sumar(3, 2, 9);
console.log(resultado);


let respuesta = sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; //argumentus para arreglos
    }
    return suma;
}


let k = 10;
function cambiarValor(a){ // Paso por valor
    a = 20;
}
cambiarValor(k);
console.log(k);

//Paso por referencia
const persona = {
    nombre: "Flor",
    apellido: "Carballo"
}
console.log(persona);
function cambiarValorObjeto(p1){
    p1.nombre = "Rufina";
    p1.apellido = "Regina";
}
cambiarValorObjeto(persona)
console.log(persona);

