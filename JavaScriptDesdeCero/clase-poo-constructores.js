// clase y funcion constructora

const persona = {
    nombre: 'Luis',
    apellido: 'Estepa',
    identificacion: 1018421132,
    telefono: '3102513009'
}

function Persona(nombre, apellido, identificacion, telefono){
    this.nombre = nombre,
    this.apellido = apellido,
    this.identificacion = identificacion,
    this.telefono = telefono
}

const persona1 = new Persona('Martin', 'Estepa', 12345, '3212193080')

console.log(persona1)

persona2=new Persona("Diego","De Granda",35);
console.log(persona2);
Persona.prototype.saludar=function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};
persona1.saludar();
persona2.saludar();