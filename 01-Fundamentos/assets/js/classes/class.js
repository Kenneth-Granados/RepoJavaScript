
class Persona {// este es el orden convencional
    //todas las clases usa por defecto el use strict
    static _conteo = 0;// los metodos y propiedades static te permiten usarlos sin necesidad de instanciarlos
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre ); // undefined por que no hay instancia de la misma
        console.log('Hola a todos, soy un método stático');
    }

    // inicilizando propiedades de clases 
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {//constructor con valores por defecto
        // usar this para hacer referencia a las propiedades de clases 
        // para cuando no se pasan argumentos al constructor
        //if ( !nombre ) throw Error('Necesitamos un nombre')
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;
    }
    //para que comida siempre sea mayuscula
    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }


    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        this.quienSoy();//para usar un metodo ya existente dentro de la clase
        console.log(`${ this.codigo} dice: ${ this.frase }`);
    }

}

const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman' );
const ironman   = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' );

// console.log( ironman );
spiderman.miFrase();
// ironman.miFrase();
// a los get y set no se les pone () por que son propiedades de la clas
spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// spiderman.comida = 'Duende Verde';

// console.log( spiderman.getComidaFavorita );

// console.log( spiderman );
// Persona._conteo = 2;
console.log('Conteo estático', Persona._conteo );
console.log( Persona.conteo );
Persona.mensaje();
//Crea una propiedad static externa
Persona.propiedadExterna = 'Hola Mundo';

console.log( Persona.propiedadExterna );
console.log( Persona );



