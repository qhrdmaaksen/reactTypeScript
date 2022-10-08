import React from 'react';
import Todo from '../dataModels/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

/*React.FC 는 함수형 컴포넌트라는걸 명시하는것, 제네릭 타입,FC 타입의 기능은 여기에 어떤 객체 타입을 정의하든 객체의 기본 타입, children 프로퍼티와 합쳐주는 기능
 *홀화살표괄호에는 제네릭 타입을 만드는 게 아니라 내부적으로 사용되는 제네릭 타입에 구체적인 값을 집어넣음
 * React.FC에 의해 정의된 타입 T에 이렇게 하는 이유는 여기에서는 타입스크립트가 제네릭 타입을 추론하게 둘 수 없기 때문*/
/*items 는 객체로 채워진 바열이며 그 객체는 Todo 클래스의 정의에 부합하는 객체이며 배열의 객체는 id 프로퍼티를 가짐
*-type 은 문자열이고 text 프로퍼티도 가지며 클래스를 생성자로 사용해 생성된 객체임
* --그 객체로 구성된 배열을 items 프로퍼티로 받아 id, text 를 사용 */
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  /*react 에서 props 는 언제나 object type*/
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        /*<li key={item.id}>{item.text}</li>*/
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};
export default Todos;
