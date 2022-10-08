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
      return prevTodos.concat(newTodo);/*업데이트된 state 를 기존 state 에 반환*/
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
