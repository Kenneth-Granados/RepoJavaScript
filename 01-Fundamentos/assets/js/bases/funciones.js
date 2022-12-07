
function saludar(nombre) {//tradicional pero no muy recomendada
    // console.log(arguments);
    // console.log('Hola '+ nombre);
   // return [1,2];// de esta forma se retorna dos valores
}

// var saludar=12;
// let saludar=12;//posibilidad de que ocuran estos errores de la manera tradicional
// saludar();
// cuando una funcion no tiene return explisito retorna undefine
const saludar2 =function (nombre) {//función anónima
    console.log('Hola '+ nombre);
}

//funciones de flecha o lamda function
//cuando en una funcion solo se retorna algo simple se puede dejar asi posible solo en lamda function 
const saludarFlecha = () => console.log('Hola papu');

const saludarFlecha2 = (nombre) => {//los parentesis son opcionales cuando se mandan argumentos pero es buena practica
    console.log('Hola '+ nombre);
}



saludar2( 'Kenneth' );
saludarFlecha();
saludarFlecha2('Ashley');
const retornoDeSaludar = saludar( 'Kenneth2.1',21, false, 'Nicaragua' );
console.log(retornoDeSaludar[0],retornoDeSaludar[1]);//para obtener lo valores que retorna

function sumar( a, b ) {//los que se encuentre despues del return jamas se ejecuta
    return a + b;
    console.log('hola')
}

// const sumar2 = (a,b) => {
//     return a + b;
// }// esta forma es para cuando solo se tiene el return
const sumar2 = (a,b) => a + b;

console.log( sumar(1,2) );

function getAleatorio() {
    return Math.random();
}

// En una función de flecha, que no tenga llaves { }
// getAleatorio2()
const getAleatorio2 = () => Math.random();


console.log(  getAleatorio2()   );
