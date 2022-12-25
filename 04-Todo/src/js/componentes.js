import { Todo } from '../classes'
import { todoList } from '../index'
 
//referencia
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');


export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
		<div class="view">
		    <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
			<label>${ todo.tarea }</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>`;

    const div     = document.createElement('div');// se hace con el div porque es mas facil la creaión
    div.innerHTML = htmlTodo;
	
  //  divTodoList.append( div );//inspeciona el elemnto para ver la diferencia
    divTodoList.append( div.firstElementChild );
	
    return div

} 

// Eventos
txtInput.addEventListener('keyup', ( event ) => {

    if ( event.keyCode === 13 && txtInput.value.length > 0 ) {

        console.log(txtInput.value);
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo );

        crearTodoHtml( nuevoTodo );
        txtInput.value = '';//para que este vacio al precionar enter
    }


});

divTodoList.addEventListener('click', (event) => {


    const nombreElemento = event.target.localName; //identifia que parte del li se hace click (input, label, button)
    const todoElemento   = event.target.parentElement.parentElement;
    const todoId         = todoElemento.getAttribute('data-id');// para hacer referncia al li para destruir el li cuando se presiona x
	console.log(nombreElemento);

    if (  nombreElemento.includes('input') ){ // click en el check 
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');//toggl cambia la clase

    } else if( nombreElemento.includes('button') ) { // hay que borrar el todo

        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );

    }


 });


btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();

    for( let i = divTodoList.children.length-1; i >= 0; i-- ) {

        const elemento = divTodoList.children[i];

        if( elemento.classList.contains('completed') ){
            divTodoList.removeChild(elemento);
        }

    }

});


ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if( !filtro ){ return; }

    anchorFiltros.forEach( elem => elem.classList.remove('selected') );
    event.target.classList.add('selected');

    for( const elemento of divTodoList.children ) {

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ) {

            case 'Pendientes':
                if( completado ) {
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if( !completado ) {
                    elemento.classList.add('hidden');
                }
            break;

        }

	}
});