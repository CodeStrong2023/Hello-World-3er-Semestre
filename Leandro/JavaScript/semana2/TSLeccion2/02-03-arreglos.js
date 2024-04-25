// let autos = new Array('Ferrari', 'Renault', 'BMW'); ESTA ES LA SINTAXIS VIEJA
const autos = ['Ferrari','Renault','BMW'];
console.log(autos); 


//Recorremos los elementos de un arreglo
console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length){
    console.log(i+' : '+autos)
}

//Modificamos los elementos del arreglo
autos[1] = 'Volvo'
console.log(autos)


//Agregamos nuevos valores al arreglo
autos.push('Audi'); //Agregamos el elemento al final del arreglo
console.log(autos)


//Otros formas de agregar elementos del arreglo
autos[autos.length] = 'Porche';
console.log(autos)

//Tercera forma de agregar alementos teniendo CUIDADO
autos[50] =  'Renault';
console.log(autos);

// COmo preguntar si es una Array o Arreglo
console.log(Array.isArray(autos)) //Devuelce un booleano


console.log(autos instanceof Array); //Preguntamos si la variable es una instancia de la clase Array





