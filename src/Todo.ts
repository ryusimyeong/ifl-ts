import chalk from "chalk";
import { Priority, PRIORITY_NAME_MAP } from "./type";

export default class Todo {
  static nextId: number = 1; // 객체별로 관리할 필요가 없으므로 정적으로 선언

  constructor(
    private title: string,
    private priority: Priority,
    public id: number = Todo.nextId // 클래스 바깥에서 접근할 수 있도록 public
  ) {
    Todo.nextId++;
  }

  toString() {
    return chalk`{blue.bold ${this.id}}) 제목: {bold ${this.title}} (우선순위: {${PRIORITY_STYLE_MAP[this.priority]} ${PRIORITY_NAME_MAP[this.priority]}})`;
  }
}

const PRIORITY_STYLE_MAP: { [key in Priority]: string } = {
  [Priority.High]: 'red.bold',
  [Priority.Medium]: 'yellow.bold',
  [Priority.Low]: 'grey.bold',
}