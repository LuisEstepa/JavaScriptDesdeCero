class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
}

const persona1=new Persona("Alice",25);
console.log(persona1);

persona1.nuevoMetodo=function(){
    console.log(`Mi nombre es ${this.nombre}`);
};

/*
la palabra clave this se refiere al contexto de ejecución actual y 
suele ser una fuente común de confusión para los desarrolladores, 
ya que su comportamiento puede variar dependiendo de cómo se utiliza.

*/ 