
//let 
const personaje = {//const para no poder realizar una asigancion directa ejemplo personaje=123;
    nombre:'Tony Star',
    codeName:'IronMan',
    vivo: false,
    edad:40,
    coords: { 
         lat: 34.034,
        lng:-118.70
    },
    trajes: ['MarkI', 'MarkV', 'HulkBuster'],
    direccion: {
        zip:'10880, 90265',
        ubicacion:'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War'
};


console.log(personaje);
console.log('Nombre',personaje.nombre);
console.log('Nombre',personaje['nombre']);
console.log('Edad',personaje.edad);
console.log('Coors',personaje.coords);
console.log('Lat',personaje.coords.lat);
console.log('No. Trajes',personaje.trajes.length);
console.log('Último Traje',personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Última Pelicula',personaje['ultima-pelicula']);

//Mas detalles
delete personaje.edad;// para borrar una propiedad
console.log(personaje);

personaje.casado = true;
//personaje = true; con const se bloquea la asignacion del objeto

//util para barrer cada elemento y obtener su valor
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);//Bloquea que se agreguen o modifiquen propiedades pero no bloquea las propiedades dentro de estos objetos

personaje.dinero = 10000;
personaje.casado = false;
personaje.coords.lat = 222;//para bloquear se tiene que volver a hacer freeze(personaje.coords)
console.log(personaje);

//para listar todas las propiedades del objeto
const propiedades = Object.getOwnPropertyNames(personaje);
//para listar todos las valores del objeto
const valores = Object.values(personaje);
console.log(propiedades,valores);

