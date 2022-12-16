
let deck       = [];
let tipos      = ['C','D','H','S']
let especiales = ['A','J','K','Q']

let puntosJugador     = 0,
    puntosComputadora = 0;

const btnPedir = document.querySelector('#btnPedir');
const btnNuevo = document.querySelector('#btnNuevo');
const btnDetener = document.querySelector('#btnDetener');

const divCartasJugador     = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computadora-cartas')

const puntosHTML = document.querySelectorAll('small'); 

const crearDeck = () => {
 
   for( let i = 2; i <= 10; i++) {
         for( let tipo of tipos){
               deck.push( i + tipo)
         }

      }

      for( let esp of especiales) {
         for( let tipo of tipos){
               deck.push( esp + tipo)
         }

      }

      deck = _.shuffle( deck );
      console.log( deck );
      return deck;

}

crearDeck();

const pedirCarta = () => {

   if ( deck.length ===0 ){
      throw 'No hay mas cartas en la baraja'
   }

   const carta = deck.shift();

   return carta;
}


const turnoComputadora = ( puntosMinimos ) => {
   
   do {

      const carta = pedirCarta();
      puntosComputadora = puntosComputadora + valorCarta( carta );
      puntosHTML[1].innerText = puntosComputadora;

      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${ carta }.png` ;
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

   }, 10);

}

const valorCarta = ( carta ) =>{

   const valor = carta.substring(0, carta.length -1);

   return ( isNaN(valor) )  ? 
          ( valor === 'A' ) ? 11 : 10
                            : valor * 1;
   

}

btnPedir.addEventListener('click', () =>{

   const carta = pedirCarta();
   puntosJugador = puntosJugador + valorCarta( carta );
   puntosHTML[0].innerText = puntosJugador;

   const imgCarta = document.createElement('img');
   imgCarta.src = `assets/cartas/${ carta }.png` ; 
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


