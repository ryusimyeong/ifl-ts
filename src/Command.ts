import { waitForInput } from "./input";
import { Action, ActionDeleteTodo, ActionNewTodo, AppState, Priority, PRIORITY_NAME_MAP } from "./type";
import { getIsValidEnumValue } from "./util";

export abstract class Command {
  // 사용자로부터 입력받은 key와 그 key에 대한 설명인 desc
  constructor(public key: string, private desc: string) { }
  // 해당 커맨드가 하는 기능 설명
  toString() {
    return `${this.key}: ${this.desc}`;
  }
  // key를 눌렀을 때 실행할 함수를 정의하기 위한 추상 메소드
  abstract run(state: AppState): Promise<void | Action>;
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

export class CommandNewTodo extends Command {
  constructor() {
    super('n', '할 일 추가하기');
  }

  async run(): Promise<void | ActionNewTodo> {
    const title = await waitForInput('title: ');
    const priorityStr =
      await waitForInput(`priority ${PRIORITY_NAME_MAP[Priority.High]}(${Priority.High}), ${PRIORITY_NAME_MAP[Priority.Medium]}(${Priority.Medium}), ${PRIORITY_NAME_MAP[Priority.Low]}(${Priority.Low}): `);
    const priority = Number(priorityStr);

    // 유효성 검사
    if (typeof title === 'string' && title && CommandNewTodo.getIsPriority(priority)) {
      // todo를 추가하는 건 app을 변경하는 것. 
      // app을 변경하는 건 모두 index.ts파일에서 처리한다.
      // 여기는 설명만 작성한다.
      return {
        type: 'newTodo',
        title,
        priority
      }
    }
  }

  static getIsPriority(priority: number): priority is Priority {
    return getIsValidEnumValue(Priority, priority);
  }
}

export class CommandDeleteTodo extends Command {
  constructor() {
    super('d', '할 일 제거하기');
  }

  async run(state: AppState): Promise<void | ActionDeleteTodo> {
    for (const todo of state.todos) {
      const text = todo.toString();
      console.log(text);
    }
    const idStr = await waitForInput('press todo id to delete: ');
    const id = Number(idStr);

    return {
      type: 'deleteTodo',
      id
    }
  }
}