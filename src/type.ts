import Todo from "./Todo";

// 해당 enum은 여기저기서 재사용되므로 모듈화
export enum Priority {
  High,
  Medium,
  Low
}

export interface AppState {
  todos: Todo[];
}