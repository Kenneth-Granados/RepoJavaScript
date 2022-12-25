
import { Todo } from "./todo.class";

export class TodoList {

    constructor () {

        this.todos =[];

    }

    nuevoTodo ( todo ) {

        this.todos.push( todo );
        this.guardarLocalStorage();

    }

    eliminarTodo ( id ) {
        //el !== verifica q los valores y tipos sean iguales, el != solo verifica los valores 
        this.todos = this.todos.filter( todo => todo.id != id );//El método filter()crea un nuevo arreglo con todos los elementos que cumplen la condición implementada por la función dada.
        this.guardarLocalStorage();

    }

    marcarCompletado ( id ) {

        for( const todo of this.todos ) {

            if( todo.id == id ) {// se usa doble igual porque en arreglo se uardan como numeros y resive un string

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados (  ) {

        this.todos = this.todos.filter( todo => !todo.completado )
        this.guardarLocalStorage();


    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify( this.todos ) );//convierte el arreglo a un json perfecto 
        //localStorage.setItem('todo', this.todos );//para ver la diferencia inspecionar:aplicacion
        
    }

    cargarLocalStorage(){

        this.todos = ( localStorage.getItem('todo') )//si existe el arreglo todo
                        ? JSON.parse( localStorage.getItem('todo') )// el inverso de JSON.stringify
                        : [];// regresa un arreglo vaio
        
        //this.todos = this.todos.map( obj => Todo.fromJson( obj ));//barre cada uno de los elementos dentro del arreglo y retorna un nuevo areglo mutado ver documentacion
        this.todos = this.todos.map( Todo.fromJson );
    }

}



