import { buscarHeroe as BuscarHeroeCallback} from './js/callbacks' // para cambiar el nombre en este archivo

import { buscarHeroe } from './js/promesas'



const heroeId1 = 'capi';
const heroeId2 = 'iron';

//callbacks
// buscarHeroe( heroeId1 , ( err, heroe1 )=>{// por convención el primer argumento es el error
//     if (err) { return console.error( err ); }
//     // else {
//     //     console.info( heroe );
//     // }

//     //problematica de los callback es que con la nesecidad de realizar aciones en base a las respuestas del callback se van anidando conocido con Callback Hell
//     buscarHeroe( heroeId2, (err, heroe2) =>{
//         if (err) { return console.error( err ); }
//         console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a una misión`);

//     });       

// });
//Promesas
// catch(cuando hay error),finally( realiza limpieza y se ejecuta despues de cath o then),then(todo salio bien)
// buscarHeroe( heroeId1 ).then( heroe1 =>{// referencia
//     //console.log(`Enviando a ${heroe.nombre} y a una misión`);
//     buscarHeroe( heroeId2 ).then( heroe2 =>{
//         console.log(`Enviando a ${heroe1} y a ${heroe2} a una misión`)
//     });
// });

//ejecutando promesas en paralelo ventaja de las promesas
Promise.all( [ buscarHeroe( heroeId1 ), buscarHeroe( heroeId2 ) ]) //.then(heroes =>{forma 1
    .then(([heroe1, heroe2]) =>{//usando destrustruracion 
    //console.log('Promise.all', arr);
    // console.log(`Enviando a ${heroes[0]} y a ${heroes[1]} a una misión`);
    console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre } a una misión`);

}).catch( err =>{//maneja el error
    alert(err);
}).finally( () => {
    console.log('Fin del programa')
});

console.log('Fin del Promise.all');

