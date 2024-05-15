let x = 10; //variable de tipo primitiva
console.log(x.length);
console.log("tipos primitivos");
//objeto
let persona = {
    nombre: "Carlos",
    apellido: "Gil",
    email: "cgil@gmail.com",
    edad: 28,
    idioma: "ES",
    get lang(){
        return this.idioma.toUpperCase(); //Convierte las minúsculas a mayúsculas
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){ //Método o función en JavaScript
        return this.nombre+" "+this.apellido;
    },
    get nombreEdad(){ //Este es el método get
        return "El nombre es: "+this.nombre+", Edad: "+this.edad;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona)
console.log(persona.nombreCompleto());
console.log("Ejecutando con un objeto");

let persona2 = new Object(); //debe crear un objeto en memoria
persona2.nombre = "Juan";
persona2.direccion = "Salada 14";
persona2.telefono = "5498794654";

console.log("Creamos un nuevo objeto");
console.log(persona2.telefono);
console.log(persona["apellido"]); //accedemos como si fuera un arreglo

console.log("Usamos el ciclo for in")
//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log("Cambiamos y eliminamos un error");
persona.apellida = "Betancud"; //cambiamos dinamicamente el valor del objeto
delete persona.apellida; //eliminamos el error
console.log(persona);

//Distinta forma de limpiar un objeto
//Numero 1: la mas sencilla: concatenar cada valor de cada propiedad
console.log("Distinta forma de imprimir un objeto: forma 1");
console.log(persona.nombre+ ", "+ persona.apellido);

//Numero 2: a traves del ciclo for in
console.log("Distinta forma de imprimir un objeto: forma 2");
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Numero 3: la funcion object.values()
console.log("Distinta forma de imprimir un objeto: forma 3");
let personaArray = Object.values(persona);
console.log(personaArray);

//Numero 4: Utilizaremos el metodo JSON.stringify
console.log("Distinta forma de imprimir un objeto: forma 4");
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log("Comenzamos a utilizar el método get");
console.log(persona.nombreEdad);

console.log("Comenzamos con el método get y set para idiomas");
persona.lang = "en";
console.log(persona.lang);

function Persona3(nombre, apellido, email){ //constructor 
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+" "+this.apellido;
    }
}
let padre = new Persona3("Leo", "Lopez", "lopezl@gmail.com");
padre.nombre = "Luis"; //modificamos el nombre
padre.telefono = "54938577389"; //una propiedad exclusiva del objeto padre
console.log(padre);
console.log(padre.nombreCompleto()); //Utilizamos la funcion 
let madre = new Persona3("Laura", "Contrera", "contreral@gmail.com");
console.log(madre);
console.log(madre.telefono); //la propiedad no esta definida
console.log(madre.nombreCompleto());

//Diferentes formas de crear objetos
//caso objeto 1
let miObjeto = new Object(); //esta es una opción formal
//caso objeto 2
let miObjeto2 = {}; //esta opcion es breve y recomendada

//caso string 1
let miCadena1 = new String("Hola"); //sintaxis formal
//caso string 2
let miCadena2 = "Hola"; // esta es la sintaxis simplificada

//caso con numeros 1
let miNumero1 = new Number(1); //es formal no recomendable
//caso con numeros 2
let miNumero2 = 1; //sintaxis recomendada

//caso boolean 1
let miBoolean1 = new Boolean(false); //formal
//caso boolean 2
let miBoolean2 = false; //sintaxis recomendada

//caso arreglos 1
let miArreglo1 = new Array(); //formal
//caso arreglos 2
let miArreglo2 = []; //sintaxis recomendada

//caso function 1
let miFuncion1 = new function(){}; //Todo despues de new es considerado objeto
//caso function 2
let miFuncion2 = function(){}; //notacion simplificada y recomendada

//uso de prototype
Persona3.prototype.telefono = "261654891";
console.log(padre);
console.log(madre);
madre.telefono = "5462168983";
console.log(madre.telefono);

//uso call
let persona4 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto2: function(titulo, telefono){
        return titulo+": "+this.nombre+" "+this.apellido+" "+telefono;
        //return this.nombre+" "+this.apellido;
    }
}

let persona5 = {
    nombre: "Carlos",
    apellido: "Lara"
}
console.log(persona4.nombreCompleto2("Lic.", "55651289"));
console.log(persona4.nombreCompleto2.call(persona5, "Ing.", "513216989"));

//metodo apply
let arreglo = ["Ing.", "54325168"];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));