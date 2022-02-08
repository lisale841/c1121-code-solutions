import React from 'react';
// import React from react-packages
import PageTitle from './page-title';
// import pagetitle from page title module
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  // export default class App extends Component propety of React object.
  // body
  constructor(props) {
    // constructor method defined with one parameter props with code block.
    super(props);
    // super function is being called with one argument props.
    this.state = {
    // an object literal is being assigned to the state prop of the this object
      todos: []
    // empty array assigned to todos property.
    }; // closing object lit curly brack.
    this.addTodo = this.addTodo.bind(this);
    // bind method of the addTodo prop of the this object is being called with the
    // this argument and the return of the bind method is being assigned to the add todo prop of this object.
    this.toggleCompleted = this.toggleCompleted.bind(this);
    // bind method of toggleCompleted prop of the this object is being called with one argument
    // this and the return of the bind method is being assigned to the toggleCompleted prop of this obj.
  }

  componentDidMount() {
    // the Component did Mount method is being defined with no parameters. code block.
    fetch('http://localhost:3000/api/todos')
    // the fetch function is being called with one argument string url.
      .then(res => res.json())
      // the then method of the return of the fetch call is being called with one argument
      // anony function with one parameter res
      // the json method of the res object is being called with no arg. and the return of the
      // json method is being returned from the anony function.
      .then(data => this.setState({ todos: data }))
      // the then method of the return of the prev. then method is being called with one argument
      // anony function with one pareameter data.
      // the setState method of the this object is being called with one argument object lit
      // data value assigned to todos prop. and the return of the setState method is being
      // returned from the function.
      .catch(error => console.error(error));
    // the catch method of the return of the previous then method is being called with one argument
    // anony function with one paremeter error
    // the error method of the console object is being called with one arg error and the return of the
    // error method is being returned from the function.
  }

  /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */

  addTodo(newTodo) {
    fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({ todos: [...state.todos, data] }));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * Do not mutate the original state array, nor any objects within it.
    * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    *
    * TIP: Use Array.prototype.concat to create a new array containing the contents
    * of the old array, plus the object returned by the server.
    */

  toggleCompleted(todoId) {
    // toggleCompleted Method is being defined with one parameter "todoId"
    // body
    const item = this.state.todos.find(element => element.todoId === todoId);
    // find method of the todos prop of the state prop of the this object is being
    // called with one arg. anony function with one parameter element
    // todoId prop of the element object is strictly equal to todo Id.
    // the result of the expression is being returned from the function
    // the return of the find method is being assigned to const variable item.

    fetch('http://localhost:3000/api/todos/' + todoId, {
      // fetch function is being called with two argument string url concated with todoID
      // object literal.
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isCompleted: !item.isCompleted })
    })
      .then(response => response.json())
      .then(data => {
        const updatedList = this.state.todos.map(item => {
          if (item.todoId === data.todoId) {
            return data;
          }
          return item;
        });
        this.setState(state => ({ todos: updatedList }));
      })
      .catch(error => {
        console.error('Error:', error);
      });

    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * Do not mutate the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
