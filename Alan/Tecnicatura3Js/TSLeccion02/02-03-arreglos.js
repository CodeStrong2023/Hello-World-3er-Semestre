//Creacion de Array o arreglos
//let autos = new Array("Ferrari","Renault","BMW"); esta es la sintaxis vieja, ya no se usa asi
const autos = ["Ferrari","Renault","BMW"];
console.log(autos);

//recorremos los elementos de un arreglo
console.log(autos[0]); //Ferrari
console.log(autos[2]); //BMW

for(let i = 0; i < autos.length; i++){
    console.log(i+" : "+autos[i]);
}

//modificamos los elementos del arreglo
autos[1] = "Volvo";
console.log(autos[1])

//agregamos nuevos valores al arreglo
autos.push("Audi"); //agregamos elemento al final del arreglo
console.log(autos);

//otras formas de agregar elementos al arreglo
autos[autos.length] = "Porche";
console.log(autos);

//tercera forma de agregar elementos (TENER CUIDADO porque saltea espacios, crea espacios vacios)
autos[6] = "Renault";
console.log(autos);

//como preguntar si es un array o arreglo
console.log(Array.isArray(autos)); //Devuelve un booleano


console.log(autos instanceof Array); //preguntamos si la variable es una instancia de la clase array