let palabraOculta = "martin"
const mensajePantalla = function(mensaje){
    alert(mensaje)
}

mensajePantalla("Bienvenido al juego palabra oculta")

mensajePantalla("la palabra oculta empieza por M y tiene mi apellido")
mensajePantalla("tienes 3 oportunidades")

//const palabraUsuario = prompt('que palabra es?').toLowerCase();

let intentos = 3

for(let i = 0 ; i < intentos ; i ++){
    const palabraUsuario = prompt('que palabra es?').toLowerCase();
    
    if(palabraUsuario === palabraOculta){
        alert("Felicitaciones Ganaste")
        location.reload()
    }    
    else if(i == intentos.valueOf-1 ){
        alert("se termino el juego Perdiste")
        location.reload()
    }else{
        alert(`fallaste tu intento numero ${i+1}`) 
    }      
}

