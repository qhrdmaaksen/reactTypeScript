import React, { useState } from 'react';
import Todos from './components/Todos';
import Todo from './dataModels/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  /*Todo class 활용해 객체 생성, 문자열 배열이아닌 Todo 의 객체 배열이됨*/

  const addTodoHandler = (todoText: string) => {
    /*이전 state 를 기반으로 state 를 업데이트하려면 이렇게 함수 형태를 사용해 state 를 업데이트해야 함*/
    const newTodo = new Todo(todoText); /*생성자에게 전달*/

    setTodos((prevTodos) => {
      /*concat() 메서드는 두 개 이상의 배열을 병합하는 데 사용됨,
			 이 메서드는 기존 어레이를 변경하지 않고 새 어레이를 반환*/
      return prevTodos.concat(
        newTodo,
      ); /*업데이트된 state 를 기존 state 에 반환*/
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      /*filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로
      * 클릭한 리스트의 id 와 기존에 배열에있는 id 들이 같지 않은 것만 배열 반환*/
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
