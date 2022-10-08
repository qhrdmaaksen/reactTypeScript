import React, {useRef} from 'react';

/*함수 명시 및 onAddTodo 함수 명시 및 인자에대한 타입 명시, 반환 값에대한 명시*/
const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
	/*html 입력 요소 타입 명시
	* 처음 만들때 연결할게 없기때문에 null 기본 값 설정*/
	const TodoTextInputRef = useRef<HTMLInputElement>(null);

	/*이벤트 타입 명시*/
	const submitHandler = (event: React.FormEvent) => {/*기본 값 방지*/
		event.preventDefault()
		/*이 함수는 폼이 레퍼런스 연결된다음에 제출될때만 호출되기때문에 ? 를 둬서 값에 접근하되 접근가능하다면
		* 그때 입력 값을 가져와 enteredText 에 저장하라고 알리는 것
		* -만약 초기 값인 null 이 아니라는걸 100% 확신한다면 ! 를 사용해서 연결이 완료된 경우를 뜻하며 string 만 나옴*/
		const enteredText = TodoTextInputRef.current!.value

		if (enteredText.trim().length === 0) {
			/*입력값이 없다면*/
			return ; /*함수 종료*/
		}


		props.onAddTodo(enteredText)
	}

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todolist">할 일 목록</label>
      <input type="text" id="todolist" ref={TodoTextInputRef}/>
			<button>추가</button>
    </form>
  );
};
export default NewTodo;
