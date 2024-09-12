let x = 10; 
console.log(x.length); 
console.log("Tipos primitivos");

let persona = {
    nombre: "Mirco",
    apellido: "Karzovnik",
    email: "mircoeliank@gmail.com",
    edad: 30,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase(); 
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){ 
        return this.nombre+" "+this.apellido;
    },
    get nombreEdad(){ 
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

let persona2 = new Object(); 
persona2.nombre = "Redu";
persona2.direccion = "Ciena404";
persona2.telefono = "2604505013";
console.log(persona2.telefono);
console.log("Creamos un nuevo objeto");
console.log(persona["apellido"]); /
console.log("Usamos el ciclo for in");


for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log("Cambiamos y eliminamos un error");
persona.apellida = "Karzovnik"; 
delete persona.apellida; 
console.log(persona);


console.log("Distintas formas de imprimir un objeto: forma 1");
console.log(persona.nombre+", "+persona.apellido);


console.log("Distintas formas de imprimir un objeto: forma 2");
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

console.log("Distintas formas de imprimir un objeto: forma 3");
let personaArray = Object.values(persona);
console.log(personaArray);


console.log("Distintas formas de imprimir un objeto: forma 4");
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log("Comenzamos a utilizar el método get");
console.log(persona.nombreEdad);

console.log("Comenzamos con el método get y set para idiomas");
persona.lang = "en";
console.log(persona.lang);

function Persona3(nombre, apellido, email){ 
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+" "+this.apellido;
    }
}
let padre = new Persona3("Juan", "Lopez", "juanleo@gmail.com");
padre.nombre = "juan"; 
padre.telefono = "511345434449"; 
console.log(padre);
console.log(padre.nombreCompleto()); 
let madre = new Persona3("Jose", "CNael", "CnaelJose@gmail.com");
console.log(madre);
console.log(madre.telefono); 
console.log(madre.nombreCompleto());




let miObjeto = new Object(); 

let miObjeto2 = {}; 


let miCadena1 = new String("Hola"); 

let miCadena2 = "Hola"; 

let miNumero1 = new Number(1); 

let miNumero2 = 1; 

let miBoolean1 = new Boolean(false); 

let miBoolean2 = false; 
let miArreglo1 = new Array(); 
let miArreglo2 = []; 
let miFuncion1 = new function(){}; /
let miFuncion2 = function(){}; 

Persona3.prototype.telefono = "2615753269";
console.log(padre);
console.log(madre);
madre.telefono = "5492615753269";
console.log(madre.telefono);


let persona4 = {
    nombre: "Paula",
    apellido: "Scriffignano",
    nombreCompleto2: function(titulo, telefono){
        return titulo+": "+this.nombre+" "+this.apellido+" "+telefono;
      
    }
}
let persona5 = {
    nombre: "Alexis",
    apellido: "Lpoez"
}
console.log(persona4.nombreCompleto2("Lic.", "8777653454"));
console.log(persona4.nombreCompleto2.call(persona5, "Ing.", "5234256654745"));


let arreglo = ["Ing.", "8777653454"];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));
