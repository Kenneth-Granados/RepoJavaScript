/**
 * DOM = Document Object Model (conjunto de objetos anidados para crear un documento y tener acceso
 * dinamico a través de programación y manipularlos)
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds
 * 2H = Two of Hearts 
 * 2S = Two of Spades
*/

let deck       = [];
let tipos      = ['C','D','H','S']
let especiales = ['A','J','K','Q']

let puntosJugador     = 0,
    puntosComputadora = 0;

//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnNuevo = document.querySelector('#btnNuevo');
const btnDetener = document.querySelector('#btnDetener');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
// const smallJugador = document.querySelector('small'); solo selecione el primer smmall
const puntosHTML = document.querySelectorAll('small'); //selecciona todos

const crearDeck = () => {
 
   for( let i = 2; i <= 10; i++) {
         for( let tipo of tipos){
               deck.push( i + tipo);
         }

      }

      for( let esp of especiales) {
         for( let tipo of tipos){
               deck.push( esp + tipo);
         }

      }

      //console.log( deck )
      deck = _.shuffle( deck );
      console.log( deck );
      return deck;

}

crearDeck();

//Funcion que me permite tomar una carta

const pedirCarta = () => {

   if ( deck.length ===0 ){
      throw 'No hay mas cartas en la baraja';
   }

   const carta = deck.shift();// regresa el primer valor del arreglo
   //const carta = deck.pop();// regresa el último valor del arreglo
   // console.log( deck );
   // console.log( carta );

   return carta;
}

// turno d la computadora
const turnoComputadora = ( puntosMinimos ) => {
   
   do {

      const carta = pedirCarta();
      puntosComputadora = puntosComputadora + valorCarta( carta );
      puntosHTML[1].innerText = puntosComputadora;

      // <img class="carta" src="assets/cartas/2C.png"> 
      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${ carta }.png` ; //asi es como se insertar codigo javascript
      imgCarta.classList.add('carta');
      divCartasComputadora.append(imgCarta);

      if ( puntosMinimos > 21 ) break;
      
   } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

   setTimeout(() => {
      if ( puntosComputadora === puntosMinimos ) {
         alert('Nadie Gana');
   
      } else if ( puntosMinimos > 21) {
         alert('Computadora Gana');
   
      } else if ( puntosComputadora > 21 ) {
         alert('Jugador Gana');
      } else {
         alert('Computadora Gana')
      }

   }, 100);

}

// pedirCarta();
const valorCarta = ( carta ) =>{

   const valor = carta.substring(0, carta.length -1);
   //let puntos = 0;
   //console.log( valor );
   // if ( isNaN() ) {// is not at number(isNaN) //forma 1
       //console.log('No es un número')
   //    puntos = ( valor === 'A' ) ? 11 : 10; // Operador ternario si(?) se cumple la condición vale 11 si no(:) val 10

   // } else {
     //console.log('Si es un número')
   //    puntos = valor * 1;
   //console.log(puntos)
   // }
   //forma 2
   return ( isNaN(valor) ) ? /**puntos = */( valor === 'A' ) ? 11 : 10
                      : valor * 1;
   

}

//const valor = valorCarta( pedirCarta() )
//console.log( {valor} )


// Eventos
//CallBack funcion que se manda como argumento
btnPedir.addEventListener('click', () =>{

   const carta = pedirCarta();
   puntosJugador = puntosJugador + valorCarta( carta );
   puntosHTML[0].innerText = puntosJugador;

   // <img class="carta" src="assets/cartas/2C.png"> 
   const imgCarta = document.createElement('img');
   imgCarta.src = `assets/cartas/${ carta }.png` ; //asi es como se insertar codigo javascript
   imgCarta.classList.add('carta');
   divCartasJugador.append(imgCarta);

   if ( puntosJugador > 21 ) {
      console.warn('Lo siento, perdiste');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora( puntosJugador );
   } else if ( puntosJugador === 21) {
      console.warn('21, Ganaste');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora( puntosJugador );
   } 

});

btnDetener.addEventListener('click', () =>{

   btnPedir.disabled   = true;
   btnDetener.disabled = true;
   turnoComputadora( puntosJugador );

});

btnNuevo.addEventListener('click', () =>{

   console.clear();
   deck = [];
   crearDeck();

   puntosJugador     = 0;
   puntosComputadora = 0;

   puntosHTML[0].innerText = 0;
   puntosHTML[1].innerText = 0;

   divCartasJugador.innerHTML = '';
   divCartasComputadora.innerHTML = '';

   btnPedir.disabled = false;
   btnDetener.disabled = false;

});


