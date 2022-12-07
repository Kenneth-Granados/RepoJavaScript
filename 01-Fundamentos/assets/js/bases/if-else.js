

let a = 5;


if ( a >= 10 ) { // manada un valor booleano excepciones: undefined, null, una asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}


// console.log('Fin de programa');

const hoy = new Date(); // {}date obtiene la informacion del momento actual
let dia = hoy.getDay(); // 0: Domingo, 1: lunes, 2: martes.....

console.log({ dia });

if ( dia === 0 ) {// el = es para asignación, el == es para si es igual sin importar el tipo
    console.log('Domingo');// el === evalua si los valores y el tipado es el mismo 
} else if( dia === 1 ) {
    console.log('Lunes');
    
    // if ( dia === 1 ) {
    //     console.log('Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }
} else if ( dia === 2 ){
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo...');
}


// Sin usar If Else, o Switch, únicamente objetos
dia = 6; // 0:domingo, 1: lunes....

const diasLetras = {//hecho con objeto
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miércoles',
    4:'jueves',
    5:'viernes',
    6:'sábado',
}
//con arreglos
const diasLetras2 = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado',];


// día de la semana
console.log( diasLetras2[dia] ||'Día no definido' );