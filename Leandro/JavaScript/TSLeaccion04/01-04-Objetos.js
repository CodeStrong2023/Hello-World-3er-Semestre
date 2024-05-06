let x = 10;  //variable tipo positiva
console.log(x.length); 

//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 30,
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