import { buscarHeroeAsync, buscarHeroe } from './promesas';


const heroesIds = ['capi','iron','spider'];
const heroesPromesas = heroesIds.map( buscarHeroe );
// const heroesPromesas = heroesIds.map( id => buscarHeroe(id) );


export const obtenerHeroesArr = async() => {

    //const heroesArr = [];
    // for (const id of heroesIds) {
    //     //const heroe = buscarHeroeAsync(id);
    //     const heroe = await buscarHeroeAsync(id);//el await no se puede usar si no esta dentro de una funcion async; e; await espera hasta que la promesa se resuelva
    //     heroesArr.push(heroe);
    // }
    // for (const id of heroesIds) {
    //     heroesArr.push( buscarHeroe( id ) );//evitar usar el await dentro de un ciclo for   
    // }
    // return await Promise.all( heroesArr );;
    return await Promise.all( heroesIds.map( buscarHeroe ) );//protip: optmizado
};


export const obtenerHeroeAwait = async( id ) => {

    try {

        const heroe = await buscarHeroeAsync( id );
        return heroe;

    }catch( err ) {
        console.log( 'CATCH!!!' );
        return {// tiene que retornar las mismas propiedades cuando se usa un async
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };

    }
}


export const heroesCiclo = async () => {

    console.time('HeroesCiclo');

    // heroesPromesas.forEach( async(p) => console.log( await p ));// no recomendado xq se separa el hilo del programa


    for await( const heroe of heroesPromesas ) {
        console.log(heroe);
    }

    console.timeEnd('HeroesCiclo');

    // const heroes = await Promise.all( heroesPromesas );
    // heroes.forEach( heroe => console.log(heroe) );
}


export const heroeIfAwait = async(id) => {

    if ( (await buscarHeroeAsync(id)).nombre === 'Ironman' ) {
        console.log('Es el mejor de todos');
    } else {
        console.log('Naaaa');
    }

}

