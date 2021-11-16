import Todo from "./Todo";

// 해당 enum은 여기저기서 재사용되므로 모듈화
export enum Priority {
  High,
  Medium,
  Low
};

export interface AppState {
  todos: Todo[];
};

export const PRIORITY_NAME_MAP: { [key in Priority]: string } = {
  [Priority.High]: '높음',
  [Priority.Medium]: '중간',
  [Priority.Low]: '낮음',
};

export interface ActionNewTodo {
  type: 'newTodo'; // 식별가능한 유니온 타입
  title: string;
  priority: Priority;
}

export type Action = ActionNewTodo;