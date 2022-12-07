
// function crearPersona( nombre, apellido ) {
//     return{
//         nombre,apellido
//         // nombre, //cuando se retorna algo en un objeto y el nombre de la propiedad es el mismo el
//         // apellido: apellido //el nombre de la variable no hace falta escribirlo dos veces 
//     }
// }
//cuando se querie mandar un nuevo objeto o ese objeto es el retorno
const crearPersona = ( nombre, apellido ) => ({ nombre,apellido  });

const persona = crearPersona( 'Kenneth', 'Granados' );
console.log(persona);


function imprimeArgumento () {
    console.log(arguments);
}

//las funciones de flechas no maneja arguments solo las tradicionales
// const imprimeArgumento2 = () =>{
//     console.log( arguments );
// }
// ... referencia a un parametro res que hace que todos los argumentos que sean enviados a crear un arreglo con cada uno de ellos
const imprimeArgumento2 = (edad, ...args) =>{//consideraciones: 1.despues del paramtro res no puede venir otro argumento (...args ,args2)
   // console.log( args );//2. cuando se nesecita extraer una variable independiente antes del res tendra su propio argumento independiente (edad, ...args)
    return args;
}


imprimeArgumento( 10, true, false, 'Kenneth' , 'Hola');
// const argumentos = imprimeArgumento2( 10, true, false, 'Kenneth' , 'Hola');
//recordar que no devuelve edad ya que solo retorna solo args y el primer valor es considerado la edad y es independiente
//console.log(argumentos);
//para crear constantes para cada argumento guardado en un arreglo por res
const [ casado, vivo, nombre, saludo ] = imprimeArgumento2( 10, true, false, 'Kenneth' , 'Hola');
console.log( {casado, vivo, nombre, saludo} );

//para obtener una propiedad de un objeto
const {apellido} = crearPersona( 'Kenneth', 'Granados' );
console.log({apellido});
//para cambiar el nombre a la variable
const {nombre:nuevoNombre} = crearPersona( 'Kenneth', 'Granados' );
console.log({nuevoNombre});

//destructuracion de argumentos
const tony = {
    nombre:'Tony Star',
    codeName:'IronMan',
    vivo: false,
   // edad:40,
    trajes: ['MarkI', 'MarkV', 'HulkBuster'],

};
// se agrego un valor por defecto a la edad por si no viene
const imprimePropiedades = ( { nombre, codeName, vivo, edad = 20, trajes } ) =>{
   console.log(nombre);
   console.log(codeName)
   console.log(vivo);
   console.log(edad);
   console.log(trajes);
}

imprimePropiedades(tony)
