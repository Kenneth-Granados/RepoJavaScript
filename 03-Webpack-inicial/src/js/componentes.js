//si no se le pone export esta bloqueada para que se use solo en este archivo
//importando estilos css de forma dinamica
import '../css/componentes.css';

export const saludar = ( nombre ) => {
    console.log('Creando etiqueta h1, en el HTML');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }`;

    document.body.append( h1 );

} 
