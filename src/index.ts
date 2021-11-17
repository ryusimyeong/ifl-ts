import { Command, CommandDeleteTodo, CommandNewTodo, CommandPrintTodos } from "./Command";
import { waitForInput } from "./input";
import Todo from "./Todo";
import { Action, AppState, Priority } from "./type";

const commands: Command[] = [
  new CommandPrintTodos(),
  new CommandNewTodo(),
  new CommandDeleteTodo()
];

async function main() {
  let state: AppState = {
    todos: [
      new Todo('test1', Priority.High),
      new Todo('test2', Priority.Medium),
      new Todo('test3', Priority.Low),
    ]
  }

  while (true) {
    console.clear();

    for (const command of commands) {
      console.log(command.toString());
    }

    console.log(); // 한 줄 띄워주기

    const key = await waitForInput('input command: ');

    console.clear();

    const targetCommand = commands.find(command => command.key === key);

    if (targetCommand) {
      const action = await targetCommand.run(state);
      if (action) {
        state = getNextState(state, action);
      }
    }
  }
}

main();

function getNextState(state: AppState, action: Action): AppState {
  // 해당 스위치 문에서는 식별가능유니온타입에 의해 타입가드가 작동하고 있다.
  switch (action.type) {
    // action -> ActionNewTodo
    case 'newTodo':
      return {
        ...state,
        todos: [
          ...state.todos, new Todo(action.title, action.priority)
        ]
      }
    // action -> ActionDeleteTodo
    case 'deleteTodo':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
  }
}