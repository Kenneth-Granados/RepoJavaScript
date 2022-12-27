const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacciona alergica a las picaduras de arañas'
    },
}


export const buscarHeroe = ( id ) => {
    
    const heroe = heroes[id];
//las promesas resiven dos argumentos (opcionales) esta son por estandar
    return new Promise( ( resolve, reject ) => {//las promesas resiven un callback
        if( heroe ) {
            
            setTimeout(() => resolve( heroe ), 1000);//para trabajar con el await
            //resolve( heroe );

        } else {
            reject(`No existe un héroe con el id ${ id }`);
        }
    });
}

export const buscarHeroeAsync = async( id ) => {//async retorna una nueva promesa
    
    const heroe = heroes[id];

    if( heroe ) {
        return heroe;// es lo mismo que el resolve de buscarHeroe
    } else {
        throw `No existe un héroe con el id ${ id }`;//tradicional cuando se sabe cual es el error
        //throw Error(`No existe un héroe con el id ${ id }`);//Para manejar los errors que ocurren de forma inesperada y obtener más información
    }
}


const promesaLenta = new Promise( ( resolve, reject ) => {
    setTimeout(() => resolve('Promesa Lenta') , 2000);
});

const promesaMedia = new Promise( ( resolve, reject ) => {
    setTimeout(() => resolve('Promesa Media') , 1500);
    // setTimeout(() => reject('Promesa Media') , 1500);
});

const promesaRapida = new Promise( ( resolve, reject ) => {
    setTimeout(() => resolve('Promesa Rápida') , 1000);
    // setTimeout(() => reject('Promesa Rápida') , 1000);//rejet es el error // se comenta xq  tine un reject y al ser la mas rapida me aparece en consola al usar el import a este archivo
});


export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}
