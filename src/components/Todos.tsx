import React from 'react';

/*React.FC 는 함수형 컴포넌트라는걸 명시하는것, 제네릭 타입,FC 타입의 기능은 여기에 어떤 객체 타입을 정의하든 객체의 기본 타입, children 프로퍼티와 합쳐주는 기능
 *홀화살표괄호에는 제네릭 타입을 만드는 게 아니라 내부적으로 사용되는 제네릭 타입에 구체적인 값을 집어넣음
 * React.FC에 의해 정의된 타입 T에 이렇게 하는 이유는 여기에서는 타입스크립트가 제네릭 타입을 추론하게 둘 수 없기 때문*/
const Todos: React.FC<{ items: string[] }> = (props) => {
  /*react 에서 props 는 언제나 object type*/
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      {/*key 에는 아이템 배열의 문자열이 들어감*/}
    </ul>
  );
};
export default Todos;
