import { Command, CommandPrintTodos } from "./Command";
import { waitForInput } from "./input";
import Todo from "./Todo";
import { AppState, Priority } from "./type";

const commands: Command[] = [
  new CommandPrintTodos()
];

async function main() {
  const state: AppState = {
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
      await targetCommand.run(state);
    }
  }
}

main();