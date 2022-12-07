
let a = 10;//todos los primitivos se pasan por valor
let b = a;
a = 30;

console.log({ a, b });

//romper la relación 
let juan = { nombre: 'Juan' };//Los objetos se pasan por referencia
let ana  = { ...juan };// esta es la forma de poder copiar un objeto dentro de otro  ademas usar el operador espred(...) para separa las
ana.nombre = 'Ana';//propiedes y valores de un objeto

console.log({ juan, ana });


const cambiaNombre = ({ ...persona }) => {//cuando es (...cualquiervariable) se le llama rest que significa unir 
    persona.nombre = 'Tony';//cuando se encuentra ...cualquierOBbjeto mientras no este entre paréntesis se le llama espred
    return persona;
}

let peter = { nombre: 'Peter' };
let tony  = cambiaNombre( peter );


console.log({ peter, tony });

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');//time inicia un timer
const otrasFrutas = frutas.slice();
console.timeEnd('slice');//finaliza el timer usalo para medir el rendimiento

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');//agregando elemento 

console.table({ frutas, otrasFrutas });//mostrar en formato tabla