//let persona3 = new Persona('Carla', 'Ponce'); // No se puede crear un objeto antes de inicializar la clase

class Persona{ // Clase padre

    static contadorPersona = 0; /* atributo estático */
    /* email = 'Valor default email';  atributo NO estático */

    static get MAX_OBJ(){ /* Este metodo simula una constante */
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
        }else{
            console.log('Has llegado al límite de personas')
            return null
        }
       /*  console.log('\n Incrementando contador en ' + Persona.contadorsPersona) */
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


    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }

    //Sobreescribiendo el metodo de la clase padre (Object)
    toString(){ // Regresa un String
        //Se aplica el polimorfismo -> multiples formas de ejecución
        //El metodo que se ejecuta depende si es una referencia de tipo padre o hija
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludo desde este método static');
    }
    static saludar2(persona){
        console.log('Hola ' + persona.nombre);
    }
}


class Empleado extends Persona{ // Clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }


    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() +  ', ' + this._departamento;
    }
/* ======= */

}

let persona1 = new Persona('Leandro', 'Eugenio');
console.log(persona1.nombre);
persona1.nombre = 'Leo';
console.log(persona1.nombre);
//console.log(persona1);
console.log(persona1._apellido);
persona1.apellido = 'Figueroa';
console.log(persona1.apellido);

let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2.nombre);
persona2.nombre = 'Daniel';
console.log(persona2.nombre);
//console.log(persona2);
console.log(persona2.apellido);
persona2.apellido = 'Martinez';
console.log(persona2.apellido);


let empleado1 = new Empleado('Maria', 'Gimenez', 'Sistemas');
console.log(empleado1);

console.log(empleado1.nombreCompleto()); // Se hereda el metodo de la clase padre
