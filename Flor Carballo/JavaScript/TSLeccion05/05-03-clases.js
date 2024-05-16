//let persona3 = new Persona("Facundo", "Ponce"); No funciona, no se puede crear un objeto antes que la clase. Persona no esta definida

class Persona{ //clase padre
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}
class Empleado extends Persona{ //clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamenti(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

let persona1 = new Persona("Flor", "Carballo");
console.log(persona1.nombre);
persona1.nombre = "Nerea";
console.log(persona1.nombre);
persona1.apellido = "Muñoz";
console.log(persona1.apellido);
//console.log(persona1);
let persona2 = new Persona("Paulina", "Generale");
console.log(persona2.nombre);
persona2.nombre = "Vero";
console.log(persona2.nombre);
persona2.apellido = "Escalante";
console.log(persona2.apellido);
//console.log(persona2);

let empleado1 = new Empleado("Maria", "Rodriguez", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombre);

