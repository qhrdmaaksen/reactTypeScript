/*typeScript 를 사용할때는 class 에 추가할 프로퍼티가 있거나 추가할 속성이있는 경우 생성자를 통해 추가할 필요가 없다
* 대신 class 에서 바로 추가할 수 있다.*/
class Todo {
	id: string;
	text: string;

	/*생성자를 추가해 해당 필드에 값 할당*/
	constructor(todoText: string) {
		this.id = new Date().toISOString();/*id 는 동적으로 자동 생성*/
		this.text = todoText;
	}
}
export default Todo;