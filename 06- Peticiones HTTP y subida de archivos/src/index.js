
//import { init } from './js/chistes-page';
//import { init } from './js/usuarios-page';
import { init } from './js/archivos-page';
//import { obtenerChiste } from './js/http-provider';

//import * as CRUD from './js/crud-provider';//toma todo lo que esta exportado y crea un objeto el cual tendra todas las propiedades exportadas

//const jokeUrl     = 'https://api.chucknorris.io/jokes/random';
// fetch( jokeUrl ).then( resp =>{
//     resp.json().then( ({ id, value }) =>{
//         console.log( id ); 
//         console.log( value ); 
//     });
// });
// fetch( jokeUrl ).//promesa en cadena
//     then( resp => resp.json())
//     .then( ({ id, value }) =>{
//         console.log( id, value ); 
// });

//obtenerChiste().then( console.log );

init();


//CRUD.getUsuario( 2 ).then( console.log );

// CRUD.crearUsuario({
//     name: 'Fernando',
//     job: 'Carpintero'
// }).then( console.log );

// CRUD.actualizarUsuario( 1, {
//     name: 'Melissa',
//     job: 'Developer'
// }).then( console.log );


// CRUD.borrarUsuario( 1 ).then( console.log );