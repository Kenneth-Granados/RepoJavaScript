//función anonimas auto invocadas
//patrón modulo
const miModulo =  (() => {

   'use strict'; // evalua el codigo usar siempre en este patron

   let deck       = [];
   let tipos      = ['C','D','H','S'],
       especiales = ['A','J','K','Q'];

   let puntosJugadores = [];

   const btnPedir   = document.querySelector('#btnPedir'),
         btnNuevo   = document.querySelector('#btnNuevo'),
         btnDetener = document.querySelector('#btnDetener');

   const divCartasJugadores   = document.querySelectorAll('.divCartas'),
                   puntosHTML = document.querySelectorAll('small'); 

   const inicializarJuego = ( numJugadores = 2 ) => {
      deck = crearDeck();
      puntosJugadores = [];
      for (let i = 0; i < numJugadores; i++) {
         puntosJugadores.push(0);
         
      }

      puntosHTML.forEach( elem => elem.innerText = 0 );
     
      divCartasJugadores.forEach( elem => elem.innerText = '' );

      btnPedir.disabled = false;
      btnDetener.disabled = false;

   }

   const crearDeck = () => {
      deck = [];
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
         return _.shuffle( deck );
   }

   const pedirCarta = () => {

      if ( deck.length ===0 ){
         throw 'No hay mas cartas en la baraja';
      }
      return deck.shift();
   }
 
   const valorCarta = ( carta ) =>{
      const valor = carta.substring(0, carta.length -1);
      return ( isNaN(valor) )  ? 
            ( valor === 'A' ) ? 11 : 10
                              : valor * 1;
   }

   const acumularPuntos = ( carta, turno ) => {
      puntosJugadores[turno]  = puntosJugadores[turno] + valorCarta( carta );
      puntosHTML[turno].innerText = puntosJugadores[turno];
      return puntosJugadores[turno];
   }

   const crearCarta = ( carta, turno ) => {
         const imgCarta = document.createElement('img');
         imgCarta.src = `assets/cartas/${ carta }.png` ;
         imgCarta.classList.add('carta');
         divCartasJugadores[turno].append( imgCarta );
   }

   const determinarGanador = () => {
      //desustruración de areglos
      const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

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

   const turnoComputadora = ( puntosMinimos ) => {

      let puntosComputadora = 0;

      do {

         const carta = pedirCarta();
        
         puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1 );
         crearCarta(carta, puntosJugadores.length - 1 );

         
      } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

      determinarGanador();

   }

   btnPedir.addEventListener('click', () =>{

      const carta = pedirCarta();
      const puntosJugador = acumularPuntos(carta, 0 );
      crearCarta(carta, 0 );


      if ( puntosJugador > 21 ) {
         turnoComputadora( puntosJugador );
         console.warn('Lo siento, perdiste');
         btnPedir.disabled = true;
         btnDetener.disabled = true;
        
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
      turnoComputadora( puntosJugadores[0] );

   });

   // btnNuevo.addEventListener('click', () =>{

   //    inicializarJuego();

   // });
   //solo lo que se retorne va a ser publico y visible afuera del modulo
   return {
      nuevoJuego : inicializarJuego //nombre con el cual sera conocida fuera del modulo : nombre de la funcion o variable
   }
})();
//forma 2
// ( function ()  {

// })();



