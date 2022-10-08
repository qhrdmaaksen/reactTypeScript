import React from 'react';
import classes from './TodoItem.module.css';

/*FC type 은 children 뿐 아니라 key 와 같은 특별한 프로퍼티를 컴포넌트에 추가해 사용할수있게해준다*/
/*onRemoveTodo 설정된 type 을 props.onRemoveTodo 에서 받음*/
const TodoItem: React.FC<{ text: string; onRemoveTodo: (event: React.MouseEvent) => void }> = (
  props,
) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};
export default TodoItem;
