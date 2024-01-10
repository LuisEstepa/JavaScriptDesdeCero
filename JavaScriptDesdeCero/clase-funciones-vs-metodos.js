/*// Capacidades que tienen las funciones al igual que los objetos


// 1. Pasar funciones como argumentos -> callback

function a() { } // -> declaracion de funci�n
function b(a) { }

b(a)

// Retornar funciones

function a() {
    function b (a) { }

    return b
}

// asignar funciones a vaiables -> expesion de funci�n 
const a = function () { }

// Tener propiedades y metodos

function a() {
    const obj = {}
    a(obj)
}



// Anidar funciones -> Nested funtions

function a() {
    function b () {
        function c() {

        }
        c()
    }
}

a()

// �Es posible almacenar funciones en objetos?
*/
const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage() {
        console.log('🔥')
    }
}

rocket.launchMessage()



