//let autos = new Array("Ferrari", "Renault", "BMW",); esta es la sintax vieja
const autos = ["Ferrari", "Renault", "BMW"];
console.log(autos);

//Recorremos los elementos de un arreglo
console.log(autos[0]); Ferrari
console.log(autos[2]); BMW

for(let i = 0; i < autos.length; i++){
console.log(i+" : "+autos[i]);
}

// modificamos los elem del arreglo
autos[i] = "Volvo";
console.log(autos[1]); Volvo

//Agregamos nuevos valores al arreglo
autos.push("")