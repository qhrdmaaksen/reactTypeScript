import React from 'react';
import classes from './TodoItem.module.css';

/*FC type 은 children 뿐 아니라 key 와 같은 특별한 프로퍼티를 컴포넌트에 추가해 사용할수있게해준다*/
const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};
export default TodoItem;
