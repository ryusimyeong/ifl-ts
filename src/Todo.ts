import { Priority } from "./type";

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
    return `${this.id}) 제목: ${this.title} (우선순위: ${this.priority})`;
  }
}