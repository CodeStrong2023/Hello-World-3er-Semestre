miFuncion(8, 2); //Esto se le conoce como hosting

function miFuncion(a, b) {
    //console.log("Sumamos: " + (a + b) )
    return a + b;
}

//Llamando la funcion
miFuncion(4,5)

let resultado = miFuncion(6, 7);
console.log(resultado);

//Declaramos una funcion de tipo expresion
let X  = function(a, b){ return a + b}; //necesita cierre con punto y coma
resultado = X(5, 6); //al llmarla se pone la variable y parentesis
console.log(resultado);


//Funciones de tipo self y invoking
(function(a,b){
    console.log('Ejecutando la funcion: '+ (a + b));

})(9,6);

console.log(typeof miFuncion);
function miFuncionDos(a, b) {
    console.log(arguments)
}

miFuncionDos(5, 7, 3, 6);

//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

//Funciones flecha
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 7);
console.log(resultado);

let sumar = function(a = 4, b = 8) {
    console.log(arguments[0]); //muestra el parametro de: a
    console.log(arguments[1]); //muestra el parametro de: b
}
resultado = sumar(3, 2, 9);
console.log(resultado);
//sumar todos los argumentos
let respuesta = sumarTodo(5,4,13,10,9);
console.log(respuesta);
function sumarTodo() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i]; //arguments es para arreglos
    }
    return suma;
}


//Tipos primitivos
let x = 10;
function cambiarValor(a) { //paso por valor
    a = 20;
}



const persona = {
    nombre: 'Juan',
    apellido: 'Lopez'
}

function cambiarValorObjeto(p1) {
    p1.nombre = 'Ignacio';
    p1.apellido = 'Perez'
}
cambiarValorObjeto(persona)
console.log(persona)







