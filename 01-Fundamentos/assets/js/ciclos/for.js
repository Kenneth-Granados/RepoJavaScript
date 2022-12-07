
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
for( let i = 0; i < heroes.length; i++ ) {
    console.log( heroes[i] );
}


console.warn('For in');
for( let i in heroes ) {
    console.log( heroes[i] );
}

console.warn('For of');// es utilizado para obtener referencias de valores de objetos o arreglos más sencillo
for( let heroe of heroes ){// en ves de i por conveción se usa la forma singular  del nombre del arreglo o objeto
    console.log( heroe );
}



