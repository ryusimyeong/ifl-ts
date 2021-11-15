import { waitForInput } from "./input";
import { AppState } from "./type";

export abstract class Command {
  // 사용자로부터 입력받은 key와 그 key에 대한 설명인 desc
  constructor(public key: string, private desc: string) { }
  // 해당 커맨드가 하는 기능 설명
  toString() {
    return `${this.key}: ${this.desc}`;
  }
  // key를 눌렀을 때 실행할 함수를 정의하기 위한 추상 메소드
  abstract run(state: AppState): Promise<void>;
}

export class CommandPrintTodos extends Command {
  constructor() {
    super('p', '모든 할 일 출력하기');
  }

  async run(state: AppState): Promise<void> {
    for (const todo of state.todos) {
      const text = todo.toString()
      console.log(text);
    }

    console.log();

    await waitForInput('press any key to go back: ');
  }
}