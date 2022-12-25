
//importando estilos globales
import './styles.css';
// asi se realizan las importanciones y siempre buscara un archivo .js no importa ponerlo o no
import { Todo, TodoList } from './classes';//busca por defecto index.js
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

//todoList.todos.forEach( todo => crearTodoHtml( todo ));//forma 1
todoList.todos.forEach( crearTodoHtml );//forma 2 solo si el argumento q se quiere enviar es el mismo argumento que se manda a otra funcion o metodo

