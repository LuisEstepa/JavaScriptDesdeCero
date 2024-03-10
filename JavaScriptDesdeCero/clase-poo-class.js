class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`)
    }
}

persona1 = new Persona('Luis', 'Estepa', 34)

persona1.saludar()

