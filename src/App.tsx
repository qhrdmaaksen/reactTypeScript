import Todos from './components/Todos';
import Todo from './dataModels/todo';

function App() {
  /*Todo class 활용해 객체 생성, 문자열 배열이아닌 Todo 의 객체 배열이됨*/
  const todos = [new Todo('리액트 공부'), new Todo('타입 스크립트 공부')];

  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
