//import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';// se comenta xq promesaRapida tine un reject y me aparece en consola
import { buscarHeroe, buscarHeroeAsync } from './js/promesas';

import { heroesCiclo, heroeIfAwait, obtenerHeroesArr, obtenerHeroeAwait } from './js/await';

//promesa.race ejecuta todas las promesas y obtiene el mensaje de la promesa que se resuelve mas rapido
// promesaLenta.then( console.log );
// promesaMedia.then( mensaje => console.log(mensaje) );// el funcionamiento es el mismo que ( console.log )
// promesaRapida.then( console.log );
// Promise.race([ promesaLenta, promesaMedia, promesaRapida ])//si una promesa da error y no es la mas rapida la ignora
//  //   .then( mensaje => console.log(mensaje) );
//     .then( console.log )
//     .catch( console.warn );

// buscarHeroe( 'capi' ).then( console.log ).catch( console.warn );
// buscarHeroeAsync( 'iron' ).then( console.log ).catch( console.warn );

// obtenerHeroesArr().then( console.table );
//console.time('await');

//     obtenerHeroesArr().then( heroes =>{
//     console.table( heroes );
//     console.timeEnd('await');
// } );


// obtenerHeroeAwait('capi')
//     .then( heroe =>{
//     console.table( heroe );
//     console.timeEnd('await');
// } );

heroesCiclo();

heroeIfAwait('iron');

