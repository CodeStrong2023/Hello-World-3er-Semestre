let x = 10;  //variable tipo positiva
console.log(x.length); 

//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 30,
    idioma : 'Es',
    nombreCompleto: function () {
        return this.nombre+' '+this.apellido;
    }
}

console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.email)
console.log(persona.edad)
console.log(persona.nombreCompleto())

let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan'
persona2.direccion = 'Salas 14'
persona2.telefono = '2625500165'
console.log(persona2.telefono)

console.log(persona['apellido']); //accedemos como si fuera un arreglo


//for in
for (propiedad in persona) {
    console.log(propiedad);
    console.log(propiedad[persona])    
}

persona.apellido = 'Eugenio'
delete persona.apellido
console.log(persona)


//distintas formas de imprimir un objeto
//numero1: la ams sencilla:  concatenar cada valor de cada propiedad
console.log(persona.nombre +', '+persona.apellido);

//numero 2: a travez del ciclo for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad])
}

//numero 3: la funci9on Object.values()
let personaArray = Object.values(persona)
console.log(personaArray)

//numero 4: metodo JSON.STRINGIFY
let personaString = JSON.stringify(persona)
console.log(personaString)

function Persona3(nombre = 'Luis',apellido,email) { //constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido
    }
}

let padre = new Persona3('Leo','Lopez','lopezl@gmail.com')
padre.nombre = 'Luis'
padre.telefono = '2625500165';
console.log(padre.nombreCompleto())
console.log(padre)
let madre = new Persona3('Laura','Contrera', 'contreral@gmail.com')
console.log(madre.nombreCompleto())
console.log(madre)
console.log(madre.telefono); //la propiedad no esta definida


//Diferentes formas de crear objetos
//caso 1
let miObjeto = new Object(); //opCION FORMAL
//CASO 2
let miObjeto2 = {}; //Opcion breve y recomendada;


//caso String 1
let miCadena1 = new String('Hola') //Sintaxis formal
//caso String 2
let miCadena2 = 'Hola'; //esta es la sintaxis simplificada y recomendada


//caso con numeros1
let miNumero = new Number(1)//es formal no recomendable
//caso con numeros2
let miNumero2 = 2 //forma simplificada y recomendable

//caso boolean 1
let miBolean1 = new Boolean(false) //forma1
//caso 2 boolean
let miBolean2 = false //forma simplifacda y recomedable

//caso arreglos 1
let miArreglo1 = new Array() //formal
//caso arreglos 2
let miArreglo2 = [] //sintaxis recomendada

//caso funcion 1
let miFuncion1 = new function(){} //todo despues del new es considerado objeto
//caso funcion 2
let miFuncion2 = function(){} // Notacion simplificada y recomendada

//uso del Prtototype
Persona3.prototype.telefono= '2625500165'
console.log(padre);
console.log(madre.telefono)
madre.telefono = "542625500165"
console.log(madre.telefono)

//Uso de call
let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo,telefono) {
        return titulo+this.nombre+' '+this.apellido+ ' '+telefono;
       // return this.nombre+' '+this.apellido;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara',
    nombreCompleto2: function(titulo,telefono) {
        return titulo+this.nombre+' '+this.apellido+ ' '+telefono;

    }
}

console.log(persona4.nombreCompleto2('Lic .', '2625500165' ))
console.log(persona4.nombreCompleto2.call(persona5, 'Ing.', '2625500165'))


//Metodo Apply
let arreglo = ['Ing. ', '542625500165']
console.log(persona4.nombreCompleto2.apply(persona5,arreglo));